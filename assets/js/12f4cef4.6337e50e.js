"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7842],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>d});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),g=o,d=u["".concat(p,".").concat(g)]||u[g]||m[g]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9139:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(8168),o=(r(6540),r(5680));const a={description:"Generate a DMG with Electron Forge to distribute your Electron app on macOS."},i="DMG",c={unversionedId:"config/makers/dmg",id:"config/makers/dmg",title:"DMG",description:"Generate a DMG with Electron Forge to distribute your Electron app on macOS.",source:"@site/docs/config/makers/dmg.md",sourceDirName:"config/makers",slug:"/config/makers/dmg",permalink:"/forge-docu/next/config/makers/dmg",draft:!1,editUrl:"https://github.com/iskipu/forge-docu/edit/main/docs/config/makers/dmg.md",tags:[],version:"current",frontMatter:{description:"Generate a DMG with Electron Forge to distribute your Electron app on macOS."},sidebar:"tutorialSidebar",previous:{title:"deb",permalink:"/forge-docu/next/config/makers/deb"},next:{title:"Flatpak",permalink:"/forge-docu/next/config/makers/flatpak"}},p={},l=[{value:"Usage",id:"usage",level:3}],s={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"dmg"},"DMG"),(0,o.yg)("p",null,"The DMG target builds ",(0,o.yg)("inlineCode",{parentName:"p"},".dmg")," files, which are the standard format for sharing macOS apps. The DMG acts like a zip file, but provides an easy way for users to take the app and put it in the ",(0,o.yg)("inlineCode",{parentName:"p"},"/Applications")," directory."),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"You can only build the DMG target on macOS machines.")),(0,o.yg)("p",null,"Configuration options are documented in ",(0,o.yg)("a",{parentName:"p",href:"https://js.electronforge.io/interfaces/_electron_forge_maker_dmg.MakerDMGConfig.html"},(0,o.yg)("inlineCode",{parentName:"a"},"MakerDMGConfig")),"."),(0,o.yg)("h3",{id:"usage"},"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"{\n  name: '@electron-forge/maker-dmg',\n  config: {\n    background: './assets/dmg-background.png',\n    format: 'ULFO'\n  }\n}\n")))}m.isMDXComponent=!0}}]);