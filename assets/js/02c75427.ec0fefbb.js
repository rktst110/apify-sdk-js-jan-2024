"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2099],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),g=a,m=c["".concat(p,".").concat(g)]||c[g]||u[g]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},52921:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={id_old:"version-1.3-playwright",title:"utils.playwright",id:"playwright"},p=void 0,s={unversionedId:"api/playwright",id:"version-1.3/api/playwright",title:"utils.playwright",description:"A namespace that contains various utilities for Playwright - the headless Chrome Node API.",source:"@site/versioned_docs/version-1.3/api/playwright.md",sourceDirName:"api",slug:"/api/playwright",permalink:"/apify-sdk-js/docs/1.3/api/playwright",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Andrey Bykov",lastUpdatedAt:1660827900,formattedLastUpdatedAt:"Aug 18, 2022",frontMatter:{id_old:"version-1.3-playwright",title:"utils.playwright",id:"playwright"},sidebar:"version-1.3/docs",previous:{title:"utils.log",permalink:"/apify-sdk-js/docs/1.3/api/log"},next:{title:"utils.puppeteer",permalink:"/apify-sdk-js/docs/1.3/api/puppeteer"}},d={},u=[{value:"<code>playwright.gotoExtended</code>",id:"playwrightgotoextended",level:2}],c={toc:u};function g(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"playwright"}),(0,i.kt)("p",null,"A namespace that contains various utilities for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright",target:"_blank",rel:"noopener"},"Playwright")," - the headless Chrome Node API."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\nconst { playwright } = Apify.utils;\n\n// Navigate to https://www.example.com in Playwright with a POST request\nconst browser = await Apify.launchPlaywright();\nconst page = await browser.newPage();\nawait playwright.gotoExtended(page, {\n    url: 'https://example.com,\n    method: 'POST',\n});\n")),(0,i.kt)("hr",null),(0,i.kt)("a",{name:"gotoextended"}),(0,i.kt)("h2",{id:"playwrightgotoextended"},(0,i.kt)("inlineCode",{parentName:"h2"},"playwright.gotoExtended")),(0,i.kt)("p",null,"Extended version of Playwright's ",(0,i.kt)("inlineCode",{parentName:"p"},"page.goto()")," allowing to perform requests with HTTP method other than GET, with custom headers and POST payload.\nURL, method, headers and payload are taken from request parameter that must be an instance of Apify.Request class."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"NOTE:")," In recent versions of Playwright using requests other than GET, overriding headers and adding payloads disables browser cache which degrades\nperformance."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"page")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Page")," - Puppeteer ",(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/api/class-page",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"Page"))," object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"request")),": ",(0,i.kt)("a",{parentName:"li",href:"../api/request",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Request"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"[gotoOptions]")),": ",(0,i.kt)("a",{parentName:"li",href:"../typedefs/direct-navigation-options",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"DirectNavigationOptions"))," - Custom options for ",(0,i.kt)("inlineCode",{parentName:"li"},"page.goto()"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise<(Response|null)>")),(0,i.kt)("hr",null))}g.isMDXComponent=!0}}]);