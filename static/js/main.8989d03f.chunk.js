(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s,r=n(3),a=n.n(r),o=n(6),i=n(4),c=n(5),l=n(8),u=n(7),h=n(1),b=n.n(h),p=(n(13),n(0)),g=function(t){var e=t.goods;return Object(p.jsx)("ul",{children:e.map((function(t){return Object(p.jsx)("li",{children:t},t)}))})},j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.Alphabetically="Alphabetically",t.Length="Length",t.Default="Default"}(s||(s={}));var d=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={buttonStatus:!0,isReversed:!1,sortBy:s.Default,goods:j,lengthLimit:1},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortAlph=function(){t.setState({sortBy:s.Alphabetically})},t.sortLength=function(){t.setState({sortBy:s.Length})},t.reset=function(){t.setState({sortBy:s.Default})},t.limit=function(e){t.setState({lengthLimit:e.target.value})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.buttonStatus,r=e.isReversed,a=e.sortBy,i=e.lengthLimit,c=e.goods,l=Object(o.a)(c).sort((function(t,e){switch(a){case s.Alphabetically:return t.localeCompare(e);case s.Length:return t.length-e.length;default:return 0}}));return r&&l.reverse(),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Goods"}),!0===n&&Object(p.jsx)("button",{className:"button start",type:"button",id:"start",onClick:function(){t.setState({buttonStatus:!1})},children:"Start"}),!n&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{type:"button",className:"button reverse",onClick:this.reverse,children:"Reverse"}),Object(p.jsx)("button",{type:"button",className:"button sort_alph",onClick:this.sortAlph,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:"button sort_length",onClick:this.sortLength,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:"button reset",onClick:this.reset,children:"Reset"}),Object(p.jsx)("input",{className:"input_length",id:"input_length",type:"number",value:this.state.lengthLimit,min:"1",max:"10",onChange:this.limit})]}),!n&&Object(p.jsx)(g,{goods:l.filter((function(t){return t.length>=i}))})]})}}]),n}(b.a.Component),f=d;a.a.render(Object(p.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8989d03f.chunk.js.map