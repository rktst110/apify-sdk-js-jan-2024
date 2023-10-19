"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[0],{68889:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(88746),o=a(6141),i=a(6832);const d=function(e){var t=e.to,a=e.children,d=(0,o.E)(),s=d.version,l=d.isLast;if((0,i.default)().siteConfig.presets[0][1].docs.disableVersioning)return n.createElement(r.default,{to:"/api/"+t},a);var p=s+"/";return"current"===s?p="next/":l&&(p=""),n.createElement(r.default,{to:"/api/"+p+t},a)}},36782:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>m,toc:()=>y});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=(a(14563),a(68889));const d={code:"import { Actor } from 'apify';\n\nawait Actor.init();\n\nconst dataset = await Actor.openDataset<{ headingCount: number }>();\n\n// calling map function and filtering through mapped items\nconst moreThan5headers = (await dataset.map((item) => item.headingCount)).filter((count) => count > 5);\n\n// saving result of map to default Key-value store\nawait Actor.setValue('pages_with_more_than_5_headers', moreThan5headers);\n\nawait Actor.exit();\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IEFjdG9yIH0gZnJvbSAnYXBpZnknO1xcblxcbmF3YWl0IEFjdG9yLmluaXQoKTtcXG5cXG5jb25zdCBkYXRhc2V0ID0gYXdhaXQgQWN0b3Iub3BlbkRhdGFzZXQ8eyBoZWFkaW5nQ291bnQ6IG51bWJlciB9PigpO1xcblxcbi8vIGNhbGxpbmcgbWFwIGZ1bmN0aW9uIGFuZCBmaWx0ZXJpbmcgdGhyb3VnaCBtYXBwZWQgaXRlbXNcXG5jb25zdCBtb3JlVGhhbjVoZWFkZXJzID0gKGF3YWl0IGRhdGFzZXQubWFwKChpdGVtKSA9PiBpdGVtLmhlYWRpbmdDb3VudCkpLmZpbHRlcigoY291bnQpID0-IGNvdW50ID4gNSk7XFxuXFxuLy8gc2F2aW5nIHJlc3VsdCBvZiBtYXAgdG8gZGVmYXVsdCBLZXktdmFsdWUgc3RvcmVcXG5hd2FpdCBBY3Rvci5zZXRWYWx1ZSgncGFnZXNfd2l0aF9tb3JlX3RoYW5fNV9oZWFkZXJzJywgbW9yZVRoYW41aGVhZGVycyk7XFxuXFxuYXdhaXQgQWN0b3IuZXhpdCgpO1xcblwifSIsIm9wdGlvbnMiOnsiYnVpbGQiOiJsYXRlc3QiLCJjb250ZW50VHlwZSI6ImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgiLCJtZW1vcnkiOjEwMjQsInRpbWVvdXQiOjE4MH19.Q-rNIQYAy8a-1WsGs9suJ81WRuf_op1ZO2rCzoYyeAs"},s={code:"import { Actor } from 'apify';\n\nconst dataset = await Actor.openDataset();\n\n// calling reduce function and using memo to calculate number of headers\nconst pagesHeadingCount = await dataset.reduce((memo, value) => {\n    return memo += value.headingCount;\n}, 0);\n\n// saving result of map to default Key-value store\nawait Actor.setValue('pages_heading_count', pagesHeadingCount);\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IEFjdG9yIH0gZnJvbSAnYXBpZnknO1xcblxcbmNvbnN0IGRhdGFzZXQgPSBhd2FpdCBBY3Rvci5vcGVuRGF0YXNldCgpO1xcblxcbi8vIGNhbGxpbmcgcmVkdWNlIGZ1bmN0aW9uIGFuZCB1c2luZyBtZW1vIHRvIGNhbGN1bGF0ZSBudW1iZXIgb2YgaGVhZGVyc1xcbmNvbnN0IHBhZ2VzSGVhZGluZ0NvdW50ID0gYXdhaXQgZGF0YXNldC5yZWR1Y2UoKG1lbW8sIHZhbHVlKSA9PiB7XFxuICAgIHJldHVybiBtZW1vICs9IHZhbHVlLmhlYWRpbmdDb3VudDtcXG59LCAwKTtcXG5cXG4vLyBzYXZpbmcgcmVzdWx0IG9mIG1hcCB0byBkZWZhdWx0IEtleS12YWx1ZSBzdG9yZVxcbmF3YWl0IEFjdG9yLnNldFZhbHVlKCdwYWdlc19oZWFkaW5nX2NvdW50JywgcGFnZXNIZWFkaW5nQ291bnQpO1xcblwifSIsIm9wdGlvbnMiOnsiYnVpbGQiOiJsYXRlc3QiLCJjb250ZW50VHlwZSI6ImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgiLCJtZW1vcnkiOjEwMjQsInRpbWVvdXQiOjE4MH19.1ViXq6_den8WcUl-TG3DdWceExG2yJNw4qobM_aNXao"};var l,p=["components"],c={id:"map-and-reduce",title:"Dataset Map and Reduce methods"},u=void 0,m={unversionedId:"examples/map-and-reduce",id:"examples/map-and-reduce",title:"Dataset Map and Reduce methods",description:"This example shows an easy use-case of the Dataset map",source:"@site/../docs/examples/map_and_reduce.mdx",sourceDirName:"examples",slug:"/examples/map-and-reduce",permalink:"/sdk/js/docs/next/examples/map-and-reduce",draft:!1,tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1697666897,formattedLastUpdatedAt:"Oct 18, 2023",frontMatter:{id:"map-and-reduce",title:"Dataset Map and Reduce methods"},sidebar:"docs",previous:{title:"Forms",permalink:"/sdk/js/docs/next/examples/forms"},next:{title:"Playwright crawler",permalink:"/sdk/js/docs/next/examples/playwright-crawler"}},h={},y=[{value:"Map",id:"map",level:3},{value:"Reduce",id:"reduce",level:3}],b=(l="RunnableCodeBlock",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),f={toc:y},g="wrapper";function k(e){var t=e.components,a=(0,r.Z)(e,p);return(0,o.kt)(g,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows an easy use-case of the ",(0,o.kt)(i.Z,{to:"apify/class/Dataset",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"Dataset"))," ",(0,o.kt)(i.Z,{to:"apify/class/Dataset#map",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"map")),"\nand ",(0,o.kt)(i.Z,{to:"apify/class/Dataset#reduce",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"reduce"))," methods. Both methods can be used to simplify\nthe dataset results workflow process. Both can be called on the ",(0,o.kt)(i.Z,{to:"apify/class/Dataset",mdxType:"ApiLink"},"dataset")," directly."),(0,o.kt)("p",null,"Important to mention is that both methods return a new result (",(0,o.kt)("inlineCode",{parentName:"p"},"map")," returns a new array and ",(0,o.kt)("inlineCode",{parentName:"p"},"reduce")," can return any type) - neither method updates\nthe dataset in any way."),(0,o.kt)("p",null,"Examples for both methods are demonstrated on a simple dataset containing the results scraped from a page: the ",(0,o.kt)("inlineCode",{parentName:"p"},"URL")," and a hypothetical number of\n",(0,o.kt)("inlineCode",{parentName:"p"},"h1")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"h3")," header elements under the ",(0,o.kt)("inlineCode",{parentName:"p"},"headingCount")," key."),(0,o.kt)("p",null,"This data structure is stored in the default dataset under ",(0,o.kt)("inlineCode",{parentName:"p"},"{PROJECT_FOLDER}/storage/datasets/default/"),". If you want to simulate the\nfunctionality, you can use the ",(0,o.kt)(i.Z,{to:"apify/class/Dataset#pushData",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"Actor.pushData()")),"\nmethod to save the example ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON array")," to your dataset."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "url": "https://apify.com/",\n        "headingCount": 11\n    },\n    {\n        "url": "https://apify.com/storage",\n        "headingCount": 8\n    },\n    {\n        "url": "https://apify.com/proxy",\n        "headingCount": 4\n    }\n]\n')),(0,o.kt)("h3",{id:"map"},"Map"),(0,o.kt)("p",null,"The dataset ",(0,o.kt)("inlineCode",{parentName:"p"},"map")," method is very similar to standard Array mapping methods. It produces a new array of values by mapping each value in the existing\narray through a transformation function and an options parameter."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"map")," method used to check if are there more than 5 header elements on each page:"),(0,o.kt)(b,{className:"language-js",type:"cheerio",mdxType:"RunnableCodeBlock"},d),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"moreThan5headers")," variable is an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"headingCount")," attributes where the number of headers is greater than 5."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"map")," method's result value saved to the ",(0,o.kt)(i.Z,{to:"apify/class/KeyValueStore",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"key-value store"))," should be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"[11, 8]\n")),(0,o.kt)("h3",{id:"reduce"},"Reduce"),(0,o.kt)("p",null,"The dataset ",(0,o.kt)("inlineCode",{parentName:"p"},"reduce")," method does not produce a new array of values - it reduces a list of values down to a single value. The method iterates through\nthe items in the dataset using the ",(0,o.kt)(i.Z,{to:"apify/class/Dataset#reduce",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"memo")," argument"),". After performing the necessary\ncalculation, the ",(0,o.kt)("inlineCode",{parentName:"p"},"memo")," is sent to the next iteration, while the item just processed is reduced (removed)."),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"reduce")," method to get the total number of headers scraped (all items in the dataset):"),(0,o.kt)(b,{className:"language-js",type:"cheerio",mdxType:"RunnableCodeBlock"},s),(0,o.kt)("p",null,"The original dataset will be reduced to a single value, ",(0,o.kt)("inlineCode",{parentName:"p"},"pagesHeadingCount"),", which contains the count of all headers for all scraped pages (all\ndataset items)."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"reduce")," method's result value saved to the ",(0,o.kt)(i.Z,{to:"apify/class/KeyValueStore",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"key-value store"))," should be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"23\n")))}k.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=l(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[c]="string"==typeof e?e:r,i[1]=d;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);