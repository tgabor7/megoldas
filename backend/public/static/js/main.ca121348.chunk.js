(this.webpackJsonpprobafeladatfronted=this.webpackJsonpprobafeladatfronted||[]).push([[0],{66:function(e,t,n){},67:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),i=n.n(c),o=(n(66),n(4)),s=(n(67),n(3)),d=n(38),l=n(2),j=function(e){var t=e.children,n=e.onClick,r=e.disabled,c=Object(a.useState)(!1),i=Object(o.a)(c,2),s=i[0],d=i[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("button",{disabled:r,onClick:n,onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},style:s?b.hover:r?b.disabled:b.button,children:t})})},b={button:{backgroundColor:"#55f",color:"#fff",borderRadius:5,margin:10,marginBottom:"auto",fontSize:16,padding:10,border:"0 solid",width:"fit-content"},hover:{backgroundColor:"#55f",color:"#fff",borderRadius:5,margin:10,marginBottom:"auto",fontSize:16,padding:10,border:"0 solid",cursor:"pointer",transform:"scale(1.01)",width:"fit-content"},disabled:{backgroundColor:"#555",color:"#fff",borderRadius:5,margin:10,marginBottom:"auto",fontSize:16,padding:10,border:"0 solid",width:"fit-content"}},O=function(e){var t=e.onClick,n=e.children,a=e.selected,r=Object(d.useSpring)({transform:a?"scale(1.1)":"scale(1.0)"});return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(d.animated.div,{style:{transform:r.transform,margin:"auto"},children:Object(l.jsx)(j,{onClick:t,children:n})})})},u=function(e){var t=e.style,n=e.setPage,r=Object(a.useState)(0),c=Object(o.a)(r,2),i=c[0],d=c[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{style:Object(s.a)(Object(s.a)({},h.container),t),children:Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap"},children:[Object(l.jsx)(O,{selected:0===i,onClick:function(){n(0),d(0)},children:"Kezdeti adatok gener\xe1l\xe1sa"}),Object(l.jsx)(O,{selected:1===i,onClick:function(){n(1),d(1)},children:"Eredm\xe9ny"})]})})})},h={container:{width:"20vw",height:"100vh",backgroundColor:"#222"},hoverButton:{}},f=n(14),x=n(100),g=n(97),p=n(98),m=function(e){var t=e.style,n=e.label,a=e.value,r=e.setValue;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{style:Object(s.a)(Object(s.a)({},v.container),t),children:[Object(l.jsx)("p",{style:A.p,children:n}),Object(l.jsx)("input",{style:v.input,value:a,onBlur:function(){parseFloat(a)||r(1)},onChange:function(e){r(e.target.value)},type:"number"})]})})},v={container:{display:"flex",width:"fit-content",maxWidth:200,height:60,backgroundColor:"#222",border:"1px solid white",margin:10},input:{fontSize:24,display:"flex",width:100,marginRight:"auto",padding:5,backgroundColor:"#fff",border:"1px solid black"}},y=function(e){var t=e.data;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{style:{border:"1px solid black",backgroundColor:"#fff",width:"fit-content",margin:10},children:Object(l.jsx)("p",{style:Object(s.a)(Object(s.a)({},A.p),{},{margin:"auto",color:"#000"}),children:t.map((function(e,n){return n!==t.length?e.toString()+";":e.toString()}))})})})},k=n(21),w=function(e){var t=e.id,n=e.data;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(k.c,{droppableId:t,direction:"vertical",children:function(e,t){return Object(l.jsxs)("div",{style:t.isDraggingOver?{border:"1px solid black",borderRadius:25,backgroundColor:"#aaf"}:{border:"1px solid black",borderRadius:25,boxShadow:"1px 3px 1px #9E9E9E",backgroundColor:"#fff"},children:[Object(l.jsx)("h2",{style:{textAlign:"center",padding:10},children:n.name}),Object(l.jsxs)(g.a,Object(s.a)(Object(s.a)({},e.droppableProps),{},{ref:e.innerRef,style:{display:"flex",flexDirection:"column",minHeight:200},children:[n.items.map((function(e,t){return Object(l.jsx)(k.b,{draggableId:e.id,index:t,children:function(t,n){return Object(l.jsx)(p.a,Object(s.a)(Object(s.a)(Object(s.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{style:Object(s.a)({userSelect:"none"},t.draggableProps.style),children:Object(l.jsx)(y,{data:e.content})}))}},e.id)})),e.placeholder]}))]})}},t)})},S=(n(75),n(102)),C=n(37),F=n.n(C),I=n(99),z=function(e){var t=e.style,n=function(e){var t=Object(a.useState)(),n=Object(o.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),s=Object(o.a)(i,2),d=s[0],l=s[1],j=Object(a.useState)(""),b=Object(o.a)(j,2),O=b[0],u=b[1];return{data:r,loading:d,error:O,fetch:function(){l(!0),F.a.get(e).then((function(e){c(e.data),l(!1)})).catch((function(e){u(e)}))}}}("https://dockerdemotarkogbr.azurewebsites.net/api/"),r=n.data,c=n.loading,i=n.fetch,d=Object(a.useState)([]),b=Object(o.a)(d,2);b[0],b[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{style:Object(s.a)(Object(s.a)({},P.container),t),children:[Object(l.jsx)(j,{onClick:function(){i()},children:"Eredm\xe9nyek lek\xe9rdez\xe9se"}),Object(l.jsx)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:"auto",marginBottom:"auto"},children:Object(l.jsx)(k.a,{onDragEnd:function(){},children:c?Object(l.jsx)("div",{children:Object(l.jsx)(I.a,{animation:"border"})}):r?Object.entries(r).map((function(e){var t=e[1].map((function(e){return{id:Object(S.a)(),content:e}}));return Object(l.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"fit-content",margin:10},children:Object(l.jsx)(w,{id:Object(S.a)(),data:{name:e[0],items:t}})})})):""})})]})})},P={container:{width:"100vw",height:"100vh",backgroundColor:"#ddd",display:"flex",flexDirection:"row"}},E=n(101),D=function(e){var t=e.message,n=e.title,a=e.show,r=e.handleClose;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(E.a,{show:a,onHide:r,children:[Object(l.jsx)(E.a.Header,{closeButton:!0,children:Object(l.jsx)(E.a.Title,{children:n})}),Object(l.jsx)(E.a.Body,{children:t}),Object(l.jsx)(E.a.Footer,{children:Object(l.jsx)(j,{variant:"primary",onClick:r,children:"Ok"})})]})})},B=n(18),R=function(e,t){var n={data:{},threshold:t},a=!1;return Object.entries(e).map((function(e,t){var r=Object(o.a)(e,2),c=(r[0],r[1]);"vectors"!==c.name&&(c.items.length<=0&&(a=!0),n.data[c.name]=c.items.map((function(e){return e.content})))})),!a&&n},H=function(e,t,n){if(e.destination){var a=e.source,r=e.destination;if(a.droppableId!==r.droppableId){var c,i=t[a.droppableId],d=t[r.droppableId],l=Object(B.a)(i.items),j=Object(B.a)(d.items),b=l.splice(a.index,1),O=Object(o.a)(b,1)[0];j.splice(r.index,0,O),n(Object(s.a)(Object(s.a)({},t),{},(c={},Object(f.a)(c,a.droppableId,Object(s.a)(Object(s.a)({},i),{},{items:l})),Object(f.a)(c,r.droppableId,Object(s.a)(Object(s.a)({},d),{},{items:j})),c)))}else{var u=t[a.droppableId],h=Object(B.a)(u.items),x=h.splice(a.index,1),g=Object(o.a)(x,1)[0];h.splice(r.index,0,g),n(Object(s.a)(Object(s.a)({},t),{},Object(f.a)({},a.droppableId,Object(s.a)(Object(s.a)({},u),{},{items:h}))))}}},V=function(e){var t=e.show,n=e.handleClose,a=e.event,r=e.loading;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(E.a,{show:t,onHide:n,children:[Object(l.jsx)(E.a.Header,{closeButton:!0,children:Object(l.jsx)(E.a.Title,{children:"Success"})}),r?Object(l.jsx)("div",{style:{display:"flex",width:"100%"},children:Object(l.jsx)("div",{style:{margin:"auto"},children:Object(l.jsx)(I.a,{animation:"border"})})}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(E.a.Body,{children:"Adatok sikeresen feldolgozva!"}),Object(l.jsxs)(E.a.Footer,{children:[Object(l.jsx)(j,{variant:"primary",onClick:function(){n(),a()},children:"Eredm\xe9ny megtekint\xe9se"}),Object(l.jsx)(j,{variant:"primary",onClick:n,children:"Ok"})]})]})]})})},M=function(e){var t=e.style,n=e.page,r=e.setPage,c=Object(f.a)({},Object(S.a)(),{name:"vectors",items:[]}),i={extractVectors:R,onDragEnd:H},d=i.extractVectors,b=i.onDragEnd,O=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(o.a)(c,2),s=i[0];return i[1],{loading:s,embeddings:n,generate:function(e,t,n){var a=e;function c(){var e=1e4*Math.sin(a++);return Math.floor(10*(e-Math.floor(e)))/10*2-1}for(var i=[],o=0;o<t;o++){for(var s=[],d=0;d<n;d++)s.push(Math.floor(10*c())/10);i.push(s)}return r(i),i}}}(),u=(O.loading,O.embeddings,O.generate),h=Object(a.useState)("11"),v=Object(o.a)(h,2),C=v[0],I=v[1],P=Object(a.useState)("8"),E=Object(o.a)(P,2),B=E[0],M=E[1],W=Object(a.useState)("4"),A=Object(o.a)(W,2),L=A[0],J=A[1],K=Object(a.useState)("3"),N=Object(o.a)(K,2),Y=N[0],_=N[1],q=Object(a.useState)("1.0"),G=Object(o.a)(q,2),Q=G[0],U=G[1],X=Object(a.useState)(c),Z=Object(o.a)(X,2),$=Z[0],ee=Z[1],te=Object(a.useState)(!1),ne=Object(o.a)(te,2),ae=ne[0],re=ne[1],ce=Object(a.useState)(!1),ie=Object(o.a)(ce,2),oe=ie[0],se=ie[1],de=Object(a.useState)(!1),le=Object(o.a)(de,2),je=le[0],be=le[1],Oe=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(),s=Object(o.a)(i,2),d=s[0],l=s[1],j=Object(a.useState)(""),b=Object(o.a)(j,2),O=(b[0],b[1]);return{inProgress:r,data:d,send:function(t){c(!0),F.a.post(e,t).then((function(e){l(e.data),c(!1)})).catch((function(e){O(e)}))}}}("https://dockerdemotarkogbr.azurewebsites.net/api/"),ue=Oe.inProgress,he=Oe.send;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{style:Object(s.a)(Object(s.a)({},T.container),t),children:[Object(l.jsx)(V,{show:ae,loading:ue,handleClose:function(){return re(!1)},event:function(){r(1)}}),Object(l.jsx)(D,{title:"Hiba",message:"Nem lehetnek \xfcres csoportok!",show:oe,handleClose:function(){se(!1)}}),0===n?Object(l.jsx)(x.a,{children:Object(l.jsxs)(g.a,{children:[Object(l.jsxs)(p.a,{sm:3,children:[Object(l.jsx)(m,{label:"Random seed",value:C,setValue:I}),Object(l.jsx)(m,{label:"Embeding-ek sz\xe1ma",value:B,setValue:M}),Object(l.jsx)(m,{label:"Embeding-ek hossza",value:L,setValue:J}),Object(l.jsx)(m,{label:"Vektorhalamzok sz\xe1ma",value:Y,setValue:_}),Object(l.jsx)(m,{label:"Threshold \xe9rt\xe9k",value:Q,setValue:U}),Object(l.jsx)(g.a,{children:Object(l.jsx)(j,{onClick:function(){var e=u(parseInt(C),parseInt(B),parseInt(L)),t={};t[Object(S.a)()]={name:"vectors",items:e.map((function(e){return{id:Object(S.a)(),content:e}}))};for(var n=0;n<parseInt(Y);n++)t[Object(S.a)()]={name:"group_"+(n+1),items:[]};ee(t),be(!0)},children:"Embedding-ek gener\xe1l\xe1sa"})}),Object(l.jsx)(g.a,{children:Object(l.jsx)(j,{disabled:!je,onClick:function(){d($,parseFloat(Q))?(re(!0),he(d($,parseFloat(Q)))):se(!0)},children:"\xdajra klaszterez\xe9s futtat\xe1sa"})})]}),Object(l.jsx)(p.a,{sm:!0,children:Object(l.jsx)(k.a,{onDragEnd:function(e){return b(e,$,ee)},children:Object(l.jsx)(g.a,{children:Object.entries($).map((function(e,t){var n=Object(o.a)(e,2),a=n[0],r=n[1];return Object(l.jsxs)(l.Fragment,{children:[0===t?Object(l.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",minHeight:200,width:"50vw"},children:Object(l.jsx)(g.a,{children:Object(l.jsx)(k.c,{droppableId:a,direction:"horizontal",children:function(e,t){return Object(l.jsxs)("div",Object(s.a)(Object(s.a)({style:{display:"flex",flexDirection:"row",flexWrap:"wrap"}},e.droppableProps),{},{ref:e.innerRef,children:[r.items.map((function(e,t){return Object(l.jsx)(k.b,{draggableId:e.id,index:t,children:function(t,n){return Object(l.jsx)("div",Object(s.a)(Object(s.a)(Object(s.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{style:Object(s.a)({userSelect:"none"},t.draggableProps.style),children:Object(l.jsx)(y,{data:e.content})}))}},e.id)})),e.placeholder]}))}},a)})}):Object(l.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"fit-content",margin:10},children:Object(l.jsx)(g.a,{children:Object(l.jsx)(w,{id:a,data:r})})})," "]})}))})})})]})}):Object(l.jsx)(z,{})]})})},T={container:{width:"100vw",height:"100vh",overflowY:"auto",backgroundColor:"#ddd",display:"flex"},container1:{display:"flex"}},W=n(57);var A={container:{display:"flex",flex:"row",height:"100vh",width:"100vw",backgroundColor:"#100"},p:{fontSize:16,color:"#fff",fontFamily:"Arial",padding:5}},L=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(W.a,{children:[Object(l.jsx)("title",{children:"Probafeladat"}),Object(l.jsx)("link",{rel:"icon",type:"image/png",href:"8274432.png",sizes:"16x16"})]}),Object(l.jsxs)("div",{style:A.container,children:[Object(l.jsx)(u,{setPage:r}),Object(l.jsx)(M,{setPage:r,page:n,style:{width:"80vw"}})]})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,103)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root")),J()}},[[95,1,2]]]);
//# sourceMappingURL=main.ca121348.chunk.js.map