"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1324],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>d});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||i;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2985:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(8168),o=(r(6540),r(5680));const i={description:"Create a new Electron app with Vite."},a="Vite",p={unversionedId:"templates/vite",id:"version-old/templates/vite",title:"Vite",description:"Create a new Electron app with Vite.",source:"@site/versioned_docs/version-old/templates/vite.md",sourceDirName:"templates",slug:"/templates/vite",permalink:"/forge-docu/templates/vite",draft:!1,editUrl:"https://github.com/iskipu/forge-docu/edit/main/versioned_docs/version-old/templates/vite.md",tags:[],version:"old",frontMatter:{description:"Create a new Electron app with Vite."},sidebar:"tutorialSidebar",previous:{title:"Build Lifecycle",permalink:"/forge-docu/core-concepts/build-lifecycle"},next:{title:"Vite + TypeScript",permalink:"/forge-docu/templates/vite-+-typescript"}},l={},c=[],s={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"vite"},"Vite"),(0,o.yg)("p",null,"To get you up and running as fast as possible with ",(0,o.yg)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite"),", we provide a template that makes use of the ",(0,o.yg)("a",{parentName:"p",href:"/forge-docu/config/plugins/vite"},(0,o.yg)("inlineCode",{parentName:"a"},"@electron-forge/plugin-vite")," module"),", plus some preset Vite configuration options."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm init electron-app@latest my-new-app -- --template=vite\n")),(0,o.yg)("p",null,"Once you've initialized the template, you'll need to run ",(0,o.yg)("inlineCode",{parentName:"p"},"npm start")," in the generated directory."),(0,o.yg)("p",null,"See the ",(0,o.yg)("a",{parentName:"p",href:"/forge-docu/config/plugins/vite"},"Vite Plugin")," documentation for Electron Forge-specific configuration options."))}f.isMDXComponent=!0}}]);