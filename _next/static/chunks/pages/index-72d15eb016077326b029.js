_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{RNiq:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return u})),a.d(t,"default",(function(){return x}));var n=a("nKUr"),r=a("rePB"),l=a("q1tI"),s=a("e+cM"),c=a("KQm4");function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m=function(e){switch(e.type.toLowerCase()){case"github":return Object(n.jsx)(s.d.GitHub,{});case"twitter":return Object(n.jsx)(s.d.Twitter,{});case"mail":return Object(n.jsx)(s.d.Mail,{});default:return Object(n.jsx)(s.d.GlobeOutline,{})}},d=function(e){var t=e.mentor;return Object(n.jsxs)("div",{className:"bg-custom-800 shadow-md rounded-lg flex flex-col flex-nowrap justify-start p-6 "+(!1===t.available?"opacity-70":""),children:[Object(n.jsxs)("h2",{className:"text-lg text-white font-mono font-normal tracking-tight mb-1",children:[t.name,!1===t.available&&Object(n.jsx)("small",{className:"block text-xs text-white leading-none font-mono tracking-tight mb-1",children:"Ej tillg\xe4nglig"})]}),Object(n.jsx)("p",{className:"leading-relaxed text-base font-light",children:t.description}),Object(n.jsx)("ul",{className:"flex flex-grow flex-wrap items-end mt-2 "+(!1===t.available?"opacity-70":""),children:t.skills.sort((function(e,t){return e.localeCompare(t)})).map((function(e,t){return Object(n.jsx)("li",{className:"px-2 py-1 mr-2 mt-2 text-xs text-white leading-none bg-indigo-900 rounded-full font-mono tracking-tight",children:e},t)}))}),Object(n.jsxs)("div",{className:"flex flex-row flex-nowrap items-center order-first",children:[t.avatar&&Object(n.jsx)("img",{className:"rounded-full mr-3 -mt-1 mb-3 "+(!1===t.available?"opacity-60":""),width:"80",height:"80",src:t.avatar}),t.contact&&Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"text-xs mb-0",children:"Kontakta mig"}),Object(n.jsx)("ul",{className:"mt-2 flex flex-grow flex-wrap content-end mb-3 ",title:"kontakta "+t.name+" p\xe5",children:Object.keys(t.contact||{}).map((function(e){return Object(n.jsx)("li",{className:"mr-2",children:Object(n.jsx)("a",{href:t.contact[e],className:"underline","aria-label":e||"webbplats",children:Object(n.jsx)(m,{type:e})})},e)}))})]})]})]})},u=!0;function x(e){var t=e.mentors,a=Object(l.useState)({skill:"",search:"",available:!0}),r=a[0],i=a[1],m=t;r.skill&&(m=m.filter((function(e){return!!e.skills.find((function(e){return-1!==e.toLowerCase().indexOf(r.skill)}))}))),r.search&&(m=m.filter((function(e){return-1!==e.name.toLowerCase().indexOf(r.search)||-1!==e.description.toLowerCase().indexOf(r.search)||!!e.skills.find((function(e){return-1!==e.toLowerCase().indexOf(r.search)}))}))),m=m.filter((function(e){return r.available?!1!==e.available:e}));var u=Array.from(new Set(function(e){for(var t=Object(c.a)(e),a=[];t.length;){var n=t.pop();Array.isArray(n)?t.push.apply(t,Object(c.a)(n)):a.push(n)}return a.reverse()}(t.map((function(e){return e.skills}))))).map((function(e){return{value:e.toLowerCase(),label:e}}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(s.c,{title:"Kodcoach",url:"https://kodcoach.se/"}),Object(n.jsxs)("div",{className:"max-w-screen-sm mx-auto mb-8 sm:my-8 md:my-12",children:[Object(n.jsx)("h1",{className:"text-4xl sm:text-5xl md:text-6xl text-center font-bold font-mono tracking-tight",children:Object(n.jsx)("span",{className:"block mx-auto max-w-sm sm:max-w-md md:max-w-full bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-indigo-500 to-purple-500",children:"Utvecklare till utvecklare."})}),Object(n.jsx)("p",{className:"text-center text-lg sm:text-xl font-sans font-light",children:"Erfarna utvecklare som g\xe4rna delar med sig av sina erfarenheter, sin kunskap & ger r\xe5dgivning till andra utvecklare som vill v\xe4xa."})]}),Object(n.jsxs)("div",{className:"w-full max-w-screen-sm mx-auto mb-8 md:mb-12 font-mono",children:[Object(n.jsxs)("div",{className:"flex flex-wrap justify-between space-y-4 sm:space-x-4 sm:space-y-0",children:[Object(n.jsx)("div",{className:"w-full lg:w-1/2 flex-none sm:flex-1",children:Object(n.jsx)(s.g,{label:"V\xe4lj teknik",options:u,placeholder:"V\xe4lj teknik",value:r.skill,onChange:function(e){return i(o(o({},r),{},{skill:e}))}},"skills")}),Object(n.jsx)("div",{className:"w-full lg:w-1/2 flex-none sm:flex-1",children:Object(n.jsx)("input",{id:"search",className:"w-full rounded-md py-1.5 px-4 border-1 border-color-gray-500 text-white bg-input placeholder-white font-mono",type:"search","aria-label":"S\xf6k",placeholder:"S\xf6k",defaultValue:r.search,onChange:function(e){return i(o(o({},r),{},{search:e.target.value}))}})})]}),Object(n.jsx)("div",{className:"space-y-4 sm:space-x-4 sm:space-y-0 text-center",children:Object(n.jsxs)("label",{className:"inline-flex items-center mt-4",children:[Object(n.jsx)("span",{className:"leading-relaxed text-sm font-light font-mono",children:"Visa endast tillg\xe4ngliga"}),Object(n.jsx)("input",{className:"ml-2 text-purple-600",defaultChecked:r.available,type:"checkbox",onChange:function(e){return i(o(o({},r),{},{available:e.target.checked?e.target.checked:""}))}})]})})]}),Object(n.jsx)("div",{className:"grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4",children:m.map((function(e){return Object(n.jsx)(d,{mentor:e},e.slug)}))})]})}},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",0,2,3,1,4]]]);