_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/Rd+":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==f(e)&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),l=(n=r("17x9"))&&n.__esModule?n:{default:n};function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,l=c}finally{try{n||null==o.return||o.return()}finally{if(a)throw l}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=function(e){var t,r=e.element,n=e.children,l=e.tel,i=e.sms,c=e.facetime,u=e.email,b=e.href,p=e.headers,j=e.obfuscate,h=e.obfuscateChildren,x=e.linkText,O=e.style,y=e.onClick,g=m(e,["element","children","tel","sms","facetime","email","href","headers","obfuscate","obfuscateChildren","linkText","style","onClick"]),v=d((0,a.useState)(!1),2),w=v[0],k=v[1],N=n||l||i||c||u||b,P=r,S=function(){var e,t;if(u)e="mailto:".concat(u),p&&(e+="?".concat((t=p,Object.keys(t).map((function(e){return"".concat(e,"=").concat(encodeURIComponent(t[e]))})).join("&"))));else if(l)e="tel:".concat(l);else if(i)e="sms:".concat(i);else if(c)e="facetime:".concat(c);else if(b)e=b;else{if("object"===f(n))return"";e=n}return e},C=s(s({},O),{},{unicodeBidi:"bidi-override",direction:!0===w||!1===j||!1===h?"ltr":"rtl"}),_=!0===w||!1===j||"object"===f(n)||!1===h?N:"undefined"!==typeof(t=N)&&t.split("").reverse().join("").replace("(",")").replace(")","("),D="a"===P?{href:!0===w||!1===j?S():x||"obfuscated",onClick:function(){y&&"function"===typeof y&&y(),!1===w&&(window.location.href=S())}}:{};return a.default.createElement(P,o({onFocus:function(){return k(!0)},onMouseOver:function(){return k(!0)},onContextMenu:function(){return k(!0)}},g,D,{style:C}),_)};p.propTypes={element:l.default.string,children:l.default.node,tel:l.default.string,sms:l.default.string,facetime:l.default.string,email:l.default.string,href:l.default.string,headers:l.default.shape({}),obfuscate:l.default.bool,obfuscateChildren:l.default.bool,linkText:l.default.string,style:l.default.shape({}),onClick:l.default.func},p.defaultProps={element:"a",children:void 0,tel:void 0,sms:void 0,facetime:void 0,email:void 0,href:void 0,headers:void 0,obfuscate:void 0,obfuscateChildren:void 0,linkText:void 0,style:{},onClick:void 0};var j=p;t.default=j},"1k7D":function(e,t,r){"use strict";t.atob=self.atob.bind(self),t.btoa=self.btoa.bind(self)},RNiq:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return j})),r.d(t,"default",(function(){return h}));var n=r("nKUr"),a=r("rePB"),l=r("/Rd+"),i=r.n(l),o=r("q1tI"),c=r("1k7D"),s=r("e+cM"),u=r("KQm4"),f=function(e,t){var r={website:"Bes\xf6k ".concat(t,"s hemsida"),twitter:"Kontakta ".concat(t," via Twitter"),github:"Kontakta ".concat(t," via GitHub"),mail:"Kontakta ".concat(t," via mail")};return r[e]?r[e]:""};function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e){switch(e.type.toLowerCase()){case"github":return Object(n.jsx)(s.d.GitHub,{});case"twitter":return Object(n.jsx)(s.d.Twitter,{});case"mail":return Object(n.jsx)(s.d.Mail,{});default:return Object(n.jsx)(s.d.GlobeOutline,{})}},p=function(e){var t=e.mentor;return Object(n.jsxs)("div",{className:"bg-custom-800 shadow-md rounded-lg flex flex-col flex-nowrap justify-start p-6 "+(!1===t.available?"opacity-70":""),children:[Object(n.jsxs)("h2",{className:"text-lg text-white font-mono font-normal tracking-tight mb-1",children:[t.name,!1===t.available&&Object(n.jsx)("small",{className:"block text-xs text-white leading-none font-mono tracking-tight mb-1",children:"Ej tillg\xe4nglig"})]}),Object(n.jsx)("p",{className:"leading-relaxed text-base font-light",children:t.description}),Object(n.jsx)("ul",{className:"flex flex-grow flex-wrap items-end mt-2 "+(!1===t.available?"opacity-70":""),children:t.skills.sort((function(e,t){return e.localeCompare(t)})).map((function(e,t){return Object(n.jsx)("li",{className:"px-2 py-1 mr-2 mt-2 text-xs text-white leading-none bg-indigo-900 rounded-full font-mono tracking-tight",children:e},t)}))}),Object(n.jsxs)("div",{className:"flex flex-row flex-nowrap items-center order-first",children:[t.avatar&&Object(n.jsx)("img",{className:"rounded-full mr-3 -mt-1 mb-3 "+(!1===t.available?"opacity-60":""),width:"80",height:"80",src:t.avatar}),t.contact&&Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"text-xs mb-0",children:"Kontakta mig"}),Object(n.jsx)("ul",{className:"mt-2 flex flex-grow flex-wrap content-end mb-3 ",children:Object.keys(t.contact||{}).map((function(e){return Object(n.jsx)("li",{className:"mr-2",title:f(e,t.name),children:"mail"===e?Object(n.jsx)(i.a,{email:Object(c.atob)(t.contact[e]),className:"underline","aria-label":e||"webbplats",children:Object(n.jsx)(m,{type:e})}):Object(n.jsx)("a",{target:"_blank",href:t.contact[e],className:"underline","aria-label":e||"webbplats",children:Object(n.jsx)(m,{type:e})})},e)}))})]})]})]})},j=!0;function h(e){var t=e.mentors,r=Object(o.useState)({skill:"",search:"",available:!0}),a=r[0],l=r[1],i=t;a.skill&&(i=i.filter((function(e){return!!e.skills.find((function(e){return-1!==e.toLowerCase().indexOf(a.skill)}))}))),a.search&&(i=i.filter((function(e){return-1!==e.name.toLowerCase().indexOf(a.search)||-1!==e.description.toLowerCase().indexOf(a.search)||!!e.skills.find((function(e){return-1!==e.toLowerCase().indexOf(a.search)}))}))),i=i.filter((function(e){return a.available?!1!==e.available:e}));var c=Array.from(new Set(function(e){for(var t=Object(u.a)(e),r=[];t.length;){var n=t.pop();Array.isArray(n)?t.push.apply(t,Object(u.a)(n)):r.push(n)}return r.reverse()}(t.map((function(e){return e.skills}))))).map((function(e){return{value:e.toLowerCase(),label:e}}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(s.c,{title:"Kodcoach",url:"https://kodcoach.se/"}),Object(n.jsxs)("div",{className:"max-w-screen-sm mx-auto mb-8 sm:my-8 md:my-12",children:[Object(n.jsx)("h1",{className:"text-4xl sm:text-5xl md:text-6xl text-center font-bold font-mono tracking-tight",children:Object(n.jsx)("span",{className:"block mx-auto max-w-sm sm:max-w-md md:max-w-full bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-indigo-500 to-purple-500",children:"Utvecklare till utvecklare."})}),Object(n.jsx)("p",{className:"text-center text-lg sm:text-xl font-sans font-light",children:"Erfarna utvecklare som g\xe4rna delar med sig av sina erfarenheter, sin kunskap & ger r\xe5dgivning till andra utvecklare som vill v\xe4xa."})]}),Object(n.jsxs)("div",{className:"w-full max-w-screen-sm mx-auto mb-8 md:mb-12 font-mono",children:[Object(n.jsxs)("div",{className:"flex flex-wrap justify-between space-y-4 sm:space-x-4 sm:space-y-0",children:[Object(n.jsx)("div",{className:"w-full lg:w-1/2 flex-none sm:flex-1",children:Object(n.jsx)(s.g,{label:"V\xe4lj teknik",options:c,placeholder:"V\xe4lj teknik",value:a.skill,onChange:function(e){return l(b(b({},a),{},{skill:e}))}},"skills")}),Object(n.jsx)("div",{className:"w-full lg:w-1/2 flex-none sm:flex-1",children:Object(n.jsx)("input",{id:"search",className:"w-full rounded-md py-1.5 px-4 border-1 border-color-gray-500 text-white bg-input placeholder-white font-mono",type:"search","aria-label":"S\xf6k",placeholder:"S\xf6k",defaultValue:a.search,onChange:function(e){return l(b(b({},a),{},{search:e.target.value}))}})})]}),Object(n.jsx)("div",{className:"space-y-4 sm:space-x-4 sm:space-y-0 text-center",children:Object(n.jsxs)("label",{className:"inline-flex items-center mt-4",children:[Object(n.jsx)("span",{className:"leading-relaxed text-sm font-light font-mono",children:"Visa endast tillg\xe4ngliga"}),Object(n.jsx)("input",{className:"ml-2 text-purple-600",defaultChecked:a.available,type:"checkbox",onChange:function(e){return l(b(b({},a),{},{available:e.target.checked?e.target.checked:""}))}})]})})]}),Object(n.jsx)("div",{className:"grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4",children:i.map((function(e){return Object(n.jsx)(p,{mentor:e},e.slug)}))})]})}},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",0,2,3,1,4]]]);