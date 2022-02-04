(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{38:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(31),i=s.n(a),r=(s(38),s(10)),l=s(11),o=s(13),u=s(12),d=(s(39),s(8)),h=s(2),j=s(0);var b=function(e){var t,s,n,c=e.isAuthenticated,a=e.logout;return t="/login",s="login",c&&(t="/logout",s="logout",n=a),Object(j.jsxs)("header",{className:"d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom",children:[Object(j.jsx)(d.b,{to:"/",className:"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none",children:"Film"}),Object(j.jsxs)("ul",{className:"nav nav-pills",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(d.b,{to:"/users",className:"nav-link",children:"User"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(d.b,{to:"/films",className:"nav-link",children:"Film"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(d.b,{to:"/schedules",className:"nav-link",children:"Schedule"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(d.b,{to:t,className:"nav-link",onClick:n,children:s})})]})]})},m=function(){return Object(j.jsx)("footer",{children:"\xa9 Cinema, 2021"})},O=function(e){var t=e.film;return Object(j.jsxs)("tr",{className:"film-row",children:[Object(j.jsx)("td",{children:t.id}),Object(j.jsx)("td",{children:Object(j.jsx)(d.b,{to:"/films/detail/".concat(t.id),className:"nav-link",children:t.title})}),Object(j.jsx)("td",{children:t.description}),Object(j.jsx)("td",{children:Object(j.jsx)(d.b,{to:"/films/delete/".concat(t.id),className:"nav-link",children:"delete"})})]})},x=function(e){var t=e.films;return Object(j.jsxs)("div",{className:"film-list",children:[Object(j.jsx)("h1",{children:"Films"}),Object(j.jsxs)("table",{className:"film-list",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"id"}),Object(j.jsx)("th",{children:"title"}),Object(j.jsx)("th",{children:"description"}),Object(j.jsx)("th",{children:"actions"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(O,{film:e},e.id)}))})]})]})},f=function(e){var t=e.films,s=e.users,n=Object(h.e)().id,c=t.filter((function(e){return e.id===+n}))[0],a=s.filter((function(e){return c.audience.includes(e.id)}));return Object(j.jsxs)("div",{className:"film-detail",children:[Object(j.jsxs)("h3",{children:["Film: ",c.title]}),Object(j.jsx)("p",{children:c.description}),Object(j.jsx)("p",{children:"Audience:"}),Object(j.jsx)("ul",{children:a.map((function(e){return Object(j.jsx)("li",{children:e.username},e.id)}))})]})},p=function(e){var t=e.user;return Object(j.jsxs)("tr",{className:"user-row",children:[Object(j.jsx)("td",{children:t.id}),Object(j.jsx)("td",{children:t.username}),Object(j.jsx)("td",{children:t.date_birth})]})},v=function(e){var t=e.users;return Object(j.jsxs)("div",{className:"user-list",children:[Object(j.jsx)("h1",{children:"Users"}),Object(j.jsxs)("table",{className:"user-list",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"id"}),Object(j.jsx)("th",{children:"username"}),Object(j.jsx)("th",{children:"date birth"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(p,{user:e},e.id)}))})]})]})},g=function(e){var t=e.schedule;return Object(j.jsxs)("tr",{className:"schedule-row",children:[Object(j.jsx)("td",{children:t.id}),Object(j.jsx)("td",{children:t.date_time}),Object(j.jsx)("td",{children:t.film})]})},k=function(e){var t=e.schedules;return Object(j.jsxs)("div",{className:"schedule-list",children:[Object(j.jsx)("h1",{children:"Schedules"}),Object(j.jsxs)("table",{className:"schedule-list",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"id"}),Object(j.jsx)("th",{children:"date_time"}),Object(j.jsx)("th",{children:"film"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(g,{schedule:e},e.id)}))})]})]})},y=function(){return Object(j.jsx)("h1",{children:"Hello SPA"})},S=s(15),N=s.n(S),w=s(18),C=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={username:"",password:""},n}return Object(l.a)(s,[{key:"handleChange",value:function(e){this.setState(Object(w.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.login(this.state.username,this.state.password)}},{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"login-form",children:Object(j.jsxs)("form",{method:"post",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(j.jsx)("input",{type:"text",name:"username",placeholder:"username",onChange:function(t){return e.handleChange(t)}}),Object(j.jsx)("input",{type:"password",name:"password",placeholder:"password",onChange:function(t){return e.handleChange(t)}}),Object(j.jsx)("input",{type:"submit",value:"login"})]})})}}]),s}(c.a.Component),T=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={username:"",password1:"",password2:"",email:""},n}return Object(l.a)(s,[{key:"handleChange",value:function(e){this.setState(Object(w.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.register(this.state.username,this.state.password1,this.state.password2,this.state.email)}},{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"login-form",children:Object(j.jsxs)("form",{method:"post",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(j.jsx)("input",{type:"text",name:"username",placeholder:"username",onChange:function(t){return e.handleChange(t)}}),Object(j.jsx)("input",{type:"password",name:"password",placeholder:"password",onChange:function(t){return e.handleChange(t)}}),Object(j.jsx)("input",{type:"submit",value:"login"})]})})}}]),s}(c.a.Component),A=function(e){return"".concat("http://127.0.0.1:8000","/api/").concat(e,"/")},F=function(e){Object(o.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={users:[],films:[],schedules:[],accessToken:n.getAccessToken()},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.loadState()}},{key:"loadState",value:function(){var e=this,t=this.getHeaders();N.a.get(A("users"),{headers:t}).then((function(t){e.setState({users:t.data})})).catch((function(e){return console.log(e)})),N.a.get(A("films"),{headers:t}).then((function(t){e.setState({films:t.data})})).catch((function(e){return console.log(e)})),N.a.get(A("schedule"),{headers:t}).then((function(t){e.setState({schedules:t.data})})).catch((function(e){return console.log(e)}))}},{key:"login",value:function(e,t){var s=this;N.a.post(A("token"),{username:e,password:t}).then((function(e){var t=e.data.refresh,n=e.data.access;s.saveTokens(t,n),s.setState({accessToken:n},s.loadState)})).catch((function(e){return console.log(e)}))}},{key:"register",value:function(e,t,s,n){console.log("do register",e,t,s,n)}},{key:"logout",value:function(){localStorage.setItem("refreshToken",null),localStorage.setItem("accessToken",null),this.clearState()}},{key:"clearState",value:function(){this.setState({accessToken:null,users:[],films:[],schedules:[]})}},{key:"saveTokens",value:function(e,t){localStorage.setItem("refreshToken",e),localStorage.setItem("accessToken",t)}},{key:"getAccessToken",value:function(){return localStorage.getItem("accessToken")}},{key:"isAuthenticated",value:function(){return"null"!==this.state.accessToken&&null!==this.state.accessToken}},{key:"getHeaders",value:function(){var e={"Content-Type":"application/json"};return this.isAuthenticated()&&(e.Authorization="Bearer ".concat(this.state.accessToken)),e}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"main",children:[Object(j.jsxs)(d.a,{children:[Object(j.jsx)(b,{isAuthenticated:this.isAuthenticated(),logout:function(){return e.logout()}}),Object(j.jsx)(h.a,{exact:!0,path:"/",children:Object(j.jsx)(y,{})}),Object(j.jsx)(h.a,{exact:!0,path:"/users",children:Object(j.jsx)(v,{users:this.state.users})}),Object(j.jsx)(h.a,{exact:!0,path:"/films",children:Object(j.jsx)(x,{films:this.state.films})}),Object(j.jsx)(h.a,{exact:!0,path:"/films/detail/:id",children:Object(j.jsx)(f,{films:this.state.films,users:this.state.users})}),Object(j.jsx)(h.a,{exact:!0,path:"/schedules",children:Object(j.jsx)(k,{schedules:this.state.schedules})}),Object(j.jsx)(h.a,{exact:!0,path:"/login",children:Object(j.jsx)(C,{login:function(t,s){return e.login(t,s)}})}),Object(j.jsx)(h.a,{exact:!0,path:"/register",children:Object(j.jsx)(T,{register:function(t,s,n,c){return e.register(t,s,n,c)}})})]}),Object(j.jsx)(m,{})]})}}]),s}(c.a.Component),I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,65)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root")),I()}},[[64,1,2]]]);
//# sourceMappingURL=main.b84be28c.chunk.js.map