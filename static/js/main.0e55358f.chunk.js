(this["webpackJsonpeditable-reactapp"]=this["webpackJsonpeditable-reactapp"]||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(6),i=c.n(r),s=(c(12),c(5)),p=c.n(s),o=c(7),u=c(3),l=c(2),j=c.n(l),b=c(0),m=function(e){var t=e.title,c=e.calories,a=e.image,n=e.ingredients;return Object(b.jsxs)("div",{className:j.a.recipe,children:[Object(b.jsx)("div",{className:j.a.imageWrapper,children:Object(b.jsx)("img",{src:a,alt:"",className:j.a.image})}),Object(b.jsx)("h1",{children:t}),Object(b.jsx)("ol",{children:n.map((function(e){return Object(b.jsx)("li",{children:e.text})}))}),Object(b.jsxs)("p",{children:["Calories: ",c]})]})},d=(c(15),function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),s=i[0],l=i[1],j=Object(a.useState)("chicken"),d=Object(u.a)(j,2),f=d[0],h=d[1];Object(a.useEffect)((function(){O()}),[f]);var O=function(){var e=Object(o.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(f,"&app_id=").concat("8813f94d","&app_key=").concat("1214113f49293b2a6aa0ec15e7c86f99"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c.hits),console.log(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),h(s)},children:[Object(b.jsx)("input",{className:"search-bar",type:"text",value:s,onChange:function(e){l(e.target.value)}}),Object(b.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(b.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(b.jsx)(m,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})}),f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root")),f()},2:function(e,t,c){e.exports={recipe:"recipe_recipe__P9jKH",imageWrapper:"recipe_imageWrapper__1pxef",image:"recipe_image__1bEGF"}}},[[16,1,2]]]);
//# sourceMappingURL=main.0e55358f.chunk.js.map