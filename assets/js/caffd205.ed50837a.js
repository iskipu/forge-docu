"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[848],{5680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>m});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||a;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5294:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=t(8168),o=(t(6540),t(5680));const a={description:"Generate a DMG with Electron Forge to distribute your Electron app on macOS."},i="DMG",c={unversionedId:"config/makers/dmg",id:"version-old/config/makers/dmg",title:"DMG",description:"Generate a DMG with Electron Forge to distribute your Electron app on macOS.",source:"@site/versioned_docs/version-old/config/makers/dmg.md",sourceDirName:"config/makers",slug:"/config/makers/dmg",permalink:"/forge-docu/config/makers/dmg",draft:!1,editUrl:"https://github.com/iskipu/forge-docu/edit/main/versioned_docs/version-old/config/makers/dmg.md",tags:[],version:"old",frontMatter:{description:"Generate a DMG with Electron Forge to distribute your Electron app on macOS."},sidebar:"tutorialSidebar",previous:{title:"deb",permalink:"/forge-docu/config/makers/deb"},next:{title:"Flatpak",permalink:"/forge-docu/config/makers/flatpak"}},l={},p=[{value:"Usage",id:"usage",level:3}],s={toc:p},u="wrapper";function g(e){let{components:r,...t}=e;return(0,o.yg)(u,(0,n.A)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"dmg"},"DMG"),(0,o.yg)("p",null,"The DMG target builds ",(0,o.yg)("inlineCode",{parentName:"p"},".dmg")," files, which are the standard format for sharing macOS apps.  The DMG acts like a zip file, but provides an easy way for users to take the app and put it in the ",(0,o.yg)("inlineCode",{parentName:"p"},"/Applications")," directory."),(0,o.yg)("p",null,'{% hint style="warning" %}\nYou can only build the DMG target on macOS machines.\n{% endhint %}'),(0,o.yg)("p",null,"Configuration options are documented in ",(0,o.yg)("a",{parentName:"p",href:"https://js.electronforge.io/interfaces/_electron_forge_maker_dmg.MakerDMGConfig.html"},(0,o.yg)("inlineCode",{parentName:"a"},"MakerDMGConfig")),"."),(0,o.yg)("h3",{id:"usage"},"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"{\n  name: '@electron-forge/maker-dmg',\n  config: {\n    background: './assets/dmg-background.png',\n    format: 'ULFO'\n  }\n}\n")))}g.isMDXComponent=!0}}]);