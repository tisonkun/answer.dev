"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[7619],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,N=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(N,i(i({ref:t},c),{},{components:n})):r.createElement(N,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(4250),a=(n(9496),n(9613));const l={slug:"/env"},i="\u73af\u5883\u53d8\u91cf",o={unversionedId:"getting-started/command-line/env",id:"getting-started/command-line/env",title:"\u73af\u5883\u53d8\u91cf",description:"\u5b89\u88c5",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/getting-started/command-line/env.md",sourceDirName:"getting-started/command-line",slug:"/env",permalink:"/zh-CN/docs/env",draft:!1,tags:[],version:"current",frontMatter:{slug:"/env"},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u5e93\u4ecb\u7ecd",permalink:"/zh-CN/docs/database"},next:{title:"\u4e3e\u62a5",permalink:"/zh-CN/docs/recipes/contents/flags"}},p={},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5bf9\u4e8e\u81ea\u52a8\u5b89\u88c5",id:"\u5bf9\u4e8e\u81ea\u52a8\u5b89\u88c5",level:3},{value:"\u65e5\u5fd7",id:"\u65e5\u5fd7",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u73af\u5883\u53d8\u91cf"},"\u73af\u5883\u53d8\u91cf"),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"INSTALL_PORT\uff1a\u6307\u5b9a\u5b89\u88c5\u65f6\u542f\u52a8\u7684\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a80\u3002"),(0,a.kt)("li",{parentName:"ul"},"AUTO_INSTALL\uff1a\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\uff0c\u5219\u5b89\u88c5\u5c06\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u81ea\u52a8\u5b8c\u6210\u3002")),(0,a.kt)("h3",{id:"\u5bf9\u4e8e\u81ea\u52a8\u5b89\u88c5"},"\u5bf9\u4e8e\u81ea\u52a8\u5b89\u88c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DB_TYPE\uff1a\u6570\u636e\u5e93\u7c7b\u578b\uff0c\u652f\u6301 ","[",(0,a.kt)("inlineCode",{parentName:"li"},"sqlite3"),"  ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql"),"  ",(0,a.kt)("inlineCode",{parentName:"li"},"postgres"),"]","\u3002"),(0,a.kt)("li",{parentName:"ul"},"DB_USERNAME\uff1a\u6570\u636e\u5e93\u7528\u6237\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},"DB_PASSWORD\uff1a\u6570\u636e\u5e93\u5bc6\u7801\u3002"),(0,a.kt)("li",{parentName:"ul"},"DB_HOST\uff1a\u6570\u636e\u5e93\u4e3b\u673a\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3306"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"DB_NAME\uff1a\u6570\u636e\u5e93\u540d\u79f0\u3002"),(0,a.kt)("li",{parentName:"ul"},"DB_FILE\uff1a\u6570\u636e\u5e93\u6587\u4ef6\u8def\u5f84\uff0c\u4ec5\u9002\u7528\u4e8e sqlite3\u3002"),(0,a.kt)("li",{parentName:"ul"},"LANGUAGE\uff1a\u8bed\u8a00\uff0c\u5982  ",(0,a.kt)("inlineCode",{parentName:"li"},"en-US"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"SITE_NAME\uff1a\u7ad9\u70b9\u540d\u79f0 ",(0,a.kt)("inlineCode",{parentName:"li"},"Answer"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"SITE_URL\uff1a\u7ad9\u70b9 URL\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"https://answer.dev"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"CONTACT_EMAIL\uff1a\u8054\u7cfb\u4eba\u7535\u5b50\u90ae\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"ADMIN_NAME\uff1a\u7ba1\u7406\u5458\u540d\u79f0\u3002"),(0,a.kt)("li",{parentName:"ul"},"ADMIN_PASSWORD\uff1a\u7ba1\u7406\u5458\u5bc6\u7801\u3002"),(0,a.kt)("li",{parentName:"ul"},"ADMIN_EMAIL\uff1a\u7ba1\u7406\u5458\u7535\u5b50\u90ae\u4ef6\u3002")),(0,a.kt)("h2",{id:"\u65e5\u5fd7"},"\u65e5\u5fd7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"LOG_LEVEL\uff1a\u65e5\u5fd7\u7ea7\u522b\uff0c\u652f\u6301 ","[",(0,a.kt)("inlineCode",{parentName:"li"},"DEBUG"),"  ",(0,a.kt)("inlineCode",{parentName:"li"},"INFO"),"  ",(0,a.kt)("inlineCode",{parentName:"li"},"WARN"),"  ",(0,a.kt)("inlineCode",{parentName:"li"},"ERROR"),"]"),(0,a.kt)("li",{parentName:"ul"},"LOG_PATH\uff1a\u65e5\u5fd7\u5b58\u50a8\u4f4d\u7f6e\u3002")))}m.isMDXComponent=!0}}]);