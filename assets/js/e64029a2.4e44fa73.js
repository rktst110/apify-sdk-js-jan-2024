"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"session-options",title:"SessionOptions"},l=void 0,p={unversionedId:"typedefs/session-options",id:"version-2.3/typedefs/session-options",title:"SessionOptions",description:"Properties",source:"@site/versioned_docs/version-2.3/typedefs/SessionOptions.md",sourceDirName:"typedefs",slug:"/typedefs/session-options",permalink:"/docs/2.3/typedefs/session-options",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1666195654,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{id:"session-options",title:"SessionOptions"},sidebar:"version-2.3/docs",previous:{title:"RequestAsBrowserOptions",permalink:"/docs/2.3/typedefs/request-as-browser-options"},next:{title:"SessionPoolOptions",permalink:"/docs/2.3/typedefs/session-pool-options"}},d={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>id</code>",id:"id",level:3},{value:"<code>maxAgeSecs</code>",id:"maxagesecs",level:3},{value:"<code>userData</code>",id:"userdata",level:3},{value:"<code>maxErrorScore</code>",id:"maxerrorscore",level:3},{value:"<code>errorScoreDecrement</code>",id:"errorscoredecrement",level:3},{value:"<code>createdAt</code>",id:"createdat",level:3},{value:"<code>expiresAt</code>",id:"expiresat",level:3},{value:"<code>usageCount</code>",id:"usagecount",level:3},{value:"<code>errorCount</code>",id:"errorcount",level:3},{value:"<code>maxUsageCount</code>",id:"maxusagecount",level:3},{value:"<code>sessionPool</code>",id:"sessionpool",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"sessionoptions"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h3"},"id")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Id of session used for generating fingerprints. It is used as proxy session name."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxagesecs"},(0,a.kt)("inlineCode",{parentName:"h3"},"maxAgeSecs")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 3000")),(0,a.kt)("p",null,"Number of seconds after which the session is considered as expired."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"userdata"},(0,a.kt)("inlineCode",{parentName:"h3"},"userData")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object<string, *>")),(0,a.kt)("p",null,"Object where custom user data can be stored. For example custom headers."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxerrorscore"},(0,a.kt)("inlineCode",{parentName:"h3"},"maxErrorScore")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 3")),(0,a.kt)("p",null,"Maximum number of marking session as blocked usage. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"errorScore")," reaches the ",(0,a.kt)("inlineCode",{parentName:"p"},"maxErrorScore")," session is marked as block and it is thrown away.\nIt starts at 0. Calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"markBad")," function increases the ",(0,a.kt)("inlineCode",{parentName:"p"},"errorScore")," by 1. Calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"markGood")," will decrease the ",(0,a.kt)("inlineCode",{parentName:"p"},"errorScore")," by\n",(0,a.kt)("inlineCode",{parentName:"p"},"errorScoreDecrement")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"errorscoredecrement"},(0,a.kt)("inlineCode",{parentName:"h3"},"errorScoreDecrement")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 0.5")),(0,a.kt)("p",null,"It is used for healing the session. For example: if your session is marked bad two times, but it is successful on the third attempt it's errorScore is\ndecremented by this number."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"createdat"},(0,a.kt)("inlineCode",{parentName:"h3"},"createdAt")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")),(0,a.kt)("p",null,"Date of creation."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"expiresat"},(0,a.kt)("inlineCode",{parentName:"h3"},"expiresAt")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")),(0,a.kt)("p",null,"Date of expiration."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"usagecount"},(0,a.kt)("inlineCode",{parentName:"h3"},"usageCount")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 0")),(0,a.kt)("p",null,"Indicates how many times the session has been used."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"errorcount"},(0,a.kt)("inlineCode",{parentName:"h3"},"errorCount")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 0")),(0,a.kt)("p",null,"Indicates how many times the session is marked bad."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxusagecount"},(0,a.kt)("inlineCode",{parentName:"h3"},"maxUsageCount")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 50")),(0,a.kt)("p",null,"Session should be used only a limited amount of times. This number indicates how many times the session is going to be used, before it is thrown away."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sessionpool"},(0,a.kt)("inlineCode",{parentName:"h3"},"sessionPool")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../api/session-pool",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"SessionPool"))),(0,a.kt)("p",null,"SessionPool instance. Session will emit the ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionRetired")," event on this instance."),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);