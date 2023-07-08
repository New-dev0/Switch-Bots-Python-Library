"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6516],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,f=p["".concat(s,".").concat(d)]||p[d]||y[d]||a;return n?t.createElement(f,o(o({ref:r},u),{},{components:n})):t.createElement(f,o({ref:r},u))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1262:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=n(7462),i=(n(7294),n(3905));const a={},o="answer_inline_query",l={unversionedId:"api_reference/methods/answer_inline_query",id:"api_reference/methods/answer_inline_query",title:"answer_inline_query",description:"This method sends an answer to an inline query. On success, True is returned.",source:"@site/docs/api_reference/methods/answer_inline_query.md",sourceDirName:"api_reference/methods",slug:"/api_reference/methods/answer_inline_query",permalink:"/Switch-Bots-Python-Library/docs/api_reference/methods/answer_inline_query",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"add_handler",permalink:"/Switch-Bots-Python-Library/docs/api_reference/methods/add_handler"},next:{title:"clear_conversation",permalink:"/Switch-Bots-Python-Library/docs/api_reference/methods/clear_conversatoin"}},s={},c=[{value:"Signature",id:"signature",level:2},{value:"Parameters",id:"parameters",level:2}],u={toc:c};function p(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"answer_inline_query"},"answer_inline_query"),(0,i.kt)("p",null,"This method sends an answer to an inline query. On success, True is returned."),(0,i.kt)("h2",{id:"signature"},"Signature"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"async def answer_inline_query(query: InlineQuery, answer: InlineQueryAnswer) -> bool")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query")," (",(0,i.kt)("a",{parentName:"li",href:"../types/inline/inline_query"},"InlineQuery"),"): The inline query to answer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"answer")," (",(0,i.kt)("a",{parentName:"li",href:"../types/inline/inline_query_answer"},"InlineQueryAnswer"),"): The answer to the inline query")))}p.isMDXComponent=!0}}]);