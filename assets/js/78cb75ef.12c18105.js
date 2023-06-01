"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5379],{24229:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),p=["components"],i={id:"prepare-request-inputs",title:"PrepareRequestInputs"},l=void 0,s={unversionedId:"typedefs/prepare-request-inputs",id:"version-2.3/typedefs/prepare-request-inputs",title:"PrepareRequestInputs",description:"Properties",source:"@site/versioned_docs/version-2.3/typedefs/PrepareRequestInputs.md",sourceDirName:"typedefs",slug:"/typedefs/prepare-request-inputs",permalink:"/sdk/js/docs/2.3/typedefs/prepare-request-inputs",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1685645520,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{id:"prepare-request-inputs",title:"PrepareRequestInputs"},sidebar:"version-2.3/docs",previous:{title:"PrepareRequest",permalink:"/sdk/js/docs/2.3/typedefs/prepare-request"},next:{title:"PlaywrightHandlePageFunction",permalink:"/sdk/js/docs/2.3/typedefs/playwright-handle-page-function"}},u={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>request</code>",id:"request",level:3},{value:"<code>session</code>",id:"session",level:3},{value:"<code>proxyInfo</code>",id:"proxyinfo",level:3},{value:"<code>crawler</code>",id:"crawler",level:3}],d={toc:c},f="wrapper";function y(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"preparerequestinputs"}),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"request"},(0,o.kt)("inlineCode",{parentName:"h3"},"request")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Request"))),(0,o.kt)("p",null,"Original instance fo the {Request} object. Must be modified in-place."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"session"},(0,o.kt)("inlineCode",{parentName:"h3"},"session")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("a",{parentName:"p",href:"../api/session",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Session"))),(0,o.kt)("p",null,"The current session"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"proxyinfo"},(0,o.kt)("inlineCode",{parentName:"h3"},"proxyInfo")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("a",{parentName:"p",href:"../typedefs/proxy-info",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"ProxyInfo"))),(0,o.kt)("p",null,"An object with information about currently used proxy by the crawler and configured by the ",(0,o.kt)("a",{parentName:"p",href:"../api/proxy-configuration",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"ProxyConfiguration"))," class."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"crawler"},(0,o.kt)("inlineCode",{parentName:"h3"},"crawler")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("a",{parentName:"p",href:"../api/cheerio-crawler",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"CheerioCrawler"))),(0,o.kt)("hr",null))}y.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),f=a,y=c["".concat(l,".").concat(f)]||c[f]||d[f]||o;return r?n.createElement(y,p(p({ref:t},u),{},{components:r})):n.createElement(y,p({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);