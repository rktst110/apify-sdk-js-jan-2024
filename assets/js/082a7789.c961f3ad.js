"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6963],{43559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={id_old:"version-1.3-queue-operation-info",title:"QueueOperationInfo",id:"queue-operation-info"},u=void 0,s={unversionedId:"typedefs/queue-operation-info",id:"version-1.3/typedefs/queue-operation-info",title:"QueueOperationInfo",description:"A helper class that is used to report results from various RequestQueue functions as well as",source:"@site/versioned_docs/version-1.3/typedefs/QueueOperationInfo.md",sourceDirName:"typedefs",slug:"/typedefs/queue-operation-info",permalink:"/sdk/js/docs/1.3/typedefs/queue-operation-info",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1687997189,formattedLastUpdatedAt:"Jun 29, 2023",frontMatter:{id_old:"version-1.3-queue-operation-info",title:"QueueOperationInfo",id:"queue-operation-info"},sidebar:"version-1.3/docs",previous:{title:"MemoryInfo",permalink:"/sdk/js/docs/1.3/typedefs/memory-info"},next:{title:"RequestListState",permalink:"/sdk/js/docs/1.3/typedefs/request-list-state"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"<code>wasAlreadyPresent</code>",id:"wasalreadypresent",level:3},{value:"<code>wasAlreadyHandled</code>",id:"wasalreadyhandled",level:3},{value:"<code>requestId</code>",id:"requestid",level:3},{value:"<code>request</code>",id:"request",level:3}],c={toc:d},f="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(f,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"queueoperationinfo"}),(0,o.kt)("p",null,"A helper class that is used to report results from various ",(0,o.kt)("a",{parentName:"p",href:"../api/request-queue",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"RequestQueue"))," functions as well as\n",(0,o.kt)("a",{parentName:"p",href:"../api/utils#enqueuelinks",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"utils.enqueueLinks()")),"."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"wasalreadypresent"},(0,o.kt)("inlineCode",{parentName:"h3"},"wasAlreadyPresent")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Indicates if request was already present in the queue."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"wasalreadyhandled"},(0,o.kt)("inlineCode",{parentName:"h3"},"wasAlreadyHandled")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Indicates if request was already marked as handled."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"requestid"},(0,o.kt)("inlineCode",{parentName:"h3"},"requestId")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"The ID of the added request"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"request"},(0,o.kt)("inlineCode",{parentName:"h3"},"request")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Request"))),(0,o.kt)("p",null,"The original ",(0,o.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Request"))," object passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestQueue")," function."),(0,o.kt)("hr",null))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);