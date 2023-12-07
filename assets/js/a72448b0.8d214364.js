/*! For license information please see a72448b0.8d214364.js.LICENSE.txt */
(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[7636],{23401:(e,s,t)=>{"use strict";t.d(s,{Z:()=>l});var a=t(85170),c=t(45924),r=t(36426);const n="header_briT";var o=t(43010);const i={blog:{title:(0,o.jsx)(r.Z,{id:"blogHeader.title",children:"Blog"}),slogan:(0,o.jsx)(r.Z,{id:"blogHeader.slogan",children:"Learn everything about Answer and leverage your Q&A community to the next level."})},contact:{title:(0,o.jsx)(r.Z,{id:"contact.title",children:"Contact us"}),slogan:(0,o.jsx)(r.Z,{id:"contact.slogan",children:"We always get an answer to your question."})},plugin:{title:(0,o.jsx)(r.Z,{id:"plugin.title",children:"Plugins"}),slogan:(0,o.jsx)(r.Z,{id:"plugin.slogan",children:"Extend functionality to your needs."})}},d=e=>{let{type:s}=e;return(0,o.jsx)("div",{className:(0,c.Z)("py-5",n),children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)("h1",{children:i[s].title}),(0,o.jsx)("div",{className:"fs-20",children:i[s].slogan})]})})},l=(0,a.memo)(d)},14463:(e,s,t)=>{"use strict";t.d(s,{Z:()=>l});var a=t(85170),c=t(45924),r=t(36426),n=t(10205),o=t(31148),i=t(43010);const d=e=>{let{data:s,className:t="",activeLabel:a=""}=e;const{pathname:d}=(0,o.TH)();return s&&0!==s.length?(0,i.jsxs)("ul",{className:(0,c.Z)("nav nav-pills",t),children:[(0,i.jsx)("li",{className:"nav-item mb-4",children:(0,i.jsx)(n.Z,{to:"/blog"===d?"###":"/blog",className:(0,c.Z)("nav-link","All"===a?"active":""),children:(0,i.jsx)(r.Z,{id:"blogCategoriesNav.all",children:"All"})})}),s.map((e=>(0,i.jsx)("li",{className:"nav-item mb-4",children:(0,i.jsx)(n.Z,{to:e.permalink,className:(0,c.Z)("nav-link",a===e.label?"active":""),children:(0,i.jsx)(r.Z,{id:e.label,children:e.label})})},e.label)))]}):null},l=(0,a.memo)(d)},96289:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>v});var a=t(85170),c=t(45924),r=t(36426),n=t(2049),o=t(71771),i=t(31355),d=t(42118),l=t(78002),g=t(23401),p=t(14463),u=t(29082),x=t(50479),f=t(43010);const m=e=>{const{category:s,categoriyList:a,items:m,listMetadata:v}=e;return(0,f.jsxs)(n.FG,{className:(0,c.Z)(o.k.wrapper.blogPages,o.k.page.blogTagPostListPage),children:[(0,f.jsx)(x.Z,{title:s.label,description:v.blogDescription,ogType:"website",image:t(86475).default}),(0,f.jsx)(d.Z,{tag:"blog_tags_posts"}),(0,f.jsxs)(i.Z,{children:[(0,f.jsx)(g.Z,{type:"blog"}),(0,f.jsxs)("div",{className:"container pb-5",children:[(0,f.jsx)(p.Z,{className:"mt-5",data:a,activeLabel:s?.label}),(0,f.jsx)("h2",{className:"my-4",children:(0,f.jsx)(r.Z,{id:"blogCategoryPostsPage.posts",values:{category_name:s.label},children:"\u201c{category_name}\u201d Posts"})}),(0,f.jsx)(l.Z,{data:m}),(0,f.jsx)(u.Z,{data:v})]})]})]})},v=(0,a.memo)(m)},78002:(e,s,t)=>{"use strict";t.d(s,{Z:()=>u});var a=t(85170),c=t(96933),r=t(71712),n=t(45924),o=t(36426),i=t(10205),d=t(85855),l=t(43010);const g=e=>{let{data:s}=e;const{frontMatter:a,metadata:c}=s;return a?(0,l.jsxs)(r.Z,{sm:12,md:6,lg:3,className:"mb-4",children:[(0,l.jsx)(i.Z,{to:c.permalink,className:"mb-3 d-block",children:(0,l.jsx)("img",{className:"rounded",src:t(55646)(`./${a.image.replace("@4x","@2x")}`).default,alt:""})}),(0,l.jsx)(i.Z,{className:"mb-2 d-block",to:(0,d.generateCategoryPath)(a.category),children:(0,l.jsx)(o.Z,{id:a.category,children:a.category})}),(0,l.jsx)("h5",{className:"mb-2 text-truncate-2",children:(0,l.jsx)(i.Z,{to:c.permalink,className:"text-body",children:c.title})}),(0,l.jsx)("div",{className:"text-secondary text-truncate-3 mb-3",children:c.description}),(0,l.jsxs)("div",{className:"text-secondary fs-14 d-flex align-items-center",children:[c.authors.map(((e,s)=>(0,l.jsx)("div",{className:(0,n.Z)(s===c.authors.length-1?"me-3":"me-2"),children:e.name},e.name))),(0,l.jsx)("time",{dateTime:c.date,children:c.formattedDate})]})]}):null},p=e=>{let{data:s}=e;return(0,l.jsx)(c.Z,{children:s.map((e=>(0,l.jsx)(g,{data:e.content},e.content.metadata.permalink)))})},u=(0,a.memo)(p)},29082:(e,s,t)=>{"use strict";t.d(s,{Z:()=>d});var a=t(85170),c=t(45924),r=t(10205),n=t(36426),o=t(43010);const i=e=>{let{data:s}=e;return s?.previousPage||s?.nextPage?(0,o.jsx)("nav",{className:"d-flex align-items-center justify-content-center mt-5",children:(0,o.jsxs)("ul",{className:"pagination",children:[(0,o.jsx)("li",{className:(0,c.Z)("page-item",s?.previousPage?"":"disabled"),children:(0,o.jsx)(r.Z,{to:s?.previousPage||"###",className:"page-link",children:(0,o.jsx)(n.Z,{id:"theme.docs.paginator.previous",children:"Previous"})})}),(0,o.jsx)("li",{className:(0,c.Z)("page-item",s?.nextPage?"":"disabled"),children:(0,o.jsx)(r.Z,{to:s?.nextPage||"###",className:"page-link",children:(0,o.jsx)(n.Z,{id:"theme.docs.paginator.next",children:"Next"})})})]})}):null},d=(0,a.memo)(i)},50479:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});t(85170);var a=t(79418),c=t(31086),r=t(43010);function n(e){let{title:s,ogType:t="website",description:n,keywords:o,image:i,children:d}=e;const{withBaseUrl:l}=(0,c.C)(),g=i?l(i,{absolute:!0}):void 0;return(0,r.jsxs)(a.Z,{children:[s&&(0,r.jsxs)("title",{children:[s," | Answer"]}),(0,r.jsx)("meta",{property:"og:site_name",content:"Answer"}),(0,r.jsx)("meta",{property:"og:type",content:t}),s&&(0,r.jsx)("meta",{property:"og:title",content:`${s} | Answer`}),n&&(0,r.jsx)("meta",{name:"description",content:n}),n&&(0,r.jsx)("meta",{property:"og:description",content:n}),o&&(0,r.jsx)("meta",{name:"keywords",content:Array.isArray(o)?o.join(","):o}),g&&(0,r.jsx)("meta",{property:"og:image",content:g}),g&&(0,r.jsx)("meta",{name:"twitter:image",content:g}),d]})}},85855:e=>{e.exports={generateCategoryPath:function(e){return`/blog/category/${String(e).trim().toLowerCase().replace(" ","-")}`}}},84875:(e,s)=>{var t;!function(){"use strict";var a={}.hasOwnProperty;function c(){for(var e=[],s=0;s<arguments.length;s++){var t=arguments[s];if(t){var r=typeof t;if("string"===r||"number"===r)e.push(t);else if(Array.isArray(t)){if(t.length){var n=c.apply(null,t);n&&e.push(n)}}else if("object"===r){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var o in t)a.call(t,o)&&t[o]&&e.push(o)}}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(t=function(){return c}.apply(s,[]))||(e.exports=t)}()},71712:(e,s,t)=>{"use strict";t.d(s,{Z:()=>d});var a=t(84875),c=t.n(a),r=t(85170),n=t(53437),o=t(43010);const i=r.forwardRef(((e,s)=>{const[{className:t,...a},{as:r="div",bsPrefix:i,spans:d}]=function({as:e,bsPrefix:s,className:t,...a}){s=(0,n.vE)(s,"col");const r=(0,n.pi)(),o=(0,n.zG)(),i=[],d=[];return r.forEach((e=>{const t=a[e];let c,r,n;delete a[e],"object"==typeof t&&null!=t?({span:c,offset:r,order:n}=t):c=t;const l=e!==o?`-${e}`:"";c&&i.push(!0===c?`${s}${l}`:`${s}${l}-${c}`),null!=n&&d.push(`order${l}-${n}`),null!=r&&d.push(`offset${l}-${r}`)})),[{...a,className:c()(t,...i,...d)},{as:e,bsPrefix:s,spans:i}]}(e);return(0,o.jsx)(r,{...a,ref:s,className:c()(t,!d.length&&i)})}));i.displayName="Col";const d=i},96933:(e,s,t)=>{"use strict";t.d(s,{Z:()=>d});var a=t(84875),c=t.n(a),r=t(85170),n=t(53437),o=t(43010);const i=r.forwardRef((({bsPrefix:e,className:s,as:t="div",...a},r)=>{const i=(0,n.vE)(e,"row"),d=(0,n.pi)(),l=(0,n.zG)(),g=`${i}-cols`,p=[];return d.forEach((e=>{const s=a[e];let t;delete a[e],null!=s&&"object"==typeof s?({cols:t}=s):t=s;const c=e!==l?`-${e}`:"";null!=t&&p.push(`${g}${c}-${t}`)})),(0,o.jsx)(t,{ref:r,...a,className:c()(s,i,...p)})}));i.displayName="Row";const d=i},53437:(e,s,t)=>{"use strict";t.d(s,{pi:()=>d,vE:()=>i,zG:()=>l});var a=t(85170);t(43010);const c=["xxl","xl","lg","md","sm","xs"],r=a.createContext({prefixes:{},breakpoints:c,minBreakpoint:"xs"}),{Consumer:n,Provider:o}=r;function i(e,s){const{prefixes:t}=(0,a.useContext)(r);return e||t[s]||s}function d(){const{breakpoints:e}=(0,a.useContext)(r);return e}function l(){const{minBreakpoint:e}=(0,a.useContext)(r);return e}},79805:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-05-11-cover@2x-10d07889a1694746bff69b98639e2860.png"},90189:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-05-11-cover@4x-5646d198e3cf5f4cfbf7400b3a697da5.png"},64897:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-05-12-cover@2x-c08a9381c9ff4a1e9a5d526155c1c613.png"},45870:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-05-12-cover@4x-2fdc6c379746eaa7f045582e04fc2801.png"},11302:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-05-16-cover@2x-b3159344d122d612acc22f5d8a1e71c4.png"},19933:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-05-16-cover@4x-1486644ec7a18623dd7a4cc457f563bc.png"},41127:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-05-23-cover@2x-2d2603c3031a4809169c086c9395508b.png"},62456:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-05-23-cover@4x-2b72f536d69e4880e094b6d668786926.png"},1084:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-05-30-cover@2x-9637f07bf1692aff5fed4812e1bc43bb.png"},52016:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-05-30-cover@4x-c3ddcda375a87cf9237d2704b5f80692.png"},7622:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-06-15-cover@2x-081921ef6f85b6d5a03eafc340654d0a.png"},31266:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-06-15-cover@4x-82b8513d4cd5e6fea19b64df868b5de5.png"},84926:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-06-20-cover@2x-76ddaa4928d114e6333c279821953184.png"},55360:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-06-20-cover@4x-977b7832993c334211866b595f1ccd98.png"},90530:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-06-29-cover@2x-7a02dfc6ae59867d0bb4dec6c3e743d6.png"},5067:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-06-29-cover@4x-fc60d3a6aa73a1100a46a688108d8b04.png"},24922:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-07-05-cover@2x-288a1426f5c2d6698f67c5ecf4782149.png"},57286:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-07-05-cover@4x-14e7206e69deb4a88610be0d5409ca21.png"},41779:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-07-11-cover@2x-e63c7827ebaa93ff5fdd49b2a7e3e6d2.png"},46751:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-07-11-cover@4x-2061572b4e39ad6594bcccdc1ebc06ad.png"},20307:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-07-19-cover@2x-1a7de890921be9e96facfe89dff0fd89.png"},3786:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-07-19-cover@4x-fb5729f0eb278096e3485b69538e36e0.png"},14149:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-07-22-cover@2x-d27bafdc8d18987a4a4a078feb37d6a6.png"},15389:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-07-22-cover@4x-adfc331ff0caa372bd48d7c798155678.png"},22056:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-08-09-cover@2x-1b92d449fe41610a95bd70d2c0ed9eb9.png"},20967:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-08-09-cover@4x-c0f067e27e97dde9487d939dad9ed318.png"},83345:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-09-14-cover@2x-0b99143005bfd9baec1a0cb034c05f6f.png"},87434:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-09-14-cover@4x-f7c816ae5a5675f3a6bc1ed5002b648d.png"},66616:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-09-27-cover@2x-5f0e96c24dcc72b9a58a8438f9257f9c.png"},29315:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-09-27-cover@4x-c3fac897bf9b1c64e9a85fc23d906911.png"},33579:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-10-24-cover@2x-52267782f64124859b3fb35c38d8a6fb.png"},97985:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-10-24-cover@4x-6fde32db13af2695601726092f1c2bc6.png"},89219:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-10-31-cover@2x-d00c3f16ce33f4dcc550b0e272f31cb9.png"},2422:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-10-31-cover@4x-cba9e39c36eae60543a75eb791a83422.png"},44015:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-12-07-cover@2x-c12f215a374dcbede01e46400f3ca3f1.png"},83409:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/2023-12-07-cover@4x-45d142e640ddcb64dc7263ec4c704b27.png"},81949:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/cover@2x-14003aa0aa31eb442b2a6170f9b5f493.png"},86475:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/cover@4x-93ec81984bd86f018902297566a6d4b7.png"},87887:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});const a=t.p+"assets/images/head-bg-4647f705b2e7b0a8a44846c785c33661.png"},55646:(e,s,t)=>{var a={"./2023-05-11-cover@2x.png":79805,"./2023-05-11-cover@4x.png":90189,"./2023-05-12-cover@2x.png":64897,"./2023-05-12-cover@4x.png":45870,"./2023-05-16-cover@2x.png":11302,"./2023-05-16-cover@4x.png":19933,"./2023-05-23-cover@2x.png":41127,"./2023-05-23-cover@4x.png":62456,"./2023-05-30-cover@2x.png":1084,"./2023-05-30-cover@4x.png":52016,"./2023-06-15-cover@2x.png":7622,"./2023-06-15-cover@4x.png":31266,"./2023-06-20-cover@2x.png":84926,"./2023-06-20-cover@4x.png":55360,"./2023-06-29-cover@2x.png":90530,"./2023-06-29-cover@4x.png":5067,"./2023-07-05-cover@2x.png":24922,"./2023-07-05-cover@4x.png":57286,"./2023-07-11-cover@2x.png":41779,"./2023-07-11-cover@4x.png":46751,"./2023-07-19-cover@2x.png":20307,"./2023-07-19-cover@4x.png":3786,"./2023-07-22-cover@2x.png":14149,"./2023-07-22-cover@4x.png":15389,"./2023-08-09-cover@2x.png":22056,"./2023-08-09-cover@4x.png":20967,"./2023-09-14-cover@2x.png":83345,"./2023-09-14-cover@4x.png":87434,"./2023-09-27-cover@2x.png":66616,"./2023-09-27-cover@4x.png":29315,"./2023-10-24-cover@2x.png":33579,"./2023-10-24-cover@4x.png":97985,"./2023-10-31-cover@2x.png":89219,"./2023-10-31-cover@4x.png":2422,"./2023-12-07-cover@2x.png":44015,"./2023-12-07-cover@4x.png":83409,"./cover@2x.png":81949,"./cover@4x.png":86475,"./head-bg.png":87887};function c(e){var s=r(e);return t(s)}function r(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=r,e.exports=c,c.id=55646}}]);