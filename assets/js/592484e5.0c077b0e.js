"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||s;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),i=["components"],a={id_old:"version-1.3-session-options",title:"SessionOptions",id:"session-options"},l=void 0,p={unversionedId:"typedefs/session-options",id:"version-1.3/typedefs/session-options",title:"SessionOptions",description:"Properties",source:"@site/versioned_docs/version-1.3/typedefs/SessionOptions.md",sourceDirName:"typedefs",slug:"/typedefs/session-options",permalink:"/docs/1.3/typedefs/session-options",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1670229745,formattedLastUpdatedAt:"Dec 5, 2022",frontMatter:{id_old:"version-1.3-session-options",title:"SessionOptions",id:"session-options"},sidebar:"version-1.3/docs",previous:{title:"RequestAsBrowserOptions",permalink:"/docs/1.3/typedefs/request-as-browser-options"},next:{title:"SessionPoolOptions",permalink:"/docs/1.3/typedefs/session-pool-options"}},d={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>id</code>",id:"id",level:3},{value:"<code>maxAgeSecs</code>",id:"maxagesecs",level:3},{value:"<code>userData</code>",id:"userdata",level:3},{value:"<code>maxErrorScore</code>",id:"maxerrorscore",level:3},{value:"<code>errorScoreDecrement</code>",id:"errorscoredecrement",level:3},{value:"<code>createdAt</code>",id:"createdat",level:3},{value:"<code>expiresAt</code>",id:"expiresat",level:3},{value:"<code>usageCount</code>",id:"usagecount",level:3},{value:"<code>errorCount</code>",id:"errorcount",level:3},{value:"<code>maxUsageCount</code>",id:"maxusagecount",level:3},{value:"<code>sessionPool</code>",id:"sessionpool",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("a",{name:"sessionoptions"}),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"id"},(0,s.kt)("inlineCode",{parentName:"h3"},"id")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,"Id of session used for generating fingerprints. It is used as proxy session name."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"maxagesecs"},(0,s.kt)("inlineCode",{parentName:"h3"},"maxAgeSecs")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ",(0,s.kt)("code",null," = 3000")),(0,s.kt)("p",null,"Number of seconds after which the session is considered as expired."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"userdata"},(0,s.kt)("inlineCode",{parentName:"h3"},"userData")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"Object<string, *>")),(0,s.kt)("p",null,"Object where custom user data can be stored. For example custom headers."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"maxerrorscore"},(0,s.kt)("inlineCode",{parentName:"h3"},"maxErrorScore")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ",(0,s.kt)("code",null," = 3")),(0,s.kt)("p",null,"Maximum number of marking session as blocked usage. If the ",(0,s.kt)("inlineCode",{parentName:"p"},"errorScore")," reaches the ",(0,s.kt)("inlineCode",{parentName:"p"},"maxErrorScore")," session is marked as block and it is thrown away.\nIt starts at 0. Calling the ",(0,s.kt)("inlineCode",{parentName:"p"},"markBad")," function increases the ",(0,s.kt)("inlineCode",{parentName:"p"},"errorScore")," by 1. Calling the ",(0,s.kt)("inlineCode",{parentName:"p"},"markGood")," will decrease the ",(0,s.kt)("inlineCode",{parentName:"p"},"errorScore")," by\n",(0,s.kt)("inlineCode",{parentName:"p"},"errorScoreDecrement")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"errorscoredecrement"},(0,s.kt)("inlineCode",{parentName:"h3"},"errorScoreDecrement")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ",(0,s.kt)("code",null," = 0.5")),(0,s.kt)("p",null,"It is used for healing the session. For example: if your session is marked bad two times, but it is successful on the third attempt it's errorScore is\ndecremented by this number."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"createdat"},(0,s.kt)("inlineCode",{parentName:"h3"},"createdAt")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"Date")),(0,s.kt)("p",null,"Date of creation."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"expiresat"},(0,s.kt)("inlineCode",{parentName:"h3"},"expiresAt")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"Date")),(0,s.kt)("p",null,"Date of expiration."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"usagecount"},(0,s.kt)("inlineCode",{parentName:"h3"},"usageCount")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ",(0,s.kt)("code",null," = 0")),(0,s.kt)("p",null,"Indicates how many times the session has been used."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"errorcount"},(0,s.kt)("inlineCode",{parentName:"h3"},"errorCount")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ",(0,s.kt)("code",null," = 0")),(0,s.kt)("p",null,"Indicates how many times the session is marked bad."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"maxusagecount"},(0,s.kt)("inlineCode",{parentName:"h3"},"maxUsageCount")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," ",(0,s.kt)("code",null," = 50")),(0,s.kt)("p",null,"Session should be used only a limited amount of times. This number indicates how many times the session is going to be used, before it is thrown away."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"sessionpool"},(0,s.kt)("inlineCode",{parentName:"h3"},"sessionPool")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("a",{parentName:"p",href:"../api/session-pool",target:null,rel:null},(0,s.kt)("inlineCode",{parentName:"a"},"SessionPool"))),(0,s.kt)("p",null,"SessionPool instance. Session will emit the ",(0,s.kt)("inlineCode",{parentName:"p"},"sessionRetired")," event on this instance."),(0,s.kt)("hr",null))}m.isMDXComponent=!0}}]);