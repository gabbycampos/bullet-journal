(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},36:function(e,t,a){e.exports=a(64)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),c=a.n(r),s=(a(41),a(4)),i=a(5),o=a(7),m=a(6),u=a(8),d=a(15),h=a(14),p=(a(42),a(35)),b=(a(43),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={slideIndex:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"home"},l.a.createElement(p.a,{slideIndex:this.state.slideIndex,afterSlide:function(t){return e.setState({slideIndex:t})}},l.a.createElement("div",{className:"carousel"},l.a.createElement("div",{className:"title"},l.a.createElement("h3",null," \"Be impeccable with your word. Don't take anything personally. Don't make assumptions. Always do your best.\"")),l.a.createElement("br",null),l.a.createElement("div",{className:"caption"},l.a.createElement("p",null,"Don Miguel Ruiz"))),l.a.createElement("div",{className:"carousel"},l.a.createElement("div",{className:"title"},l.a.createElement("h3",null,'"Understand that the right to choose your own path is a sacred privilege Use it. Dwell in possibility."')),l.a.createElement("br",null),l.a.createElement("div",{className:"caption"},l.a.createElement("p",null,"Oprah Winfrey"))),l.a.createElement("div",{className:"carousel"},l.a.createElement("div",{className:"title"},l.a.createElement("h3",null,'"Once you have traveled, the voyage never ends, but is played out over and over again in the quietest chambers. The mind can never break off from the journey."')),l.a.createElement("br",null),l.a.createElement("div",{className:"caption"},l.a.createElement("p",null,"Pat Conroy")))))}}]),t}(n.Component)),v=a(16),E=(a(27),a(9)),f=a.n(E),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(v.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=document.querySelector("#email").value,n=document.querySelector("#password").value;f.a.auth().signInWithEmailAndPassword(t,n).then(function(e){a.props.history.push("/dailytasks")})},a.state={email:"",password:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"form-group"},l.a.createElement("form",{id:"login",onSubmit:this.handleSubmit},l.a.createElement("h5",{className:"title"},"Log In"),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",id:"email",placeholder:"Enter email",onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",id:"password",placeholder:"Enter password",onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{className:"btn btn-primary"},"Submit")))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(v.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=document.querySelector("#email").value,n=document.querySelector("#password").value;f.a.auth().createUserWithEmailAndPassword(t,n).then(function(){a.props.history.push("/dailytasks")})},a.state={email:"",password:"",firstName:"",lastName:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"form-group"},l.a.createElement("form",{id:"signup",onSubmit:this.handleSubmit},l.a.createElement("h5",{className:"title"},"Sign Up"),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",id:"email",placeholder:"Enter email",onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",id:"password",placeholder:"Enter password",onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"lastName",placeholder:"Enter last name",onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:"firstName",placeholder:"Enter first name",onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{className:"btn btn-primary"},"Submit")))))}}]),t}(n.Component),N=a(18),k=(a(52),a(28),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"removeNote",value:function(e){f.a.database().ref("tasks").child(e).remove()}},{key:"render",value:function(){var e=this;return l.a.createElement("section",{className:"notes-wrapper"},l.a.createElement("div",{className:"notes"},this.props.lists.map(function(t){return l.a.createElement("div",{className:"note",key:t.id},l.a.createElement("div",{className:"note-title"},l.a.createElement("div",{className:"taskContent"},l.a.createElement("h3",null,t.task),l.a.createElement("button",{className:"remove",onClick:function(){return e.removeNote(t.id)}},"remove"))))})))}}]),t}(n.Component)),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(v.a)({},e.target.id,e.target.value))},a.state={task:""},a.state={lists:[]},a.createNote=a.createNote.bind(Object(N.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"createNote",value:function(e){""!==this.state.task&&f.a.database().ref("tasks").push({task:this.state.task})}},{key:"componentDidMount",value:function(){this.db=f.a.database(),this.listenForChange()}},{key:"listenForChange",value:function(){var e=this;this.db.ref("tasks").on("child_added",function(t){var a={id:t.key,task:t.val().task},n=e.state.lists;n.push(a),e.setState({lists:n})}),this.db.ref("tasks").on("child_removed",function(t){var a=e.state.lists;a=a.filter(function(e){return e.id!==t.key}),e.setState({lists:a})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"title"},"Daily Tasks"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"add-task"},l.a.createElement("input",{type:"text",id:"task",name:"noteform-title",value:this.state.task||"",onChange:this.handleChange}),l.a.createElement("button",{className:"taskB",onClick:this.createNote},"create")),l.a.createElement(k,{lists:this.state.lists})))}}]),t}(n.Component),j=a(32),w=function(e){var t=e.component,a=e.authenticated,n=Object(j.a)(e,["component","authenticated"]);return l.a.createElement(h.b,Object.assign({render:function(e){return a?l.a.createElement(t,e):l.a.createElement(h.a,{to:"/dailytasks"})}},n))},C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).signOut=function(e){e.preventDefault(),Object(E.auth)().signOut()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"navigation"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(d.b,{className:"navbar-brand",to:"/"},"Bullet Journal"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("div",{className:"signedIn"},this.props.authenticated?l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement(d.b,{to:"/dailytasks",className:"links",style:{textDecoration:"none",color:"black"}},"Daily Tasks")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/",className:"links",onClick:this.signOut,style:{textDecoration:"none",color:"black"}},"Log Out"))):l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement(d.b,{to:"/signup",className:"links",style:{textDecoration:"none",color:"black"}},"Sign Up")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/login",className:"links",style:{textDecoration:"none",color:"black"}},"Log In"))))))),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"homepage"},l.a.createElement(h.d,null,l.a.createElement(h.b,{exact:!0,path:"/",component:b}),l.a.createElement(h.b,{authenticated:this.props.authenticated,path:"/login",component:g}),l.a.createElement(h.b,{path:"/signup",component:y}),l.a.createElement(w,{authenticated:this.props.authenticated,path:"/dailytasks",component:O}))))))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={authenticated:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;D.auth().onAuthStateChanged(function(t){t?e.setState(function(){return{authenticated:!0}}):e.setState(function(){return{authenticated:!1}})})}},{key:"render",value:function(){return l.a.createElement(C,{authenticated:this.state.authenticated})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(58),a(62);f.a.initializeApp({apiKey:"AIzaSyBzOVsc9UU2yxpFBi-hQhCkDOkop31tj_8",authDomain:"bullet-journal-b108d.firebaseapp.com",databaseURL:"https://bullet-journal-b108d.firebaseio.com",projectId:"bullet-journal-b108d",storageBucket:"bullet-journal-b108d.appspot.com",messagingSenderId:"162465994825",appId:"1:162465994825:web:c471800b88687f6a"});var D=t.default=f.a;c.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.8556c967.chunk.js.map