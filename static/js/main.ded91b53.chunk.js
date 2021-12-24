(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(8),a=n.n(c),s=(n(14),n(9)),i=n(2),l=n(1),r=(n(15),n(0));var o=function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})};n(17),n(18),n(19);var j=function(e){var t=e.date,n=t.getFullYear(),c=t.toLocaleString("en-US",{month:"long"}),a=t.toLocaleString("en-US",{day:"2-digit"});return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:c}),Object(r.jsx)("div",{className:"expense-date__year",children:n}),Object(r.jsx)("div",{className:"expense-date__day",children:a})]})};var d=function(e){var t=Object(l.useState)(e.title),n=Object(i.a)(t,2),c=n[0],a=n[1];return console.log("ExpenseItem evaluated by React"),Object(r.jsxs)(o,{className:"expense-item",children:[Object(r.jsx)(j,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]}),Object(r.jsx)("button",{onClick:function(){a("Test title"),console.log(c)},children:"Update Title"})]})},u=(n(20),function(e){var t=e.onChangeFilter,n=e.selected;return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{value:n,onChange:function(e){t(e.target.value)},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})});var b=function(e){var t=e.items,n=Object(l.useState)("2020"),c=Object(i.a)(n,2),a=c[0],s=c[1];return Object(r.jsx)("div",{children:Object(r.jsxs)(o,{className:"expenses",children:[Object(r.jsx)(u,{selected:a,onChangeFilter:function(e){s(e)}}),t.map((function(e){return Object(r.jsx)(d,{title:e.title,amount:e.amount,date:e.date})}))]})})},x=n(6);n(7),n(21);var O=function(e){var t=e.onSaveExpenseData,n=Object(l.useState)(""),c=Object(i.a)(n,2),a=c[0],s=c[1],o=Object(l.useState)(""),j=Object(i.a)(o,2),d=j[0],u=j[1],b=Object(l.useState)(""),x=Object(i.a)(b,2),O=x[0],v=x[1];return Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={title:a,amount:d,date:new Date(O)};t(n),s(""),u(""),v("")},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:a,onChange:function(e){s(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:d,onChange:function(e){u(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:O,onChange:function(e){v(e.target.value)}})]})]}),Object(r.jsx)("div",{className:"new-expense__actions",children:Object(r.jsx)("button",{type:"submit",children:"Add Expense"})})]})};var v=function(e){var t=e.onAddExpense;return Object(r.jsx)("div",{className:"new-expense",children:Object(r.jsx)(O,{onSaveExpenseData:function(e){var n=Object(x.a)(Object(x.a)({},e),{},{id:Math.random().toString()});console.log(n),t(n)}})})},m=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var p=function(){var e=Object(l.useState)(m),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(v,{onAddExpense:function(e){c((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(r.jsx)(b,{items:n})]})};a.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.ded91b53.chunk.js.map