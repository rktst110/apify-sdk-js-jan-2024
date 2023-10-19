"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5571],{96020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],i={id_old:"version-1.3-crawl-sitemap",title:"Crawl a sitemap",id:"crawl-sitemap"},l=void 0,c={unversionedId:"examples/crawl-sitemap",id:"version-1.3/examples/crawl-sitemap",title:"Crawl a sitemap",description:"This example downloads and crawls the URLs from a sitemap.",source:"@site/versioned_docs/version-1.3/examples/crawl_sitemap.md",sourceDirName:"examples",slug:"/examples/crawl-sitemap",permalink:"/sdk/js/docs/1.3/examples/crawl-sitemap",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1697666897,formattedLastUpdatedAt:"Oct 18, 2023",frontMatter:{id_old:"version-1.3-crawl-sitemap",title:"Crawl a sitemap",id:"crawl-sitemap"},sidebar:"version-1.3/docs",previous:{title:"Crawl a single URL",permalink:"/sdk/js/docs/1.3/examples/crawl-single-url"},next:{title:"Crawl some links on a website",permalink:"/sdk/js/docs/1.3/examples/crawl-some-links"}},p={},u=[],m={toc:u},f="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This example downloads and crawls the URLs from a sitemap."),(0,s.kt)("p",null,"\\\nUsing ",(0,s.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Add URLs to a RequestList from a sitemap\n    const sources = [{ requestsFromUrl: 'https://apify.com/sitemap.xml' }];\n    const requestList = await Apify.openRequestList('start-urls', sources);\n\n    // Function called for each URL\n    const handlePageFunction = async ({ request }) => {\n        console.log(request.url);\n    };\n\n    // Create a crawler that uses Cheerio\n    const crawler = new Apify.CheerioCrawler({\n        requestList,\n        handlePageFunction,\n        maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n    });\n\n    // Run the crawler\n    await crawler.run();\n});\n")),(0,s.kt)("p",null,"\\\nUsing ",(0,s.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),":"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"To run this example on the Apify Platform, select the ",(0,s.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Add URLs to a RequestList from a sitemap\n    const sources = [{ requestsFromUrl: 'https://apify.com/sitemap.xml' }];\n    const requestList = await Apify.openRequestList('start-urls', sources);\n\n    // Function called for each URL\n    const handlePageFunction = async ({ request }) => {\n        console.log(request.url);\n    };\n\n    // Create a crawler that runs Puppeteer\n    const crawler = new Apify.PuppeteerCrawler({\n        requestList,\n        handlePageFunction,\n        maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n    });\n\n    // Run the crawler\n    await crawler.run();\n});\n")),(0,s.kt)("p",null,"\\\nUsing ",(0,s.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"),":"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"To run this example on the Apify Platform, select the ",(0,s.kt)("inlineCode",{parentName:"p"},"apify/actor-node-playwright-chrome")," image for your Dockerfile.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Add URLs to a RequestList from a sitemap\n    const sources = [{ requestsFromUrl: 'https://apify.com/sitemap.xml' }];\n    const requestList = await Apify.openRequestList('start-urls', sources);\n\n    // Function called for each URL\n    const handlePageFunction = async ({ request }) => {\n        console.log(request.url);\n    };\n\n    // Create a crawler that runs Playwright\n    const crawler = new Apify.PlaywrightCrawler({\n        requestList,\n        handlePageFunction,\n        maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n    });\n\n    // Run the crawler\n    await crawler.run();\n});\n")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||s;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);