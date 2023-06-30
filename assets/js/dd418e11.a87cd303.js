"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8946],{40678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={id:"synchronous-run",title:"Synchronous run"},p=void 0,c={unversionedId:"examples/synchronous-run",id:"version-2.3/examples/synchronous-run",title:"Synchronous run",description:"This example shows a quick actor that has a run time of just a few seconds.",source:"@site/versioned_docs/version-2.3/examples/synchronous_run.md",sourceDirName:"examples",slug:"/examples/synchronous-run",permalink:"/sdk/js/docs/2.3/examples/synchronous-run",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1687997189,formattedLastUpdatedAt:"Jun 29, 2023",frontMatter:{id:"synchronous-run",title:"Synchronous run"},sidebar:"version-2.3/docs",previous:{title:"Puppeteer with proxy",permalink:"/sdk/js/docs/2.3/examples/puppeteer-with-proxy"},next:{title:"Use stealth mode",permalink:"/sdk/js/docs/2.3/examples/use-stealth-mode"}},l={},u=[],d={toc:u},y="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)(y,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example shows a quick actor that has a run time of just a few seconds.\nIt opens a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org",target:"_blank",rel:"noopener"},"web page"),' (the Wikipedia home page), which contains a list of "Did you know"\ntexts that change daily. The actor scrapes all the "Did you know" items and saves them to the default dataset.'),(0,a.kt)("p",null," This actor can be invoked synchronously using a single HTTP request to directly obtain its output\nas a response, using the\n",(0,a.kt)("a",{parentName:"p",href:"https://apify.com/docs/api/v2#/reference/actors/run-actor-synchronously/without-input",target:"_blank",rel:"noopener"},"Run actor synchronously"),"\nApify API endpoint."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To run this example on the Apify Platform, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Launch web browser.\n    const browser = await Apify.launchPuppeteer({ launchOptions: { headless: true } });\n    // Load https://en.wikipedia.org and get all \"Did you know\" texts.\n    console.log('Opening web page...');\n    const page = await browser.newPage();\n    await page.goto('https://en.wikipedia.org');\n\n    // Get all \"Did you know\" items from the page.\n    console.log('Getting \"Did you know\" items from the page.');\n    const results = await page.$$eval(\n        'div#mp-dyk > ul li',\n        (nodes) => nodes.map((node) => node.innerText.replace('...', 'Did you know')),\n    );\n    console.log(results);\n\n    // Save all the items to the Apify dataSet.\n    await Apify.pushData(results);\n    console.log('Actor finished.');\n\n    // Close browser\n    await browser.close();\n});\n")))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),y=o,m=u["".concat(p,".").concat(y)]||u[y]||d[y]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);