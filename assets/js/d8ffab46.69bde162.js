"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5401],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=i,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8761:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={},o="Group",l={unversionedId:"api_reference/types/group",id:"api_reference/types/group",title:"Group",description:"Class pybots.api.community.models.Group",source:"@site/docs/api_reference/types/group.md",sourceDirName:"api_reference/types",slug:"/api_reference/types/group",permalink:"/Switch-Bots-Python-Library/docs/api_reference/types/group",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Types - Functions",permalink:"/Switch-Bots-Python-Library/docs/api_reference/types/functions"},next:{title:"InlineKeyboardButton",permalink:"/Switch-Bots-Python-Library/docs/api_reference/types/inline_keyboard_button"}},p={},u=[{value:"Properties",id:"properties",level:2}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"group"},"Group"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Class pybots.api.community.models.Group")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Group")," class represents a group."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," (",(0,i.kt)("inlineCode",{parentName:"li"},"str"),"): The group's id."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," (",(0,i.kt)("inlineCode",{parentName:"li"},"str"),"): The group's name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"community_id")," (",(0,i.kt)("inlineCode",{parentName:"li"},"str"),"): The group's community id."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled_free")," (",(0,i.kt)("inlineCode",{parentName:"li"},"bool"),"): Whether the group is enabled for free users."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled_public")," (",(0,i.kt)("inlineCode",{parentName:"li"},"bool"),"): Whether the group is enabled for public users."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default_group")," (",(0,i.kt)("inlineCode",{parentName:"li"},"bool"),"): Whether the group is the default group."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_public")," (",(0,i.kt)("inlineCode",{parentName:"li"},"bool"),"): Whether the group is public."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"created_by")," (",(0,i.kt)("inlineCode",{parentName:"li"},"str"),"): The group's creator's id."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"icon")," (",(0,i.kt)("inlineCode",{parentName:"li"},"str"),"): The group's icon."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"group_logo_url")," (",(0,i.kt)("inlineCode",{parentName:"li"},"str"),"): The group's logo url."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"allowed_content")," (",(0,i.kt)("inlineCode",{parentName:"li"},"str"),"): The group's allowed content."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"created_at")," (",(0,i.kt)("inlineCode",{parentName:"li"},"str"),"): The group's creation date."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updated_at")," (",(0,i.kt)("inlineCode",{parentName:"li"},"str"),"): The group's last update date.")))}c.isMDXComponent=!0}}]);