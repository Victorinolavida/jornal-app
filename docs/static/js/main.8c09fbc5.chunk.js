(this["webpackJsonp08-jornal-app"]=this["webpackJsonp08-jornal-app"]||[]).push([[0],{183:function(e,t,n){},184:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n(43),r=n.n(c),o=n(0),i=n.n(o),s=n(1),u=n(13),l=n(35),j=n(15),d=n(16),b=n(12),O=n(28),p=n(33),f=n.n(p),h=n(55),m=n(22),v=n(75),_={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APIKEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTHDOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PROJECTID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STORAGEBUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MESSAGINGSENDERID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APPID},x=(Object(v.a)(_),Object(h.a)()),g=new m.a,y=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/victor-mex/upload",(n=new FormData).append("upload_preset","react-jornal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/victor-mex/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.abrupt("return",null);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)(Object(O.g)(Object(O.b)(x,"".concat(t,"/jornal/notes"))));case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(b.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S="[Auth] Login",E="[Auth Logout",w="[ui] Set Error",C="[ui] Remove Error",T="[ui] Start loading",A="[ui] Finish loading",D="[notes] New Note",R="[notes] Set Active Note",P="[notes] Load Notes",k="[notes] Updated Note",K="[notes] Delete Note",L="[notes] Delete Notes",H=function(e,t){return{type:R,payload:Object(b.a)({id:e},t)}},F=function(e,t){return{type:D,payload:Object(b.a)({id:e},t)}},I=function(e){return function(){var t=Object(s.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:a=t.sent,n(U(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=function(e){return{type:P,payload:e}},W=function(e){return function(){var t=Object(s.a)(i.a.mark((function t(n,a){var c,r,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=a().auth.uid,e.url||delete e.url,r=Object(b.a)({},e),o=Object(O.d)(x,"".concat(c,"/jornal/notes/").concat(e.id)),t.next=7,Object(O.h)(o,r);case 7:n(B(e)),f.a.fire("Save",e.title,"success"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),f.a.fire("Error",t.t0.message,"error");case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},B=function(e){return{type:k,payload:e}},M=function(e){return{type:K,payload:e}},V=n(46),q=n.n(V),G=n(6),Y=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.notes})).active,n=new Date;return Object(G.jsxs)("div",{className:"notes__appbar",children:[Object(G.jsx)("span",{children:q()(n).format("MMMM Do YYYY")}),Object(G.jsx)("input",{name:"file",id:"fileSelector",type:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(s.a)(i.a.mark((function t(n,a){var c,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,f.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,onBeforeOpen:function(){f.a.showLoading()}}),t.next=4,y(e);case 4:r=t.sent,console.log(r),f.a.close(),c.url=r,n(W(c));case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(G.jsxs)("div",{children:[Object(G.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(G.jsx)("button",{className:"btn",onClick:function(){e(W(t))},children:"Save"})]})]})},J=n(4),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(u.a)(t,2),c=n[0],r=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},i=function(e){var t=e.target;r(Object(b.a)(Object(b.a)({},c),{},Object(J.a)({},t.name,t.value)))};return[c,i,o]},z=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.notes})).active,n=X(t),c=Object(u.a)(n,3),r=c[0],o=c[1],l=c[2],j=r.title,p=r.body,f=r.id,h=Object(a.useRef)(t.id);Object(a.useEffect)((function(){t.id!==h.current&&(l(t),h.current=t.id)}),[t,l]),Object(a.useEffect)((function(){e(H(r.id,Object(b.a)({},r)))}),[r,e]);return Object(G.jsxs)("div",{className:"notes__main-content",children:[Object(G.jsx)(Y,{}),Object(G.jsxs)("div",{className:"notes__content",children:[Object(G.jsx)("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",value:j,name:"title",onChange:o}),Object(G.jsx)("textarea",{placeholder:"what happen today",className:"notes__textarea",value:p,name:"body",onChange:o}),t.url&&Object(G.jsx)("div",{className:"notes__img",children:Object(G.jsx)("img",{src:"".concat(t.url),alt:"images"})})]}),Object(G.jsx)("div",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(s.a)(i.a.mark((function t(n,a){var c,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,console.log("".concat(c,"/jornal/notes/").concat(e)),r=Object(O.d)(x,"".concat(c,"/jornal/notes/").concat(e)),t.next=5,Object(O.c)(r);case 5:n(M(e));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(f))},children:"Delete"})]})},Q=function(){return Object(G.jsxs)("div",{className:"nothing__main-content",children:[Object(G.jsxs)("p",{children:["Select something",Object(G.jsx)("br",{}),"or create an entry!"]}),Object(G.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},Z=function(e){return{type:w,playload:e}},$=function(){return{type:T}},ee=function(){return{type:A}},te=function(e,t){return{type:S,payload:{uid:e,displayName:t}}},ne=function(){return{type:E}},ae=function(e){var t=e.id,n=e.date,a=e.title,c=e.body,r=e.url,o=Object(d.b)(),i=q()(n);return Object(G.jsxs)("div",{className:"jornal__entry pointer",onClick:function(){o(H(t,{date:n,body:c,title:a,url:r}))},children:[r&&Object(G.jsx)("div",{className:"jornal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object(G.jsxs)("div",{className:"jornal__entry-body",children:[Object(G.jsx)("p",{className:"jornal__entry-title",children:a}),Object(G.jsx)("p",{className:"jornal__entry-content",children:c})]}),Object(G.jsxs)("div",{className:"jornal__entry-date",children:[Object(G.jsx)("span",{children:i.format("dddd")}),Object(G.jsx)("h4",{children:i.format("Do")})]})]})},ce=function(){var e=Object(d.c)((function(e){return e.notes})).notes;return Object(G.jsx)("div",{className:"jornal__entries",children:e.map((function(e){return Object(G.jsx)(ae,Object(b.a)({},e),e.id)}))})};function re(){var e=Object(d.b)(),t=Object(d.c)((function(e){return null===e||void 0===e?void 0:e.auth})).name;return Object(G.jsxs)("aside",{className:"jornal__sidebar",children:[Object(G.jsxs)("div",{className:"jornal__sidebar-navbar",children:[Object(G.jsxs)("h3",{className:"mt-5",children:[Object(G.jsx)("i",{className:"far fa-moon"}),Object(G.jsxs)("span",{children:[" ",t]})]}),Object(G.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(m.c)(),e.next=3,Object(m.g)(n);case 3:t(ne()),t({type:L});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"logout"})]}),Object(G.jsxs)("div",{className:"jornal__new-entry",onClick:function(){e(function(){var e=Object(s.a)(i.a.mark((function e(t,n){var a,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=4,Object(O.a)(Object(O.b)(x,"".concat(a),"jornal/notes"),c);case 4:r=e.sent,t(H(r.id,c)),t(F(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(G.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(G.jsx)("p",{className:"mt-5",children:"new entry"})]}),Object(G.jsx)(ce,{})]})}function oe(){var e=Object(d.c)((function(e){return e.notes})).active;return Object(G.jsxs)("div",{className:"jornal__main-container",children:[Object(G.jsx)(re,{}),Object(G.jsx)("main",{children:e?Object(G.jsx)(z,{}):Object(G.jsx)(Q,{})})]})}function ie(){var e=Object(d.c)((function(e){return e.ui})).loading,t=Object(d.b)(),n=X({email:"email@mail.com",password:"123456"}),a=Object(u.a)(n,2),c=a[0],r=a[1],o=c.email,i=c.password;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("h3",{className:"auth__title",children:"Login"}),Object(G.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(function(e,t){return function(n){n($());var a=Object(m.c)();Object(m.e)(a,e,t).then((function(e){var t=e.user;n(te(t.uid,t.displayName)),n(ee())})).catch((function(e){console.log(e),n(ee()),f.a.fire("Error",e.message,"error")}))}}(o,i))},children:[Object(G.jsx)("input",{type:"text",placeholder:"Email",name:"email",autoComplete:"off",className:"auth__input",value:o,onChange:r}),Object(G.jsx)("input",{type:"password",placeholder:"Password",name:"password",autoComplete:"off",className:"auth__input",value:i,onChange:r}),Object(G.jsx)("button",{className:"btn btn-primary btn-block ",type:"submit",disabled:e,children:"Login"})]}),Object(G.jsx)("hr",{}),Object(G.jsxs)("div",{className:"auth__social-networks",onClick:function(){t((function(e){var t=Object(m.c)();Object(m.f)(t,g).then((function(t){var n=t.user;console.log(n.displayName,n.uid),e(te(n.uid,n.displayName))}))}))},children:[Object(G.jsx)("p",{children:"Login with social networks"}),Object(G.jsxs)("div",{className:"google-btn",children:[Object(G.jsx)("div",{className:"google-icon-wrapper mb-5",children:Object(G.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(G.jsx)("p",{className:"btn-text",children:Object(G.jsx)("b",{children:"Sign in with google"})})]})]}),Object(G.jsx)(l.b,{to:"/auth/register",className:"link mt-5",children:"Create new account"})]})}var se=n(77),ue=n.n(se);function le(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.ui})).msgError,n=X({name:"victor",email:"email@mail.com",password:"123456",password2:"123456"}),a=Object(u.a)(n,2),c=a[0],r=a[1],o=c.name,j=c.email,b=c.password,O=c.password2,p=function(t){t.preventDefault(),h()&&(console.log("formuladrio correcto"),e(function(e,t,n){return function(a){a($());var c=Object(m.c)();Object(m.b)(c,e,t).then(function(){var e=Object(s.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,Object(m.h)(c.currentUser,{displayName:n});case 3:console.log(r),a(te(r.uid,r.displayName)),a(ee());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){a(ee()),f.a.fire("Error",e.message,"error")}))}}(j,b,o)))},h=function(){return o.trim().length<=2?(e(Z("Name is require")),!1):ue.a.isEmail(j)?b!==O||b<5?(e(Z("password should be at least 6 caracters and mach each other")),!1):(e({type:C}),!0):(e(Z("email is not valid")),!1)};return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("h3",{className:"auth__title",children:"Register"}),Object(G.jsxs)("form",{onSubmit:p,children:[t&&Object(G.jsx)("div",{className:"auth__alert-error",children:t}),Object(G.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",value:o,onChange:r,autoComplete:"off"}),Object(G.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",value:j,onChange:r,autoComplete:"off"}),Object(G.jsx)("input",{type:"password",placeholder:"password",name:"password",className:"auth__input",value:b,onChange:r}),Object(G.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:O,onChange:r})]}),Object(G.jsx)("button",{className:"btn btn-primary btn-block mb-5",type:"submit",onClick:p,children:"Register"}),Object(G.jsx)("hr",{}),Object(G.jsx)(l.b,{className:"link mt-5",to:"/auth/login",children:"Already register?"})]})}function je(){return Object(G.jsx)("div",{className:"auth__main",children:Object(G.jsx)("div",{className:"auth__box-container",children:Object(G.jsxs)(j.d,{children:[Object(G.jsx)(j.b,{path:"/auth/login",component:ie}),Object(G.jsx)(j.b,{path:"/auth/register",component:le}),Object(G.jsx)(j.a,{to:"/auth/login"})]})})})}var de=n(47),be=n(31),Oe=n.n(be);function pe(e){var t=e.isAuthenticated,n=e.component,a=Object(de.a)(e,["isAuthenticated","component"]);return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(j.b,Object(b.a)(Object(b.a)({},a),{},{component:function(e){return t?Object(G.jsx)(j.a,{to:"/"}):Object(G.jsx)(n,Object(b.a)({},e))}}))})}function fe(e){var t=e.isAuthenticated,n=e.component,a=Object(de.a)(e,["isAuthenticated","component"]);return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(j.b,Object(b.a)(Object(b.a)({},a),{},{component:function(e){return t?Object(G.jsx)(n,Object(b.a)({},e)):Object(G.jsx)(j.a,{to:"/auth/login"})}}))})}function he(){var e=Object(d.b)(),t=Object(a.useState)(!0),n=Object(u.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(!1),b=Object(u.a)(o,2),O=b[0],p=b[1];return Object(a.useEffect)((function(){var t=Object(m.c)();Object(m.d)(t,function(){var t=Object(s.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(te(n.uid,n.displayName)),p(!0),r(!1),e(I(n.uid))):(p(!1),r(!1));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,r,p]),c?Object(G.jsx)("h1",{children:"wait......"}):Object(G.jsx)("div",{children:Object(G.jsx)(l.a,{children:Object(G.jsxs)(j.d,{children:[Object(G.jsx)(pe,{path:"/auth",isAuthenticated:O,component:je}),Object(G.jsx)(fe,{isAuthenticated:O,path:"/",component:oe})]})})})}pe.prototype={isAuthenticated:Oe.a.bool.isRequired,component:Oe.a.func.isRequired},fe.prototype={isAuthenticated:Oe.a.bool.isRequired,component:Oe.a.func.isRequired};var me=n(41);var ve=n(78),_e={loading:!1,msgError:null},xe=n(23),ge={notes:[],active:null},ye="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.c,Ne=Object(me.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{uid:t.payload.uid,name:t.payload.displayName};case E:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(b.a)(Object(b.a)({},e),{},{msgError:t.playload});case C:return Object(b.a)(Object(b.a)({},e),{},{msgError:null});case T:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case A:return Object(b.a)(Object(b.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(b.a)(Object(b.a)({},e),{},{active:Object(b.a)({},t.payload)});case P:return Object(b.a)(Object(b.a)({},e),{},{notes:Object(xe.a)(t.payload)});case k:return Object(b.a)(Object(b.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload:e}))});case D:return Object(b.a)(Object(b.a)({},e),{},{notes:[t.payload].concat(Object(xe.a)(e.notes))});case K:return console.log(e.notes.filter((function(e){return e.id!==t.payload}))),Object(b.a)(Object(b.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case L:return Object(b.a)(Object(b.a)({},e),{},{active:null,notes:[]});default:return e}}}),Se=Object(me.d)(Ne,ye(Object(me.a)(ve.a)));function Ee(){return Object(G.jsx)("div",{children:Object(G.jsx)(d.a,{store:Se,children:Object(G.jsx)(he,{})})})}n(183);r.a.render(Object(G.jsx)(Ee,{}),document.getElementById("root"))}},[[184,1,2]]]);
//# sourceMappingURL=main.8c09fbc5.chunk.js.map