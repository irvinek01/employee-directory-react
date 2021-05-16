(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{26:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(14),s=n.n(a),o=(n(25),n(26),n(0));var i=function(){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg bg-dark justify-content-center align-items-center text-white p-5 ",children:Object(o.jsx)("h1",{children:"Employee Directory"})})},l=n(15),u=n(3),d=n.n(u),h=n(4),j=n(16),p=n(17),m=n(20),b=n(19),f=n(18),x=n.n(f),O={getFromAPI:function(){return x.a.get("https://randomuser.me/api/?results=10&nat=us,dk,es,fi,fr,gb,ie,nl,nz,tr")}};var g=function(e){return Object(o.jsx)("div",{className:"bg-dark d-flex text-white ",children:Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("div",{className:"row justify-content-center ",children:Object(o.jsx)("label",{htmlFor:"language",children:"Type in a name inside this search box"})}),Object(o.jsx)("div",{className:"row justify-content-center ",children:Object(o.jsx)("form",{className:"search",children:Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("input",{className:"form-control",size:"27",type:"text",placeholder:"eg. John Doe",name:"search",id:"search",value:e.search,onChange:e.handleInputChange})})})})]})})};var v=function(e){return Object(o.jsx)("thead",{className:"table-success",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Display Picture"}),Object(o.jsx)("th",{scope:"col","data-column":"flname",onClick:e.handleSort,style:{cursor:"pointer"},children:"Name(First, Last)"}),Object(o.jsx)("th",{scope:"col","data-column":"nat",onClick:e.handleSort,style:{cursor:"pointer"},children:"Nationality(Country Code/Country)"}),Object(o.jsx)("th",{scope:"col",children:"Phone"}),Object(o.jsx)("th",{scope:"col","data-column":"email",onClick:e.handleSort,style:{cursor:"pointer"},children:"Email"}),Object(o.jsx)("th",{scope:"col",children:"DOB"})]})})};var y=function(e){return Object(o.jsx)("tbody",{children:e.empInfos.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:Object(o.jsx)("img",{alt:"Employee Display",src:e.picture,className:"img-fluid shadow-lg p-3 mb-3 bg-white rounded"})}),Object(o.jsx)("td",{children:e.flname}),Object(o.jsx)("td",{children:e.nat}),Object(o.jsx)("td",{children:e.contact}),Object(o.jsx)("td",{children:e.email}),Object(o.jsx)("td",{children:(t=e.dob,new Date(t).toLocaleDateString([],{year:"numeric",month:"long",day:"numeric"}))})]},e.key);var t}))})},w=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={empRoster:[],empFilter:[],search:"",flname:1,nat:1,email:1},e.AllEmp=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,O.getFromAPI().then((function(e){t=e.data.results.map((function(e){return{key:e.login.uuid,picture:e.picture.large,flname:e.name.first+", "+e.name.last,nat:e.nat+", "+e.location.country,contact:e.cell,email:e.email,dob:e.dob.date}}))})).catch((function(e){return console.log(e)}));case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),e.componentDidMount=Object(h.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.AllEmp();case 2:return n=t.sent,t.next=5,e.setState({empRoster:n,empFilter:n});case 5:case"end":return t.stop()}}),t)}))),e.handleInputChange=function(){var t=Object(h.a)(d.a.mark((function t(n){var r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=n.target.value.toLowerCase())){t.next=7;break}return t.next=4,e.state.empRoster.filter((function(e){return e.flname.toLowerCase().includes(r)||e.email.toLowerCase().includes(r)}));case 4:return c=t.sent,t.next=7,e.setState({search:r,empFilter:c});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleSort=function(){var t=Object(h.a)(d.a.mark((function t(n){var r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=n.target.getAttribute("data-column"),(c=e.state.empFilter.map((function(e){return e}))).sort((function(t,n){return t[r]>n[r]?1*e.state[r]:t[r]<n[r]?-1*e.state[r]:0})),e.setState(Object(l.a)({empFilter:c},r,-1*e.state[r]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(g,{handleInputChange:this.handleInputChange,search:this.search}),Object(o.jsxs)("table",{className:"table table-striped table-bordered table-hover ",children:[Object(o.jsx)(v,{handleSort:this.handleSort}),Object(o.jsx)(y,{empInfos:this.state.empFilter})]})]})}}]),n}(r.Component);n(47);var C=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(i,{}),Object(o.jsx)(w,{})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),k()}},[[48,1,2]]]);
//# sourceMappingURL=main.99990c3c.chunk.js.map