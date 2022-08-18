"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9943],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||s;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84626:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),a=["components"],i={id:"create-session",title:"CreateSession"},l=void 0,p={unversionedId:"typedefs/create-session",id:"version-2.3/typedefs/create-session",title:"CreateSession",description:"Factory user-function which creates customized Session instances.",source:"@site/versioned_docs/version-2.3/typedefs/CreateSession.md",sourceDirName:"typedefs",slug:"/typedefs/create-session",permalink:"/apify-sdk-js/docs/2.3/typedefs/create-session",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Andrey Bykov",lastUpdatedAt:1660827900,formattedLastUpdatedAt:"Aug 18, 2022",frontMatter:{id:"create-session",title:"CreateSession"},sidebar:"version-2.3/docs",previous:{title:"KeyConsumer",permalink:"/apify-sdk-js/docs/2.3/typedefs/key-consumer"},next:{title:"RequestTransform",permalink:"/apify-sdk-js/docs/2.3/typedefs/request-transform"}},c={},u=[],f={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("a",{name:"createsession"}),(0,s.kt)("p",null,"Factory user-function which creates customized ",(0,s.kt)("a",{parentName:"p",href:"../api/session",target:null,rel:null},(0,s.kt)("inlineCode",{parentName:"a"},"Session"))," instances."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"strong"},"sessionPool")),": ",(0,s.kt)("a",{parentName:"li",href:"../api/session-pool",target:null,rel:null},(0,s.kt)("inlineCode",{parentName:"a"},"SessionPool"))," - Pool requesting the new session.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns"),":"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../api/session",target:null,rel:null},(0,s.kt)("inlineCode",{parentName:"a"},"Promise<Session>"))),(0,s.kt)("hr",null))}d.isMDXComponent=!0}}]);