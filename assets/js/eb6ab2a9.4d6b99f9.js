"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7833],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4959:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(9960),i=a(4477),s=a(2263);const o=function(e){var t=e.to,a=e.children,o=(0,i.E)();return(0,s.default)().siteConfig.presets[0][1].docs.disableVersioning?n.createElement(r.default,{to:"/api/"+t},a):n.createElement(r.default,{to:"/api/"+("current"===o.version?"next":o.version)+"/"+t},a)}},1473:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>w,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),s=a(1435),o=a(4959);var l=["components"],c={id:"playwright-crawler",title:"Playwright crawler"},p=void 0,u={unversionedId:"examples/playwright-crawler",id:"examples/playwright-crawler",title:"Playwright crawler",description:"This example demonstrates how to use PlaywrightCrawler",source:"@site/../docs/examples/playwright_crawler.mdx",sourceDirName:"examples",slug:"/examples/playwright-crawler",permalink:"/apify-sdk-js/docs/examples/playwright-crawler",draft:!1,tags:[],version:"current",lastUpdatedBy:"Andrey Bykov",lastUpdatedAt:1658406443,formattedLastUpdatedAt:"7/21/2022",frontMatter:{id:"playwright-crawler",title:"Playwright crawler"},sidebar:"docs",previous:{title:"Dataset Map and Reduce methods",permalink:"/apify-sdk-js/docs/examples/map-and-reduce"},next:{title:"Capture a screenshot using Puppeteer",permalink:"/apify-sdk-js/docs/examples/capture-screenshot"}},d={},h=[],m={toc:h};function w(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This example demonstrates how to use ",(0,i.kt)(o.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")),"\nin combination with ",(0,i.kt)(o.Z,{to:"core/class/RequestQueue",mdxType:"ApiLink"},(0,i.kt)("inlineCode",{parentName:"p"},"RequestQueue"))," to\nrecursively scrape the ",(0,i.kt)("a",{parentName:"p",href:"https://news.ycombinator.com",target:"_blank",rel:"noopener"},"Hacker News website")," using headless Chrome / Playwright."),(0,i.kt)("p",null,"The crawler starts with a single URL, finds links to next pages, enqueues them and continues until no more desired links are available. The results\nare stored to the default dataset. In local configuration, the results are stored as JSON files in ",(0,i.kt)("inlineCode",{parentName:"p"},"./apify_storage/datasets/default")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To run this example on the Apify Platform, select the ",(0,i.kt)("inlineCode",{parentName:"p"},"apify/actor-node-playwright-chrome")," image for your Dockerfile."))),(0,i.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Dataset, PlaywrightCrawler } from '@crawlee/playwright';\n\nconst dataset = await Dataset.open();\n\n// Create an instance of the PlaywrightCrawler class - a crawler\n// that automatically loads the URLs in headless Chrome / Playwright.\nconst crawler = new PlaywrightCrawler({\n    launchContext: {\n        // Here you can set options that are passed to the playwright .launch() function.\n        launchOptions: {\n            headless: true,\n        },\n    },\n\n    // Stop crawling after several pages\n    maxRequestsPerCrawl: 50,\n\n    // This function will be called for each URL to crawl.\n    // Here you can write the Playwright scripts you are familiar with,\n    // with the exception that browsers and pages are automatically managed by the Apify SDK.\n    // The function accepts a single parameter, which is an object with a lot of properties,\n    // the most important being:\n    // - request: an instance of the Request class with information such as URL and HTTP method\n    // - page: Playwright's Page object (see https://playwright.dev/docs/api/class-page)\n    async requestHandler({ request, page, enqueueLinks }) {\n        console.log(`Processing ${request.url}...`);\n\n        // A function to be evaluated by Playwright within the browser context.\n        const data = await page.$$eval('.athing', ($posts) => {\n            const scrapedData = [];\n\n            // We're getting the title, rank and URL of each post on Hacker News.\n            $posts.forEach(($post) => {\n                scrapedData.push({\n                    title: $post.querySelector('.title a').innerText,\n                    rank: $post.querySelector('.rank').innerText,\n                    href: $post.querySelector('.title a').href,\n                });\n            });\n\n            return scrapedData;\n        });\n\n        // Store the results to the default dataset.\n        await dataset.pushData(data);\n\n        // Find a link to the next page and enqueue it if it exists.\n        const infos = await enqueueLinks({\n            selector: '.morelink',\n        });\n\n        if (infos.length === 0) console.log(`${request.url} is the last page!`);\n    },\n\n    // This function is called if the page processing failed more than maxRequestRetries+1 times.\n    failedRequestHandler({ request }) {\n        console.log(`Request ${request.url} failed too many times.`);\n    },\n});\n\nawait crawler.addRequests(['https://news.ycombinator.com/']);\n\n// Run the crawler and wait for it to finish.\nawait crawler.run();\n\nconsole.log('Crawler finished.');\n"))}w.isMDXComponent=!0}}]);