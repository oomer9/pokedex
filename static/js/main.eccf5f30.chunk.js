(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{118:function(e,t,n){},119:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(14),r=n.n(i),s=(n(118),n(68)),o=n(9),l=(n(119),n(45)),d=n.n(l),j=n(63),u=n(12),p=n(42),b=n(192),x=n(196),h=n(185),f="#FF0000",O="#3B4CCA",g="#FFDE00",v=Object(h.a)({navBar:{overflow:"hidden",backgroundColor:g,justifyContent:"space-between",display:"flex",width:"100%"}}),m=n(100),y=n.n(m),w=n(96),k=n.n(w),C=n(188),S=n(2);function P(e){var t=e.page,n=e.totalPages,a=e.setPageNumber,c=(e.setPageSize,e.pageSize,v());return Object(S.jsxs)("div",{className:c.navBar,children:[Object(S.jsx)(C.a,{children:Object(S.jsx)(k.a,{style:{color:O}})}),Object(S.jsxs)("div",{style:{fontWeight:"bold",fontSize:"24px"},children:[t,"/",n]}),Object(S.jsx)(C.a,{onClick:function(){a(t+1)},children:Object(S.jsx)(y.a,{style:{color:O}})})]})}var B=n(193),z=n(194),I=n(195),F=Object(h.a)({pokeCard:{cursor:"pointer","&:hover":{boxShadow:"0 8px 16px 0 rgba(0, 0, 0, 0.2)"}}});function N(e){var t=e.name,n=e.pokemonId,a=F(),c=Object(p.a)(),i=Object(b.a)(c.breakpoints.down("md"));return Object(S.jsx)("div",{style:{width:"100%",padding:"10px"},children:Object(S.jsxs)(B.a,{className:a.pokeCard,variant:"elevation",children:[Object(S.jsx)(z.a,{style:{height:i?"100px":"150px"},component:"img",image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png"),alt:t}),Object(S.jsx)(I.a,{style:{textAlign:"center",textTransform:"capitalize"},children:t})]})})}var D=n(101),W=n.n(D);function A(e,t){return E.apply(this,arguments)}function E(){return(E=Object(j.a)(d.a.mark((function e(t,n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n*(t-1),e.next=3,W.a.get("https://pokeapi.co/api/v2/pokemon/?offset=".concat(a,"&limit=").concat(n));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=Object(h.a)({pageHeader:{color:f,WebkitTextStroke:"1px black",fontSize:"42px",fontWeight:"bold",display:"flex",justifyContent:"center",marginBottom:"20px"}});function L(){var e=H(),t=Object(p.a)(),n=Object(b.a)(t.breakpoints.down("md")),a=c.a.useState([]),i=Object(u.a)(a,2),r=i[0],s=i[1],o=c.a.useState(18),l=Object(u.a)(o,2),h=l[0],O=l[1],g=c.a.useState(1),v=Object(u.a)(g,2),m=v[0],y=v[1],w=c.a.useState(1),k=Object(u.a)(w,2),C=k[0],B=k[1],z=c.a.useState(!1),I=Object(u.a)(z,2),F=(I[0],I[1]);c.a.useEffect((function(){D()}),[m]);var D=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),e.prev=1,e.next=4,A(m,h);case 4:(null===(a=e.sent)||void 0===a||null===(t=a.data)||void 0===t||null===(n=t.results)||void 0===n?void 0:n.length)&&(s(a.data.results),B(a.data.count)),F(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),F(!1);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{className:e.pageHeader,children:["Pok\xe9dex"," ",Object(S.jsx)(x.a,{style:{color:f,height:"62px",width:"62px"}})]}),Object(S.jsx)("div",{children:Object(S.jsx)(P,{pageSize:h,setPageNumber:y,page:m,setPageSize:O,totalPages:Math.round(C/h)})}),Object(S.jsx)("div",{style:{display:"flex",flexWrap:"wrap",width:"100%",justifyContent:"space-around"},children:r.map((function(e,t){var a=e.url.split("/");return Object(S.jsx)("div",{style:{display:"flex",width:n?"33%":"15%",justifyContent:"center"},children:Object(S.jsx)(N,{name:e.name,pokemonId:a[6]})},t)}))})]})}var T=n(200),J=n(204),M=n(197),q=n(198),G=n(199),K=n(202),Q=n(201),R=Object(h.a)({leftBg:{background:g,display:"flex",flexDirection:"column",width:"100%",height:"100vh",justifyContent:"center",alignItems:"center "},loginHeader:{fontSize:"48px",fontWeight:"bold"}});function U(){var e=R(),t=Object(p.a)(),n=Object(b.a)(t.breakpoints.up("md")),a=c.a.useState(""),i=Object(u.a)(a,2),r=i[0],o=i[1],l=c.a.useState(""),d=Object(u.a)(l,2),j=d[0],h=d[1],f=c.a.useState(!1),g=Object(u.a)(f,2),v=g[0],m=g[1];return Object(S.jsx)("div",{children:Object(S.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[n?Object(S.jsxs)("div",{className:e.leftBg,children:[Object(S.jsx)(x.a,{style:{color:O,height:"62px",width:"62px"}}),Object(S.jsx)("div",{className:e.loginHeader,children:"Pok\xe9dex"})]}):null,Object(S.jsx)("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100vh",justifyContent:"center",alignItems:"center "},children:Object(S.jsx)(K.a,{variant:"elevation",children:Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center ",padding:"20px"},children:[Object(S.jsx)("div",{style:{marginBottom:"15px",alignSelf:"start",fontWeight:"bold",fontSize:"24px"},children:"Log in"}),Object(S.jsx)(T.a,{style:{marginBottom:"10px",width:"100%"},name:"email",value:r,onChange:function(e){return o(e.target.value)},variant:"outlined",label:"Email"}),Object(S.jsx)(T.a,{style:{marginBottom:"20px",width:"100%"},name:"password",variant:"outlined",label:"Password",type:v?"text":"password",value:j,InputProps:{endAdornment:Object(S.jsx)(J.a,{position:"end",children:Object(S.jsx)(M.a,{onClick:function(){return m(!v)},children:v?Object(S.jsx)(q.a,{}):Object(S.jsx)(G.a,{})})})},onChange:function(e){return h(e.target.value)}}),Object(S.jsx)(s.b,{style:{textDecoration:"none"},to:"/",children:Object(S.jsx)(Q.a,{style:{backgroundColor:O,width:"100%"},variant:"contained",children:"Login"})})]})})})]})})}var V=function(){return Object(S.jsx)("div",{children:Object(S.jsx)(s.a,{children:Object(S.jsxs)(o.c,{children:[Object(S.jsx)(o.a,{path:"/login",element:Object(S.jsx)(U,{})}),Object(S.jsx)(o.a,{path:"/",element:Object(S.jsx)(L,{})})]})})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,206)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(V,{})}),document.getElementById("root")),X()}},[[144,1,2]]]);
//# sourceMappingURL=main.eccf5f30.chunk.js.map