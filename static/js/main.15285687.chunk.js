(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,t,n){e.exports=n(69)},55:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"AdminOnly",function(){return M}),n.d(a,"Users",function(){return D}),n.d(a,"Dashboard",function(){return F}),n.d(a,"Manager",function(){return J}),n.d(a,"Customers",function(){return H}),n.d(a,"Service1",function(){return U}),n.d(a,"Service2",function(){return W}),n.d(a,"Profile",function(){return q}),n.d(a,"Home",function(){return G});var r=n(0),o=n.n(r),l=n(27),c=n.n(l),i=(n(55),n(12)),s=n(13),u=n(17),m=n(14),p=n(16),d=n(18),h=n(71),f=n(73),g=n(44),v=n(9),E=n(72),b=function(e){return o.a.createElement(h.a,null,o.a.createElement(E.a,{style:{marginTop:"50px"}},o.a.createElement("h1",null,e.title),o.a.createElement("div",null,e.children),o.a.createElement("p",null,e.description)))};b.defaultProps={description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"};var y=b,O=n(75),k=n(78),w=n(74),j=n(6),S=Object(j.a)({}),C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={selected:[]},n.handleChange=function(e){for(var t=[],a=0;a<e.target.options.length;a++)e.target.options[a].selected&&t.push(e.target.options[a].value);n.setState({selected:t})},n.handleClick=function(){localStorage.setItem("roles",JSON.stringify(n.state.selected)),S.push("/app")},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(y,{title:"Login",description:""},o.a.createElement(O.a.Group,{controlId:"exampleForm.ControlSelect1"},o.a.createElement(O.a.Label,null,"Select Role:"),o.a.createElement(O.a.Control,{as:"select",value:this.state.selected,onChange:this.handleChange,multiple:!0},o.a.createElement("option",{value:"admin"},"Admin"),o.a.createElement("option",{value:"manager"},"Manager"),o.a.createElement("option",{value:"customer"},"Customer"))),o.a.createElement(k.a,{variant:"primary"},"Support multi roles."),o.a.createElement(f.a,{className:"text-right"},o.a.createElement(g.a,{sm:11},o.a.createElement(v.a,{to:"/forgot-password"},"Forgot Password")),o.a.createElement(g.a,{sm:1},o.a.createElement(v.a,{to:"/register"},"Register"))),o.a.createElement(w.a,{variant:"primary",onClick:this.handleClick,disabled:!this.state.selected.length},"Login"))}}]),t}(r.Component);C.defaultProps={};var I=C,L=function(){return o.a.createElement(y,{title:"Register"},o.a.createElement(v.a,{className:"nav-link",to:"/"},"Back to login"))},A=function(){return o.a.createElement(y,{title:"ForgotPassword"},o.a.createElement(v.a,{className:"nav-link",to:"/"},"Back to login"))},P=function(e){e.match;return o.a.createElement(r.Fragment,null,o.a.createElement(d.d,null,o.a.createElement(d.b,{path:"/forgot-password",render:A}),o.a.createElement(d.b,{path:"/register",exact:!0,render:L}),o.a.createElement(d.b,{path:"",component:I})))},x=n(25),N=n(47),R={admin:{component:"AdminOnly",url:"/admin-only",title:"Admin Only",icon:"menu",module:1},users:{component:"Users",url:"/users",title:"Users",icon:"menu",module:1},dashboard:{component:"Dashboard",url:"/dashboard",title:"Dashboard",icon:"menu",module:1},manager:{component:"Manager",url:"/manager",title:"Manager",icon:"menu",module:1},customers:{component:"Customers",url:"/customers",title:"Customers",icon:"menu",module:1},service1:{component:"Service1",url:"/service1",title:"Service1",icon:"menu",module:1},service2:{component:"Service2",url:"/service2",title:"Service2",icon:"menu",module:1}},B={admin:{routes:Object(x.a)(Object.values(R))},manager:{routes:[R.dashboard,R.manager,R.customers,R.service1,R.service2]},customer:{routes:[R.service1,R.service2]},common:{routes:[{component:"Home",url:"/",title:"Home",icon:"menu",module:1},{component:"Profile",url:"/profile",title:"Profile",icon:"menu",module:1}]}},M=function(){return o.a.createElement(y,{title:"Admin Only"})},D=function(){return o.a.createElement(y,{title:"Users"})},F=function(){return o.a.createElement(y,{title:"Dashboard"})},J=function(){return o.a.createElement(y,{title:"Manager"})},H=function(){return o.a.createElement(y,{title:"Customers"})},U=function(){return o.a.createElement(y,{title:"Service1"})},W=function(){return o.a.createElement(y,{title:"Service2"})},q=function(){return o.a.createElement(y,{title:"Profile"})},G=function(){return o.a.createElement(y,{title:"Home"})},T=n(77),$=n(76),z=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleLogout=function(){localStorage.removeItem("roles"),S.push("/")},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(T.a,{bg:"dark",variant:"dark"},o.a.createElement(T.a.Brand,null,o.a.createElement(v.a,{to:"/app",style:{color:"#fff"}},"Role-Based-Access-Control")),o.a.createElement($.a,{className:"mr-auto"},this.props.routes.map(function(t){return o.a.createElement(v.a,{key:t.url,className:"nav-link",to:"".concat(e.props.path).concat(t.url)},t.title)})),o.a.createElement(w.a,{onClick:this.handleLogout},"Logout"))}}]),t}(r.Component),K=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={allowedRoutes:[]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("roles"));if(e){var t=(e=["common"].concat(Object(x.a)(e))).reduce(function(e,t){return[].concat(Object(x.a)(e),Object(x.a)(B[t].routes))},[]);t=Object(N.uniqBy)(t,"url"),this.setState({allowedRoutes:t})}else this.props.history.push("/")}},{key:"render",value:function(){var e=this;return o.a.createElement(r.Fragment,null,o.a.createElement(z,{routes:this.state.allowedRoutes,path:this.props.match.path}),o.a.createElement(d.d,null,this.state.allowedRoutes.map(function(t){return o.a.createElement(d.b,{exact:!0,key:t.url,component:a[t.component],path:"".concat(e.props.match.path).concat(t.url)})})))}}]),t}(r.Component),Q=function(){return JSON.parse(localStorage.getItem("roles"))?o.a.createElement(d.a,{to:"/app"}):o.a.createElement(P,null)},V=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,{fluid:!0},o.a.createElement(f.a,null,o.a.createElement(g.a,null,o.a.createElement(d.c,{history:S},o.a.createElement(d.d,null,o.a.createElement(d.b,{path:"/app",component:K}),o.a.createElement(d.b,{path:"/",render:Q}))))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,1,2]]]);
//# sourceMappingURL=main.15285687.chunk.js.map