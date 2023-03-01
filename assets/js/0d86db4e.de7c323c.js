"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[516],{3905:(e,t,a)=>{a.d(t,{Zo:()=>f,kt:()=>m});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},f=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=i,u=d["".concat(o,".").concat(m)]||d[m]||c[m]||n;return a?r.createElement(u,p(p({ref:t},f),{},{components:a})):r.createElement(u,p({ref:t},f))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,p=new Array(n);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var s=2;s<n;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},25724:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=a(87462),i=a(63366),n=(a(67294),a(3905)),p=["components"],l={title:"Changelog",sidebar_label:"Changelog",toc_max_heading_level:2},o=void 0,s={unversionedId:"changelog",id:"version-2.3/changelog",title:"Changelog",description:"It seems that the changelog is not available.",source:"@site/versioned_docs/version-2.3/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/sdk/js/docs/2.3/changelog",draft:!1,tags:[],version:"2.3",frontMatter:{title:"Changelog",sidebar_label:"Changelog"},sidebar:"version-2.3/docs",previous:{title:"SystemInfo",permalink:"/sdk/js/docs/2.3/typedefs/system-info"}},f={},c=[{value:"apify@3.1.2",id:"apify312",level:2},{value:"3.1.2 (2023-02-07)",id:"312-2023-02-07",level:4},{value:"Bug Fixes",id:"bug-fixes",level:5},{value:"apify@3.1.1",id:"apify311",level:2},{value:"3.1.1 (2022-11-13)",id:"311-2022-11-13",level:4},{value:"Features",id:"features",level:5},{value:"apify@3.1.0",id:"apify310",level:2},{value:"3.1.0 (2022-10-13)",id:"310-2022-10-13",level:3},{value:"Bug Fixes",id:"bug-fixes-1",level:5},{value:"Features",id:"features-1",level:5},{value:"@apify/scraper-tools@1.1.0",id:"apifyscraper-tools110",level:2},{value:"1.1.0 (2022-10-13)",id:"110-2022-10-13",level:3},{value:"Features",id:"features-2",level:5}],d={toc:c};function m(e){var t=e.components,a=(0,i.Z)(e,p);return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"apify312"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/apify/apify-sdk-js/releases/tag/apify@3.1.2",target:"_blank",rel:"noopener"},"apify@3.1.2")),(0,n.kt)("h4",{id:"312-2023-02-07"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/apify/apify-sdk-js/compare/apify@3.1.1...apify@3.1.2",target:"_blank",rel:"noopener"},"3.1.2")," (2023-02-07)"),(0,n.kt)("h5",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"declare missing dependency on tslib (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/commit/bc27118daab211857305f7617b1ee1433da13d4a",target:"_blank",rel:"noopener"},"bc27118"),")"),(0,n.kt)("li",{parentName:"ul"},"remove unused export of ",(0,n.kt)("inlineCode",{parentName:"li"},"QueueOperationInfoOptions")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/commit/b29fe4853d637ab527a7f7e3e53c7a5b0fe27a32",target:"_blank",rel:"noopener"},"b29fe48"),")")),(0,n.kt)("h2",{id:"apify311"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/apify/apify-sdk-js/releases/tag/apify@3.1.1",target:"_blank",rel:"noopener"},"apify@3.1.1")),(0,n.kt)("h4",{id:"311-2022-11-13"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/apify/apify-sdk-js/compare/apify@3.1.0...apify@3.1.1",target:"_blank",rel:"noopener"},"3.1.1")," (2022-11-13)"),(0,n.kt)("h5",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add ",(0,n.kt)("inlineCode",{parentName:"li"},"statusMessage")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"AbortOptions")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/commit/fb10bb60c12c0af97e41ae88adcf0b2000286235",target:"_blank",rel:"noopener"},"fb10bb6"),")"),(0,n.kt)("li",{parentName:"ul"},"warn about actor not being initialized before using storage methods (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/issues/126",target:"_blank",rel:"noopener"},"#126"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/commit/91cd2467d111de19490a6bf47b4a9138f26a37d4",target:"_blank",rel:"noopener"},"91cd246"),")")),(0,n.kt)("h2",{id:"apify310"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/apify/apify-sdk-js/releases/tag/apify@3.1.0",target:"_blank",rel:"noopener"},"apify@3.1.0")),(0,n.kt)("h3",{id:"310-2022-10-13"},"3.1.0 (2022-10-13)"),(0,n.kt)("h5",{id:"bug-fixes-1"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"apify:")," add ",(0,n.kt)("inlineCode",{parentName:"li"},"@apify/timeout")," to dependencies (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/issues/76",target:"_blank",rel:"noopener"},"#76"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/commit/1d64a1fa8f0e88a96eb82c2669e85b09dd4f372d",target:"_blank",rel:"noopener"},"1d64a1f"),")"),(0,n.kt)("li",{parentName:"ul"},"use correct event manager for actor methods (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/issues/49",target:"_blank",rel:"noopener"},"#49"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/commit/ef3a0c54359be64c89e76b0cac600cd780281321",target:"_blank",rel:"noopener"},"ef3a0c5"),")"),(0,n.kt)("li",{parentName:"ul"},"wait for memory storage to write changes before ",(0,n.kt)("inlineCode",{parentName:"li"},"Actor.exit")," exists the process (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/commit/c721d988141cf5b7aa170fddeffb792ded769622",target:"_blank",rel:"noopener"},"c721d98"),")")),(0,n.kt)("h5",{id:"features-1"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add ",(0,n.kt)("inlineCode",{parentName:"li"},"Actor.useState()")," helper (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/issues/98",target:"_blank",rel:"noopener"},"#98"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/commit/27dc4139caa0a2d94c570edac2cb628f6b3f747c",target:"_blank",rel:"noopener"},"27dc413"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"apify:")," add decryption for input secrets (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/issues/83",target:"_blank",rel:"noopener"},"#83"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/commit/78bb990817c01254de19c828937181c1263e21eb",target:"_blank",rel:"noopener"},"78bb990"),")"),(0,n.kt)("li",{parentName:"ul"},"re-export the logger in actor sdk (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/issues/54",target:"_blank",rel:"noopener"},"#54"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/commit/c78d8a44d7af5de7fda7bf2e436fefda752a4b1a",target:"_blank",rel:"noopener"},"c78d8a4"),")"),(0,n.kt)("li",{parentName:"ul"},"update ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify",target:"_blank",rel:"noopener"},"@apify"),"/scraper-tools (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/issues/37",target:"_blank",rel:"noopener"},"#37"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/commit/788913e0cc669b15b35359df30202a449b881b5f",target:"_blank",rel:"noopener"},"788913e"),")"),(0,n.kt)("li",{parentName:"ul"},"update the scrapers (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/issues/70",target:"_blank",rel:"noopener"},"#70"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/commit/efbfc442bc8be4f07b5f2432a750cb861d7f05e8",target:"_blank",rel:"noopener"},"efbfc44"),")")),(0,n.kt)("h2",{id:"apifyscraper-tools110"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/apify/apify-sdk-js/releases/tag/@apify/scraper-tools@1.1.0",target:"_blank",rel:"noopener"},"@apify/scraper-tools@1.1.0")),(0,n.kt)("h3",{id:"110-2022-10-13"},"1.1.0 (2022-10-13)"),(0,n.kt)("h5",{id:"features-2"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add ",(0,n.kt)("inlineCode",{parentName:"li"},"Actor.useState()")," helper (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/issues/98",target:"_blank",rel:"noopener"},"#98"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/commit/27dc4139caa0a2d94c570edac2cb628f6b3f747c",target:"_blank",rel:"noopener"},"27dc413"),")"),(0,n.kt)("li",{parentName:"ul"},"add playwright scraper (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/issues/26",target:"_blank",rel:"noopener"},"#26"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/commit/2dcd50ded777ae13bc7b75e6e0bc21a6a11315b7",target:"_blank",rel:"noopener"},"2dcd50d"),")"),(0,n.kt)("li",{parentName:"ul"},"update ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify",target:"_blank",rel:"noopener"},"@apify"),"/scraper-tools (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/issues/37",target:"_blank",rel:"noopener"},"#37"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/commit/788913e0cc669b15b35359df30202a449b881b5f",target:"_blank",rel:"noopener"},"788913e"),")"),(0,n.kt)("li",{parentName:"ul"},"update the scrapers (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/issues/70",target:"_blank",rel:"noopener"},"#70"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apify/apify-sdk-js/commit/efbfc442bc8be4f07b5f2432a750cb861d7f05e8",target:"_blank",rel:"noopener"},"efbfc44"),")")))}m.isMDXComponent=!0}}]);