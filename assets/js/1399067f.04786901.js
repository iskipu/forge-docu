"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5476],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>m});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||y[f]||i;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7732:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(8168),a=(r(6540),r(5680));const i={},p="Vite + TypeScript",o={unversionedId:"templates/vite-+-typescript",id:"templates/vite-+-typescript",title:"Vite + TypeScript",description:"To get you up and running as fast as possible with TypeScript and Vite, we provide a template that makes use of the @electron-forge/plugin-vite module with sane TypeScript configuration defaults.",source:"@site/docs/templates/vite-+-typescript.md",sourceDirName:"templates",slug:"/templates/vite-+-typescript",permalink:"/forge-docu/templates/vite-+-typescript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/templates/vite-+-typescript.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vite",permalink:"/forge-docu/templates/vite"},next:{title:"Webpack",permalink:"/forge-docu/templates/webpack-template"}},c={},l=[],s={toc:l},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"vite--typescript"},"Vite + TypeScript"),(0,a.yg)("p",null,"To get you up and running as fast as possible with ",(0,a.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," and ",(0,a.yg)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite"),", we provide a template that makes use of the ",(0,a.yg)("a",{parentName:"p",href:"/forge-docu/config/plugins/vite"},(0,a.yg)("inlineCode",{parentName:"a"},"@electron-forge/plugin-vite")," module")," with sane TypeScript configuration defaults."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm init electron-app@latest my-new-app -- --template=vite-typescript\n")),(0,a.yg)("p",null,"Once you've initialized the template, you'll need to run ",(0,a.yg)("inlineCode",{parentName:"p"},"npm start")," in the generated directory."),(0,a.yg)("p",null,"See the ",(0,a.yg)("a",{parentName:"p",href:"/forge-docu/config/plugins/vite"},"Vite Plugin")," documentation for Electron Forge-specific configuration options."))}y.isMDXComponent=!0}}]);