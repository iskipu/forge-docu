"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[207],{5680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>d});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(t),g=o,d=u["".concat(c,".").concat(g)]||u[g]||f[g]||a;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5594:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=t(8168),o=(t(6540),t(5680));const a={description:"Create a package for the Windows Store for your Electron app, using Electron Forge."},i="AppX",p={unversionedId:"config/makers/appx",id:"config/makers/appx",title:"AppX",description:"Create a package for the Windows Store for your Electron app, using Electron Forge.",source:"@site/docs/config/makers/appx.md",sourceDirName:"config/makers",slug:"/config/makers/appx",permalink:"/forge-docu/config/makers/appx",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/config/makers/appx.md",tags:[],version:"current",frontMatter:{description:"Create a package for the Windows Store for your Electron app, using Electron Forge."},sidebar:"tutorialSidebar",previous:{title:"Makers",permalink:"/forge-docu/config/makers/"},next:{title:"deb",permalink:"/forge-docu/config/makers/deb"}},c={},s=[{value:"Usage",id:"usage",level:3}],l={toc:s},u="wrapper";function f(e){let{components:r,...t}=e;return(0,o.yg)(u,(0,n.A)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"appx"},"AppX"),(0,o.yg)("p",null,"The AppX target builds ",(0,o.yg)("inlineCode",{parentName:"p"},".appx")," packages which are designed to target the Windows Store.  You can only build the AppX target on Windows machines with the Windows 10 SDK installed.  Check the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/felixrieseberg/electron-windows-store#readme"},(0,o.yg)("inlineCode",{parentName:"a"},"electron-windows-store")," docs")," for more information on platform requirements."),(0,o.yg)("p",null,"Configuration options are documented in ",(0,o.yg)("a",{parentName:"p",href:"https://js.electronforge.io/interfaces/_electron_forge_maker_appx.MakerAppXConfig.html"},(0,o.yg)("inlineCode",{parentName:"a"},"MakerAppXConfig")),"."),(0,o.yg)("h3",{id:"usage"},"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"{\n  name: '@electron-forge/maker-appx',\n  config: {\n    publisher: 'CN=developmentca',\n    devCert: 'C:\\\\devcert.pfx',\n    certPass: 'abcd'\n  }\n}\n")))}f.isMDXComponent=!0}}]);