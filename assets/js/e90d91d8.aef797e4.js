"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5640],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||p;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<p;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),o=n(63366),p=(n(67294),n(3905)),a=["components"],l={id_old:"version-1.3-puppeteer-launch-context",title:"PuppeteerLaunchContext",id:"puppeteer-launch-context"},i=void 0,s={unversionedId:"typedefs/puppeteer-launch-context",id:"version-1.3/typedefs/puppeteer-launch-context",title:"PuppeteerLaunchContext",description:"Apify extends the launch options of Puppeteer. You can use any of the Puppeteer compatible",source:"@site/versioned_docs/version-1.3/typedefs/PuppeteerLaunchContext.md",sourceDirName:"typedefs",slug:"/typedefs/puppeteer-launch-context",permalink:"/docs/1.3/typedefs/puppeteer-launch-context",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1667827038,formattedLastUpdatedAt:"Nov 7, 2022",frontMatter:{id_old:"version-1.3-puppeteer-launch-context",title:"PuppeteerLaunchContext",id:"puppeteer-launch-context"},sidebar:"version-1.3/docs",previous:{title:"PuppeteerCrawlerOptions",permalink:"/docs/1.3/typedefs/puppeteer-crawler-options"},next:{title:"ProxyConfigurationOptions",permalink:"/docs/1.3/typedefs/proxy-configuration-options"}},u={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>launchOptions</code>",id:"launchoptions",level:3},{value:"<code>proxyUrl</code>",id:"proxyurl",level:3},{value:"<code>userAgent</code>",id:"useragent",level:3},{value:"<code>useChrome</code>",id:"usechrome",level:3},{value:"<code>launcher</code>",id:"launcher",level:3},{value:"<code>stealth</code>",id:"stealth",level:3},{value:"<code>stealthOptions</code>",id:"stealthoptions",level:3}],d={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("a",{name:"puppeteerlaunchcontext"}),(0,p.kt)("p",null,"Apify extends the launch options of Puppeteer. You can use any of the Puppeteer compatible\n",(0,p.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&show=api-puppeteerlaunchoptions",target:"_blank",rel:"noopener"},(0,p.kt)("inlineCode",{parentName:"a"},"LaunchOptions"))," options by providing the ",(0,p.kt)("inlineCode",{parentName:"p"},"launchOptions")," property."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"// launch a headless Chrome (not Chromium)\nconst launchContext = {\n    // Apify helpers\n    useChrome: true,\n    proxyUrl: 'http://user:password@some.proxy.com'\n    // Native Puppeteer options\n    launchOptions: {\n        headless: true,\n        args: ['--some-flag'],\n    }\n}\n")),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"launchoptions"},(0,p.kt)("inlineCode",{parentName:"h3"},"launchOptions")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"LaunchOptions")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"puppeteer.launch")," ",(0,p.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v5.5.0&show=api-puppeteerlaunchoptions",target:"_blank",rel:"noopener"},"options")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"proxyurl"},(0,p.kt)("inlineCode",{parentName:"h3"},"proxyUrl")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("p",null,"URL to a HTTP proxy server. It must define the port number, and it may also contain proxy username and password."),(0,p.kt)("p",null,"Example: ",(0,p.kt)("inlineCode",{parentName:"p"},"http://bob:pass123@proxy.example.com:1234"),"."),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"useragent"},(0,p.kt)("inlineCode",{parentName:"h3"},"userAgent")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"User-Agent")," HTTP header used by the browser. If not provided, the function sets ",(0,p.kt)("inlineCode",{parentName:"p"},"User-Agent")," to a reasonable default to reduce the chance of\ndetection of the crawler."),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"usechrome"},(0,p.kt)("inlineCode",{parentName:"h3"},"useChrome")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,p.kt)("code",null," = false")),(0,p.kt)("p",null,"If ",(0,p.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"executablePath")," is not set, Puppeteer will launch full Google Chrome browser available on the machine rather than the bundled Chromium.\nThe path to Chrome executable is taken from the ",(0,p.kt)("inlineCode",{parentName:"p"},"APIFY_CHROME_EXECUTABLE_PATH")," environment variable if provided, or defaults to the typical Google\nChrome executable location specific for the operating system. By default, this option is ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"launcher"},(0,p.kt)("inlineCode",{parentName:"h3"},"launcher")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"*")),(0,p.kt)("p",null,"Already required module (",(0,p.kt)("inlineCode",{parentName:"p"},"Object"),"). This enables usage of various Puppeteer wrappers such as ",(0,p.kt)("inlineCode",{parentName:"p"},"puppeteer-extra"),"."),(0,p.kt)("p",null,"Take caution, because it can cause all kinds of unexpected errors and weird behavior. Apify SDK is not tested with any other library besides\n",(0,p.kt)("inlineCode",{parentName:"p"},"puppeteer")," itself."),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"stealth"},(0,p.kt)("inlineCode",{parentName:"h3"},"stealth")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean")),(0,p.kt)("p",null,"This setting hides most of the known properties that identify headless Chrome and makes it nearly undetectable. It is recommended to use it together\nwith the ",(0,p.kt)("inlineCode",{parentName:"p"},"useChrome")," set to ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"stealthoptions"},(0,p.kt)("inlineCode",{parentName:"h3"},"stealthOptions")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("a",{parentName:"p",href:"../typedefs/stealth-options",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"StealthOptions"))),(0,p.kt)("p",null,"Using this configuration, you can disable some of the hiding tricks. For these settings to take effect ",(0,p.kt)("inlineCode",{parentName:"p"},"stealth")," must be set to true"),(0,p.kt)("hr",null))}h.isMDXComponent=!0}}]);