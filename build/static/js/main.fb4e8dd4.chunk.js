(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),s=n(6),a=n.n(s),o=(n(11),n(2)),i=n(5),u=(n(4),n(0));function b(t){var e=r.a.useState(),n=Object(o.a)(e,2),s=n[0],a=n[1];Object(c.useEffect)((function(){var t=[b,i];t.sort((function(){return Math.random()-.5})),a(t)}),[]);var i=t.incorrect_answers.map((function(t){return Object(u.jsx)("button",{id:"inc_answ",className:"btns",onClick:function(t){console.log(t.target),t.target.classList.add("rred"),t.target.disabled=!0},children:atob(t)})})),b=Object(u.jsx)("button",{id:"cor_answ",className:"btns",onClick:function(t){t.target.classList.add("bblue"),t.target.disabled=!0},children:atob(t.correct_answer)});return Object(u.jsx)("section",{children:Object(u.jsxs)("div",{className:"uber--container",children:[Object(u.jsx)("p",{children:atob(t.question)}),Object(u.jsx)("div",{className:"btn-container",children:s})]})})}function l(t){return Object(u.jsxs)("div",{className:"firstpage-container uber--container",children:[Object(u.jsx)("h1",{children:"Test your knowledge! \ud83d\udcd2"}),Object(u.jsx)("button",{onClick:t.toggleFirstPage,children:"Start"})]})}var d=function(){var t=r.a.useState([]),e=Object(o.a)(t,2),n=e[0],s=e[1],a=r.a.useState(!1),d=Object(o.a)(a,2),j=d[0],h=d[1],p=r.a.useState(5);Object(o.a)(p,1)[0],Object(c.useEffect)((function(){fetch("https://opentdb.com/api.php?amount=10&category=15&type=multiple&encode=base64").then((function(t){return t.json()})).then((function(t){return s(t.results)}))}),[]),console.log(n);var O=n.map((function(t){return Object(u.jsx)(b,{question:t.question,correct_answer:t.correct_answer,incorrect_answers:t.incorrect_answers,lgn:n.length},Object(i.a)())}));return Object(u.jsxs)("div",{className:"App",children:[0==j?Object(u.jsx)(l,{toggleFirstPage:function(){h((function(t){return!t}))}}):null,j&&Object(u.jsx)("h1",{children:"Test your GAMING\ud83c\udfb2 knowledge!"}),j&&Object(u.jsxs)("h2",{children:["data provided by API - ",Object(u.jsx)("a",{href:"https://opentdb.com/",children:"OpentDB"}),"  "]}),j&&O]})};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root"))},4:function(t,e,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.fb4e8dd4.chunk.js.map