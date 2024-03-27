"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1407],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>g});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),f=o,g=s["".concat(l,".").concat(f)]||s[f]||d[f]||a;return t?n.createElement(g,i(i({ref:r},u),{},{components:t})):n.createElement(g,i({ref:r},u))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3096:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=t(8168),o=(t(6540),t(5680));const a={description:"How to create an Electron app with the Parcel bundler and Electron Forge"},i="Parcel",c={unversionedId:"guides/framework-integration/parcel",id:"version-old/guides/framework-integration/parcel",title:"Parcel",description:"How to create an Electron app with the Parcel bundler and Electron Forge",source:"@site/versioned_docs/version-old/guides/framework-integration/parcel.md",sourceDirName:"guides/framework-integration",slug:"/guides/framework-integration/parcel",permalink:"/forge-docu/guides/framework-integration/parcel",draft:!1,editUrl:"https://github.com/iskipu/forge-docu/edit/main/versioned_docs/version-old/guides/framework-integration/parcel.md",tags:[],version:"old",frontMatter:{description:"How to create an Electron app with the Parcel bundler and Electron Forge"},sidebar:"tutorialSidebar",previous:{title:"Framework Integration",permalink:"/forge-docu/guides/framework-integration/"},next:{title:"React",permalink:"/forge-docu/guides/framework-integration/react"}},l={},p=[],u={toc:p},s="wrapper";function d(e){let{components:r,...t}=e;return(0,o.yg)(s,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"parcel"},"Parcel"),(0,o.yg)("p",null,"Unfortunately, Parcel 1 does not have the necessary integration points or native module support to be able to have its own plugin. However, if you wish to do the integration yourself, ",(0,o.yg)("a",{parentName:"p",href:"https://electronjs.org/fiddle"},"Electron Fiddle")," can be used ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/electron/fiddle/blob/v0.19.0/tools/parcel-build.js"},"as a model for how to use Electron Forge in conjunction with Parcel 1"),"."),(0,o.yg)("p",null,"We hope to work with the Parcel developers in the future as they work on ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/parcel-bundler/parcel/issues/2492"},"Electron support in Parcel 2"),"."))}d.isMDXComponent=!0}}]);