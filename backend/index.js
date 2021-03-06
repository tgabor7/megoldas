const { execFile } = require("child_process")
const express = require('express')
var cors = require('cors');
const app = express()
const port = process.env.PORT || 4000
const fs = require('fs')
const schema = require('./schema.json')
var validate = require('jsonschema').validate;

app.use(cors());
app.use(express.json())

//frontend statikus kiszolgálása
app.use(express.static('public'))

//adatok validálása jsonschema-val
const validateData = (data) => {
    if(validate(data, schema).errors.length === 0){
        let prev = data.data[Object.keys(data.data)[0]][0].length
        let fail = false
        Object.entries(data.data).map((e)=>{
            
            if(e[1][0].length !== prev) fail = true
        })
        return !fail
    }else{
        return false
    }
}

const extractResult = (msg) => {

    return JSON.parse(msg.split('\n')[msg.split('\n').length - 1])
}

const processData = (input, res) => {
    execFile("./lexunit-exercise-linux-amd64", [JSON.stringify(input.data), input.threshold], (err, data) => {
        res.send(extractResult(data))
        fs.writeFileSync("./vectors.txt", data.split('\n')[data.split('\n').length - 1] + "\n")
    });
}

app.post('/api/', (req, res) => {
    if (!validateData(req.body)) {
        res.status(400).send('Bad format!')
        return
    }
    processData(req.body, res)
})
//utolsó eredmény lekérdezése
app.get('/api/', (req, res) => {
    let data = fs.readFileSync("./vectors.txt")
    res.send(JSON.parse(data))
})

app.listen(port, () => {
    console.log("App listenning on: http://localhost:" + port)
})