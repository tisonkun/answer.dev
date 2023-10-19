"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[8373],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1898:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(4250),a=(t(9496),t(9613));const i={sidebar_position:1},o="\u63d2\u4ef6",l={unversionedId:"development/extending/README",id:"development/extending/README",title:"\u63d2\u4ef6",description:"\u5f53\u6211\u4eec\u9700\u8981\u5bf9 Answer \u7684\u529f\u80fd\u8fdb\u884c\u6269\u5c55\uff0c\u4f8b\u5982 OAuth \u767b\u5f55\uff0c\u6211\u4eec\u8bbe\u8ba1\u4e86\u4e00\u79cd\u4f7f\u7528\u63d2\u4ef6\u5b9e\u73b0\u8fd9\u4e9b\u529f\u80fd\u7684\u65b9\u5f0f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/extending/README.md",sourceDirName:"development/extending",slug:"/development/extending/",permalink:"/zh-CN/docs/development/extending/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"settings",permalink:"/zh-CN/docs/recipes/dashboard/settings"},next:{title:"\u63d2\u4ef6\u914d\u7f6e\u67b6\u6784",permalink:"/zh-CN/docs/development/extending/plugin_config"}},p={},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u5b98\u65b9\u63d2\u4ef6",id:"\u5b98\u65b9\u63d2\u4ef6",level:3},{value:"\u63d2\u4ef6\u7c7b\u578b",id:"\u63d2\u4ef6\u7c7b\u578b",level:3},{value:"\u6784\u5efa",id:"\u6784\u5efa",level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:3},{value:"\u7b2c\u4e09\u65b9\u63d2\u4ef6",id:"\u7b2c\u4e09\u65b9\u63d2\u4ef6",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u5347\u7ea7",id:"\u5347\u7ea7",level:2},{value:"\u5f00\u53d1",id:"\u5f00\u53d1",level:2},{value:"\u540e\u7aef\u5f00\u53d1",id:"\u540e\u7aef\u5f00\u53d1",level:3},{value:"\u5b9e\u73b0 Base",id:"\u5b9e\u73b0-base",level:4},{value:"\u5b9e\u73b0\u51fd\u6570\u63a5\u53e3",id:"\u5b9e\u73b0\u51fd\u6570\u63a5\u53e3",level:4},{value:"\u5b9e\u73b0\u914d\u7f6e\u63a5\u53e3",id:"\u5b9e\u73b0\u914d\u7f6e\u63a5\u53e3",level:4},{value:"\u6ce8\u518c\u521d\u59cb\u5316\u51fd\u6570",id:"\u6ce8\u518c\u521d\u59cb\u5316\u51fd\u6570",level:4},{value:"\u8c03\u8bd5\u63d0\u793a",id:"\u8c03\u8bd5\u63d0\u793a",level:4},{value:"\u8d21\u732e",id:"\u8d21\u732e",level:2},{value:"\u8bbe\u8ba1\u548c\u539f\u5219",id:"\u8bbe\u8ba1\u548c\u539f\u5219",level:2}],c={toc:u};function s(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5f53\u6211\u4eec\u9700\u8981\u5bf9 Answer \u7684\u529f\u80fd\u8fdb\u884c\u6269\u5c55\uff0c\u4f8b\u5982 OAuth \u767b\u5f55\uff0c\u6211\u4eec\u8bbe\u8ba1\u4e86\u4e00\u79cd\u4f7f\u7528\u63d2\u4ef6\u5b9e\u73b0\u8fd9\u4e9b\u529f\u80fd\u7684\u65b9\u5f0f\u3002")),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("h3",{id:"\u5b98\u65b9\u63d2\u4ef6"},"\u5b98\u65b9\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/answerdev/plugins"},"\u8fd9\u91cc")," \u627e\u5230 Answer \u5b98\u65b9\u652f\u6301\u7684\u63d2\u4ef6\u5217\u8868\u3002"),(0,a.kt)("h3",{id:"\u63d2\u4ef6\u7c7b\u578b"},"\u63d2\u4ef6\u7c7b\u578b"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u5c06\u63d2\u4ef6\u5206\u4e3a\u4e0d\u540c\u7684\u7c7b\u578b\u3002\n\u4e0d\u540c\u7c7b\u578b\u7684\u63d2\u4ef6\u6709\u4e0d\u540c\u7684\u529f\u80fd\u3002\n\u540c\u4e00\u7c7b\u578b\u7684\u63d2\u4ef6\u5177\u6709\u76f8\u540c\u7684\u6548\u679c\uff0c\u4f46\u5b9e\u73b0\u65b9\u5f0f\u4e0d\u540c\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connector: \u652f\u6301\u5b9e\u73b0\u7b2c\u4e09\u65b9\u767b\u5f55\u529f\u80fd\u3002\u4f8b\u5982 GitHub OAuth \u767b\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},"Storage: \u652f\u6301\u5c06\u6587\u4ef6\u4e0a\u4f20\u5230\u7b2c\u4e09\u65b9\u670d\u52a1\u3002\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"AliyunOSS")," ",(0,a.kt)("inlineCode",{parentName:"li"},"S3"),"\u3002\uff08\u9884\u89c8\uff09"),(0,a.kt)("li",{parentName:"ul"},"Cache:  \u652f\u6301\u4f7f\u7528\u4e0d\u540c\u7684\u7f13\u5b58\u4e2d\u95f4\u4ef6\u3002\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"Redis"),"\u3002\uff08\u9884\u89c8\uff09"),(0,a.kt)("li",{parentName:"ul"},"Filter: \u652f\u6301\u8fc7\u6ee4\u975e\u6cd5\u95ee\u9898\u6216\u56de\u7b54\u3002\uff08\u5373\u5c06\u63a8\u51fa\uff09"),(0,a.kt)("li",{parentName:"ul"},"Render: \u652f\u6301\u901a\u8fc7\u4e0d\u540c\u7684\u89e3\u6790\u5668\u6e32\u67d3\u4e0d\u540c\u683c\u5f0f\u7684\u5185\u5bb9\u3002\uff08\u5373\u5c06\u63a8\u51fa\uff09"),(0,a.kt)("li",{parentName:"ul"},"Finder: \u652f\u6301\u4f7f\u7528\u641c\u7d22\u5f15\u64ce\u52a0\u901f\u641c\u7d22\u95ee\u9898\u548c\u56de\u7b54\u3002\uff08\u5373\u5c06\u63a8\u51fa\uff09")),(0,a.kt)("h2",{id:"\u6784\u5efa"},"\u6784\u5efa"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Answer \u4e8c\u8fdb\u5236\u6587\u4ef6\u652f\u6301\u5c06\u4e0d\u540c\u7684\u5fc5\u9700\u63d2\u4ef6\u6253\u5305\u5230\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u3002")),(0,a.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u539f\u59cb\u7684 Answer \u4e8c\u8fdb\u5236\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://go.dev/"},"Golang")," ",(0,a.kt)("inlineCode",{parentName:"li"},">=1.18"))),(0,a.kt)("h3",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u4f7f\u7528 Answer \u4e8c\u8fdb\u5236\u6587\u4ef6\u63d0\u4f9b\u7684 build \u547d\u4ee4\u6765\u91cd\u65b0\u6784\u5efa\u5e26\u63d2\u4ef6\u7684 Answer \u7248\u672c\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f8b\u5982\uff0c\u8ba9\u6211\u4eec\u770b\u770b\u5982\u4f55\u6784\u5efa\u4e00\u4e2a\u5305\u542b github \u7b2c\u4e09\u65b9\u767b\u5f55\u63d2\u4ef6\u7684 Answer \u4e8c\u8fdb\u5236\u6587\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# answer build --with [plugin@plugin_version=[replacement]] --output [file]\n$ ./answer build --with github.com/answerdev/plugins/connector/github\n\n# \u6784\u5efa\u4e00\u4e2a\u5e26\u6709 github \u767b\u5f55\u63d2\u4ef6\u7684\u65b0 Answer\uff0c\u7136\u540e\u8f93\u51fa\u5230 ./new_answer\u3002\n$ ./answer build --with github.com/answerdev/plugins/connector/github@1.0.0 --output ./new_answer\n\n# \u5e26\u6709\u591a\u4e2a\u63d2\u4ef6\n$ ./answer build \\\n--with github.com/answerdev/plugins/connector/github \\\n--with github.com/answerdev/plugins/connector/google\n\n# \u5e26\u6709\u672c\u5730\u63d2\u4ef6\n$ ./answer build --with github.com/answerdev/plugins/connector/github@1.0.0=/my-local-space\n\n# \u4ea4\u53c9\u7f16\u8bd1\u3002\u5728 macos \u4e2d\u6784\u5efa\u4e00\u4e2a linux-amd64 \u4e8c\u8fdb\u5236\u6587\u4ef6\n$ CGO_ENABLED=0 GOOS=linux GOARCH=amd64 ./answer build --with github.com/answerdev/plugins/connector/github\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin")," \u547d\u4ee4\u5217\u51fa\u5f53\u524d\u5305\u542b\u63d2\u4ef6\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./new_answer plugin\n\n# \u8f93\u51fa\n# github connector[0.0.1] made by answerdev\n# google connector[0.0.1] made by answerdev\n")),(0,a.kt)("h2",{id:"\u7b2c\u4e09\u65b9\u63d2\u4ef6"},"\u7b2c\u4e09\u65b9\u63d2\u4ef6"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u5efa\u8bae\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://github.com/answerdev/plugins"},"\u5b98\u65b9\u63d2\u4ef6"),"\uff0c\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u7b2c\u4e09\u65b9\u63d2\u4ef6\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u5185\u5bb9\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u7b2c\u4e09\u65b9\u63d2\u4ef6\u662f\u516c\u5f00\u53ef\u7528\u7684\uff0c\u5219\u53ef\u4ee5\u50cf\u5b98\u65b9\u63d2\u4ef6\u4e00\u6837\u6784\u5efa\u5b83\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u7b2c\u4e09\u65b9\u63d2\u4ef6\u662f\u79c1\u6709\u7684\uff0c\u5219\u9700\u8981\u4e0b\u8f7d\u7136\u540e\u6784\u5efa\u3002")),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5177\u6709\u63d2\u4ef6\u7248\u672c\u7684 answer \u4e0e\u4e4b\u524d\u7684\u4f7f\u7528\u65b9\u5f0f\u76f8\u540c\u3002\n\u4f60\u53ef\u4ee5\u5728\u7ba1\u7406\u5458\u9875\u9762\u4e2d\u627e\u5230\u63d2\u4ef6\u7684\u914d\u7f6e\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"plugin-config-admin-page",src:t(3154).Z,width:"2688",height:"980"})),(0,a.kt)("h2",{id:"\u5347\u7ea7"},"\u5347\u7ea7"),(0,a.kt)("p",null,"\u4f60\u53ea\u9700\u8981\u91cd\u65b0\u7f16\u8bd1\u5e76\u4f7f\u7528\u63d2\u4ef6\u7684\u6700\u65b0\u7248\u672c\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"\u5f00\u53d1"},"\u5f00\u53d1"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u67e5\u770b\u5b98\u65b9",(0,a.kt)("a",{parentName:"p",href:"https://github.com/answerdev/plugins"},"\u63d2\u4ef6\u4ee3\u7801"),"\uff0c\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5feb\u901f\u4e86\u89e3\u548c\u5b66\u4e60\u63d2\u4ef6\u5f00\u53d1\u3002")),(0,a.kt)("h3",{id:"\u540e\u7aef\u5f00\u53d1"},"\u540e\u7aef\u5f00\u53d1"),(0,a.kt)("h4",{id:"\u5b9e\u73b0-base"},"\u5b9e\u73b0 Base"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"Base")," \u63a5\u53e3\u5305\u542b\u6709\u5173\u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\uff0c\u5e76\u7528\u4e8e\u663e\u793a\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Info \u663e\u793a\u63d2\u4ef6\u4fe1\u606f\ntype Info struct {\n Name        Translator\n SlugName    string\n Description Translator\n Author      string\n Version     string\n Link        string\n}\n\n// Base \u662f\u57fa\u7840\u63d2\u4ef6\ntype Base interface {\n // Info \u8fd4\u56de\u63d2\u4ef6\u4fe1\u606f\n Info() Info\n}\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u63d2\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"SlugName")," \u5fc5\u987b\u662f\u552f\u4e00\u7684\u3002\u5982\u679c\u6709\u4e24\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"SlugName")," \u76f8\u540c\u7684\u63d2\u4ef6\u5c06\u5728\u6ce8\u518c\u65f6\u5f15\u53d1\u6df7\u4e71\u3002")),(0,a.kt)("h4",{id:"\u5b9e\u73b0\u51fd\u6570\u63a5\u53e3"},"\u5b9e\u73b0\u51fd\u6570\u63a5\u53e3"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0d\u540c\u7c7b\u578b\u7684\u63d2\u4ef6\u9700\u8981\u4e0d\u540c\u7684\u63a5\u53e3\u5b9e\u73b0\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," \u63d2\u4ef6\u63a5\u53e3\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Connector interface {\n    Base\n    \n    // ConnectorLogoSVG \u663e\u793a svg \u683c\u5f0f\u7684\u6807\u5fd7\n    ConnectorLogoSVG() string\n    \n    // ConnectorName \u663e\u793a\u8fde\u63a5\u5668\u7684\u540d\u79f0\n    // \u4f8b\u5982 Facebook\u3001Twitter\u3001Instagram\n    ConnectorName() Translator\n    \n     // ConnectorSlugName \u663e\u793a\u8fde\u63a5\u5668\u7684 slug \u540d\u79f0\n    // \u8bf7\u4f7f\u7528\u5c0f\u5199\u548c\u8fde\u5b57\u7b26\u4f5c\u4e3a\u5206\u9694\u7b26\n    // \u4f8b\u5982 facebook\u3001twitter\u3001instagram\n    ConnectorSlugName() string\n    \n    // ConnectorSender \u663e\u793a\u8fde\u63a5\u5668\u7684\u53d1\u9001\u5668\n    // \u5b83\u5904\u7406\u8fde\u63a5\u5668\u7684\u8d77\u59cb\u7aef\u70b9\n    // receiverURL \u662f\u63a5\u6536\u65b9\u7684\u5b8c\u6574 URL\n    ConnectorSender(ctx *GinContext, receiverURL string) (redirectURL string)\n    \n    // ConnectorReceiver \u663e\u793a\u8fde\u63a5\u5668\u7684\u63a5\u6536\u5668\n    // \u5b83\u5904\u7406\u8fde\u63a5\u5668\u7684\u56de\u8c03\u7aef\u70b9\uff0c\u5e76\u8fd4\u56de\n    ConnectorReceiver(ctx *GinContext, receiverURL string) (userInfo ExternalLoginUserInfo, err error)\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"Translator")," \u662f\u7528\u4e8e\u7ffb\u8bd1\u7684\u7ed3\u6784\u4f53\u3002\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/docs/development/extending/plugin_translation"},"\u6587\u6863"),"\u4e86\u89e3\u8be6\u60c5\u3002")),(0,a.kt)("h4",{id:"\u5b9e\u73b0\u914d\u7f6e\u63a5\u53e3"},"\u5b9e\u73b0\u914d\u7f6e\u63a5\u53e3"),(0,a.kt)("p",null,"\u6709\u5173\u6bcf\u4e2a\u914d\u7f6e\u9879\u7684\u63cf\u8ff0\u8be6\u89c1",(0,a.kt)("a",{parentName:"p",href:"/docs/development/extending/plugin_config"},"\u6587\u6863"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Config interface {\n  Base\n\n  // ConfigFields \u8fd4\u56de\u914d\u7f6e\u5b57\u6bb5\u5217\u8868\n  ConfigFields() []ConfigField\n\n  // ConfigReceiver \u63a5\u6536\u914d\u7f6e\u6570\u636e\uff0c\u5728\u4fdd\u5b58\u6216\u521d\u59cb\u5316\u914d\u7f6e\u65f6\u8c03\u7528\u3002\n  // \u6211\u4eec\u5efa\u8bae\u5c06\u6570\u636e\u53cd\u5e8f\u5217\u5316\u4e3a\u7ed3\u6784\u4f53\uff0c\u7136\u540e\u4f7f\u7528\u7ed3\u6784\u4f53\u6765\u8fdb\u884c\u64cd\u4f5c\u3002\n  // \u914d\u7f6e\u4ee5 JSON \u683c\u5f0f\u7f16\u7801\u3002\n  // \u5b83\u4f9d\u8d56\u4e8e ConfigFields \u7684\u5b9a\u4e49\u3002\n  ConfigReceiver(config []byte) error\n}\n")),(0,a.kt)("h4",{id:"\u6ce8\u518c\u521d\u59cb\u5316\u51fd\u6570"},"\u6ce8\u518c\u521d\u59cb\u5316\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/answerdev/answer/plugin"\n\nfunc init() {\n plugin.Register(&GitHubConnector{\n  Config: &GitHubConnectorConfig{},\n })\n}\n')),(0,a.kt)("h4",{id:"\u8c03\u8bd5\u63d0\u793a"},"\u8c03\u8bd5\u63d0\u793a"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u5f00\u53d1\u548c\u8c03\u8bd5\u9636\u6bb5\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u63d0\u793a\uff0c\u907f\u514d\u91cd\u590d\u6253\u5305\u3002")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"U\u4f7f\u7528 Answer \u7684\u6e90\u4ee3\u7801\u8fdb\u884c\u5f00\u53d1\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u5728\u63d2\u4ef6\u76ee\u5f55\u4e2d\u7f16\u5199\u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u4e3b\u51fd\u6570\u4e2d\u5bfc\u5165\u63d2\u4ef6\u3002")),(0,a.kt)("p",null,"\u4e4b\u540e\uff0c\u4f60\u53ea\u9700\u8981\u6b63\u5e38\u542f\u52a8 Answer \u9879\u76ee\uff0c\u5b83\u5c06\u5305\u542b\u4f60\u5f00\u53d1\u7684\u63d2\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u8d21\u732e"},"\u8d21\u732e"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5c1a\u672a\u5b9e\u73b0\u7684\u63d2\u4ef6\u7c7b\u578b\uff0c\u8bf7\u7b49\u5f85\u5b98\u65b9\u5b9e\u73b0\u5b8c\u6210\u540e\u518d\u8fdb\u884c\u8d21\u732e\u3002\n\u5bf9\u4e8e\u5df2\u6709\u7684\u63d2\u4ef6\u7c7b\u578b\uff0c\u4f60\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u5411\u6211\u4eec\u8d21\u732e\u63d2\u4ef6\u5b9e\u73b0\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u63d0\u4ea4\u95ee\u9898\u8bf7\u6c42\uff0c\u4ee5\u786e\u4fdd\u5b98\u65b9\u6ca1\u6709\u5f00\u53d1\u4e0e\u4f60\u76f8\u540c\u7684\u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5f97\u5230\u786e\u8ba4\u540e\uff0c\u5f00\u53d1\u4f60\u7684\u63d2\u4ef6\uff0c\u8fdb\u884c\u6d4b\u8bd5\u5e76\u63d0\u4ea4 PR\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7b49\u5f85 PR \u5408\u5e76\uff0c\u5b98\u65b9\u5305\u542b\u4f60\u7684\u63d2\u4ef6\u3002")),(0,a.kt)("h2",{id:"\u8bbe\u8ba1\u548c\u539f\u5219"},"\u8bbe\u8ba1\u548c\u539f\u5219"),(0,a.kt)("p",null,"\u7531\u4e8e Golang \u662f\u4e00\u79cd\u9759\u6001\u8bed\u8a00\uff0c\u56e0\u6b64\u6ca1\u6709\u53cb\u597d\u7684\u63d2\u4ef6\u673a\u5236\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u4f7f\u7528\u91cd\u65b0\u7f16\u8bd1\u8fdb\u884c\u90e8\u7f72\uff0c\u800c\u4e0d\u662f\u52a8\u6001\u65b9\u6cd5\u3002"))}s.isMDXComponent=!0},3154:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/plugin-config-admin-page-e343b33766f45a10093fc621e741c811.png"}}]);