(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{38:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),s=n(11),r=n.n(s),a=(n(38),n(18)),o=n(61),u=n(4),j=function(t){var e=t.time,n=Object.keys(e).map((function(t){return e[t]<=9?"0"+e[t]:e[t]})).reverse().join(":");return Object(u.jsx)(o.a,{variant:"h2",children:n})},l=n(19),b=new(n(67).a),m={seconds:55,minutes:0,hours:0},d=m,f={init:function(){b.next(d)},subscribe:function(t){return b.subscribe(t)},startTime:function(t){t.current=setInterval((function(){d=59===d.minutes&&d.seconds>=59?{seconds:0,minutes:0,hours:d.hours+1}:d.seconds>=59?Object(l.a)(Object(l.a)({},d),{},{seconds:0,minutes:d.minutes+1}):Object(l.a)(Object(l.a)({},d),{},{seconds:d.seconds+1}),b.next(d)}),1e3)},stopTime:function(t){clearInterval(t.current)},clearTime:function(t){d={seconds:0,minutes:0,hours:0},clearInterval(t.current),b.next(d)},initialState:m},O=n(45),h=n(64),x=n(63),p=Object(x.a)((function(){return{button:{width:100}}})),T=function(t){var e=t.stopTime,n=t.startTime,i=t.resetTime,s=t.doubleClickWait,r=t.isActive,a=t.isPaused,o=Object(c.useRef)(),j=p();return Object(u.jsxs)(h.a,{variant:"contained",color:"primary",size:"large",children:[!r||a?Object(u.jsx)(O.a,{onClick:function(){return n(o)},className:j.button,children:"Start "}):Object(u.jsx)(O.a,{onClick:function(){return e(o)},className:j.button,children:"Stop"}),Object(u.jsx)(O.a,{onClick:function(){return i(o)},children:"Reset"}),Object(u.jsx)(O.a,{onClick:function(){return s(o)},children:"Wait"})]})},v=n(65),S=n(66),k=Object(x.a)((function(){return{root:{display:"flex",flexDirection:"column",alignItems:"center"},box:{marginTop:"5rem",width:"max-content",padding:10,margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center"}}})),g=function(){var t=k(),e=Object(c.useState)(f.initialState),n=Object(a.a)(e,2),i=n[0],s=n[1],r=Object(c.useState)(!1),l=Object(a.a)(r,2),b=l[0],m=l[1],d=Object(c.useState)(!1),O=Object(a.a)(d,2),h=O[0],x=O[1],p=Object(c.useState)(0),g=Object(a.a)(p,2),w=g[0],C=g[1];Object(c.useEffect)((function(){f.subscribe(s),f.init()}),[]);return Object(u.jsxs)(v.a,{maxWidth:"lg",className:t.root,children:[Object(u.jsx)(o.a,{variant:"h2",children:"Stopwatch"}),Object(u.jsxs)(S.a,{className:t.box,elevation:3,children:[Object(u.jsx)(j,{time:i}),Object(u.jsx)(T,{startTime:function(t){h||(x(!0),m(!1),f.startTime(t))},stopTime:function(t){f.stopTime(t),m(!0),x(!1),f.clearTime(t)},resetTime:function(t){m(!1),x(!0),f.clearTime(t),f.startTime(t)},doubleClickWait:function(t){C(w+1),w>=1&&w<=2&&(f.stopTime(t),m(!0),x(!1)),setTimeout((function(){return C(0)}),300)},isPaused:b,isActive:h})]})]})},w=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(g,{})})};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.cf36bd8a.chunk.js.map