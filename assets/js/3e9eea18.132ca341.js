"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2405],{68889:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(88746),o=a(6141),s=a(6832);const l=function(e){var t=e.to,a=e.children,l=(0,o.E)(),d=l.version,i=l.isLast;if((0,s.default)().siteConfig.presets[0][1].docs.disableVersioning)return r.createElement(n.default,{to:"/api/"+t},a);var c=d+"/";return"current"===d?c="next/":i&&(c=""),r.createElement(n.default,{to:"/api/"+c+t},a)}},53290:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>f});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=a(14563),l=a(68889);const d="import { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\nawait Actor.init();\n\n// Create a dataset where we will store the results.\nconst crawler = new CheerioCrawler({\n    // Function called for each URL\n    async requestHandler({ request, body }) {\n        // Save data to default dataset\n        await Actor.pushData({\n            url: request.url,\n            html: body,\n        });\n    },\n});\n\n// Run the crawler\nawait crawler.run([\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n]);\n\nawait Actor.exit();\n";var i=["components"],c={id:"add-data-to-dataset",title:"Add data to dataset"},p=void 0,u={unversionedId:"examples/add-data-to-dataset",id:"examples/add-data-to-dataset",title:"Add data to dataset",description:"This example saves data to the default dataset. If the dataset doesn't exist, it will be created.",source:"@site/../docs/examples/add_data_to_dataset.mdx",sourceDirName:"examples",slug:"/examples/add-data-to-dataset",permalink:"/sdk/js/docs/next/examples/add-data-to-dataset",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1692707424,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{id:"add-data-to-dataset",title:"Add data to dataset"},sidebar:"docs",previous:{title:"Accept user input",permalink:"/sdk/js/docs/next/examples/accept-user-input"},next:{title:"Basic crawler",permalink:"/sdk/js/docs/next/examples/basic-crawler"}},m={},f=[],w={toc:f},y="wrapper";function b(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)(y,(0,r.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example saves data to the default dataset. If the dataset doesn't exist, it will be created.\nYou can save data to custom datasets by using ",(0,o.kt)(l.Z,{to:"apify/class/Dataset#open",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"Actor.openDataset()"))),(0,o.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},d),(0,o.kt)("p",null,"Each item in this dataset will be saved to its own file in the following directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"{PROJECT_FOLDER}/storage/datasets/default/\n")))}b.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),i=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(a),m=n,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);