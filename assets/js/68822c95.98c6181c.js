"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>s});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),u=d(n),s=i,N=u["".concat(p,".").concat(s)]||u[s]||m[s]||r;return n?a.createElement(N,l(l({ref:t},k),{},{components:n})):a.createElement(N,l({ref:t},k))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={id_old:"version-1.3-configuration",title:"Configuration",id:"configuration"},p=void 0,d={unversionedId:"api/configuration",id:"version-1.3/api/configuration",title:"Configuration",description:"Configuration is a value object holding the SDK configuration. We can use it in two ways:",source:"@site/versioned_docs/version-1.3/api/Configuration.md",sourceDirName:"api",slug:"/api/configuration",permalink:"/docs/1.3/api/configuration",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1661844536,formattedLastUpdatedAt:"Aug 30, 2022",frontMatter:{id_old:"version-1.3-configuration",title:"Configuration",id:"configuration"},sidebar:"version-1.3/docs",previous:{title:"Apify",permalink:"/docs/1.3/api/apify"},next:{title:"BasicCrawler",permalink:"/docs/1.3/api/basic-crawler"}},k={},m=[{value:"Supported Configuration Options",id:"supported-configuration-options",level:2},{value:"Advanced Configuration Options",id:"advanced-configuration-options",level:2},{value:"Not Supported environment variables",id:"not-supported-environment-variables",level:2},{value:"<code>new Configuration(options)</code>",id:"new-configurationoptions",level:2},{value:"<code>configuration.get(key, [defaultValue])</code>",id:"configurationgetkey-defaultvalue",level:2},{value:"<code>configuration.set(key, [value])</code>",id:"configurationsetkey-value",level:2},{value:"<code>configuration.getClient([options])</code>",id:"configurationgetclientoptions",level:2},{value:"<code>configuration.getStorageLocal([options])</code>",id:"configurationgetstoragelocaloptions",level:2},{value:"<code>configuration.createClient([options])</code>",id:"configurationcreateclientoptions",level:2},{value:"<code>configuration.createStorageLocal([options])</code>",id:"configurationcreatestoragelocaloptions",level:2},{value:"<code>Configuration.getGlobalConfig()</code>",id:"configurationgetglobalconfig",level:2}],u={toc:m};function s(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"configuration"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Configuration")," is a value object holding the SDK configuration. We can use it in two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When using ",(0,r.kt)("inlineCode",{parentName:"li"},"Apify")," class, we can get the instance configuration via ",(0,r.kt)("inlineCode",{parentName:"li"},"sdk.config"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { Apify } = require('apify');\n\nconst sdk = new Apify({ token: '123' });\nconsole.log(sdk.config.get('token')); // '123'\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"To get the global configuration (singleton instance). It will respect the environment variables.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(Configuration.getGlobalConfig().get('token')); // returns the token from APIFY_TOKEN env var\n")),(0,r.kt)("h2",{id:"supported-configuration-options"},"Supported Configuration Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"defaultDatasetId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_DEFAULT_DATASET_ID")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'default'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"defaultKeyValueStoreId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_DEFAULT_KEY_VALUE_STORE_ID")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'default'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"defaultRequestQueueId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_DEFAULT_REQUEST_QUEUE_ID")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'default'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"localStorageDir")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_LOCAL_STORAGE_DIR")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'./apify_storage'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"localStorageEnableWalMode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_LOCAL_STORAGE_ENABLE_WAL_MODE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"persistStateIntervalMillis")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_PERSIST_STATE_INTERVAL_MILLIS")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"60e3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"token")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_TOKEN")),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"advanced-configuration-options"},"Advanced Configuration Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"actorEventsWsUrl")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_ACTOR_EVENTS_WS_URL")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"actorId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_ACTOR_ID")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"actorRunId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_ACTOR_RUN_ID")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"actorTaskId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_ACTOR_TASK_ID")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apiBaseUrl")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_API_BASE_URL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'https://api.apify.com'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"containerPort")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_CONTAINER_PORT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4321"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"containerUrl")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_CONTAINER_URL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'http://localhost:4321'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"inputKey")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_INPUT_KEY")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'INPUT'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isAtHome")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_IS_AT_HOME")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metamorphAfterSleepMillis")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_METAMORPH_AFTER_SLEEP_MILLIS")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"300e3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"proxyHostname")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_PROXY_HOSTNAME")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'proxy.apify.com'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"proxyPassword")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_PROXY_PASSWORD")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"proxyPort")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_PROXY_PORT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"proxyStatusUrl")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_PROXY_STATUS_URL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'http://proxy.apify.com'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"userId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"APIFY_USER_ID")),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"not-supported-environment-variables"},"Not Supported environment variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MEMORY_MBYTES")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HEADLESS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"XVFB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CHROME_EXECUTABLE_PATH"))),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"exports.configuration"}),(0,r.kt)("h2",{id:"new-configurationoptions"},(0,r.kt)("inlineCode",{parentName:"h2"},"new Configuration(options)")),(0,r.kt)("p",null,"Creates new ",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration")," instance with provided options. Env vars will have precedence over those."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"options")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Record<string, (number|string|boolean)>"))),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"get"}),(0,r.kt)("h2",{id:"configurationgetkey-defaultvalue"},(0,r.kt)("inlineCode",{parentName:"h2"},"configuration.get(key, [defaultValue])")),(0,r.kt)("p",null,"Returns configured value. First checks the environment variables, then provided configuration, fallbacks to the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultValue")," argument if provided,\notherwise uses the default value as described in the above section."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"key")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[defaultValue]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"set"}),(0,r.kt)("h2",{id:"configurationsetkey-value"},(0,r.kt)("inlineCode",{parentName:"h2"},"configuration.set(key, [value])")),(0,r.kt)("p",null,"Sets value for given option. Only affects this ",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration")," instance, the value will not be propagated down to the env var. To reset a value, we\ncan omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," argument or pass ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," there."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"key")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[value]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"getclient"}),(0,r.kt)("h2",{id:"configurationgetclientoptions"},(0,r.kt)("inlineCode",{parentName:"h2"},"configuration.getClient([options])")),(0,r.kt)("p",null,"Returns cached instance of ",(0,r.kt)("a",{parentName:"p",href:"../api/apify",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"ApifyClient"))," using options as defined in the environment variables or in this\n",(0,r.kt)("a",{parentName:"p",href:"../api/configuration",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Configuration"))," instance. Only first call of this method will create the client, following calls will return the same client\ninstance."),(0,r.kt)("p",null,"Caching works based on the API URL and token, so calling this method with different options will return multiple instances, one for each variant of\nthe options."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Internal"),":\n",(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[options]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[token]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[maxRetries]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[minDelayBetweenRetriesMillis]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/apify",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"ApifyClient"))),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"getstoragelocal"}),(0,r.kt)("h2",{id:"configurationgetstoragelocaloptions"},(0,r.kt)("inlineCode",{parentName:"h2"},"configuration.getStorageLocal([options])")),(0,r.kt)("p",null,"Returns cached instance of ",(0,r.kt)("a",{parentName:"p",href:"../api/apify",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"ApifyStorageLocal"))," using options as defined in the environment variables or in this\n",(0,r.kt)("a",{parentName:"p",href:"../api/configuration",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Configuration"))," instance. Only first call of this method will create the client, following calls will return the same client\ninstance."),(0,r.kt)("p",null,"Caching works based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"storageDir")," option, so calling this method with different ",(0,r.kt)("inlineCode",{parentName:"p"},"storageDir")," will return multiple instances, one for each\ndirectory."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Internal"),":\n",(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[options]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[storageDir]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[enableWalMode]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," ",(0,r.kt)("code",null," = true"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/apify",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"ApifyStorageLocal"))),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"createclient"}),(0,r.kt)("h2",{id:"configurationcreateclientoptions"},(0,r.kt)("inlineCode",{parentName:"h2"},"configuration.createClient([options])")),(0,r.kt)("p",null,"Creates an instance of ApifyClient using options as defined in the environment variables or in this ",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration")," instance."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Internal"),":\n",(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[options]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[token]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[maxRetries]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[minDelayBetweenRetriesMillis]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/apify",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"ApifyClient"))),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"createstoragelocal"}),(0,r.kt)("h2",{id:"configurationcreatestoragelocaloptions"},(0,r.kt)("inlineCode",{parentName:"h2"},"configuration.createStorageLocal([options])")),(0,r.kt)("p",null,"Creates an instance of ApifyStorageLocal using options as defined in the environment variables or in this ",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration")," instance."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Internal"),":\n",(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[options]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[storageDir]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"[enableWalMode]")),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," ",(0,r.kt)("code",null," = true"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/apify",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"ApifyStorageLocal"))),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"getglobalconfig"}),(0,r.kt)("h2",{id:"configurationgetglobalconfig"},(0,r.kt)("inlineCode",{parentName:"h2"},"Configuration.getGlobalConfig()")),(0,r.kt)("p",null,"Returns the global configuration instance. It will respect the environment variables. As opposed to this method, we can also get the SDK instance\nconfiguration via ",(0,r.kt)("inlineCode",{parentName:"p"},"sdk.config")," property."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/configuration",target:null,rel:null},(0,r.kt)("inlineCode",{parentName:"a"},"Configuration"))),(0,r.kt)("hr",null))}s.isMDXComponent=!0}}]);