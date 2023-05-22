"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7833],{68889:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(88746),o=r(6141),i=r(6832);const s=function(e){var t=e.to,r=e.children,s=(0,o.E)(),l=s.version,c=s.isLast;if((0,i.default)().siteConfig.presets[0][1].docs.disableVersioning)return n.createElement(a.default,{to:"/api/"+t},r);var p=l+"/";return"current"===l?p="next/":c&&(p=""),n.createElement(a.default,{to:"/api/"+p+t},r)}},26569:(e,t,r)=>{r.d(t,{B:()=>s,T:()=>i});var n=r(67294),a=r(88746),o="https://crawlee.dev",i=function(e){var t=e.to,r=e.children,i=e.version;return n.createElement(a.default,{href:o+"/api"+(i?"/"+i:"")+"/"+t},r)},s=function(e){var t=e.to,r=e.children;return n.createElement(a.default,{href:o+"/"+t},r)}},13676:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>g,frontMatter:()=>u,metadata:()=>h,toc:()=>m});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(61806),s=r(68889),l=r(26569);const c="import { Actor } from 'apify';\nimport { PlaywrightCrawler } from 'crawlee';\n\nawait Actor.init();\n\n// Create an instance of the PlaywrightCrawler class - a crawler\n// that automatically loads the URLs in headless Chrome / Playwright.\nconst crawler = new PlaywrightCrawler({\n    launchContext: {\n        // Here you can set options that are passed to the playwright .launch() function.\n        launchOptions: {\n            headless: true,\n        },\n    },\n\n    // Stop crawling after several pages\n    maxRequestsPerCrawl: 50,\n\n    // This function will be called for each URL to crawl.\n    // Here you can write the Playwright scripts you are familiar with,\n    // with the exception that browsers and pages are automatically managed by the Apify SDK.\n    // The function accepts a single parameter, which is an object with a lot of properties,\n    // the most important being:\n    // - request: an instance of the Request class with information such as URL and HTTP method\n    // - page: Playwright's Page object (see https://playwright.dev/docs/api/class-page)\n    async requestHandler({ request, page, enqueueLinks }) {\n        console.log(`Processing ${request.url}...`);\n\n        // A function to be evaluated by Playwright within the browser context.\n        const data = await page.$$eval('.athing', ($posts) => {\n            const scrapedData = [];\n\n            // We're getting the title, rank and URL of each post on Hacker News.\n            $posts.forEach(($post) => {\n                scrapedData.push({\n                    title: $post.querySelector('.title a').innerText,\n                    rank: $post.querySelector('.rank').innerText,\n                    href: $post.querySelector('.title a').href,\n                });\n            });\n\n            return scrapedData;\n        });\n\n        // Store the results to the default dataset.\n        await Actor.pushData(data);\n\n        // Find a link to the next page and enqueue it if it exists.\n        const infos = await enqueueLinks({\n            selector: '.morelink',\n        });\n\n        if (infos.processedRequests.length === 0) console.log(`${request.url} is the last page!`);\n    },\n\n    // This function is called if the page processing failed more than maxRequestRetries+1 times.\n    failedRequestHandler({ request }) {\n        console.log(`Request ${request.url} failed too many times.`);\n    },\n});\n\n// Run the crawler and wait for it to finish.\nawait crawler.run(['https://news.ycombinator.com/']);\n\nconsole.log('Crawler finished.');\n\nawait Actor.exit();\n";var p=["components"],u={id:"playwright-crawler",title:"Playwright crawler"},d=void 0,h={unversionedId:"examples/playwright-crawler",id:"examples/playwright-crawler",title:"Playwright crawler",description:"This example demonstrates how to use PlaywrightCrawler",source:"@site/../docs/examples/playwright_crawler.mdx",sourceDirName:"examples",slug:"/examples/playwright-crawler",permalink:"/sdk/js/docs/next/examples/playwright-crawler",draft:!1,tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1684535970,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{id:"playwright-crawler",title:"Playwright crawler"},sidebar:"docs",previous:{title:"Dataset Map and Reduce methods",permalink:"/sdk/js/docs/next/examples/map-and-reduce"},next:{title:"Capture a screenshot using Puppeteer",permalink:"/sdk/js/docs/next/examples/capture-screenshot"}},f={},m=[],w={toc:m},y="wrapper";function g(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)(y,(0,n.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example demonstrates how to use ",(0,o.kt)(l.T,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"CrawleeApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")),"\nin combination with ",(0,o.kt)(s.Z,{to:"apify/class/RequestQueue",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"RequestQueue"))," to\nrecursively scrape the ",(0,o.kt)("a",{parentName:"p",href:"https://news.ycombinator.com",target:"_blank",rel:"noopener"},"Hacker News website")," using headless Chrome / Playwright."),(0,o.kt)("p",null,"The crawler starts with a single URL, finds links to next pages, enqueues them and continues until no more desired links are available. The results\nare stored to the default dataset. In local configuration, the results are stored as JSON files in ",(0,o.kt)("inlineCode",{parentName:"p"},"./storage/datasets/default")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify/actor-node-playwright-chrome")," image for your Dockerfile.")),(0,o.kt)(i.Z,{className:"language-js",mdxType:"CodeBlock"},c))}g.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);