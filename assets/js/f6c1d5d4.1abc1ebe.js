"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return r?a.createElement(h,p(p({ref:t},u),{},{components:r})):a.createElement(h,p({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var s=2;s<l;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74554:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),p=["components"],o={id_old:"version-1.3-puppeteer-crawler",title:"PuppeteerCrawler",id:"puppeteer-crawler"},i=void 0,s={unversionedId:"api/puppeteer-crawler",id:"version-1.3/api/puppeteer-crawler",title:"PuppeteerCrawler",description:"Provides a simple framework for parallel crawling of web pages using headless Chrome with Puppeteer. The",source:"@site/versioned_docs/version-1.3/api/PuppeteerCrawler.md",sourceDirName:"api",slug:"/api/puppeteer-crawler",permalink:"/apify-sdk-js/docs/1.3/api/puppeteer-crawler",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1660815986,formattedLastUpdatedAt:"Aug 18, 2022",frontMatter:{id_old:"version-1.3-puppeteer-crawler",title:"PuppeteerCrawler",id:"puppeteer-crawler"},sidebar:"version-1.3/docs",previous:{title:"PlaywrightCrawler",permalink:"/apify-sdk-js/docs/1.3/api/playwright-crawler"},next:{title:"Statistics",permalink:"/apify-sdk-js/docs/1.3/api/statistics"}},u={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>stats</code>",id:"stats",level:3},{value:"<code>requestList</code>",id:"requestlist",level:3},{value:"<code>requestQueue</code>",id:"requestqueue",level:3},{value:"<code>sessionPool</code>",id:"sessionpool",level:3},{value:"<code>proxyConfiguration</code>",id:"proxyconfiguration",level:3},{value:"<code>browserPool</code>",id:"browserpool",level:3},{value:"<code>autoscaledPool</code>",id:"autoscaledpool",level:3},{value:"<code>new PuppeteerCrawler(options)</code>",id:"new-puppeteercrawleroptions",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"puppeteercrawler"}),(0,l.kt)("p",null,"Provides a simple framework for parallel crawling of web pages using headless Chrome with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer",target:"_blank",rel:"noopener"},"Puppeteer"),". The\nURLs to crawl are fed either from a static list of URLs or from a dynamic queue of URLs enabling recursive crawling of websites."),(0,l.kt)("p",null,"Since ",(0,l.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")," uses headless Chrome to download web pages and extract data, it is useful for crawling of websites that require to execute\nJavaScript. If the target website doesn't need JavaScript, consider using ",(0,l.kt)("a",{parentName:"p",href:"../api/cheerio-crawler",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"CheerioCrawler")),", which downloads the pages using\nraw HTTP requests and is about 10x faster."),(0,l.kt)("p",null,"The source URLs are represented using ",(0,l.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Request"))," objects that are fed from ",(0,l.kt)("a",{parentName:"p",href:"../api/request-list",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestList"))," or\n",(0,l.kt)("a",{parentName:"p",href:"../api/request-queue",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestQueue"))," instances provided by the\n",(0,l.kt)("a",{parentName:"p",href:"../typedefs/puppeteer-crawler-options#requestlist",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawlerOptions.requestList"))," or\n",(0,l.kt)("a",{parentName:"p",href:"../typedefs/puppeteer-crawler-options#requestqueue",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawlerOptions.requestQueue"))," constructor options, respectively."),(0,l.kt)("p",null,"If both ",(0,l.kt)("a",{parentName:"p",href:"../typedefs/puppeteer-crawler-options#requestlist",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawlerOptions.requestList"))," and\n",(0,l.kt)("a",{parentName:"p",href:"../typedefs/puppeteer-crawler-options#requestqueue",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawlerOptions.requestQueue"))," are used, the instance first processes URLs from the\n",(0,l.kt)("a",{parentName:"p",href:"../api/request-list",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestList"))," and automatically enqueues all of them to ",(0,l.kt)("a",{parentName:"p",href:"../api/request-queue",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestQueue"))," before it starts their\nprocessing. This ensures that a single URL is not crawled multiple times."),(0,l.kt)("p",null,"The crawler finishes when there are no more ",(0,l.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Request"))," objects to crawl."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")," opens a new Chrome page (i.e. tab) for each ",(0,l.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Request"))," object to crawl and then calls the function provided by\nuser as the ",(0,l.kt)("a",{parentName:"p",href:"../typedefs/puppeteer-crawler-options#handlepagefunction",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawlerOptions.handlePageFunction"))," option."),(0,l.kt)("p",null,"New pages are only opened when there is enough free CPU and memory available, using the functionality provided by the\n",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," class. All ",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," configuration options can be passed to the\n",(0,l.kt)("a",{parentName:"p",href:"../typedefs/puppeteer-crawler-options#autoscaledpooloptions",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawlerOptions.autoscaledPoolOptions"))," parameter of the ",(0,l.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),"\nconstructor. For user convenience, the ",(0,l.kt)("inlineCode",{parentName:"p"},"minConcurrency")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"maxConcurrency")," ",(0,l.kt)("a",{parentName:"p",href:"../typedefs/autoscaled-pool-options",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPoolOptions"))," are\navailable directly in the ",(0,l.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")," constructor."),(0,l.kt)("p",null,"Note that the pool of Puppeteer instances is internally managed by the ",(0,l.kt)("inlineCode",{parentName:"p"},"BrowserPool")," class."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example usage:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const crawler = new Apify.PuppeteerCrawler({\n    requestList,\n    handlePageFunction: async ({ page, request }) => {\n        // This function is called to extract data from a single web page\n        // 'page' is an instance of Puppeteer.Page with page.goto(request.url) already called\n        // 'request' is an instance of Request class with information about the page to load\n        await Apify.pushData({\n            title: await page.title(),\n            url: request.url,\n            succeeded: true,\n        });\n    },\n    handleFailedRequestFunction: async ({ request }) => {\n        // This function is called when the crawling of a request failed too many times\n        await Apify.pushData({\n            url: request.url,\n            succeeded: false,\n            errors: request.errorMessages,\n        });\n    },\n});\n\nawait crawler.run();\n")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"stats"},(0,l.kt)("inlineCode",{parentName:"h3"},"stats")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../api/statistics",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Statistics"))),(0,l.kt)("p",null,"Contains statistics about the current run."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"requestlist"},(0,l.kt)("inlineCode",{parentName:"h3"},"requestList")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../api/request-list",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestList"))),(0,l.kt)("p",null,"A reference to the underlying ",(0,l.kt)("a",{parentName:"p",href:"../api/request-list",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestList"))," class that manages the crawler's ",(0,l.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Request")),"s. Only available if\nused by the crawler."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"requestqueue"},(0,l.kt)("inlineCode",{parentName:"h3"},"requestQueue")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../api/request-queue",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestQueue"))),(0,l.kt)("p",null,"A reference to the underlying ",(0,l.kt)("a",{parentName:"p",href:"../api/request-queue",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestQueue"))," class that manages the crawler's ",(0,l.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Request")),"s. Only available if\nused by the crawler."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sessionpool"},(0,l.kt)("inlineCode",{parentName:"h3"},"sessionPool")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../api/session-pool",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"SessionPool"))),(0,l.kt)("p",null,"A reference to the underlying ",(0,l.kt)("a",{parentName:"p",href:"../api/session-pool",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"SessionPool"))," class that manages the crawler's ",(0,l.kt)("a",{parentName:"p",href:"../api/session",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Session")),"s. Only available if\nused by the crawler."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"proxyconfiguration"},(0,l.kt)("inlineCode",{parentName:"h3"},"proxyConfiguration")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../api/proxy-configuration",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"ProxyConfiguration"))),(0,l.kt)("p",null,"A reference to the underlying ",(0,l.kt)("a",{parentName:"p",href:"../api/proxy-configuration",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"ProxyConfiguration"))," class that manages the crawler's proxies. Only available if used by\nthe crawler."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"browserpool"},(0,l.kt)("inlineCode",{parentName:"h3"},"browserPool")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"BrowserPool")),(0,l.kt)("p",null,"A reference to the underlying ",(0,l.kt)("inlineCode",{parentName:"p"},"BrowserPool")," class that manages the crawler's browsers. For more information about it, see the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apify/browser-pool",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"browser-pool")," module"),"."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"autoscaledpool"},(0,l.kt)("inlineCode",{parentName:"h3"},"autoscaledPool")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))),(0,l.kt)("p",null,"A reference to the underlying ",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," class that manages the concurrency of the crawler. Note that this property is\nonly initialized after calling the ",(0,l.kt)("a",{parentName:"p",href:"../api/cheerio-crawler#run",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"CheerioCrawler.run()"))," function. You can use it to change the concurrency settings on\nthe fly, to pause the crawler by calling ",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool#pause",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool.pause()"))," or to abort it by calling\n",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool#abort",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool.abort()")),"."),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"puppeteercrawler"}),(0,l.kt)("h2",{id:"new-puppeteercrawleroptions"},(0,l.kt)("inlineCode",{parentName:"h2"},"new PuppeteerCrawler(options)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"options")),": ",(0,l.kt)("a",{parentName:"li",href:"../typedefs/puppeteer-crawler-options",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawlerOptions"))," - All ",(0,l.kt)("inlineCode",{parentName:"li"},"PuppeteerCrawler")," parameters are passed via an options\nobject.")),(0,l.kt)("hr",null))}m.isMDXComponent=!0}}]);