(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(9),c=n.n(a),l=(n(15),n(5)),s=n(2),i=n(1),r=(n(16),n(0));var u=function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})},j=(n(18),n(19),function(e){var t=e.onChangeFilter,n=e.selected;return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{value:n,onChange:function(e){t(e.target.value)},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})});n(20),n(21),n(22);var o=function(e){var t=e.date,n=t.getFullYear(),a=t.toLocaleString("en-US",{month:"long"}),c=t.toLocaleString("en-US",{day:"2-digit"});return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:a}),Object(r.jsx)("div",{className:"expense-date__year",children:n}),Object(r.jsx)("div",{className:"expense-date__day",children:c})]})};var d=function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)(u,{className:"expense-item",children:[Object(r.jsx)(o,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},b=function(e){var t=e.items;return 0===t.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"Found no Expenses."}):Object(r.jsx)("ul",{className:"expenses-list",children:t.map((function(e){return Object(r.jsx)(d,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},x=n(10);n(23);var v=function(e){var t=e.value,n=e.maxValue,a=e.label,c="0%";return n>0&&(c=Math.round(t/n*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:c}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:a})]})};n(24);var O=function(e){var t=e.dataPoints,n=t.map((function(e){return e.value})),a=Math.max.apply(Math,Object(l.a)(n));return Object(r.jsx)("div",{className:"chart",children:t.map((function(e){return Object(r.jsx)(v,{value:e.value,maxValue:a,label:e.label},e.label)}))})};var h=function(e){var t,n=e.expenses,a=[{label:"Jan",value:0},{label:"Fev",value:0},{label:"Mar",value:0},{label:"Avr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],c=Object(x.a)(n);try{for(c.s();!(t=c.n()).done;){var l=t.value;a[l.date.getMonth()].value+=l.amount}}catch(s){c.e(s)}finally{c.f()}return Object(r.jsx)(O,{dataPoints:a})};var m=function(e){var t=e.items,n=Object(i.useState)("2020"),a=Object(s.a)(n,2),c=a[0],l=a[1],o=t.filter((function(e){return e.date.getFullYear().toString()===c}));return console.log(o),Object(r.jsx)("div",{children:Object(r.jsxs)(u,{className:"expenses",children:[Object(r.jsx)(j,{selected:c,onChangeFilter:function(e){l(e)}}),Object(r.jsx)(h,{expenses:o}),Object(r.jsx)(b,{items:o})]})})},p=n(7);n(8),n(25);var f=function(e){var t=e.onSaveExpenseData,n=e.onCancel,a=Object(i.useState)(""),c=Object(s.a)(a,2),l=c[0],u=c[1],j=Object(i.useState)(""),o=Object(s.a)(j,2),d=o[0],b=o[1],x=Object(i.useState)(""),v=Object(s.a)(x,2),O=v[0],h=v[1];return Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={title:l,amount:d,date:new Date(O)};t(n),u(""),b(""),h("")},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:l,onChange:function(e){u(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:d,onChange:function(e){b(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:O,onChange:function(e){h(e.target.value)}})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{type:"button",onClick:n,children:"Cancel"}),Object(r.jsx)("button",{type:"submit",children:"Add Expense"})]})]})};var _=function(e){var t=e.onAddExpense,n=Object(i.useState)(!1),a=Object(s.a)(n,2),c=a[0],l=a[1];return Object(r.jsxs)("div",{className:"new-expense",children:[!c&&Object(r.jsx)("button",{onClick:function(){l(!0)},children:"Add New Expense"}),c&&Object(r.jsx)(f,{onSaveExpenseData:function(e){var n=Object(p.a)(Object(p.a)({},e),{},{id:Math.random().toString()});console.log(n),t(n)},onCancel:function(){l(!1)}})]})},N=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var g=function(){var e=Object(i.useState)(N),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(_,{onAddExpense:function(e){a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(r.jsx)(m,{items:n})]})};c.a.render(Object(r.jsx)(g,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.f5bdcb25.chunk.js.map