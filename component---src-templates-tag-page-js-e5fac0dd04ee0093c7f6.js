(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{DNPW:function(e,t,a){"use strict";var n=a("9Hrx"),r=a("q1tI"),l=a.n(r),o=a("Wbzz"),s=a("NysD");r.Component,r.Component},Kgxr:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return p}));var n=a("9Hrx"),r=a("q1tI"),l=a.n(r),o=a("Bl7J"),s=a("vrFN"),i=(a("DNPW"),a("LF+6")),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=this.props.pageContext.tag,a=this.props.data.allMarkdownRemark.edges.filter((function(e){return!!e.node.frontmatter.date})).map((function(e){return l.a.createElement(i.a,{key:e.node.id,post:e.node})})),n=this.props.data.site.siteMetadata.title;return l.a.createElement(o.a,{location:this.props.location,title:n},l.a.createElement(s.a,{title:"#"+(t.charAt(0).toUpperCase()+t.slice(1)),keywords:[""+t,"blog","gatsby","javascript","react"]}),l.a.createElement("article",{className:"post-content-blog page-template no-image"},l.a.createElement("header",{className:"tag-page-head"},l.a.createElement("h1",{className:"page-head-title"},"#",t,"(",e.data.allMarkdownRemark.totalCount,")")),l.a.createElement("div",{className:"grids-blog"},a)))},t}(l.a.Component);t.default=c;var p="19194963"},"LF+6":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("9eSz"),s=a.n(o),i=a("NysD");t.a=function(e){var t=e.post;return r.a.createElement("article",{className:"post-link"},r.a.createElement(l.a,{to:t.fields.slug},!!t.frontmatter.thumbnail&&r.a.createElement(s.a,{fluid:t.frontmatter.thumbnail.childImageSharp.fluid,alt:t.frontmatter.title,className:"post-link-image"})),r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement(i.a,{tags:t.frontmatter.tags})),r.a.createElement("h2",{className:"post-link-title"},r.a.createElement(l.a,{to:t.fields.slug,className:"post-link-blog"},t.frontmatter.title)),r.a.createElement("div",{className:"post-link-meta"},t.frontmatter.date)))}},NysD:function(e,t,a){"use strict";var n=a("9Hrx"),r=a("q1tI"),l=a.n(r),o=a("LvDl"),s=a.n(o),i=a("Wbzz"),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.tags;return l.a.createElement("div",{className:"post-card-tags"},e&&e.map((function(e){return l.a.createElement("span",{key:e},l.a.createElement(i.a,{className:"post-card-tag-link",key:e,to:"/tags/"+s.a.kebabCase(e)},"#",e)," ")})))},t}(r.Component);t.a=c},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}}]);
//# sourceMappingURL=component---src-templates-tag-page-js-e5fac0dd04ee0093c7f6.js.map