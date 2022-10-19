"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=r,w=m["".concat(i,".").concat(h)]||m[h]||u[h]||p;return n?a.createElement(w,o(o({ref:t},c),{},{components:n})):a.createElement(w,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<p;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(87462),r=n(63366),p=(n(67294),n(3905)),o=["components"],s={id:"capture-screenshot",title:"Capture a screenshot"},i=void 0,l={unversionedId:"examples/capture-screenshot",id:"version-2.3/examples/capture-screenshot",title:"Capture a screenshot",description:"To run this example on the Apify Platform, select the apify/actor-node-puppeteer-chrome image for your Dockerfile.",source:"@site/versioned_docs/version-2.3/examples/capture_screenshot.md",sourceDirName:"examples",slug:"/examples/capture-screenshot",permalink:"/docs/2.3/examples/capture-screenshot",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1666195654,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{id:"capture-screenshot",title:"Capture a screenshot"},sidebar:"version-2.3/docs",previous:{title:"Call actor",permalink:"/docs/2.3/examples/call-actor"},next:{title:"Cheerio crawler",permalink:"/docs/2.3/examples/cheerio-crawler"}},c={},u=[],m={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,p.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"To run this example on the Apify Platform, select the ",(0,p.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,p.kt)("p",null,"This example captures a screenshot of a web page using ",(0,p.kt)("inlineCode",{parentName:"p"},"Puppeteer"),". It would look almost exactly the same with ",(0,p.kt)("inlineCode",{parentName:"p"},"Playwright"),"."),(0,p.kt)("p",null,"\\\nUsing ",(0,p.kt)("inlineCode",{parentName:"p"},"page.screenshot()"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    const url = 'http://www.example.com/';\n    // Start a browser\n    const browser = await Apify.launchPuppeteer();\n    // Open new tab in the browser\n    const page = await browser.newPage();\n    // Navigate to the URL\n    await page.goto(url);\n    // Capture the screenshot\n    const screenshot = await page.screenshot();\n    // Save the screenshot to the default key-value store\n    await Apify.setValue('my-key', screenshot, { contentType: 'image/png' });\n    // Close Puppeteer\n    await browser.close();\n});\n")),(0,p.kt)("p",null,"\\\nUsing ",(0,p.kt)("inlineCode",{parentName:"p"},"Apify.utils.puppeteer.saveSnapshot()"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    const url = 'http://www.example.com/';\n    // Start a browser\n    const browser = await Apify.launchPuppeteer();\n    // Open new tab in the browser\n    const page = await browser.newPage();\n    // Navigate to the URL\n    await page.goto(url);\n    // Capture the screenshot\n    await Apify.utils.puppeteer.saveSnapshot(page, { key: 'my-key', saveHtml: false });\n    // Close Puppeteer\n    await browser.close();\n});\n")),(0,p.kt)("p",null,"This example captures a screenshot of multiple web pages when using ",(0,p.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),":"),(0,p.kt)("p",null,"\\\nUsing ",(0,p.kt)("inlineCode",{parentName:"p"},"page.screenshot()"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Add URLs to a RequestList\n    const requestList = await Apify.openRequestList('start-urls',\n        [\n            { url: 'http://www.example.com/page-1' },\n            { url: 'http://www.example.com/page-2' },\n            { url: 'http://www.example.com/page-3' },\n        ]);\n    // Function called for each URL\n    const handlePageFunction = async ({ request, page }) => {\n        // Capture the screenshot with Puppeteer\n        const screenshot = await page.screenshot();\n        // Convert the URL into a valid key\n        const key = request.url.replace(/[:/]/g, '_');\n        // Save the screenshot to the default key-value store\n        await Apify.setValue(key, screenshot, { contentType: 'image/png' });\n    };\n    // Create a PuppeteerCrawler\n    const crawler = new Apify.PuppeteerCrawler({\n        requestList,\n        handlePageFunction,\n    });\n    // Run the crawler\n    await crawler.run();\n});\n")),(0,p.kt)("p",null,"\\\nUsing ",(0,p.kt)("inlineCode",{parentName:"p"},"Apify.utils.puppeteer.saveSnapshot()"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Add URLs to a RequestList\n    const requestList = await Apify.openRequestList('start-urls',\n        [\n            { url: 'http://www.example.com/page-1' },\n            { url: 'http://www.example.com/page-2' },\n            { url: 'http://www.example.com/page-3' },\n        ]);\n    // Function called for each URL\n    const handlePageFunction = async ({ request, page }) => {\n        // Convert the URL into a valid key\n        const key = request.url.replace(/[:/]/g, '_');\n        // Capture the screenshot\n        await Apify.utils.puppeteer.saveSnapshot(page, { key, saveHtml: false });\n    };\n    // Create a PuppeteerCrawler\n    const crawler = new Apify.PuppeteerCrawler({\n        requestList,\n        handlePageFunction,\n    });\n    // Run the crawler\n    await crawler.run();\n});\n")),(0,p.kt)("p",null,"In both examples using ",(0,p.kt)("inlineCode",{parentName:"p"},"page.screenshot()"),", a ",(0,p.kt)("inlineCode",{parentName:"p"},"key")," variable is created based on the URL of the web page.\nThis variable is used as the key when saving each screenshot into a key-value store."))}h.isMDXComponent=!0}}]);