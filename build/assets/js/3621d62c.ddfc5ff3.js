"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6344],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>y});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,y=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7450:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(8168),a=(r(6540),r(5680));const i={description:"Create a new Electron app with Vite."},o="Vite",p={unversionedId:"templates/vite",id:"templates/vite",title:"Vite",description:"Create a new Electron app with Vite.",source:"@site/docs/templates/vite.md",sourceDirName:"templates",slug:"/templates/vite",permalink:"/templates/vite",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/templates/vite.md",tags:[],version:"current",frontMatter:{description:"Create a new Electron app with Vite."},sidebar:"tutorialSidebar",previous:{title:"Build Lifecycle",permalink:"/core-concepts/build-lifecycle"},next:{title:"Vite + TypeScript",permalink:"/templates/vite-+-typescript"}},c={},l=[],s={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"vite"},"Vite"),(0,a.yg)("p",null,"To get you up and running as fast as possible with ",(0,a.yg)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite"),", we provide a template that makes use of the ",(0,a.yg)("a",{parentName:"p",href:"/config/plugins/vite"},(0,a.yg)("inlineCode",{parentName:"a"},"@electron-forge/plugin-vite")," module"),", plus some preset Vite configuration options."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm init electron-app@latest my-new-app -- --template=vite\n")),(0,a.yg)("p",null,"Once you've initialized the template, you'll need to run ",(0,a.yg)("inlineCode",{parentName:"p"},"npm start")," in the generated directory."),(0,a.yg)("p",null,"See the ",(0,a.yg)("a",{parentName:"p",href:"/config/plugins/vite"},"Vite Plugin")," documentation for Electron Forge-specific configuration options."))}m.isMDXComponent=!0}}]);