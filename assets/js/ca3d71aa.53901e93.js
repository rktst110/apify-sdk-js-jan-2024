"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5826],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33406:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),p=r(41435);var i=["components"],c={id:"accept-user-input",title:"Accept user input"},l=void 0,s={unversionedId:"examples/accept-user-input",id:"version-3.0/examples/accept-user-input",title:"Accept user input",description:"This example accepts and logs user input:",source:"@site/versioned_docs/version-3.0/examples/accept_user_input.mdx",sourceDirName:"examples",slug:"/examples/accept-user-input",permalink:"/docs/examples/accept-user-input",draft:!1,tags:[],version:"3.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1670229745,formattedLastUpdatedAt:"Dec 5, 2022",frontMatter:{id:"accept-user-input",title:"Accept user input"},sidebar:"docs",previous:{title:"Examples",permalink:"/docs/examples"},next:{title:"Add data to dataset",permalink:"/docs/examples/add-data-to-dataset"}},u={},d=[],m={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example accepts and logs user input:"),(0,o.kt)(p.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\n\nawait Actor.init();\n\nconst input = await Actor.getInput();\nconsole.log(input);\n\nawait Actor.exit();\n"),(0,o.kt)("p",null,"To provide the actor with input, create a ",(0,o.kt)("inlineCode",{parentName:"p"},"INPUT.json"),' file inside the "default" key-value store:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"{PROJECT_FOLDER}/storage/key_value_stores/default/INPUT.json\n")),(0,o.kt)("p",null,"Anything in this file will be available to the actor when it runs."),(0,o.kt)("p",null,"To learn about other ways to provide an actor with input, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/docs/actor#run",target:"_blank",rel:"noopener"},"Apify Platform Documentation"),"."))}f.isMDXComponent=!0}}]);