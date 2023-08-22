"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1944],{99673:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),o=["components"],i={id_old:"version-1.3-puppeteer-sitemap",title:"Puppeteer sitemap",id:"puppeteer-sitemap"},s=void 0,l={unversionedId:"examples/puppeteer-sitemap",id:"version-1.3/examples/puppeteer-sitemap",title:"Puppeteer sitemap",description:"This example demonstrates how to use PuppeteerCrawler to crawl a list of web pages specified in a sitemap. The",source:"@site/versioned_docs/version-1.3/examples/puppeteer_sitemap.md",sourceDirName:"examples",slug:"/examples/puppeteer-sitemap",permalink:"/sdk/js/docs/1.3/examples/puppeteer-sitemap",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1692707424,formattedLastUpdatedAt:"Aug 22, 2023",frontMatter:{id_old:"version-1.3-puppeteer-sitemap",title:"Puppeteer sitemap",id:"puppeteer-sitemap"},sidebar:"version-1.3/docs",previous:{title:"Puppeteer recursive crawl",permalink:"/sdk/js/docs/1.3/examples/puppeteer-recursive-crawl"},next:{title:"Puppeteer with proxy",permalink:"/sdk/js/docs/1.3/examples/puppeteer-with-proxy"}},c={},u=[],m={toc:u},d="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"This example demonstrates how to use ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/puppeteer-crawler",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawler"))," to crawl a list of web pages specified in a sitemap. The\ncrawler extracts the page title and URL from each page and stores them as a record in the default dataset. In local configuration, the results are\nstored as JSON files in ",(0,p.kt)("inlineCode",{parentName:"p"},"./apify_storage/datasets/default"),"."),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"To run this example on the Apify Platform, select the ",(0,p.kt)("inlineCode",{parentName:"p"},"Node.js 12 + Chrome on Debian (apify/actor-node-chrome)")," base image on the ",(0,p.kt)("strong",{parentName:"p"},"Source")," tab\nwhen configuring the actor.")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    const requestList = new Apify.RequestList({\n        sources: [{ requestsFromUrl: 'https://apify.com/sitemaps.xml' }],\n    });\n    await requestList.initialize();\n\n    const crawler = new Apify.PuppeteerCrawler({\n        requestList,\n        maxRequestsPerCrawl: 10,\n        handlePageFunction: async ({ page, request }) => {\n            console.log(`Processing ${request.url}...`);\n            await Apify.pushData({\n                url: request.url,\n                title: await page.title(),\n                html: await page.content(),\n            });\n        },\n    });\n\n    await crawler.run();\n    console.log('Done.');\n});\n")))}f.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||p;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);