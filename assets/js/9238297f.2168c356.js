"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5769],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(y,s(s({ref:t},c),{},{components:r})):n.createElement(y,s({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},57848:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={id:"memory-info",title:"MemoryInfo"},l=void 0,p={unversionedId:"typedefs/memory-info",id:"version-2.3/typedefs/memory-info",title:"MemoryInfo",description:"Describes memory usage of an Actor.",source:"@site/versioned_docs/version-2.3/typedefs/MemoryInfo.md",sourceDirName:"typedefs",slug:"/typedefs/memory-info",permalink:"/docs/2.3/typedefs/memory-info",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1660902498,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{id:"memory-info",title:"MemoryInfo"},sidebar:"version-2.3/docs",previous:{title:"DatasetContent",permalink:"/docs/2.3/typedefs/dataset-content"},next:{title:"QueueOperationInfo",permalink:"/docs/2.3/typedefs/queue-operation-info"}},c={},m=[{value:"Properties",id:"properties",level:2},{value:"<code>totalBytes</code>",id:"totalbytes",level:3},{value:"<code>freeBytes</code>",id:"freebytes",level:3},{value:"<code>usedBytes</code>",id:"usedbytes",level:3},{value:"<code>mainProcessBytes</code>",id:"mainprocessbytes",level:3},{value:"<code>childProcessesBytes</code>",id:"childprocessesbytes",level:3}],u={toc:m};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"memoryinfo"}),(0,a.kt)("p",null,"Describes memory usage of an Actor."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"totalbytes"},(0,a.kt)("inlineCode",{parentName:"h3"},"totalBytes")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Total memory available in the system or container"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"freebytes"},(0,a.kt)("inlineCode",{parentName:"h3"},"freeBytes")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Amount of free memory in the system or container"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"usedbytes"},(0,a.kt)("inlineCode",{parentName:"h3"},"usedBytes")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Amount of memory used (= totalBytes - freeBytes)"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"mainprocessbytes"},(0,a.kt)("inlineCode",{parentName:"h3"},"mainProcessBytes")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Amount of memory used the current Node.js process"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"childprocessesbytes"},(0,a.kt)("inlineCode",{parentName:"h3"},"childProcessesBytes")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Amount of memory used by child processes of the current Node.js process"),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);