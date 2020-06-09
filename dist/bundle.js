!function(t){var e={};function s(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=e,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(o,i,function(e){return t[e]}.bind(null,i));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);class o{constructor({id:t,title:e,urlToImage:s,tags:o,...i}){this.id=t,this.urlToImage=s,this.title=e,this.tags=o}generateArticle(){let t="",e=document.createElement("article");return e.className="strategy block-shadowed",e.setAttribute("data-id",this.id),this.urlToImage&&(t+=`<img class="strategy__image" src=${this.urlToImage} alt="strategy">`),(this.title||this.tags)&&(t+='<div class="strategy__content">',this.title&&(t+=`<h3 class="strategy__name">${this.title}</h3>`),this.tags&&(t+='<div class="strategy__tags tags">',this.tags.forEach(e=>{t+=`<span class="tag tag_colored">${e}</span>`}),t+="</div>"),t+="</div>"),e.innerHTML=t,e}}class i extends class{constructor(t){this.classes=t,this.modal="",this.modalContent="",this.modalCloseButton="",this.overlay=""}buildModal(t){this.overlay=this.createDomNode(this.overlay,"div","overlay","overlay_modal"),this.modal=this.createDomNode(this.modal,"div","modal",this.classes),this.modalContent=this.createDomNode(this.modalContent,"div","modal_content",this.classes),this.modalCloseBtn=this.createDomNode(this.modalCloseBtn,"span","modal__close-icon"),this.modalCloseBtn.innerHTML='<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M12.4239 10.5172L20.6009 2.33999C21.1331 1.80809 21.1331 0.948089 20.6009 0.416194C20.069 -0.115701 19.209 -0.115701 18.6771 0.416194L10.4999 8.59343L2.3229 0.416194C1.79076 -0.115701 0.931004 -0.115701 0.399108 0.416194C-0.133036 0.948089 -0.133036 1.80809 0.399108 2.33999L8.5761 10.5172L0.399108 18.6945C-0.133036 19.2263 -0.133036 20.0863 0.399108 20.6182C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6182L10.4999 12.441L18.6771 20.6182C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6182C21.1331 20.0863 21.1331 19.2263 20.6009 18.6945L12.4239 10.5172Z" fill="#2F281E"/>\n        </svg>',this.setContent(t),this.appendModalElements(),this.bindEvents(),this.openModal()}createDomNode(t,e,...s){return(t=document.createElement("div")).classList.add(...s),t}setContent(t){"string"==typeof t?this.modalContent.innerHTML=t:(this.modalContent.innerHTML="",this.modalContent.appendChild(t))}appendModalElements(){this.modal.append(this.modalCloseBtn),this.modal.append(this.modalContent),this.overlay.append(this.modal)}bindEvents(){this.modalCloseBtn.addEventListener("click",this.closeModal),this.overlay.addEventListener("click",this.closeModal)}openModal(){document.body.append(this.overlay)}closeModal(t){let e=t.target.classList;(e.contains("overlay")||e.contains("modal__close-icon"))&&document.querySelector(".overlay").remove()}}{constructor(t,{id:e,title:s,urlToImage:o,tags:i,content:a,date:n}){super(t),this.id=e,this.urlToImage=o,this.title=s,this.tags=i,this.content=a,this.date=n}generateContent(){let t="",e=document.createElement("div");return e.className="article-modal__content",this.urlToImage&&(t+=`<img class="strategy__image" src=${this.urlToImage} alt="strategy">`),(this.title||this.tags||this.content||this.date)&&(t+='<div class="strategy__content">',this.date&&(t+=`<p class="strategy__date">${this.date}</p>`),this.title&&(t+=`<h3 class="strategy__name">${this.title}</h3>`),this.content&&(t+=`<p class="strategy__date">${this.content}</p>`),this.tags&&(t+='<div class="strategy__tags tags">',this.tags.forEach(e=>{t+=`<span class="tag tag_colored">${e}</span>`}),t+="</div>"),t+="</div>"),e.innerHTML=t,e}renderModal(){let t=this.generateContent();super.buildModal(t)}}const a=[{id:1,title:"Increasing Prosperity With Positive Thinking",urlToImage:"src/assets/Pics/Strategies/pic1.png",tags:["Art","Design"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:2,title:"Motivation Is The First Step To Success",urlToImage:"src/assets/Pics/Strategies/pic2.png",tags:["Culture"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:3,title:"Success Steps For Your Personal Or Business Life",urlToImage:"src/assets/Pics/Strategies/pic3.png",tags:["Culture","Design","Art"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:5,title:"Increasing Prosperity With Positive Thinking",urlToImage:"src/assets/Pics/Strategies/pic5.png",tags:["Design"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:6,title:"Increasing Prosperity With Positive Thinking",urlToImage:"src/assets/Pics/Strategies/pic1.png",tags:["Art","Design"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:7,title:"Motivation Is The First Step To Success",urlToImage:"src/assets/Pics/Strategies/pic2.png",tags:["Culture"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:8,title:"Success Steps For Your Personal Or Business Life",urlToImage:"src/assets/Pics/Strategies/pic3.png",tags:["Culture","Design","Art"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"}];window.onload=function(){u(),n(),addBenefitsToolsHandler()};const n=function(){document.querySelector(".strategies__tags").addEventListener("click",t=>{let e=t.target;t.target.classList.contains("tag")&&(r(),l(e),"All"===e.innerText?c():d(e.innerText))})},r=function(){document.querySelectorAll(".strategies__tags .tag").forEach((function(t){t.classList.remove("tag_selected"),t.classList.add("tag_bordered")}))},l=function(t){t.classList.add("tag_selected"),t.classList.remove("tag_bordered")},c=function(){document.querySelectorAll(".strategies-wrapper .strategy").forEach((function(t){t.classList.remove("strategy_hidden")}))},d=function(t){document.querySelectorAll(".strategies-wrapper .strategy").forEach((function(e){e.classList.add("strategy_hidden"),e.querySelectorAll(".tag").forEach((function(s){s.innerText===t&&e.classList.remove("strategy_hidden")}))}))},u=function(){let t=document.querySelector(".strategies-wrapper");t.innerHTML="";let e=[];a.forEach((function(t){e.push(new o(t))})),e.forEach((function(e){t.append(e.generateArticle())})),h()},h=function(){document.querySelector(".strategies-wrapper").addEventListener("click",t=>{if(t.target.closest(".strategy")){let e=t.target.closest(".strategy").getAttribute("data-id"),s=g(e);y(s)}})},g=function(t){return a.find(e=>e.id==t)},y=function(t){new i("article-modal",t).renderModal()}}]);