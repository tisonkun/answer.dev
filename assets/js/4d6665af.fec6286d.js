"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[1550],{40058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>m});var i=t(43010),s=t(90887);const a={title:"How to Utilize Reputation and Privilege in Online Community",authors:["Anne"],category:"Tutorials",featured:!0,image:"2023-07-19-cover@4x.png",description:"Meet Answer\u2019s reputation and privilege systems and automate them for efficient community content management. "},o=void 0,r={permalink:"/blog/2023/07/19/how-to-utilize-reputation-and-privilege-in-online-community",editUrl:"https://github.com/apache/incubator-answer-website/edit/main/blog/2023-07-19-how-to-utilize-reputation-and-privilege-in-online-community/index.md",source:"@site/blog/2023-07-19-how-to-utilize-reputation-and-privilege-in-online-community/index.md",title:"How to Utilize Reputation and Privilege in Online Community",description:"Meet Answer\u2019s reputation and privilege systems and automate them for efficient community content management. ",date:"2023-07-19T00:00:00.000Z",formattedDate:"July 19, 2023",tags:[],readingTime:2.9,hasTruncateMarker:!1,authors:[{name:"Anne Zhu",title:"Product Marketing Manager",url:"https://github.com/PrimmaAnna",imageURL:"https://avatars.githubusercontent.com/u/131739771?v=4",key:"Anne"}],frontMatter:{title:"How to Utilize Reputation and Privilege in Online Community",authors:["Anne"],category:"Tutorials",featured:!0,image:"2023-07-19-cover@4x.png",description:"Meet Answer\u2019s reputation and privilege systems and automate them for efficient community content management. "},unlisted:!1,prevItem:{title:"The Packaging Process for Answer Plugins",permalink:"/blog/2023/07/22/why-the-answer-plugin-system-was-designed-this-way"},nextItem:{title:"The What, Why Using Tags for Online Community",permalink:"/blog/2023/07/11/the-what-why-using-tags-for-online-community"}},c={authorsImageUrls:[void 0]},m=[{value:"Purposes of Reputation",id:"purposes-of-reputation",level:2},{value:"Ways to Implement Reputation System in Answer",id:"ways-to-implement-reputation-system-in-answer",level:2},{value:"1. Trust Building",id:"1-trust-building",level:3},{value:"2. Rewards and Penalties",id:"2-rewards-and-penalties",level:3},{value:"3. Moderation and Governance",id:"3-moderation-and-governance",level:3},{value:"4. Community Engagement",id:"4-community-engagement",level:3},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const n={a:"a",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Reputation score is a reflection of a community member\u2019s credibility. Community members establish this based on their actions and contributions. Simultaneously, a reputation system is formed to track participants' trustworthiness, credibility, and behavior."}),"\n",(0,i.jsxs)(n.p,{children:["Besides ",(0,i.jsx)(n.a,{href:"/blog/2023/07/11/the-what-why-using-tags-for-online-community",children:"tagging"}),", ",(0,i.jsx)(n.a,{href:"https://answer.apache.org/docs/recipes/contents/reputation",children:"reputation"})," is an important part of ",(0,i.jsx)(n.strong,{children:"content management"})," in Answer. Community members gain reputation scores by adhering to community guidelines and continuous contributions. Community moderators and administrators use reputation scores to determine user privileges. This helps run and maintain a healthy community environment and discourages disruptive behavior."]}),"\n",(0,i.jsx)(n.h2,{id:"purposes-of-reputation",children:"Purposes of Reputation"}),"\n",(0,i.jsxs)(n.p,{children:["In the mid-1900s, eBay introduced a feedback system, allowing buyers and sellers to rate each other based on transaction experience. This feedback mechanism, which influenced the reputation of users, helped build trust within the ",(0,i.jsx)(n.a,{href:"/blog/2023/05/12/what-is-q-and-a-platform-and-how-to-use-it",children:"Q&A platform"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"You can still find this mechanism running in Answer \u2014 community members upvote question or answer, accept answer, etc. Find out how we implement it for different purposes for a thriving online community."}),"\n",(0,i.jsx)(n.h2,{id:"ways-to-implement-reputation-system-in-answer",children:"Ways to Implement Reputation System in Answer"}),"\n",(0,i.jsx)(n.h3,{id:"1-trust-building",children:"1. Trust Building"}),"\n",(0,i.jsx)(n.p,{children:"A positive reputation indicates credibility, reliability, and expertise. In Answer, you can always find a reputation score next to the name, providing an initial impression of the community member."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Reputation Score Next to Community Member in Answer",src:t(39443).Z+"",width:"800",height:"270"})}),"\n",(0,i.jsx)(n.p,{children:"Click the name and jump to a community member\u2019s profile page, where it includes reputation and related contributions."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Community Member Profile in Answer",src:t(29929).Z+"",width:"800",height:"466"})}),"\n",(0,i.jsx)(n.h3,{id:"2-rewards-and-penalties",children:"2. Rewards and Penalties"}),"\n",(0,i.jsx)(n.p,{children:"Answer appreciate and encourage positive contributions, such as providing helpful answers, valuable content, upvote useful answers. Meanwhile, negative actions like downvote, spamming or abusive behavior can result in reputation penalties."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Reputation Rules in Answer",src:t(60998).Z+"",width:"800",height:"1022"})}),"\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.a,{href:"https://answer.apache.org/docs/recipes/contents/reputation",children:"here"})," for Answer's complete reputation rules that might inspire you."]}),"\n",(0,i.jsx)(n.h3,{id:"3-moderation-and-governance",children:"3. Moderation and Governance"}),"\n",(0,i.jsxs)(n.p,{children:["After activation in Answer, community members will gain 1 reputation score, and are allowed to participate in general activities in the community, such as asking questions, writing answers, upvote comment, etc. Reputation scores are also used by community moderators and administrators to determine user ",(0,i.jsx)(n.a,{href:"https://answer.apache.org/docs/recipes/contents/permission",children:"privileges"}),", such as posting more than 2 links at a time, creating a new tag, etc."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Add a New Tag in Answer",src:t(19145).Z+"",width:"800",height:"414"})}),"\n",(0,i.jsx)(n.p,{children:"In Answer, you\u2019ll need 125 reputation scores to downvote, while downvote someone\u2019s answer will reduce one reputation score. This prevents malicious downvoting and boosts answers through intentional others\u2019 answers. This helps maintain a healthy community environment and discourage disruptive behavior."}),"\n",(0,i.jsx)(n.p,{children:"The scale of communities is different, so is the reputation system. We\u2019ve prepared 3 different privilege levels for teams at different scales."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Levels of Privileges in Answer",src:t(63343).Z+"",width:"800",height:"871"})}),"\n",(0,i.jsx)(n.h3,{id:"4-community-engagement",children:"4. Community Engagement"}),"\n",(0,i.jsx)(n.p,{children:"The reputation system allows community members to actively engage in the community. They can share expertise, contribute to discussions, and vote for better answers, fostering a positive and collaborative environment."}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(n.p,{children:["Reputation in an online community is a reflection of a user\u2019s contributions, engagement, and commitment to the community. We know the reputation system is dynamic, and it\u2019s hard to build one from the ground, that\u2019s why we\u2019ve already got a complete ",(0,i.jsx)(n.a,{href:"https://answer.apache.org/docs/recipes/contents/reputation",children:"reputation"})," and ",(0,i.jsx)(n.a,{href:"https://answer.apache.org/docs/recipes/contents/permission",children:"permission"})," rules for you, and it runs perfectly fine in our ",(0,i.jsx)(n.a,{href:"https://meta.answer.dev/",children:"official community"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["By the time you ",(0,i.jsx)(n.a,{href:"https://answer.apache.org/docs/installation",children:"install"})," Answer successfully, the reputation system is already there. All you need to do is to choose the right reputation level for your community in the Admin page."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Chose Privileges Level in Answer Admin",src:t(40821).Z+"",width:"800",height:"329"})}),"\n",(0,i.jsxs)(n.p,{children:["By automating this reputation system, your members are encouraged to share and become a significant part of the community. ",(0,i.jsx)(n.a,{href:"https://answer.apache.org/docs/",children:"Start Answer"})," now and shape the growth of the community along with other like-minded community members."]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},19145:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/AddaNewTag-5e3da1b56a31322d02f0c190193de33c.png"},63343:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/LevelsofPrivileges-1eeb224a1bb483a8b211f219372c4291.png"},40821:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/PrivilegesLevel-ec1201d55c5c3f1adda4abcc09cf7c3e.png"},60998:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/RewardsandPenalties-448faa7639ffacbc69e7d31536074486.png"},39443:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/TrustBuilding1-66ed75f7774a5c9af90a94a083682548.png"},29929:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/TrustBuilding2-0017ddc6b3f69669288f2ba37d50fcbc.png"},90887:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(85170);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);