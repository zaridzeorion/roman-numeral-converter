(this["webpackJsonproman-numeral-converter"]=this["webpackJsonproman-numeral-converter"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n(4),i=n.n(a),s=(n(10),n(2));n(11);var o=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),o=Object(s.a)(i,2),u=o[0],j=o[1],l=Object(c.useState)(!1),b=Object(s.a)(l,2),O=b[0],d=b[1];return Object(r.jsxs)("div",{id:"App",children:[Object(r.jsx)("h1",{id:"title",children:"Roman-Numeral Converter"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{children:"Enter Roman Numeral:"}),Object(r.jsx)("input",{type:"text",className:"input",onChange:function(e){a(e.target.value)},value:n}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(e){var t;!0===/^[0-9]*$/.test(n)?(t=function(e){var t={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},n="";for(var r in t)for(;e>=t[r];)n+=r,e-=t[r];return n}(n),j(t)):j(t="Please use only numbers.")},children:"Convert"}),Object(r.jsx)("br",{}),Object(r.jsx)("h3",{children:"Result:"}),Object(r.jsx)("input",{onClick:function(){navigator.clipboard.writeText(u),d(!0),setTimeout((function(){d(!1)}),1e3)},style:{textAlign:"center"},id:"result",className:"input",value:u}),Object(r.jsx)("br",{}),O?Object(r.jsx)("h5",{children:"Copied to clipboard!"}):null]})};i.a.render(Object(r.jsx)(o,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.fd37afdf.chunk.js.map