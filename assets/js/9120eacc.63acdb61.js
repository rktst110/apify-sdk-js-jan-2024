"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8178],{95556:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],i={id_old:"version-1.3-quick-start",title:"Quick Start",id:"quick-start"},p=void 0,s={unversionedId:"guides/quick-start",id:"version-1.3/guides/quick-start",title:"Quick Start",description:"This short tutorial will set you up to start using Apify SDK in a minute or two.",source:"@site/versioned_docs/version-1.3/guides/quick_start.md",sourceDirName:"guides",slug:"/guides/quick-start",permalink:"/sdk/js/docs/1.3/guides/quick-start",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1678453207,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id_old:"version-1.3-quick-start",title:"Quick Start",id:"quick-start"},sidebar:"version-1.3/docs",previous:{title:"Motivation",permalink:"/sdk/js/docs/1.3/guides/motivation"},next:{title:"Apify Platform",permalink:"/sdk/js/docs/1.3/guides/apify-platform"}},u={},c=[{value:"Local stand-alone usage",id:"local-stand-alone-usage",level:2},{value:"Local usage with Apify command-line interface (CLI)",id:"local-usage-with-apify-command-line-interface-cli",level:2},{value:"Usage on the Apify platform",id:"usage-on-the-apify-platform",level:2}],d={toc:c},f="wrapper";function m(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)(f,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This short tutorial will set you up to start using Apify SDK in a minute or two.\nIf you want to learn more, proceed to the ",(0,o.kt)("a",{parentName:"p",href:"../guides/getting-started",target:null,rel:null},"Getting Started"),"\ntutorial that will take you step by step through creating your first scraper."),(0,o.kt)("h2",{id:"local-stand-alone-usage"},"Local stand-alone usage"),(0,o.kt)("p",null,"Apify SDK requires ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/",target:"_blank",rel:"noopener"},"Node.js")," 10.17 or later, with the exception of Node.js 11.\nAdd Apify SDK to any Node.js project by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install apify playwright\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Neither ",(0,o.kt)("inlineCode",{parentName:"p"},"playwright")," nor ",(0,o.kt)("inlineCode",{parentName:"p"},"puppeteer")," are bundled with the SDK to reduce install size and allow greater\nflexibility. That's why we install it with NPM. You can choose one, both, or neither.")),(0,o.kt)("p",null,"Run the following example to perform a recursive crawl of a website using Playwright. For more examples showcasing various features of the Apify SDK,\n",(0,o.kt)("a",{parentName:"p",href:"../examples/crawl-multiple-urls",target:null,rel:null},"see the Examples section of the documentation"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\n// Apify.main is a helper function, you don't need to use it.\nApify.main(async () => {\n    const requestQueue = await Apify.openRequestQueue();\n    // Choose the first URL to open.\n    await requestQueue.addRequest({ url: 'https://www.iana.org/' });\n\n    const crawler = new Apify.PlaywrightCrawler({\n        requestQueue,\n        handlePageFunction: async ({ request, page }) => {\n            // Extract HTML title of the page.\n            const title = await page.title();\n            console.log(`Title of ${request.url}: ${title}`);\n\n            // Add URLs that match the provided pattern.\n            await Apify.utils.enqueueLinks({\n                page,\n                requestQueue,\n                pseudoUrls: ['https://www.iana.org/[.*]'],\n            });\n        },\n    });\n\n    await crawler.run();\n});\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To read more about what pseudo-URL is, check the ",(0,o.kt)("a",{parentName:"p",href:"getting_started#introduction-to-pseudo-urls",target:null,rel:null},"getting-started"),".")),(0,o.kt)("p",null,"When you run the example, you should see Apify SDK automating a Chrome browser."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chrome Scrape",src:a(91966).Z,width:"705",height:"529"})),(0,o.kt)("p",null,"By default, Apify SDK stores data to ",(0,o.kt)("inlineCode",{parentName:"p"},"./apify_storage")," in the current working directory. You can override this behavior by setting either the\n",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_TOKEN")," environment variable. For details, see ",(0,o.kt)("a",{parentName:"p",href:"../guides/environment-variables",target:null,rel:null},"Environment variables"),", ",(0,o.kt)("a",{parentName:"p",href:"../guides/request-storage",target:null,rel:null},"Request storage")," and ",(0,o.kt)("a",{parentName:"p",href:"../guides/result-storage",target:null,rel:null},"Result storage"),"."),(0,o.kt)("h2",{id:"local-usage-with-apify-command-line-interface-cli"},"Local usage with Apify command-line interface (CLI)"),(0,o.kt)("p",null,"To avoid the need to set the environment variables manually, to create a boilerplate of your project, and to enable pushing and running your code on\nthe ",(0,o.kt)("a",{parentName:"p",href:"../guides/apify-platform",target:null,rel:null},"Apify platform"),", you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-cli",target:"_blank",rel:"noopener"},"Apify command-line interface (CLI)")," tool."),(0,o.kt)("p",null,"Install the CLI by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm -g install apify-cli\n")),(0,o.kt)("p",null,"Now create a boilerplate of your new web crawling project by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apify create my-hello-world\n")),(0,o.kt)("p",null,'The CLI will prompt you to select a project boilerplate template - just pick "Hello world". The tool will create a directory called ',(0,o.kt)("inlineCode",{parentName:"p"},"my-hello-world"),"\nwith a Node.js project files. You can run the project as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-hello-world\napify run\n")),(0,o.kt)("p",null,"By default, the crawling data will be stored in a local directory at ",(0,o.kt)("inlineCode",{parentName:"p"},"./apify_storage"),". For example, the input JSON file for the actor is expected to\nbe in the default key-value store in ",(0,o.kt)("inlineCode",{parentName:"p"},"./apify_storage/key_value_stores/default/INPUT.json"),"."),(0,o.kt)("p",null,"Now you can easily deploy your code to the Apify platform by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apify login\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apify push\n")),(0,o.kt)("p",null,"Your script will be uploaded to the Apify platform and built there so that it can be run. For more information, view the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/cli",target:"_blank",rel:"noopener"},"Apify Actor")," documentation."),(0,o.kt)("h2",{id:"usage-on-the-apify-platform"},"Usage on the Apify platform"),(0,o.kt)("p",null,"You can also develop your web scraping project in an online code editor directly on the ",(0,o.kt)("a",{parentName:"p",href:"../guides/apify-platform",target:null,rel:null},"Apify platform"),".\nYou'll need to have an Apify Account. Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://my.apify.com/actors",target:"_blank",rel:"noopener"},"Actors")," page in the app, click ",(0,o.kt)("i",null,"Create new"),"\nand then go to the ",(0,o.kt)("i",null,"Source")," tab and start writing your code or paste one of the examples from the Examples section."),(0,o.kt)("p",null,"For more information, view the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/actor/quick-start",target:"_blank",rel:"noopener"},"Apify actors quick start guide"),"."))}m.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(a),f=r,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},91966:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/chrome_scrape-a64af551de8be5fe1ced2182dc0a8dcc.gif"}}]);