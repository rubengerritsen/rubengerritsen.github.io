(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+7fW":function(t,e,n){},MFQc:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return j})),n.d(e,"pageQuery",(function(){return O}));var r=n("wx14"),l=n("KQm4"),i=n("dI71"),o=n("q1tI"),s=n.n(o);var a=n("Wbzz"),c=n("QwNe"),u=n.n(c),b=n("qKvR"),d=function(t){var e=t.to,n=function(t,e){if(null==t)return{};var n,r,l={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,["to"]);return u()(e)?Object(b.b)("a",Object(r.a)({href:e},n),n.children):Object(b.b)(a.Link,Object(r.a)({to:e},n))},p=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.render=function(){var t,e=this.props,n=e.markdownRemark,r=e.nav;r.forEach((function(e,r){e&&e.url===n.fields.slug&&(t=r)}));var l={},i={};return void 0===t?(r[0]&&(l.url=r[0].url,l.title=r[0].title),i.url=null,i.title=null,t=-1):0===t?(l.url=r[t+1]?r[t+1].url:null,l.title=r[t+1]?r[t+1].title:null,i.url=null,i.title=null):t===r.length-1?(l.url=null,l.title=null,i.url=r[t-1]?r[t-1].url:null,i.title=r[t-1]?r[t-1].title:null):t&&(l.url=r[t+1].url,l.title=r[t+1].title,r[t-1]&&(i.url=r[t-1].url,i.title=r[t-1].title)),Object(b.b)("div",{className:"nextPreviousWrapper"},i.url&&t>=0?Object(b.b)(d,{to:r[t-1].url,className:"previousBtn"},Object(b.b)("div",{className:"leftArrow"},Object(b.b)("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"_13gjrqj"},Object(b.b)("g",null,Object(b.b)("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),Object(b.b)("polyline",{points:"12 19 5 12 12 5"})))),Object(b.b)("div",{className:"preRightWrapper"},Object(b.b)("div",{className:"smallContent"},Object(b.b)("span",null,"Previous")),Object(b.b)("div",{className:"nextPreviousTitle"},Object(b.b)("span",null,r[t-1].title)))):null,l.url&&t>=0?Object(b.b)(d,{to:r[t+1].url,className:"nextBtn"},Object(b.b)("div",{className:"nextRightWrapper"},Object(b.b)("div",{className:"smallContent"},Object(b.b)("span",null,"Next")),Object(b.b)("div",{className:"nextPreviousTitle"},Object(b.b)("span",null,r[t+1]&&r[t+1].title))),Object(b.b)("div",{className:"rightArrow"},Object(b.b)("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"_13gjrqj"},Object(b.b)("g",null,Object(b.b)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),Object(b.b)("polyline",{points:"12 5 19 12 12 19"}))))):null)},e}(s.a.Component),m=n("EYWl"),f=n("WBjW"),j=(n("+7fW"),n("wvC7"),function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.render=function(){var t=this.props.data;if(!t)return null;var e=t.allMarkdownRemark,n=e.edges.map((function(t){return t.node.fields.slug})).filter((function(t){return"/"!==t})).sort().reduce((function(t,e){return Object.assign({},t,{items:[].concat(Object(l.a)(t.items),[e])})}),{items:[]}),i=[].reduce((function(t,e){return t.concat(n[e])}),[]).concat(n.items).map((function(t){if(t){var n=e.edges.find((function(e){return e.node.fields.slug===t})).node;return{title:n.frontmatter.title,url:n.fields.slug}}return{}})),o=this.props.data.markdownRemark;if(o.frontmatter.thumbnail.childImageSharp)o.frontmatter.thumbnail.childImageSharp.fluid.src;return Object(b.b)(f.a,Object(r.a)({tableOfContents:o.tableOfContents,url:o.fields.slug},this.props),Object(b.b)(m.a,{title:o.frontmatter.title,keywords:o.frontmatter.tags,description:o.frontmatter.description,meta:metaTags,slug:o.fields.slug}),Object(b.b)("article",{className:"post-content no-image"},Object(b.b)("div",{className:"visibleMobile"},"‹",Object(b.b)(a.Link,{to:"/docs"}," table of contents")," "),Object(b.b)("h1",{className:"post-title-docs"},o.frontmatter.title),Object(b.b)("hr-title",null),Object(b.b)("div",{className:"post-content-body",dangerouslySetInnerHTML:{__html:o.html}}),Object(b.b)("div",{className:"addPaddTopBottom"},Object(b.b)(p,{markdownRemark:this.props.data.markdownRemark,nav:i}))))},e}(o.Component)),O="3908487196"},QwNe:function(t,e,n){"use strict";t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected a `string`, got `".concat(typeof t,"`"));return!/^[a-zA-Z]:\\/.test(t)&&/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(t)}}}]);
//# sourceMappingURL=component---src-templates-doc-post-js-427dab29e6184f511f84.js.map