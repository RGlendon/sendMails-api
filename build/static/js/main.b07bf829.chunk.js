(this["webpackJsonpmy-react"]=this["webpackJsonpmy-react"]||[]).push([[0],{15:function(e,t,n){e.exports={general:"Login_general__3_oWh",content:"Login_content__3DDu-",information:"Login_information__2VwhR",title:"Login_title__3D9Rs",form:"Login_form__2fXQJ",inputPlace:"Login_inputPlace__5peEn",button:"Login_button__1HveB",errorPosition:"Login_errorPosition__3Uefl",commonError:"Login_commonError__3b3Un",errors:"Login_errors__571SQ"}},165:function(e,t,n){e.exports=n(362)},19:function(e,t,n){e.exports={header:"Header_header__EyyxT",title:"Header_title__1FGos",container:"Header_container__3_Lx-",avatar:"Header_avatar__3R4i_",auth:"Header_auth__ND7PU",button:"Header_button__34JiD"}},230:function(e,t,n){},231:function(e,t,n){},232:function(e,t,n){},233:function(e,t,n){},32:function(e,t,n){e.exports={formControl:"Validators_formControl__2zCnu",error:"Validators_error__2V4_C",input:"Validators_input__1bZ3G",spanError:"Validators_spanError__1S4QH",errors:"Validators_errors__32G8U"}},362:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n(138),o=n(27),c=n(22),i=n(23),l=new(function(){function e(t){Object(c.a)(this,e),this.baseUrl=t}return Object(i.a)(e,[{key:"makeFetch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;return a&&(a=JSON.stringify(a)),fetch("".concat(this.baseUrl).concat(e),{headers:{"content-type":n},credentials:"include",method:t,body:a}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},{key:"sendMails",value:function(e){return this.makeFetch("/send","POST","application/json",{emails:e})}}]),e}())(""),s={contacts:[]};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CONTACT":return Object(o.a)({},e,{contacts:[t.contact].concat(Object(r.a)(e.contacts))});case"DELETE_CONTACT":return Object(o.a)({},e,{contacts:e.contacts.filter((function(e){return e._id!==t.contactId}))});case"REWRITE_STATE":return s.contacts=e.contacts,e;case"RESET_STATE":return Object(o.a)({},e,{contacts:[]});default:return e}},m=n(63),_={id:null,login:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).NAME,email:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).EMAIL,password:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PASSWORD,isLogin:!1};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.data.email===e.email&&t.data.password===e.password?Object(o.a)({},e,{isLogin:!0}):Object(o.a)({},e,{isLogin:!1});case"LOGOUT":return Object(o.a)({},e,{isLogin:!1});default:return e}},E=n(134),f=n(133),p=Object(a.c)({contactsPage:u,auth:d,form:f.a}),b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,O=Object(a.e)(p,b(Object(a.a)(E.a)));window.store=O;var g=O,v=n(0),h=n.n(v),C=n(64),j=n.n(C),T=(n(230),n(231),n(232),n(233),n(26)),N=n(131),S=n(132),L=n(49),D=n(244),P=function(e){return e?void 0:"\u044d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},y=(Object(L.validatorFromFunction)((function(e){return!(!e||!D.isURL(e))})),Object(L.validatorFromFunction)((function(e){return!(!e||!D.isMobilePhone(e,"ru-RU"))})),Object(L.validatorFromFunction)((function(e){return!(!e||!D.isEmail(e))})),n(95)),A=n(32),R=n.n(A),U=function(e){var t=e.input,n=e.meta,a=Object(y.a)(e,["input","meta"]),r=n.touched&&n.error;return h.a.createElement("div",{className:R.a.formControl+" "+(r?R.a.error:"")},h.a.createElement("input",Object.assign({},t,a,{className:R.a.input})),h.a.createElement("div",null,r&&h.a.createElement("span",{className:R.a.spanError},n.error)))},k=n(15),H=n.n(k),w=function(e){return h.a.createElement("form",{onSubmit:e.handleSubmit,className:H.a.form},h.a.createElement("div",{className:H.a.inputPlace},h.a.createElement(N.a,{component:U,type:"text",name:"email",placeholder:"\u0412\u0430\u0448\u0430 \u043f\u043e\u0447\u0442\u0430",validate:[P]})),h.a.createElement("div",{className:H.a.inputPlace},h.a.createElement(N.a,{component:U,type:"password",name:"password",placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",validate:[P]})),h.a.createElement("div",{className:H.a.errorPosition},h.a.createElement("div",{className:H.a.commonError},e.error)),h.a.createElement("button",{className:H.a.button,disabled:e.invalid},"\u0412\u0445\u043e\u0434"))};w=Object(S.a)({form:"loginForm"})(w);var W=function(e){return e.isLogin?h.a.createElement(T.a,{to:"/contacts"}):h.a.createElement("div",{className:H.a.general},h.a.createElement("div",{className:H.a.content},h.a.createElement("div",{className:H.a.information,title:"email: youarethebest@yandex.ru\npassword: 12345"}),h.a.createElement("h1",{className:H.a.title},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),h.a.createElement(w,{onSubmit:function(t){e.login(t),e.sendError()}})))},V=n(9),F={login:function(e){return{type:"LOGIN",data:e}},sendError:function(){return function(e){e(Object(m.a)("loginForm",{_error:"\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}))}}},I=Object(V.b)((function(e){return{isLogin:e.auth.isLogin}}),F)(W),x=n(93),K=n.n(x),M=n(39),G=n(38),B=n(40),J=n(19),X=n.n(J);var Q=function(e){return h.a.createElement("header",{className:X.a.header},h.a.createElement("h1",{className:X.a.title},"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"),h.a.createElement("div",{className:X.a.container},e.isLogin?h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:X.a.avatar}),h.a.createElement("h2",{className:X.a.auth},e.login),h.a.createElement("div",{className:X.a.button,onClick:e.logout})):h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:X.a.avatar,style:{backgroundImage:"url('https://i.livelib.ru/auface/471251/o/ab9f/Yurij_Belous.jpg')"}}),h.a.createElement("h2",{className:X.a.auth},"\u0438\u043c\u044f"),h.a.createElement("div",{className:X.a.button,onClick:e.logout}))))},z=function(e){function t(){return Object(c.a)(this,t),Object(M.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return h.a.createElement(Q,this.props)}}]),t}(h.a.Component);var Z={logout:function(){return{type:"LOGOUT"}}},q=Object(V.b)((function(e){return{isLogin:e.auth.isLogin,login:e.auth.login}}),Z)(z),Y=n(94),$=n.n(Y),ee=n(70),te=n.n(ee),ne=function(e){var t=e.data,n=t.email,a=t._id;return h.a.createElement("div",{className:te.a.general},h.a.createElement("p",{className:te.a.email},n),h.a.createElement("p",{className:te.a.delete,onClick:function(){e.deleteContact(a)}},"\u2715"))},ae=function(e){function t(e){return Object(c.a)(this,t),Object(M.a)(this,Object(G.a)(t).call(this,e))}return Object(B.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){}},{key:"render",value:function(){var e=this,t=this.props.contacts.map((function(t){return h.a.createElement(ne,{data:t,key:t._id,deleteContact:e.props.deleteContact})}));return h.a.createElement("div",{className:$.a.general},h.a.createElement("div",{className:$.a.container},this.props.isLogin&&t))}}]),t}(v.Component),re={deleteContact:function(e){return{type:"DELETE_CONTACT",contactId:e}}},oe=Object(V.b)((function(e){return{contacts:e.contactsPage.contacts,isLogin:e.auth.isLogin}}),re)(ae),ce=n(139),ie=n(51),le=n.n(ie),se=1,ue={addContact:function(e){return{type:"ADD_CONTACT",contact:e}}},me=Object(V.b)(null,ue)((function(e){var t=Object(v.useState)(""),n=Object(ce.a)(t,2),a=n[0],r=n[1];return h.a.createElement("div",{className:le.a.general},h.a.createElement("form",{onSubmit:function(t){t.preventDefault(),console.log(se),e.addContact({email:a,_id:se}),++se,r("")},className:le.a.form},h.a.createElement("input",{type:"email",name:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0447\u0442\u0443*",className:le.a.inputPlace,value:a,onChange:function(e){r(e.currentTarget.value)}}),h.a.createElement("button",{className:le.a.button,disabled:0===a.length},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))})),_e={sendMailsTC:function(e){return function(t){return l.sendMails(e).then((function(e){console.log(e),t({type:"RESET_STATE"})})).catch((function(e){return console.log(e),Promise.reject(e)}))}}},de=Object(a.d)((function(e){var t=function(t){function n(){return Object(c.a)(this,n),Object(M.a)(this,Object(G.a)(n).apply(this,arguments))}return Object(B.a)(n,t),Object(i.a)(n,[{key:"render",value:function(){return this.props.isLogin?h.a.createElement(e,this.props):h.a.createElement(h.a.Fragment,null,h.a.createElement(T.a,{to:"/login"}),h.a.createElement(e,this.props))}}]),n}(h.a.Component);return Object(V.b)((function(e){return{isLogin:e.auth.isLogin}}))(t)}),Object(V.b)((function(e){return{contacts:e.contactsPage.contacts}}),_e))((function(e){return h.a.createElement("div",{className:K.a.general},h.a.createElement(q,null),h.a.createElement(me,null),h.a.createElement(oe,null),h.a.createElement("button",{onClick:function(t){t.preventDefault(),console.log("\u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430"),e.sendMailsTC(e.contacts)},className:K.a.button,disabled:function(){var t=!0;return e.contacts.length&&(t=!1),t}()},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))}));var Ee=function(e){return console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).NAME),h.a.createElement("div",null,h.a.createElement(T.b,{path:"/login",render:function(){return h.a.createElement(I,null)}}),h.a.createElement(T.b,{path:"/",render:function(){return h.a.createElement(de,null)}}))},fe=n(45);n(359).config(),j.a.render(h.a.createElement(fe.a,null,h.a.createElement(V.a,{store:g},h.a.createElement(Ee,{store:g}))),document.getElementById("root"))},51:function(e,t,n){e.exports={general:"AddContact_general__1H9t5",form:"AddContact_form__3rjuS",inputPlace:"AddContact_inputPlace__2wo7Q",button:"AddContact_button__hElgX",commonError:"AddContact_commonError__6mzT3"}},70:function(e,t,n){e.exports={general:"Card_general__3Roba",email:"Card_email__1OqVp",control:"Card_control__bs_Li",controlEdit:"Card_controlEdit__2v3H3",delete:"Card_delete__6hvMX"}},93:function(e,t,n){e.exports={general:"Contacts_general__3Z22S",button:"Contacts_button__joWRr"}},94:function(e,t,n){e.exports={general:"ContactList_general__3Va-G",container:"ContactList_container__2V7Tl"}}},[[165,1,2]]]);
//# sourceMappingURL=main.b07bf829.chunk.js.map