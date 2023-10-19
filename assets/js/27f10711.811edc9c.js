"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[9691],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,y=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(4250),a=(n(9496),n(9613));const o={},i="Reputation",l={unversionedId:"recipes/contents/reputation",id:"recipes/contents/reputation",title:"Reputation",description:"Reputation used to automate the management of community ecology.",source:"@site/docs/recipes/contents/reputation.md",sourceDirName:"recipes/contents",slug:"/recipes/contents/reputation",permalink:"/docs/recipes/contents/reputation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Permission",permalink:"/docs/recipes/contents/permission"},next:{title:"settings",permalink:"/docs/recipes/dashboard/settings"}},u={},p=[{value:"Reputation change rules",id:"reputation-change-rules",level:2},{value:"Additional rules",id:"additional-rules",level:2}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reputation"},"Reputation"),(0,a.kt)("p",null,"Reputation used to automate the management of community ecology.  "),(0,a.kt)("h2",{id:"reputation-change-rules"},"Reputation change rules"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Condition"),(0,a.kt)("th",{parentName:"tr",align:null},"Change"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Someone upvote your question"),(0,a.kt)("td",{parentName:"tr",align:null},"+10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Someone upvote your answer"),(0,a.kt)("td",{parentName:"tr",align:null},"+10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Someone accept your answer"),(0,a.kt)("td",{parentName:"tr",align:null},"+15")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"You accept someone's answer"),(0,a.kt)("td",{parentName:"tr",align:null},"+2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Your proposed was accepted"),(0,a.kt)("td",{parentName:"tr",align:null},"+2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"You downvote someone's answer"),(0,a.kt)("td",{parentName:"tr",align:null},"-1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Your question was downvoted"),(0,a.kt)("td",{parentName:"tr",align:null},"-2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Your answer was downvoted"),(0,a.kt)("td",{parentName:"tr",align:null},"-2")))),(0,a.kt)("h2",{id:"additional-rules"},"Additional rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The initial reputation is 0, after activation the reputation becomes 1  "),(0,a.kt)("li",{parentName:"ul"},"If there is an action that causes the user's reputation to be\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"< 1"),", any subsequent actions that reduce the reputation will not reduce the user's reputation  "),(0,a.kt)("li",{parentName:"ul"},"Maximum of 200 reputation per day  "),(0,a.kt)("li",{parentName:"ul"},"If an action results in a user gaining\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"> 200"),"\xa0reputation for the day, any subsequent actions that increase reputation will not increase the user's reputation.  "),(0,a.kt)("li",{parentName:"ul"},"The reputation gained from accepted answers is not limited by the 200 cap  "),(0,a.kt)("li",{parentName:"ul"},"No reputation gained for accepting your own answer")))}c.isMDXComponent=!0}}]);