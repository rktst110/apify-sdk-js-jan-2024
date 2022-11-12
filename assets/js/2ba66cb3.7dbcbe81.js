"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[245],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(r),h=a,d=m["".concat(p,".").concat(h)]||m[h]||c[h]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(87462),a=r(67294),o=r(86010),l=r(72389),s=r(67392),p=r(7094),i=r(12466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,r,l=e.lazy,m=e.block,h=e.defaultValue,d=e.values,w=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===h?h:null!=(t=null!=h?h:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:v[0].props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,p.U)(),x=k.tabGroupChoices,C=k.setTabGroupChoices,T=(0,a.useState)(b),P=T[0],N=T[1],O=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=w){var j=x[w];null!=j&&j!==P&&g.some((function(e){return e.value===j}))&&N(j)}var A=function(e){var t=e.currentTarget,r=O.indexOf(t),n=g[r].value;n!==P&&(E(t),N(n),null!=w&&C(w,String(n)))},Z=function(e){var t,r=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":var n,a=O.indexOf(e.currentTarget)+1;r=null!=(n=O[a])?n:O[0];break;case"ArrowLeft":var o,l=O.indexOf(e.currentTarget)-1;r=null!=(o=O[l])?o:O[O.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},f)},g.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return O.push(e)},onKeyDown:Z,onClick:A},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":P===t})}),null!=r?r:t)}))),l?(0,a.cloneElement)(v.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function h(e){var t=(0,l.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},45841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>m,toc:()=>d});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=r(65488),s=r(85162),p=r(41435);var i=["components"],u={id:"capture-screenshot",title:"Capture a screenshot using Puppeteer"},c=void 0,m={unversionedId:"examples/capture-screenshot",id:"version-3.0/examples/capture-screenshot",title:"Capture a screenshot using Puppeteer",description:"To run this example on the Apify Platform, select the apify/actor-node-puppeteer-chrome image for your Dockerfile.",source:"@site/versioned_docs/version-3.0/examples/puppeteer_capture_screenshot.mdx",sourceDirName:"examples",slug:"/examples/capture-screenshot",permalink:"/docs/examples/capture-screenshot",draft:!1,tags:[],version:"3.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1668214257,formattedLastUpdatedAt:"Nov 12, 2022",frontMatter:{id:"capture-screenshot",title:"Capture a screenshot using Puppeteer"},sidebar:"docs",previous:{title:"Playwright crawler",permalink:"/docs/examples/playwright-crawler"},next:{title:"Puppeteer crawler",permalink:"/docs/examples/puppeteer-crawler"}},h={},d=[],w={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,o.kt)("p",null,"This example captures a screenshot of a web page using ",(0,o.kt)("inlineCode",{parentName:"p"},"Puppeteer"),". It would look almost exactly the same with ",(0,o.kt)("inlineCode",{parentName:"p"},"Playwright"),"."),(0,o.kt)(l.Z,{groupId:"puppeteer-capture-screenshot",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"pagescreenshot",label:"Page Screenshot",mdxType:"TabItem"},(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"page.screenshot()"),":"),(0,o.kt)(p.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { launchPuppeteer } from 'crawlee';\n\nawait Actor.init();\n\nconst url = 'http://www.example.com/';\n// Start a browser\nconst browser = await launchPuppeteer();\n\n// Open new tab in the browser\nconst page = await browser.newPage();\n\n// Navigate to the URL\nawait page.goto(url);\n\n// Capture the screenshot\nconst screenshot = await page.screenshot();\n\n// Save the screenshot to the default key-value store\nawait Actor.setValue('my-key', screenshot, { contentType: 'image/png' });\n\n// Close Puppeteer\nawait browser.close();\n\nawait Actor.exit();\n")),(0,o.kt)(s.Z,{value:"crawlerutilsscreenshot",label:"Crawler Utils Screenshot",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"puppeteerUtils.saveSnapshot()"),":"),(0,o.kt)(p.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { launchPuppeteer, utils } from 'crawlee';\n\nawait Actor.init();\n\nconst url = 'http://www.example.com/';\n// Start a browser\nconst browser = await launchPuppeteer();\n\n// Open new tab in the browser\nconst page = await browser.newPage();\n\n// Navigate to the URL\nawait page.goto(url);\n\n// Capture the screenshot\nawait utils.puppeteer.saveSnapshot(page, { key: 'my-key', saveHtml: false });\n\n// Close Puppeteer\nawait browser.close();\n\nawait Actor.exit();\n"))),(0,o.kt)("p",null,"This example captures a screenshot of multiple web pages when using ",(0,o.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),":"),(0,o.kt)(l.Z,{groupId:"puppeteer-capture-screenshot",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"pagescreenshot",label:"Page Screenshot",mdxType:"TabItem"},(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"page.screenshot()"),":"),(0,o.kt)(p.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { PuppeteerCrawler } from 'crawlee';\n\nawait Actor.init();\n\n// Create a PuppeteerCrawler\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ request, page }) {\n        // Capture the screenshot with Puppeteer\n        const screenshot = await page.screenshot();\n        // Convert the URL into a valid key\n        const key = request.url.replace(/[:/]/g, '_');\n        // Save the screenshot to the default key-value store\n        await Actor.setValue(key, screenshot, { contentType: 'image/png' });\n    },\n});\n\n// Run the crawler\nawait crawler.run([\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n]);\n\nawait Actor.exit();\n")),(0,o.kt)(s.Z,{value:"crawlerutilsscreenshot",label:"Crawler Utils Screenshot",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"puppeteerUtils.saveSnapshot()"),":"),(0,o.kt)(p.Z,{className:"language-js",mdxType:"CodeBlock"},"import { PuppeteerCrawler, puppeteerUtils } from 'crawlee';\nimport { Actor } from 'apify';\n\nawait Actor.init();\n\n// Create a PuppeteerCrawler\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ request, page }) {\n        // Convert the URL into a valid key\n        const key = request.url.replace(/[:/]/g, '_');\n        // Capture the screenshot\n        await puppeteerUtils.saveSnapshot(page, { key, saveHtml: false });\n    },\n});\n\n// Run the crawler\nawait crawler.run([\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n]);\n\nawait Actor.exit();\n"))),(0,o.kt)("p",null,"In both examples using ",(0,o.kt)("inlineCode",{parentName:"p"},"page.screenshot()"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," variable is created based on the URL of the web page. This variable is used as the key when saving\neach screenshot into a key-value store."))}f.isMDXComponent=!0}}]);