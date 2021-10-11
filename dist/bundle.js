(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>f});var o=t(645),a=t.n(o),r=t(667),i=t.n(r),c=new URL(t(237),t.b),d=new URL(t(861),t.b),s=new URL(t(884),t.b),l=a()((function(n){return n[1]})),u=i()(c),p=i()(d),m=i()(s);l.push([n.id,'*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n@font-face {\n  font-family: "Encode";\n  src: url('+u+");\n}\n\n\nbody {\n\n  background-image: url("+p+');\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  font-family:"Encode";\n\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n}\n\n.main{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 96%;\n  width: 100%;\n  flex-direction: column;\n  padding-bottom: 10px;\n  padding-top: 40px;\n}\n.header {\n    display: flex;\n    width: 100%;\n    background: rgba(33, 47, 76, 0.671);\n    align-items: stretch;\n    justify-content: space-between;\n    position:fixed;\n    top: 0;\n    margin-bottom: 40px;\n    overflow:visible;\n    font-size: 1.5em;\n}\n\n.icon {\n  background-image: url('+m+");\n  position: relative;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  border: none;\n  margin-top: 5px;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n\n.nav {\n  background: transparent;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-end;\n  flex-wrap: nowrap;\n  min-width: 120px;\n  width: 300px;\n}\n\n.button-nav {\n  background: rgba(0, 0, 0, 0);\n  color: rgba(168, 22, 33, 0.897);\n  border: transparent;\n  border-bottom: 2px solid transparent;\n  transition: transform 0.3s;\n  display:inline-block;\n  font-size: .8em;\n}\n\n.button-nav.active {\n  border-bottom: 2px solid rgba(168, 22, 33, 0.897);\n}\n\n.button-nav:hover {\n  transform: translateY(-5%);\n}\n\n.resturant-name {\n    color:  rgba(168, 22, 33, 0.897);\n    display: flex; \n    flex-direction: row-reverse;\n    justify-content: space-evenly;\n    align-items: flex-end;\n    align-content: center;\n    align-self: center;\n}\n\n.menu {\n    display: flex;\n    flex-direction: column;\n    overflow: scroll;\n    justify-content: space-between;\n    align-items: center;\n    justify-items: stretch;\n    height: 75%;\n    width: 70%; \n    background: rgba(33, 47, 76, 0.471);\n    padding-bottom: 5%;\n    padding-top: 5%;\n}\n\n.menuitem {\n  display: flex;\n  padding: 10px;\n}\n\n.menutitle {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 10px;\n  align-items: center;\n  background: rgba(33, 47, 76, 0.471);\n  width: 70%;\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n.menu::-webkit-scrollbar {\n  display: none;\n}\n\n/* Hide scrollbar for IE, Edge and Firefox */\n.menu {\n  -ms-overflow-style: none;  /* IE and Edge */\n  scrollbar-width: none;  /* Firefox */\n}\n\n.menuitem {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  align-items: center;\n}\n\n.contact {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: rgba(33, 47, 76, 0.568);\n  padding: 10px;\n  color:  #fee59a;\n  font-size: 1.2em;\n  font-weight: bolder;\n  margin-top: 80px;\n}\n\n.contact img {\n  width: 80%;\n  padding-bottom: 20px;\n  padding-top: 20px;\n}\n@media (max-width: 400px) {\n  .header {\n    font-size: 100%;\n  }\n  .resturant-name {\n    font-size: 80%;\n  }\n  .menu img {\n    width: 60%;\n  }\n}\n\n@media (max-width: 1000px) {\n  html {\n    font-size: 70%;\n  }\n  .resturant-name {\n    font-size: 100%;\n  }\n  .main {\n    width: 80%;\n  }\n  .nav {\n    width: 200px;\n  }\n  .menu img {\n    width: 50%;\n  }\n  .contact img {\n    width: 70%;\n  }\n}",""]);const f=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(o)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(a[i]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&a[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=r[s]||0,u="".concat(s," ").concat(l);r[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(e[p].references++,e[p].updater(m)):e.push({identifier:u,updater:a(m,o),references:1}),i.push(u)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var c=t(r[i]);e[c].references--}for(var d=o(n,a),s=0;s<r.length;s++){var l=t(r[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o=t.css,a=t.media,r=t.sourceMap;a?n.setAttribute("media",a):n.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},588:(n,e,t)=>{n.exports=t.p+"4aaff4eadda38705a9c3.jpeg"},861:(n,e,t)=>{n.exports=t.p+"5f3560a419894291502c.jpg"},237:(n,e,t)=>{n.exports=t.p+"03a2a6a93eee93999237.ttf"},228:(n,e,t)=>{n.exports=t.p+"0aa14c8b49d5c0160f47.jpeg"},884:(n,e,t)=>{n.exports=t.p+"6128d5837a3e40074718.png"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(228);const e=function(){const e=document.getElementById("main");e.textContent=" ",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("p");t.textContent="Phone: 1 (555) 555-555";const o=document.createElement("p");o.classList.add("adress_text"),o.textContent="made up adress";const a=document.createElement("img");return a.src=n,a.alt="map image of location",e.appendChild(t),e.appendChild(o),e.appendChild(a),e}())};function o(n){const e=document.createElement("p");return e.textContent=n,e}const a=function(){const n=document.getElementById("main");n.textContent="",n.appendChild(function(){const n=document.createElement("div");return n.classList.add("home"),n.appendChild(o("ramen shop")),n.appendChild(o("naruto inspired")),n.appendChild(o("made with love")),n}())};var r=t(588);function i(n,e,t,o){const a=document.createElement("div");a.classList.add("menuitem");const r=document.createElement("h2");r.textContent=e;const i=document.createElement("p");i.textContent=t;const c=document.createElement("p");c.textContent=o;const d=document.createElement("img");return d.src=n,a.appendChild(d),a.appendChild(r),a.appendChild(i),a.appendChild(c),a}const c=function(){const n=document.getElementById("main");n.textContent="",n.appendChild(function(){const n=document.createElement("div");n.classList.add("menutitle");const e=document.createElement("h1");e.textContent="Menu";const t=document.createElement("h3");return t.textContent="Scroll down to view additional Selections",n.appendChild(e),n.appendChild(t),n}()),n.appendChild(function(){const n=document.createElement("div");return n.classList.add("menu"),n.appendChild(i(r,"Beef Ramen","Sliced beef, fish cake, kimchi and bamboo shoots all in a our house tonkotsu broth","$ 16.99")),n.appendChild(i(r,"Charsu Ramen","Roasted pork belly, fish cake, egg, in house tonkotsu broth","$17.99")),n.appendChild(i(r,"Crispy Chicken Ramen","Crispy chicken, sliced cabbbage, corn, in a chicken broth","$ 15.99")),n.appendChild(i(r,"Seafood Ramen","Shrimp, muscles, squid, crab meat, and corn in our house miso broth","$18.99")),n.appendChild(i(r,"Spicy Tonkotsu Ramen","Roasted pork, fish cake, corn, onions, in a rich tonkotsu broth","$15.99")),n}())};t(884);var d=t(379),s=t.n(d),l=t(795),u=t.n(l),p=t(569),m=t.n(p),f=t(565),h=t.n(f),g=t(216),b=t.n(g),x=t(589),v=t.n(x),C=t(426),y={};y.styleTagTransform=v(),y.setAttributes=h(),y.insert=m().bind(null,"head"),y.domAPI=u(),y.insertStyleElement=b(),s()(C.Z,y),C.Z&&C.Z.locals&&C.Z.locals,function(){const n=document.getElementById("content");n.appendChild(function(){const n=document.createElement("header");n.classList.add("header");const t=document.createElement("img");t.classList.add("icon");const o=document.createElement("h1");return o.textContent="Okami Ramen Shop",o.classList.add("resturant-name"),o.appendChild(t),n.appendChild(o),n.appendChild(function(){const n=document.createElement("nav");n.classList.add("nav");const t=document.createElement("button");t.classList.add("button-nav"),t.textContent="Home",t.addEventListener("click",a);const o=document.createElement("button");o.classList.add("button-nav"),o.textContent="Menu",o.addEventListener("click",c);const r=document.createElement("button");return r.classList.add("button-nav"),r.textContent="Contact Us",r.addEventListener("click",e),n.appendChild(t),n.appendChild(o),n.appendChild(r),n}()),n}()),n.appendChild(function(){const n=document.createElement("main");return n.classList.add("main"),n.setAttribute("id","main"),n}()),n.appendChild(function(){const n=document.createElement("footer");return n.classList.add="footer",n.textContent="Matthew Danialzadeh",n}()),a()}()})()})();