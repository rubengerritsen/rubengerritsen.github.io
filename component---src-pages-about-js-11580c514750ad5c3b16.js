/*! For license information please see component---src-pages-about-js-11580c514750ad5c3b16.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+Pl2":function(e,t,n){"use strict";t.flow={36:n("LjaY")},t.text={36:n("yLuW")}},"/MS/":function(e,t,n){"use strict";t.unsafe=[{character:"\r",inConstruct:["mathFlowMeta"]},{character:"\r",inConstruct:["mathFlowMeta"]},{character:"$",inConstruct:["mathFlowMeta","phrasing"]},{atBreak:!0,character:"$",after:"\\$"}],t.handlers={math:function(e,t,n){var i,u=e.value||"",c=r("$",Math.max(a(u,"$")+1,2)),s=n.enter("mathFlow"),l=c;e.meta&&(i=n.enter("mathFlowMeta"),l+=o(n,e.meta,{before:"$",after:" ",encode:["$"]}),i());l+="\n",u&&(l+=u+"\n");return l+=c,s(),l},inlineMath:i},i.peek=function(){return"$"};var r=n("RjOF"),a=n("LByj"),o=n("F4YK");function i(e){for(var t,n=e.value||"",a=1,o="";new RegExp("(^|[^$])"+r("\\$",a)+"([^$]|$)").test(n);)a++;return/[^ \r\n]/.test(n)&&(/[ \r\n$]/.test(n.charAt(0))||/[ \r\n$]/.test(n.charAt(n.length-1)))&&(o=" "),(t=r("$",a))+o+n+o+t}},"2N74":function(e,t){e.exports=function(e){return-2===e||-1===e||32===e}},"3XHS":function(e,t,n){"use strict";n.r(t);var r=n("wx14"),a=(n("q1tI"),n("Wbzz")),o=n("izOk"),i=(n("dmNn"),n("uE/A"),n("wvC7"),n("qKvR")),u=function(e,t){var n=e.data.site.siteMetadata.title;return Object(i.b)(o.a,{title:n},Object(i.b)("article",{className:"post-content no-image"},Object(i.b)("h1",{className:"centerText"},"About"),Object(i.b)("hr-title",null),Object(i.b)("div",{className:"centerText"},"  Hi, I am a Ruben Gerritsen, a PhD student at the Eindhoven University of Technology. I work in the field of computational chemistry. To contact me send an email to r.h.j.gerritsen(at)tue.nl")))};t.default=function(e){return Object(i.b)(a.StaticQuery,{query:"3905657337",render:function(t){return Object(i.b)(u,Object(r.a)({location:e.location,data:t},e))}})}},"7Osq":function(e,t,n){"use strict";function r(e){this.config.enter.data.call(this,e),this.config.exit.data.call(this,e)}t.enter={mathFlow:function(e){this.enter({type:"math",meta:null,value:"",data:{hName:"div",hProperties:{className:["math","math-display"]},hChildren:[{type:"text",value:""}]}},e)},mathFlowFenceMeta:function(){this.buffer()},mathText:function(e){this.enter({type:"inlineMath",value:"",data:{hName:"span",hProperties:{className:["math","math-inline"]},hChildren:[{type:"text",value:""}]}},e),this.buffer()}},t.exit={mathFlow:function(e){var t=this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),n=this.exit(e);n.value=t,n.data.hChildren[0].value=t,this.setData("mathFlowInside")},mathFlowFence:function(){if(this.getData("mathFlowInside"))return;this.buffer(),this.setData("mathFlowInside",!0)},mathFlowFenceMeta:function(){var e=this.resume();this.stack[this.stack.length-1].meta=e},mathFlowValue:r,mathText:function(e){var t=this.resume(),n=this.exit(e);n.value=t,n.data.hChildren[0].value=t},mathTextData:r}},F4YK:function(e,t){function n(e,t,n){var r;if(!t)return n;for("string"==typeof t&&(t=[t]),r=-1;++r<t.length;)if(-1!==e.indexOf(t[r]))return!0;return!1}function r(e){var t=e.before?"(?:"+e.before+")":"",n=e.after?"(?:"+e.after+")":"";return e.atBreak&&(t="[\\r\\n][\\t ]*"+t),new RegExp((t?"("+t+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(e.character)?"\\":"")+e.character+(n||""),"g")}function a(e,t){return e-t}e.exports=function(e,t,o){var i,u,c,s,l,f,h,p,d=(o.before||"")+(t||"")+(o.after||""),m=[],v=[],b={},y=-1;for(;++y<e.unsafePatterns.length;)if(s=e.unsafePatterns[y],n(e.stack,s.inConstruct,!0)&&!n(e.stack,s.notInConstruct))for(l=s._compiled||(s._compiled=r(s));f=l.exec(d);)i="before"in s||s.atBreak,u="after"in s,c=f.index+(i?f[1].length:0),-1===m.indexOf(c)?(m.push(c),b[c]={before:i,after:u}):(b[c].before&&!i&&(b[c].before=!1),b[c].after&&!u&&(b[c].after=!1));m.sort(a),h=o.before?o.before.length:0,p=d.length-(o.after?o.after.length:0),y=-1;for(;++y<m.length;)(c=m[y])<h||c>=p||c+1<p&&m[y+1]===c+1&&b[c].after&&!b[c+1].before&&!b[c+1].after||(h!==c&&v.push(d.slice(h,c)),h=c,!/[!-/:-@[-`{-~]/.test(d.charAt(c))||o.encode&&-1!==o.encode.indexOf(d.charAt(c))?(v.push("&#x"+d.charCodeAt(c).toString(16).toUpperCase()+";"),h++):v.push("\\"));return v.push(d.slice(h,p)),v.join("")}},LByj:function(e,t,n){"use strict";e.exports=function(e,t){var n,r,a=0,o=0;if("string"!=typeof t||1!==t.length)throw new Error("Expected character");e=String(e),r=e.indexOf(t),n=r;for(;-1!==r;)a++,r===n?a>o&&(o=a):a=1,n=r+1,r=e.indexOf(t,n);return o}},LjaY:function(e,t,n){"use strict";t.tokenize=function(e,t,n){var o=this,i=r(this.events,"linePrefix"),u=0;return function(t){if(36!==t)throw new Error("expected `$`");return e.enter("mathFlow"),e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),c(t)};function c(t){return 36===t?(e.consume(t),u++,c):(e.exit("mathFlowFenceSequence"),u<2?n(t):a(e,s,"whitespace")(t))}function s(t){return null===t||-5===t||-4===t||-3===t?f(t):(e.enter("mathFlowFenceMeta"),e.enter("chunkString",{contentType:"string"}),l(t))}function l(t){return null===t||-5===t||-4===t||-3===t?(e.exit("chunkString"),e.exit("mathFlowFenceMeta"),f(t)):36===t?n(t):(e.consume(t),l)}function f(n){return e.exit("mathFlowFence"),o.interrupt?t(n):h(n)}function h(t){return null===t?d(t):-5===t||-4===t||-3===t?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),e.attempt({tokenize:m,partial:!0},d,i?a(e,h,"linePrefix",i+1):h)):(e.enter("mathFlowValue"),p(t))}function p(t){return null===t||-5===t||-4===t||-3===t?(e.exit("mathFlowValue"),h(t)):(e.consume(t),p)}function d(n){return e.exit("mathFlow"),t(n)}function m(e,t,n){var r=0;return a(e,(function(t){return e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),o(t)}),"linePrefix",4);function o(t){return 36===t?(e.consume(t),r++,o):r<u?n(t):(e.exit("mathFlowFenceSequence"),a(e,i,"whitespace")(t))}function i(r){return null===r||-5===r||-4===r||-3===r?(e.exit("mathFlowFence"),t(r)):n(r)}}},t.concrete=!0;var r=n("O+c1"),a=n("yRGd")},MuZe:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,a){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof t&&(a=t,t={}),t=t||{},a=a||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?n:r)(i,a),i.onload||n(i,a),o.appendChild(i)}},"O+c1":function(e,t,n){e.exports=function(e,t){var n=e[e.length-1];return n&&n[1].type===t?r(n[2].sliceStream(n[1])):0};var r=n("jeK3")},Oo7u:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("q1tI")),i=c(n("PaZs")),u=c(n("yeRp"));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=function(e){function t(){var e,n,r;s(this,t);for(var a=arguments.length,i=Array(a),u=0;u<a;u++)i[u]=arguments[u];return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.container=o.createRef(),l(r,n)}return f(t,e),a(t,[{key:"componentDidMount",value:function(){this.typeset()}},{key:"componentDidUpdate",value:function(e){var t=e.inline!=this.props.inline;this.typeset(t)}},{key:"componentWillUnmount",value:function(){this.clear()}},{key:"clear",value:function(){var e=this.props.MathJax;if(this.script&&e){var t=e.Hub.getJaxFor(this.script);t&&t.Remove()}}},{key:"typeset",value:function(e){var t=this,n=this.props,r=n.MathJax,a=n.formula,o=n.onRender;if(r)if(e&&this.clear(),!e&&this.script)r.Hub.Queue((function(){var e=r.Hub.getJaxFor(t.script);if(e)e.Text(a,o);else{var n=t.setScriptText(a);(0,u.default)(r,n,o)}}));else{var i=this.setScriptText(a);(0,u.default)(r,i,o)}}},{key:"setScriptText",value:function(e){var t=this.props.inline;return this.script||(this.script=document.createElement("script"),this.script.type="math/tex; "+(t?"":"mode=display"),this.container.current.appendChild(this.script)),"text"in this.script?this.script.text=e:this.script.textContent=e,this.script}},{key:"render",value:function(){var e=this.props,t=(e.MathJax,e.formula,e.inline,e.onRender,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["MathJax","formula","inline","onRender"]));return this.props.inline?o.createElement("span",r({ref:this.container},t)):o.createElement("div",r({ref:this.container},t))}}]),t}(o.Component);h.defaultProps={inline:!1,onRender:function(){}};var p=function(e){function t(){return s(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,e),a(t,[{key:"render",value:function(){var e=this;return o.createElement(i.default.Consumer,null,(function(t){var n=t.MathJax;return(0,t.registerNode)(),n?o.createElement(h,r({},e.props,{MathJax:n})):null}))}}]),t}(o.PureComponent);t.default=p},PaZs:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("q1tI")).createContext({MathJax:null,registerNode:function(){}});t.default=r},RjOF:function(e,t,n){"use strict";var r,a="";e.exports=function(e,t){if("string"!=typeof e)throw new TypeError("expected a string");if(1===t)return e;if(2===t)return e+e;var n=e.length*t;if(r!==e||void 0===r)r=e,a="";else if(a.length>=n)return a.substr(0,n);for(;n>a.length&&t>1;)1&t&&(a+=e),t>>=1,e+=e;return a=(a+=e).substr(0,n)}},Vm6p:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("q1tI")),o=u(n("MuZe")),i=u(n("PaZs"));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.hasNodes=!1,n.loaded=!1,n.registerNode=function(){n.hasNodes=!0},n.load=function(){var e=n.props.script;!n.loaded&&n.hasNodes&&(n.loaded=!0,e?(0,o.default)(e,n.onLoad):n.onLoad(null))},n.onLoad=function(e){var t=n.props.options;MathJax.Hub.Config(t),n.setState({MathJax:MathJax})},n.state={MathJax:null,registerNode:n.registerNode},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.load()}},{key:"componentDidUpdate",value:function(){this.load()}},{key:"render",value:function(){var e=this.props.children;return a.createElement(i.default.Provider,{value:this.state},e)}}]),t}(a.Component);c.defaultProps={script:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML",options:{tex2jax:{inlineMath:[]},showMathMenu:!1,showMathMenuMSIE:!1}},t.default=c},dmNn:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n("Vm6p")),a=o(n("Oo7u"));function o(e){return e&&e.__esModule?e:{default:e}}var i={Provider:r.default,Node:a.default};t.default=i},izOk:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("qKvR");t.a=function(e){var t=e.children,n=a.a.useState(!1),r=n[0],u=n[1];return Object(i.b)("div",{className:"site-wrapper "+(r?"site-head-open":"")},Object(i.b)("header",{className:"site-head"},Object(i.b)("div",{id:"menu",className:"site-head-container"},Object(i.b)("a",{className:"nav-burger",href:"#menu",onClick:function(){return u(!r)}},Object(i.b)("div",{className:"hamburger hamburger--collapse","aria-label":"Menu",role:"button","aria-controls":"navigation"},Object(i.b)("div",{className:"hamburger-box"},Object(i.b)("div",{className:"hamburger-inner"})))),Object(i.b)("nav",{id:"swup",className:"site-head-right"},Object(i.b)("ul",{className:"nav"},Object(i.b)("li",{className:"nav-home nav-current"},Object(i.b)(o.Link,{to:"/"},"Home")),Object(i.b)("li",{className:"nav-tags"},Object(i.b)(o.Link,{to:"/docs"},"Docs")),Object(i.b)("li",{className:"nav-about"},Object(i.b)(o.Link,{to:"/about"},"About")))))),t)}},jeK3:function(e,t){e.exports=function(e){var t=-1,n=0;for(;++t<e.length;)n+="string"==typeof e[t]?e[t].length:1;return n}},"uE/A":function(e,t,n){"use strict";var r,a=n("ypHn"),o=n("7Osq"),i=n("/MS/");e.exports=function(){var e=this.data();!r&&(this.Parser&&this.Parser.prototype&&this.Parser.prototype.blockTokenizers||this.Compiler&&this.Compiler.prototype&&this.Compiler.prototype.visitors)&&(r=!0,console.warn("[remark-math] Warning: please upgrade to remark 13 to use this plugin"));function t(t,n){e[t]?e[t].push(n):e[t]=[n]}t("micromarkExtensions",a),t("fromMarkdownExtensions",o),t("toMarkdownExtensions",i)}},wvC7:function(e,t,n){},yLuW:function(e,t,n){"use strict";function r(e){return 36!==e||"characterEscape"===this.events[this.events.length-1][1].type}t.tokenize=function(e,t,n){var a,o,i=this,u=0;return function(t){if(36!==t)throw new Error("expected `$`");if(!r.call(i,i.previous))throw new Error("expected correct previous");return e.enter("mathText"),e.enter("mathTextSequence"),c(t)};function c(t){return 36===t?(e.consume(t),u++,c):(e.exit("mathTextSequence"),s(t))}function s(t){return null===t?n(t):36===t?(o=e.enter("mathTextSequence"),a=0,f(t)):32===t?(e.enter("space"),e.consume(t),e.exit("space"),s):-5===t||-4===t||-3===t?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),s):(e.enter("mathTextData"),l(t))}function l(t){return null===t||32===t||36===t||-5===t||-4===t||-3===t?(e.exit("mathTextData"),s(t)):(e.consume(t),l)}function f(n){return 36===n?(e.consume(n),a++,f):a===u?(e.exit("mathTextSequence"),e.exit("mathText"),t(n)):(o.type="mathTextData",l(n))}},t.resolve=function(e){var t,n,r=e.length-4,a=3;if(!("lineEnding"!==e[a][1].type&&"space"!==e[a][1].type||"lineEnding"!==e[r][1].type&&"space"!==e[r][1].type))for(t=a;++t<r;)if("mathTextData"===e[t][1].type){e[r][1].type="mathTextPadding",e[a][1].type="mathTextPadding",a+=2,r-=2;break}t=a-1,r++;for(;++t<=r;)void 0===n?t!==r&&"lineEnding"!==e[t][1].type&&(n=t):t!==r&&"lineEnding"!==e[t][1].type||(e[n][1].type="mathTextData",t!==n+2&&(e[n][1].end=e[t-1][1].end,e.splice(n+2,t-n-2),r-=t-n-2,t=n+2),n=void 0);return e},t.previous=r},yRGd:function(e,t,n){e.exports=function(e,t,n,a){var o,i=a?a-1:1/0;return function(a){if(r(a))return e.enter(n),o=0,u(a);return t(a)};function u(a){return r(a)&&o++<i?(e.consume(a),u):(e.exit(n),t(a))}};var r=n("2N74")},yeRp:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=[],a=[],o=!1;t.default=function(e,t,n){r.push(t),a.push(n),o||(o=!0,setTimeout((function(){return function(e){e.Hub.Queue((function(){var t=e.Hub.elementScripts;e.Hub.elementScripts=function(e){return r};try{return e.Hub.Process(null,(function(){a.forEach((function(e){e()})),r=[],a=[],o=!1}))}catch(n){throw n}finally{e.Hub.elementScripts=t}}))}(e)}),0))}},ypHn:function(e,t,n){e.exports=n("+Pl2")}}]);
//# sourceMappingURL=component---src-pages-about-js-11580c514750ad5c3b16.js.map