"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8082],{41368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"dataset-content",title:"DatasetContent"},p=void 0,s={unversionedId:"typedefs/dataset-content",id:"version-2.3/typedefs/dataset-content",title:"DatasetContent",description:"Properties",source:"@site/versioned_docs/version-2.3/typedefs/DatasetContent.md",sourceDirName:"typedefs",slug:"/typedefs/dataset-content",permalink:"/sdk/js/docs/2.3/typedefs/dataset-content",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1692707424,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{id:"dataset-content",title:"DatasetContent"},sidebar:"version-2.3/docs",previous:{title:"ApifyEnv",permalink:"/sdk/js/docs/2.3/typedefs/apify-env"},next:{title:"MemoryInfo",permalink:"/sdk/js/docs/2.3/typedefs/memory-info"}},d={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>items</code>",id:"items",level:3},{value:"<code>total</code>",id:"total",level:3},{value:"<code>offset</code>",id:"offset",level:3},{value:"<code>count</code>",id:"count",level:3},{value:"<code>limit</code>",id:"limit",level:3}],u={toc:c},m="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"datasetcontent"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"items"},(0,a.kt)("inlineCode",{parentName:"h3"},"items")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Array<object>")),(0,a.kt)("p",null,"Dataset entries based on chosen format parameter."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"total"},(0,a.kt)("inlineCode",{parentName:"h3"},"total")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Total count of entries in the dataset."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"offset"},(0,a.kt)("inlineCode",{parentName:"h3"},"offset")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Position of the first returned entry in the dataset."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"count"},(0,a.kt)("inlineCode",{parentName:"h3"},"count")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Count of dataset entries returned in this set."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"limit"},(0,a.kt)("inlineCode",{parentName:"h3"},"limit")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Maximum number of dataset entries requested."),(0,a.kt)("hr",null))}f.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);