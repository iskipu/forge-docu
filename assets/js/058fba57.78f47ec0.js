"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3699],{5680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>m});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=l(t),f=o,m=g["".concat(p,".").concat(f)]||g[f]||u[f]||a;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[g]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3932:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(8168),o=(t(6540),t(5680));const a={description:"Create a PKG file for your Electron app on macOS using Electron Forge."},i="Pkg",c={unversionedId:"config/makers/pkg",id:"version-old/config/makers/pkg",title:"Pkg",description:"Create a PKG file for your Electron app on macOS using Electron Forge.",source:"@site/versioned_docs/version-old/config/makers/pkg.md",sourceDirName:"config/makers",slug:"/config/makers/pkg",permalink:"/forge-docu/config/makers/pkg",draft:!1,editUrl:"https://github.com/iskipu/forge-docu/edit/main/versioned_docs/version-old/config/makers/pkg.md",tags:[],version:"old",frontMatter:{description:"Create a PKG file for your Electron app on macOS using Electron Forge."},sidebar:"tutorialSidebar",previous:{title:"Flatpak",permalink:"/forge-docu/config/makers/flatpak"},next:{title:"RPM",permalink:"/forge-docu/config/makers/rpm"}},p={},l=[{value:"Usage",id:"usage",level:3}],s={toc:l},g="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(g,(0,n.A)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"pkg"},"Pkg"),(0,o.yg)("p",null,"The Pkg target builds ",(0,o.yg)("inlineCode",{parentName:"p"},".pkg")," files for macOS. These are used to upload your application to the Mac App Store or just as an alternate distribution method for macOS users.  You can only build the Pkg target on macOS machines while targeting the ",(0,o.yg)("inlineCode",{parentName:"p"},"darwin"),"  or ",(0,o.yg)("inlineCode",{parentName:"p"},"mas")," platforms."),(0,o.yg)("p",null,"Configuration options are documented in ",(0,o.yg)("a",{parentName:"p",href:"https://js.electronforge.io/interfaces/_electron_forge_maker_pkg.MakerPKGConfig.html"},(0,o.yg)("inlineCode",{parentName:"a"},"MakerPkgConfig")),"."),(0,o.yg)("h3",{id:"usage"},"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"{\n  name: '@electron-forge/maker-pkg',\n  config: {\n    keychain: 'my-secret-ci-keychain'\n  }\n}\n")))}u.isMDXComponent=!0}}]);