"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7739],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),y=a,d=m["".concat(s,".").concat(y)]||m[y]||c[y]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"key-consumer",title:"KeyConsumer"},s=void 0,p={unversionedId:"typedefs/key-consumer",id:"version-2.3/typedefs/key-consumer",title:"KeyConsumer",description:"User-function used in the KeyValueStore.forEachKey() method.",source:"@site/versioned_docs/version-2.3/typedefs/KeyConsumer.md",sourceDirName:"typedefs",slug:"/typedefs/key-consumer",permalink:"/apify-sdk-js/docs/2.3/typedefs/key-consumer",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Andrey Bykov",lastUpdatedAt:1660827900,formattedLastUpdatedAt:"Aug 18, 2022",frontMatter:{id:"key-consumer",title:"KeyConsumer"},sidebar:"version-2.3/docs",previous:{title:"DatasetReducer",permalink:"/apify-sdk-js/docs/2.3/typedefs/dataset-reducer"},next:{title:"CreateSession",permalink:"/apify-sdk-js/docs/2.3/typedefs/create-session"}},u={},c=[],m={toc:c};function y(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"keyconsumer"}),(0,o.kt)("p",null,"User-function used in the ",(0,o.kt)("a",{parentName:"p",href:"../api/key-value-store#foreachkey",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"KeyValueStore.forEachKey()"))," method."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"key")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - Current {KeyValue} key being processed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"index")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," - Position of the current key in ",(0,o.kt)("a",{parentName:"li",href:"../api/key-value-store",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"KeyValueStore")),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"info")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"*")," - Information about the current ",(0,o.kt)("a",{parentName:"li",href:"../api/key-value-store",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"KeyValueStore"))," entry.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"size")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," - Size of the value associated with the current key in bytes.")))),(0,o.kt)("hr",null))}y.isMDXComponent=!0}}]);