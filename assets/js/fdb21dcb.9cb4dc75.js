"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[323],{42208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),s=n(63366),r=(n(67294),n(3905)),i=["components"],a={id_old:"version-1.3-session-pool-options",title:"SessionPoolOptions",id:"session-pool-options"},p=void 0,l={unversionedId:"typedefs/session-pool-options",id:"version-1.3/typedefs/session-pool-options",title:"SessionPoolOptions",description:"Properties",source:"@site/versioned_docs/version-1.3/typedefs/SessionPoolOptions.md",sourceDirName:"typedefs",slug:"/typedefs/session-pool-options",permalink:"/sdk/js/docs/1.3/typedefs/session-pool-options",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1692814440,formattedLastUpdatedAt:"Aug 23, 2023",frontMatter:{id_old:"version-1.3-session-pool-options",title:"SessionPoolOptions",id:"session-pool-options"},sidebar:"version-1.3/docs",previous:{title:"SessionOptions",permalink:"/sdk/js/docs/1.3/typedefs/session-options"},next:{title:"SnapshotterOptions",permalink:"/sdk/js/docs/1.3/typedefs/snapshotter-options"}},d={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>maxPoolSize</code>",id:"maxpoolsize",level:3},{value:"<code>sessionOptions</code>",id:"sessionoptions",level:3},{value:"<code>persistStateKeyValueStoreId</code>",id:"persiststatekeyvaluestoreid",level:3},{value:"<code>persistStateKey</code>",id:"persiststatekey",level:3},{value:"<code>createSessionFunction</code>",id:"createsessionfunction",level:3}],u={toc:c},m="wrapper";function f(e){var t=e.components,n=(0,s.Z)(e,i);return(0,r.kt)(m,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"sessionpooloptions"}),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"maxpoolsize"},(0,r.kt)("inlineCode",{parentName:"h3"},"maxPoolSize")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ",(0,r.kt)("code",null," = 1000")),(0,r.kt)("p",null,"Maximum size of the pool. Indicates how many sessions are rotated."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sessionoptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"sessionOptions")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"../typedefs/session-options",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"SessionOptions"))),(0,r.kt)("p",null,"The configuration options for ",(0,r.kt)("a",{parentName:"p",href:"/sdk/js/docs/1.3/api/session",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Session"))," instances."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"persiststatekeyvaluestoreid"},(0,r.kt)("inlineCode",{parentName:"h3"},"persistStateKeyValueStoreId")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Name or Id of ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyValueStore")," where is the ",(0,r.kt)("inlineCode",{parentName:"p"},"SessionPool")," state stored."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"persiststatekey"},(0,r.kt)("inlineCode",{parentName:"h3"},"persistStateKey")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ",(0,r.kt)("code",null," = ",'"',"\\",'"',"SESSION_POOL_STATE\\",'"','"')),(0,r.kt)("p",null,"Session pool persists it's state under this key in Key value store."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"createsessionfunction"},(0,r.kt)("inlineCode",{parentName:"h3"},"createSessionFunction")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"../typedefs/create-session",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"CreateSession"))),(0,r.kt)("p",null,"Custom function that should return ",(0,r.kt)("inlineCode",{parentName:"p"},"Session")," instance. Any error thrown from this function will terminate the process. Function receives ",(0,r.kt)("inlineCode",{parentName:"p"},"SessionPool"),"\ninstance as a parameter"),(0,r.kt)("hr",null))}f.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=l(n),m=s,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:s,i[1]=a;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);