"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3280],{37185:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],p={id:"upgrading-to-v2",title:"Upgrading to v2"},u=void 0,l={unversionedId:"upgrading/upgrading-to-v2",id:"upgrading/upgrading-to-v2",title:"Upgrading to v2",description:"- BREAKING: Require Node.js >=15.10.0 because HTTP2 support on lower Node.js versions is very buggy.",source:"@site/../docs/upgrading/upgrading_v2.md",sourceDirName:"upgrading",slug:"/upgrading/upgrading-to-v2",permalink:"/sdk/js/docs/next/upgrading/upgrading-to-v2",draft:!1,tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1686335831,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{id:"upgrading-to-v2",title:"Upgrading to v2"},sidebar:"docs",previous:{title:"Upgrading to v1",permalink:"/sdk/js/docs/next/upgrading/upgrading-to-v1"},next:{title:"Upgrading to v3",permalink:"/sdk/js/docs/next/upgrading/upgrading-to-v3"}},c={},s=[],d={toc:s},g="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(g,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"BREAKING"),": Require Node.js >=15.10.0 because HTTP2 support on lower Node.js versions is very buggy."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"BREAKING"),": Bump ",(0,a.kt)("inlineCode",{parentName:"li"},"cheerio")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"1.0.0-rc.10")," from ",(0,a.kt)("inlineCode",{parentName:"li"},"rc.3"),". There were breaking changes in ",(0,a.kt)("inlineCode",{parentName:"li"},"cheerio")," between the versions so this bump might be breaking for you as well."),(0,a.kt)("li",{parentName:"ul"},"Remove ",(0,a.kt)("inlineCode",{parentName:"li"},"LiveViewServer")," which was deprecated before release of SDK v1.")))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(r),g=o,m=s["".concat(u,".").concat(g)]||s[g]||d[g]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);