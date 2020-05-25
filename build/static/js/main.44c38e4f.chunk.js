(this.webpackJsonpcovid_app=this.webpackJsonpcovid_app||[]).push([[0],{150:function(e,t,a){e.exports=a.p+"static/media/medical_research_pink.1c804caf.svg"},152:function(e,t,a){e.exports=a.p+"static/media/doctors_pink.65b8fc85.svg"},190:function(e,t,a){e.exports=a(392)},195:function(e,t,a){},217:function(e,t,a){},392:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(55),c=a.n(r),o=(a(195),a(83)),m=a.n(o),s=a(149),i=a(19),u=a(150),E=a.n(u),d=a(25),p=a(92);var f=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(i.a)(c,2),u=o[0],f=o[1],b=Object(n.useState)(!1),v=Object(i.a)(b,2),h=v[0],g=v[1],y=function(){var e=Object(s.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("https://api.covid19api.com/summary",{headers:{"Content-Type":"application/json"}}).then((function(e){f(!1),r(e.data)})).catch((function(e){console.log(e),g(e),f(!0)})).finally((function(){}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){y()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"centered"},l.a.createElement("h2",null,"Global Covid-19 Statistics"),a&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"is-result"},l.a.createElement("p",null,l.a.createElement("strong",null,"New  Confirmed:")," ",new Intl.NumberFormat("en-GB").format(a.Global.NewConfirmed)),l.a.createElement("p",null,l.a.createElement("strong",null,"Total Confirmed:")," ",new Intl.NumberFormat("en-GB").format(a.Global.TotalConfirmed)),l.a.createElement("p",null,l.a.createElement("strong",null,"New  Deaths:")," ",new Intl.NumberFormat("en-GB").format(a.Global.NewDeaths)),l.a.createElement("p",null,l.a.createElement("strong",null,"Total Deaths:")," ",new Intl.NumberFormat("en-GB").format(a.Global.TotalDeaths)),l.a.createElement("p",null,l.a.createElement("strong",null,"New  Recovered:")," ",new Intl.NumberFormat("en-GB").format(a.Global.NewRecovered)),l.a.createElement("p",null,l.a.createElement("strong",null,"Total  Recovered:")," ",new Intl.NumberFormat("en-GB").format(a.Global.TotalRecovered)))),u&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"is-error"},l.a.createElement("p",null,"Ups!! Something was wrong"),l.a.createElement("p",null,h.message))),l.a.createElement(d.b,{to:"/byCountry",className:"button is-text"},"See data by country"))),l.a.createElement("div",{className:"column"},l.a.createElement("figure",{className:"image"},l.a.createElement("img",{src:E.a,alt:""}))))))};var b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"covid-19 app"))};var v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement(b,null)),l.a.createElement("main",null,l.a.createElement("section",{id:"main_section"},l.a.createElement(f,null))))},h=(a(217),a(7)),g=a(152),y=a.n(g),N=a(14),w=a(92);var C=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(),o=Object(i.a)(c,2),m=o[0],s=o[1],u=Object(n.useState)(!1),E=Object(i.a)(u,2),p=(E[0],E[1]),f=Object(n.useState)(!1),b=Object(i.a)(f,2),v=(b[0],b[1]),h=function(){w.get("https://api.covid19api.com/country/".concat(m),{headers:{"Content-Type":"application/json"}}).then((function(e){p(!1),r(e)})).catch((function(e){console.log(e),v(e),p(!0)})).finally((function(){}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("header",null,l.a.createElement("h1",null,"Covid-19 By Country"),l.a.createElement("nav",{class:"breadcrumb has-arrow-separator","aria-label":"breadcrumbs"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(d.b,{to:"/"},"Home")),l.a.createElement("li",{class:"is-active"},l.a.createElement(d.b,{to:"/byCountry"},"Covid-19 by Country"))))),l.a.createElement("main",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"columns is-centered"},l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"}),l.a.createElement("div",{className:"control"},l.a.createElement("input",{id:"country",name:"country",className:"input",type:"text",placeholder:"Country",maxLength:"50",onKeyDown:function(e){13===e.keyCode&&h()},onChange:function(e){return function(e){s(e.target.value)}(e)}}))),l.a.createElement("div",{className:"field is-grouped"},l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:"button is-primary",onClick:function(){return h()}},"see data"))),a&&l.a.createElement(l.a.Fragment,null,l.a.createElement("center",null,l.a.createElement(N.d,{width:800,height:450,data:a.data},l.a.createElement(N.f,{dataKey:"Date"}),l.a.createElement(N.g,null),l.a.createElement(N.e,null),l.a.createElement(N.b,null),l.a.createElement(N.a,{stroke:"#eee",strokeDasharray:"5 5"}),l.a.createElement(N.c,{type:"monotone",dataKey:"Confirmed",stroke:"#4B4B4B"}),l.a.createElement(N.c,{type:"monotone",dataKey:"Deaths",stroke:"#FF57BB"}),l.a.createElement(N.c,{type:"monotone",dataKey:"Recovered",stroke:"#0091AD"}),l.a.createElement(N.c,{type:"monotone",dataKey:"Active",stroke:"#6EFAFB"})))))),l.a.createElement("div",{className:"columns is-centered"},!a&&l.a.createElement("div",{className:"column is-half"},l.a.createElement("img",{src:y.a,alt:""})))))))};var j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,null,l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/"},l.a.createElement(v,null)),l.a.createElement(h.a,{exact:!0,path:"/byCountry"},l.a.createElement(C,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[190,1,2]]]);
//# sourceMappingURL=main.44c38e4f.chunk.js.map