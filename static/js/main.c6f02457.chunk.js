(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{39:function(e,a,t){e.exports=t(69)},68:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(31),o=t.n(c),l=t(32),s=t(33),u=t(38),i=t(36),m=t(10),p=t(3),d=t(2),f=t.n(d),b=t(6),E=t(11),h=t(37),v=t(1),C=function(e,a){switch(a.type){case"GET_CONTACT":return Object(v.a)(Object(v.a)({},e),{},{contact:a.payload});case"GET_CONTACTS":return Object(v.a)(Object(v.a)({},e),{},{contacts:a.payload});case"ADD_CONTACT":return Object(v.a)(Object(v.a)({},e),{},{contacts:[a.payload].concat(Object(h.a)(e.contacts))});case"UPDATE_CONTACT":return Object(v.a)(Object(v.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===a.payload.id?e=a.payload:e}))});case"DELETE_CONTACT":return Object(v.a)(Object(v.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==a.payload}))});case"SET_CURRENT":return Object(v.a)(Object(v.a)({},e),{},{contact:a.payload});case"CLEAR_CURRENT":return Object(v.a)(Object(v.a)({},e),{},{contact:null});case"CONTACTS_ERROR":return Object(v.a)(Object(v.a)({},e),{},{errors:a.payload});default:return e}},O=t(16),y=t.n(O),N={contacts:[],contact:null,errors:null},j=Object(n.createContext)(N),T=function(e){var a=e.children,t=Object(n.useReducer)(C,N),c=Object(E.a)(t,2),o=c[0],l=c[1];Object(n.useEffect)((function(){u()}),[]);var s=function(){var e=Object(b.a)(f.a.mark((function e(a){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 2:t=e.sent,l({type:"GET_CONTACT",payload:t.data});case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=Object(b.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent;try{l({type:"GET_CONTACTS",payload:a.data})}catch(t){l({type:"CONTACTS_ERROR",payload:t.response.data.error})}case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(b.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("https://jsonplaceholder.typicode.com/users",a);case 2:try{l({type:"ADD_CONTACT",payload:a})}catch(t){l({type:"CONTACTS_ERROR",payload:t.response.data.error})}case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),m=function(){var e=Object(b.a)(f.a.mark((function e(a){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={headers:{"Content-type":"application/json; charset=UTF-8"}},e.next=4,y.a.put("https://jsonplaceholder.typicode.com/users/".concat(a.id),a,t);case 4:n=e.sent,l({type:"UPDATE_CONTACT",payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l({type:"CONTACTS_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}(),p=function(){var e=Object(b.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{l({type:"SET_CURRENT",payload:a})}catch(t){l({type:"CONTACTS_ERROR",payload:t.response.data.error})}case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),d=function(){var e=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l({type:"CLEAR_CURRENT"});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(j.Provider,{value:{contacts:o.contacts,current:o.contact,errors:o.errors,getContact:s,getContacts:u,addContact:i,updateContact:m,deleteContact:function(e){try{l({type:"DELETE_CONTACT",payload:e})}catch(a){l({type:"CONTACTS_ERROR",payload:a.response.data.error})}},setCurrent:p,clearCurrent:d}},a)},g=function(e){var a=e.contact,t=Object(n.useContext)(j),c=t.deleteContact,o=t.setCurrent,l=Object(n.useState)(!1),s=Object(E.a)(l,2),u=s[0],i=s[1],p=function(){var e=Object(b.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(a);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),d=a.id,h=a.name,v=a.email,C=a.phone;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,h," ",r.a.createElement("i",{onClick:function(){return i(!u)},className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:function(){return p(d)}}),r.a.createElement(m.b,{to:"contact/edit/".concat(d)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"},onClick:function(){return o(a)}}))),u?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},v),r.a.createElement("li",{className:"list-group-item"},C)):null)},x=function(){var e=Object(n.useContext)(j).contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact"),"List"),e&&e.map((function(e){return r.a.createElement(g,{key:e.id,contact:e})})))},k=t(13),A=t(35),R=t.n(A),w=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:o,name:t,className:R()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};w.defaultProps={type:"text"};var _=w,S=function(){var e=Object(n.useContext)(j),a=e.addContact,t=e.errors,c=Object(n.useState)({name:"",email:"",phone:"",errors:{}}),o=Object(E.a)(c,2),l=o[0],s=o[1],u=Object(p.f)(),i=l.name,m=l.email,d=l.phone,h=function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==i){e.next=4;break}return s({errors:{name:"Name is required"}}),e.abrupt("return");case 4:if(""!==m){e.next=7;break}return s({errors:{email:"Email is required"}}),e.abrupt("return");case 7:if(""!==d){e.next=10;break}return s({errors:{phone:"Phone is required"}}),e.abrupt("return");case 10:a({name:i,email:m,phone:d}),s({name:"",email:"",phone:"",errors:{}}),u.push("/");case 14:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),C=function(e){return s(Object(v.a)(Object(v.a)({},l),{},Object(k.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:h},r.a.createElement(_,{label:"Name",name:"name",placeholder:"Enter Name",value:i,onChange:function(e){return C(e)},errors:t}),r.a.createElement(_,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:m,onChange:function(e){return C(e)},error:t}),r.a.createElement(_,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:d,onChange:function(e){return C(e)},errors:t}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))},P=function(){var e=Object(n.useContext)(j),a=e.current,t=e.updateContact,c=e.clearCurrent,o=Object(n.useState)({id:"",name:"",email:"",phone:"",error:{}}),l=Object(E.a)(o,2),s=l[0],u=l[1],i=Object(p.f)();Object(n.useEffect)((function(){null!==a&&u({id:a.id,name:a.name,email:a.email,phone:a.phone})}),[a]);var m=s.name,d=s.email,h=s.phone,C=s.errors,O=function(){var e=Object(b.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==m){e.next=4;break}return u({errors:{name:"Name is required"}}),e.abrupt("return");case 4:if(""!==d){e.next=7;break}return u({errors:{email:"Email is required"}}),e.abrupt("return");case 7:if(""!==h){e.next=10;break}return u({errors:{phone:"Phone is required"}}),e.abrupt("return");case 10:t(s),u({name:"",email:"",phone:"",error:{}}),c(),i.push("/");case 14:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),y=function(e){return u(Object(v.a)(Object(v.a)({},s),{},Object(k.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(e){return O(e)}},r.a.createElement(_,{label:"Name",name:"name",placeholder:"Enter Name",value:m,onChange:function(e){return y(e)},errors:C}),r.a.createElement(_,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:d,onChange:function(e){return y(e)},errors:C}),r.a.createElement(_,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:h,onChange:function(e){return y(e)},errors:C}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))},D=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}," Home"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}," Add"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}," About")))))))};D.defaultProps={branding:"My App"};var q=D,U=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple App to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},L=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))},F=(t(67),t(68),function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(T,null,r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(q,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:x}),r.a.createElement(p.a,{exact:!0,path:"/contact/add",component:S}),r.a.createElement(p.a,{exact:!0,path:"/contact/edit/:id",component:P}),r.a.createElement(p.a,{exact:!0,path:"/about",component:U}),r.a.createElement(p.a,{component:L}))))))}}]),t}(n.Component));o.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c6f02457.chunk.js.map