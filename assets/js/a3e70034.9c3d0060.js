"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9378],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(r),f=o,d=l["".concat(p,".").concat(f)]||l[f]||y[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="Project setup",c={unversionedId:"basic-concepts/project-setup",id:"basic-concepts/project-setup",title:"Project setup",description:"You have learned how to create a very basic bot in the Quick start guide. In this page we will discuss",source:"@site/docs/basic-concepts/project-setup.md",sourceDirName:"basic-concepts",slug:"/basic-concepts/project-setup",permalink:"/Switch-Bots-Python-Library/docs/basic-concepts/project-setup",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basic Concepts",permalink:"/Switch-Bots-Python-Library/docs/category/basic-concepts"},next:{title:"Calling the API methods",permalink:"/Switch-Bots-Python-Library/docs/basic-concepts/calling-api"}},p={},s=[],u={toc:s};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"project-setup"},"Project setup"),(0,o.kt)("p",null,"You have learned how to create a very ",(0,o.kt)("a",{parentName:"p",href:"../intro"},"basic bot")," in the Quick start guide. In this page we will discuss\nhow to configure the project to properly create your bots"),(0,o.kt)("h1",{id:"auth-key"},"Auth Key"),(0,o.kt)("p",null,"You will need an AuthKey to use SwiBots, you can obtain your key on the Switch app"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Never share your AuthKey or commit it to any source code versioning system!")),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Having the API key from the previous step, we can now begin to configure a SwiBots project: pass your API key to SwiBots by using the token parameter of the BotApp class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from swibots import BotApp\n\nTOKEN = "MY SUPER SECRET TOKEN"\n\n# initialize the app\napp = BotApp(\n    TOKEN\n)\n')))}l.isMDXComponent=!0}}]);