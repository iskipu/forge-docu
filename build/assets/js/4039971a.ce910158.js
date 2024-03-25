"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1953],{5680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>f});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,f=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1496:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(8168),a=(t(6540),t(5680));const o={description:"Create a package for Debian-based Linux distributions for your Electron app, using Electron Forge."},i="deb",c={unversionedId:"config/makers/deb",id:"config/makers/deb",title:"deb",description:"Create a package for Debian-based Linux distributions for your Electron app, using Electron Forge.",source:"@site/docs/config/makers/deb.md",sourceDirName:"config/makers",slug:"/config/makers/deb",permalink:"/config/makers/deb",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/config/makers/deb.md",tags:[],version:"current",frontMatter:{description:"Create a package for Debian-based Linux distributions for your Electron app, using Electron Forge."},sidebar:"tutorialSidebar",previous:{title:"AppX",permalink:"/config/makers/appx"},next:{title:"DMG",permalink:"/config/makers/dmg"}},s={},p=[{value:"Usage",id:"usage",level:3}],l={toc:p},u="wrapper";function d(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.A)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"deb"},"deb"),(0,a.yg)("p",null,"The deb target builds ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Deb_%28file_format%29"},(0,a.yg)("inlineCode",{parentName:"a"},".deb")," packages"),", which are the standard package format for Debian-based Linux distributions such as Ubuntu.  You can only build the deb target on Linux or macOS machines with the ",(0,a.yg)("inlineCode",{parentName:"p"},"fakeroot")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"dpkg")," packages installed."),(0,a.yg)("p",null,"Configuration options are documented in ",(0,a.yg)("a",{parentName:"p",href:"https://js.electronforge.io/interfaces/_electron_forge_maker_deb.MakerDebConfig.html"},(0,a.yg)("inlineCode",{parentName:"a"},"MakerDebConfig")),"."),(0,a.yg)("h3",{id:"usage"},"Usage"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"{\n  name: '@electron-forge/maker-deb',\n  config: {\n    options: {\n      maintainer: 'Joe Bloggs',\n      homepage: 'https://example.com'\n    }\n  }\n}\n")))}d.isMDXComponent=!0}}]);