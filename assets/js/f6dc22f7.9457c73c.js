"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5643],{64544:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),p=["components"],i={id:"puppeteer-with-proxy",title:"Puppeteer with proxy"},s=void 0,l={unversionedId:"examples/puppeteer-with-proxy",id:"version-2.3/examples/puppeteer-with-proxy",title:"Puppeteer with proxy",description:"This example demonstrates how to load pages in headless Chrome / Puppeteer",source:"@site/versioned_docs/version-2.3/examples/puppeteer_with_proxy.md",sourceDirName:"examples",slug:"/examples/puppeteer-with-proxy",permalink:"/sdk/js/docs/2.3/examples/puppeteer-with-proxy",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1685480559,formattedLastUpdatedAt:"May 30, 2023",frontMatter:{id:"puppeteer-with-proxy",title:"Puppeteer with proxy"},sidebar:"version-2.3/docs",previous:{title:"Puppeteer recursive crawl",permalink:"/sdk/js/docs/2.3/examples/puppeteer-recursive-crawl"},next:{title:"Synchronous run",permalink:"/sdk/js/docs/2.3/examples/synchronous-run"}},c={},u=[],y={toc:u},f="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)(f,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example demonstrates how to load pages in headless Chrome / Puppeteer\nover ",(0,a.kt)("a",{parentName:"p",href:"https://docs.apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy"),".\nTo make it work, you'll need an Apify account with access to the proxy.\nVisit the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/apify-platform",target:null,rel:null},"Apify platform introduction")," to find\nhow to log into your account from the SDK."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To run this example on the Apify Platform, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    const requestList = await Apify.openRequestList('start-urls', [\n        'http://proxy.apify.com',\n    ]);\n\n    // Proxy connection is automatically established in the Crawler\n    const proxyConfiguration = await Apify.createProxyConfiguration();\n\n    const crawler = new Apify.PuppeteerCrawler({\n        requestList,\n        proxyConfiguration,\n        handlePageFunction: async ({ page }) => {\n            const status = await page.$eval('td.status', (el) => el.textContent);\n            console.log(`Proxy Status: ${status}`);\n        },\n    });\n\n    console.log('Running Puppeteer script...');\n    await crawler.run();\n    console.log('Puppeteer closed.');\n});\n")))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||y[f]||a;return r?n.createElement(m,p(p({ref:t},c),{},{components:r})):n.createElement(m,p({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);