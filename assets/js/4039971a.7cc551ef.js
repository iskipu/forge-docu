"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1953],{5680:(e,r,n)=>{n.d(r,{xA:()=>l,yg:()=>f});var t=n(6540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),s=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,f=u["".concat(p,".").concat(g)]||u[g]||d[g]||o;return n?t.createElement(f,i(i({ref:r},l),{},{components:n})):t.createElement(f,i({ref:r},l))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1496:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var t=n(8168),a=(n(6540),n(5680));const o={description:"Create a package for Debian-based Linux distributions for your Electron app, using Electron Forge."},i="deb",c={unversionedId:"config/makers/deb",id:"config/makers/deb",title:"deb",description:"Create a package for Debian-based Linux distributions for your Electron app, using Electron Forge.",source:"@site/docs/config/makers/deb.md",sourceDirName:"config/makers",slug:"/config/makers/deb",permalink:"/forge-docu/next/config/makers/deb",draft:!1,editUrl:"https://github.com/iskipu/forge-docu/edit/main/docs/config/makers/deb.md",tags:[],version:"current",frontMatter:{description:"Create a package for Debian-based Linux distributions for your Electron app, using Electron Forge."},sidebar:"tutorialSidebar",previous:{title:"AppX",permalink:"/forge-docu/next/config/makers/appx"},next:{title:"DMG",permalink:"/forge-docu/next/config/makers/dmg"}},p={},s=[{value:"Usage",id:"usage",level:3}],l={toc:s},u="wrapper";function d(e){let{components:r,...n}=e;return(0,a.yg)(u,(0,t.A)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"deb"},"deb"),(0,a.yg)("p",null,"The deb target builds ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Deb_%28file_format%29"},(0,a.yg)("inlineCode",{parentName:"a"},".deb")," packages"),", which are the standard package format for Debian-based Linux distributions such as Ubuntu.  You can only build the deb target on Linux or macOS machines with the ",(0,a.yg)("inlineCode",{parentName:"p"},"fakeroot")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"dpkg")," packages installed."),(0,a.yg)("p",null,"Configuration options are documented in ",(0,a.yg)("a",{parentName:"p",href:"https://js.electronforge.io/interfaces/_electron_forge_maker_deb.MakerDebConfig.html"},(0,a.yg)("inlineCode",{parentName:"a"},"MakerDebConfig")),"."),(0,a.yg)("h3",{id:"usage"},"Usage"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"{\n  name: '@electron-forge/maker-deb',\n  config: {\n    options: {\n      maintainer: 'Joe Bloggs',\n      homepage: 'https://example.com'\n    }\n  }\n}\n")))}d.isMDXComponent=!0}}]);