(function(){var e={7010:function(e,t,o){"use strict";var n=o(5130),i=o(6768),a=o(5234);const s=(0,a.nY)({id:"theme",state:()=>({isLightTheme:!1}),actions:{toggleTheme(){this.isLightTheme=!this.isLightTheme,localStorage.setItem("isLightTheme",JSON.stringify(this.isLightTheme)),this.applyTheme()},loadThemeFromLocalStorage(){const e=localStorage.getItem("isLightTheme");null!==e?(this.isLightTheme=JSON.parse(e),this.applyTheme()):(localStorage.setItem("isLightTheme",JSON.stringify(this.isLightTheme)),this.loadThemeFromLocalStorage())},applyTheme(){this.isLightTheme?(document.documentElement.classList.add("light"),document.documentElement.classList.remove("dark")):(document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light"))}}});var r=(0,i.pM)({__name:"App",setup(e){const t=s();return(0,i.sV)((()=>{t.loadThemeFromLocalStorage()})),(e,t)=>{const o=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.Wv)(o)}}});const l=r;var c=l,u=o(1387),m=o.p+"img/me.ae32d5fe.jpeg",d=o(4232),p=o(144),g=o(292),v=o(8950),h=o(2353),f=o(4996);const b=["title"];var k=(0,i.pM)({__name:"Icon",props:{iconPayload:{}},setup(e){v.Yv.add(h.X7I),v.Yv.add(f.Cvc);const t=e,o=(0,i.EW)((()=>[t.iconPayload.isBrand?"fab":"fas",t.iconPayload.name.toLowerCase()]));return(e,t)=>((0,i.uX)(),(0,i.CE)("div",{class:"",title:e.iconPayload.name},[(0,i.bF)((0,p.R1)(g.gc),{class:(0,d.C4)(["text-[24px]",e.iconPayload.class]),icon:o.value},null,8,["class","icon"])],8,b))}});const L=k;var y=L;const x={class:"gap-4 btn"},C=["href"],T={class:"max-content flex mx-auto place-content-between"},j={key:0,class:"my-auto"},w={class:"my-auto w-max"};var _=(0,i.pM)({__name:"BaseButton",props:{text:{default:void 0},iconPayload:{default:void 0},href:{default:void 0}},setup(e){return(e,t)=>((0,i.uX)(),(0,i.CE)("button",x,[(0,i.Lk)("a",{href:e.href,target:"_blank"},[(0,i.Lk)("div",T,[e.text?((0,i.uX)(),(0,i.CE)("p",j,(0,d.v_)(e.text),1)):(0,i.Q3)("",!0),(0,i.Lk)("div",w,[e.iconPayload?((0,i.uX)(),(0,i.Wv)(y,{key:0,"icon-payload":e.iconPayload},null,8,["icon-payload"])):(0,i.Q3)("",!0),(0,i.RG)(e.$slots,"default")])])],8,C)]))}});const R=_;var E=R,I=(0,i.pM)({__name:"TypingTextEffect",props:{text:{},speed:{},componentTag:{default:"p"}},setup(e){const t=e,o=(0,p.KR)(""),n=(0,p.KR)(!0);return(0,i.sV)((()=>{let e=0;const i=t.speed||100,a=()=>{e<t.text.length?(o.value+=t.text.charAt(e),e++,setTimeout(a,i)):n.value=!1};a()})),(e,t)=>((0,i.uX)(),(0,i.Wv)((0,i.$y)(e.componentTag),{class:(0,d.C4)({"blinking-cursor":n.value})},{default:(0,i.k6)((()=>[(0,i.eW)((0,d.v_)(o.value),1)])),_:1},8,["class"]))}}),S=o(1241);const X=(0,S.A)(I,[["__scopeId","data-v-cb2a83a0"]]);var F=X;const P=e=>((0,i.Qi)("data-v-b98e86ce"),e=e(),(0,i.jt)(),e),O={id:"welcome",class:"welcome"},A=P((()=>(0,i.Lk)("div",{class:"section welcome-image self-end lg:!w-1/3 relative h-max !w-max mx-auto"},[(0,i.Lk)("img",{src:m,alt:"",srcset:"",class:"aspect-square border-lightSecondary dark:border-secondary border-2 border-solid object-cover max-h-[10rem] w-full rounded-full lg:max-h-max"})],-1))),M={class:"section lg:w-2/3 welcome-text text-left"},W=P((()=>(0,i.Lk)("span",{class:"info-title text-center sm:text-left"},"Bem vindo(a) ao meu mundo",-1))),N={class:"title"},B=P((()=>(0,i.Lk)("h2",{class:"title"},"Desenvolvedor Full stack",-1))),Q=P((()=>(0,i.Lk)("p",null," Sou formado em Análise e Desenvolvimento de Sistemas, trabalhando com desenvolvimento de software desde 2021. Gosto de explorar novas tecnologias e compartilhar conhecimento. ",-1))),U={class:"additional-info uppercase"},D={class:"social-media mt-10"},V=P((()=>(0,i.Lk)("span",{class:"info-title text-center sm:text-left"},"Me encontre em:",-1))),K={class:"buttons"};var $=(0,i.pM)({__name:"Welcome",setup(e){return(e,t)=>((0,i.uX)(),(0,i.CE)("div",O,[A,(0,i.Lk)("div",M,[W,(0,i.Lk)("h1",N,[(0,i.eW)(" Olá, eu sou "),(0,i.bF)(F,{text:"Thiago Teofilo","component-tag":"strong"})]),B,Q,(0,i.Lk)("div",U,[(0,i.Lk)("div",D,[V,(0,i.Lk)("div",K,[(0,i.bF)(E,{"icon-payload":{isBrand:!0,name:"Linkedin"},text:"Linkedin",href:"https://www.linkedin.com/in/thiagoteofilojs/"}),(0,i.bF)(E,{"icon-payload":{isBrand:!0,name:"Github"},text:"Github",href:"https://github.com/Thiago-Teofilo"}),(0,i.bF)(E,{"icon-payload":{isBrand:!0,name:"Instagram"},text:"Instagram",href:"https://www.instagram.com/thiago_teofilo?igsh=MWhic3pqMjhiaDZ3OA=="})])])])])]))}});const G=(0,S.A)($,[["__scopeId","data-v-b98e86ce"]]);var J=G;const z={id:"resume",class:"resume"},H=(0,i.Lk)("div",{class:"section"},[(0,i.Lk)("h2",{class:"title"},"Sobre mim")],-1),Y=(0,i.Lk)("div",{class:"section"},[(0,i.Lk)("p",null," Durante meu tempo na MultiBombas, liderei o desenvolvimento do Controle Integra, um sistema revolucionário para fabricantes de bombas industriais. Este projeto envolveu a construção de uma API robusta utilizando frameworks em Node.js e uma interface intuitiva, além da integração com um banco de dados PostgreSQL para garantir um armazenamento de dados seguro e eficiente. "),(0,i.Lk)("p",null," Atualmente, estou trabalhando na atualização da interface e da API de um sistema de e-commerce. Neste projeto, estou ampliando minha experiência profissional com Vue.js, NestJS e TailwindCSS, dentro de um fluxo de trabalho extremamente eficiente e bem organizado. ")],-1),q=[H,Y];function Z(e,t){return(0,i.uX)(),(0,i.CE)("div",z,q)}const ee={},te=(0,S.A)(ee,[["render",Z]]);var oe=te,ne=o(9629);const ie=[{title:"Google Cloud Platform",component:ne.C$t,logoClasses:"text-[#db4a39]"},{title:"TypeScript",component:ne.$0Y,logoClasses:"text-[#3178C6]"},{title:"NestJS",component:ne.Trx,logoClasses:"text-[#E0234E]"},{title:"Node.js",component:ne.kGk,logoClasses:"text-[#3C873A]"},{title:"React",component:ne.vRF,logoClasses:"text-[#3178C6] dark:text-[#61DAFB]"},{title:"Shadcn UI",component:ne.bnO},{title:"Vue.js",component:ne.SID,logoClasses:"text-[#1c9112] dark:text-[#42B883]"},{title:"Tailwind CSS",component:ne.hs3,logoClasses:"text-[#06B6D4]"},{title:"PostgreSQL",component:ne.Kdj,logoClasses:"text-[#336791]"}],ae=[{url:"https://to-do-list-gules-three-33.vercel.app/",name:"Todo List",description:"\n        Aplicativo de gerenciamento de tarefas feito em React, Vite e TypeScript\n      ",image:"todo-thumb.png",mobileImage:"todo-thumb-2.png",frontendRepositoryUrl:"https://github.com/Thiago-Teofilo/to-do-list"},{url:"https://ignite-feed-frontend-thiago-teofilos-projects.vercel.app/",name:"Ignite Feed",description:"\n        Aplicativo blog feito em React, Vite, TypeScript e uma API integrada feita em NestJS com um banco de dados PostgreSQL\n      ",image:"ignite-feed-thumb.png",mobileImage:"ignite-feed-thumb-2.png",backendRepositoryUrl:"https://github.com/Thiago-Teofilo/ignite-feed-backend",frontendRepositoryUrl:"https://github.com/Thiago-Teofilo/ignite-feed-frontend"},{url:"https://ignite-timer-frontend.vercel.app/",name:"Ignite Timer",description:"\n      Aplicativo de cronometragem feito em React que se aprofunda em hooks, como useReducer e useContext.\n    ",image:"ignite-timer-thumb.png",mobileImage:"ignite-timer-thumb-2.png",backendRepositoryUrl:"https://github.com/Thiago-Teofilo/ignite-timer-backend",frontendRepositoryUrl:"https://github.com/Thiago-Teofilo/ignite-timer-frontend"}],se={id:"skills",class:"skills"},re=(0,i.Lk)("div",{class:"section"},[(0,i.Lk)("h2",{class:"title"},"Habilidades")],-1),le={class:"section my-5 gap-4 flex flex-wrap justify-items-center"},ce={class:"font-bold"};var ue=(0,i.pM)({__name:"Skills",setup(e){const t=ie;return(e,o)=>((0,i.uX)(),(0,i.CE)("div",se,[re,(0,i.Lk)("div",le,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)((0,p.R1)(t),((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:t,class:(0,d.C4)(["skill-card",e.logoClasses])},[((0,i.uX)(),(0,i.Wv)((0,i.$y)(e.component))),(0,i.Lk)("p",ce,(0,d.v_)(e.title),1)],2)))),128))])]))}});const me=ue;var de=me,pe=o(3679);const ge=e=>((0,i.Qi)("data-v-3ac17354"),e=e(),(0,i.jt)(),e),ve={class:"navbar"},he={class:"content"},fe={key:0,class:"menu"},be=ge((()=>(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[(0,i.Lk)("a",{href:"#welcome"},"Início")]),(0,i.Lk)("li",null,[(0,i.Lk)("a",{href:"#resume"},"Sobre mim")]),(0,i.Lk)("li",null,[(0,i.Lk)("a",{href:"#skills"},"Habilidades")]),(0,i.Lk)("li",null,[(0,i.Lk)("a",{href:"#project-list"},"Projetos")])],-1))),ke=[be],Le={class:"switch"},ye=["checked"],xe={class:"slider"},Ce={class:"grid justify-center content-center"};var Te=(0,i.pM)({__name:"NavBar",setup(e){const t=(0,p.KR)(!1),o=s(),a=(0,p.KR)(window.innerWidth),r=()=>{a.value=window.innerWidth};return(0,i.sV)((()=>{window.addEventListener("resize",r)})),(0,i.xo)((()=>{window.removeEventListener("resize",r)})),(e,s)=>((0,i.uX)(),(0,i.CE)("div",ve,[(0,i.Lk)("div",he,[(0,i.Lk)("div",null,[(0,i.Lk)("div",{class:"toggle-menu",onClick:s[0]||(s[0]=()=>t.value=!t.value)},[(0,i.Lk)("div",{class:(0,d.C4)({icon:!0,open:t.value})},[(0,i.Lk)("span",{class:(0,d.C4)({line1:!0,open:t.value})},null,2),(0,i.Lk)("span",{class:(0,d.C4)({line2:!0,open:t.value})},null,2),(0,i.Lk)("span",{class:(0,d.C4)({line3:!0,open:t.value})},null,2)],2),(0,i.bF)(n.eB,{name:"slide-down"},{default:(0,i.k6)((()=>[t.value||a.value>640?((0,i.uX)(),(0,i.CE)("div",fe,ke)):(0,i.Q3)("",!0)])),_:1})])]),(0,i.Lk)("label",Le,[(0,i.Lk)("input",{type:"checkbox",checked:(0,p.R1)(o).isLightTheme,onChange:s[1]||(s[1]=(...e)=>(0,p.R1)(o).toggleTheme&&(0,p.R1)(o).toggleTheme(...e))},null,40,ye),(0,i.Lk)("span",xe,[(0,i.Lk)("div",Ce,[(0,p.R1)(o).isLightTheme?((0,i.uX)(),(0,i.Wv)((0,p.R1)(pe.Rlh),{key:0})):((0,i.uX)(),(0,i.Wv)((0,p.R1)(pe.MtJ),{key:1}))])])])])]))}});const je=(0,S.A)(Te,[["__scopeId","data-v-3ac17354"]]);var we=je;const _e={class:"relative p-4 pl-2 pr-6 rounded bg-lightSecondary dark:bg-primary-alt"},Re=["src"],Ee=["src"];var Ie=(0,i.pM)({__name:"ProjectImages",props:{primaryImageName:{},mobileImageName:{}},setup(e){function t(e){return o(8619)(`./${e}`)}return(e,o)=>((0,i.uX)(),(0,i.CE)("div",_e,[(0,i.Lk)("img",{class:"rounded lg:w-[40rem]",src:t(e.primaryImageName),alt:""},null,8,Re),(0,i.Lk)("img",{class:"absolute max-w-[23%] rounded lg:w-[9rem] bottom-2 right-1 border-4 border-solid border-lightSecondary dark:border-primary-alt",src:t(e.mobileImageName),alt:""},null,8,Ee)]))}});const Se=Ie;var Xe=Se;const Fe={class:"h-10 cursor-pointer transition dark:hover:text-[rgb(0,0,0)] dark:hover:bg-tertiary hover:bg-tertiary rounded flex bg-lightSecondary dark:bg-secondary px-4 py-2 gap-4 justify-between items-center"},Pe=["href"];var Oe=(0,i.pM)({__name:"ProjectLink",props:{linkType:{default:"production"},href:{},text:{}},setup(e){return(e,t)=>((0,i.uX)(),(0,i.CE)("div",Fe,["github"===e.linkType?((0,i.uX)(),(0,i.Wv)((0,p.R1)(ne.Hk9),{key:0})):((0,i.uX)(),(0,i.Wv)((0,p.R1)(pe.eGB),{key:1})),(0,i.Lk)("a",{class:"text-right",href:e.href,target:"_blank"},(0,d.v_)(e.text),9,Pe)]))}});const Ae=(0,S.A)(Oe,[["__scopeId","data-v-2725520d"]]);var Me=Ae,We=o(8957);const Ne={class:"modal-content"},Be={class:"grid md:grid-cols-2 md:gap-4"},Qe={class:"md:text-left"},Ue={class:"grid gap-6 mt-10 mx-auto lg:mr-0 max-w-72"};var De=(0,i.pM)({__name:"ProjectModal",props:{isVisible:{type:Boolean},project:{}},emits:["close"],setup(e,{emit:t}){const o=t;function a(){o("close")}return(e,t)=>e.isVisible?((0,i.uX)(),(0,i.CE)("div",{key:0,class:"modal-overlay",onClick:(0,n.D$)(a,["self"])},[(0,i.Lk)("div",Ne,[(0,i.Lk)("button",{class:"close-button",onClick:a},[(0,i.bF)((0,p.R1)(We.$8F))]),(0,i.Lk)("div",null,[(0,i.bF)(Xe,{"primary-image-name":e.project.image,"mobile-image-name":e.project.mobileImage},null,8,["primary-image-name","mobile-image-name"])]),(0,i.Lk)("div",Be,[(0,i.Lk)("div",Qe,[(0,i.Lk)("h2",null,(0,d.v_)(e.project.name),1),(0,i.Lk)("p",null,(0,d.v_)(e.project.description),1)]),(0,i.Lk)("div",Ue,[e.project.url?((0,i.uX)(),(0,i.Wv)(Me,{key:0,href:e.project.url,text:"Projeto em produção"},null,8,["href"])):(0,i.Q3)("",!0),e.project.backendRepositoryUrl?((0,i.uX)(),(0,i.Wv)(Me,{key:1,href:e.project.backendRepositoryUrl,"link-type":"github",text:"Repositório do backend"},null,8,["href"])):(0,i.Q3)("",!0),e.project.frontendRepositoryUrl?((0,i.uX)(),(0,i.Wv)(Me,{key:2,href:e.project.frontendRepositoryUrl,"link-type":"github",text:"Repositório do frontend"},null,8,["href"])):(0,i.Q3)("",!0)])])])])):(0,i.Q3)("",!0)}});const Ve=De;var Ke=Ve;const $e=e=>((0,i.Qi)("data-v-24cce83a"),e=e(),(0,i.jt)(),e),Ge={id:"project-list",class:"project-list"},Je=$e((()=>(0,i.Lk)("div",{class:"section"},[(0,i.Lk)("h2",{class:"title"},"Projetos")],-1))),ze={class:"section grid gap-4 my-5 2xl:grid-cols-3 sm:grid-cols-2 justify-items-center"},He=["onClick"],Ye={class:"project-content"};var qe=(0,i.pM)({__name:"ProjectList",setup(e){function t(){n.value=null,a.value=!a.value}function o(e){n.value=e,a.value=!a.value}const n=(0,p.KR)(null),a=(0,p.KR)(!1);return(e,s)=>((0,i.uX)(),(0,i.CE)("div",Ge,[Je,(0,i.Lk)("div",ze,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)((0,p.R1)(ae),((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:t,class:"project-card"},[(0,i.Lk)("div",{onClick:()=>o(e)},[(0,i.bF)(Xe,{"primary-image-name":e.image,"mobile-image-name":e.mobileImage},null,8,["primary-image-name","mobile-image-name"]),(0,i.Lk)("div",Ye,[(0,i.Lk)("strong",null,(0,d.v_)(e.name),1)])],8,He)])))),128))]),(0,i.bF)(Ke,{"is-visible":a.value,project:n.value,onClose:t},null,8,["is-visible","project"])]))}});const Ze=(0,S.A)(qe,[["__scopeId","data-v-24cce83a"]]);var et=Ze;const tt={class:"home"};var ot=(0,i.pM)({__name:"HomeView",setup(e){return(e,t)=>((0,i.uX)(),(0,i.CE)("div",tt,[(0,i.bF)(we),(0,i.Lk)("main",null,[(0,i.bF)(J),(0,i.bF)(oe),(0,i.bF)(de),(0,i.bF)(et)])]))}});const nt=ot;var it=nt;const at=[{path:"/",name:"home",component:it}],st=(0,u.aE)({history:(0,u.LA)("/portfolio/"),routes:at});var rt=st;const lt=(0,a.Ey)();(0,n.Ef)(c).use(lt).use(rt).mount("#app")},8619:function(e,t,o){var n={"./ignite-feed-thumb-2.png":1822,"./ignite-feed-thumb.png":6275,"./ignite-timer-thumb-2.png":7203,"./ignite-timer-thumb.png":4762,"./todo-thumb-2.png":4993,"./todo-thumb.png":9204};function i(e){var t=a(e);return o(t)}function a(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id=8619},1822:function(e,t,o){"use strict";e.exports=o.p+"img/ignite-feed-thumb-2.024be3fc.png"},6275:function(e,t,o){"use strict";e.exports=o.p+"img/ignite-feed-thumb.47e19fde.png"},7203:function(e,t,o){"use strict";e.exports=o.p+"img/ignite-timer-thumb-2.9407c346.png"},4762:function(e,t,o){"use strict";e.exports=o.p+"img/ignite-timer-thumb.5e8710c5.png"},4993:function(e,t,o){"use strict";e.exports=o.p+"img/todo-thumb-2.17615df0.png"},9204:function(e,t,o){"use strict";e.exports=o.p+"img/todo-thumb.5d6a5962.png"}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,i,a){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],a=e[u][2];for(var r=!0,l=0;l<n.length;l++)(!1&a||s>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(r=!1,a<s&&(s=a));if(r){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,i,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/portfolio/"}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,a,s=n[0],r=n[1],l=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(i in r)o.o(r,i)&&(o.m[i]=r[i]);if(l)var u=l(o)}for(t&&t(n);c<s.length;c++)a=s[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(7010)}));n=o.O(n)})();
//# sourceMappingURL=app.83abf56e.js.map