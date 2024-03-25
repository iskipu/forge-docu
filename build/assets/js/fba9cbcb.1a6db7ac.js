"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9645],{5680:(e,r,n)=>{n.d(r,{xA:()=>l,yg:()=>g});var t=n(6540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),s=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||f[m]||o;return n?t.createElement(g,i(i({ref:r},l),{},{components:n})):t.createElement(g,i({ref:r},l))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3305:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var t=n(8168),a=(n(6540),n(5680));const o={description:"Create a Snap package for your Electron app using Electron Forge."},i="Snapcraft",c={unversionedId:"config/makers/snapcraft",id:"config/makers/snapcraft",title:"Snapcraft",description:"Create a Snap package for your Electron app using Electron Forge.",source:"@site/docs/config/makers/snapcraft.md",sourceDirName:"config/makers",slug:"/config/makers/snapcraft",permalink:"/config/makers/snapcraft",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/config/makers/snapcraft.md",tags:[],version:"current",frontMatter:{description:"Create a Snap package for your Electron app using Electron Forge."},sidebar:"tutorialSidebar",previous:{title:"RPM",permalink:"/config/makers/rpm"},next:{title:"Squirrel.Windows",permalink:"/config/makers/squirrel.windows"}},p={},s=[{value:"Usage",id:"usage",level:2}],l={toc:s},u="wrapper";function f(e){let{components:r,...n}=e;return(0,a.yg)(u,(0,t.A)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"snapcraft"},"Snapcraft"),(0,a.yg)("p",null,"The Snapcraft target builds ",(0,a.yg)("inlineCode",{parentName:"p"},".snap")," files, which is the packaging format created and sponsored by Canonical, the company behind Ubuntu. It is a sandboxed package format that lets users of various Linux distributions install your application in an isolated environment on their machine."),(0,a.yg)("p",null,"You can only build the Snapcraft target on Linux systems with the ",(0,a.yg)("a",{parentName:"p",href:"https://snapcraft.io/"},(0,a.yg)("inlineCode",{parentName:"a"},"snapcraft"))," package installed."),(0,a.yg)("p",null,"Configuration options are documented in ",(0,a.yg)("a",{parentName:"p",href:"https://js.electronforge.io/modules/_electron_forge_maker_snap.html#MakerSnapConfig"},(0,a.yg)("inlineCode",{parentName:"a"},"MakerSnapConfig")),"."),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"{\n  name: '@electron-forge/maker-snap',\n  config: {\n    features: {\n      audio: true,\n      mpris: 'com.example.mpris',\n      webgl: true\n    },\n    summary: 'Pretty Awesome'\n  }\n}\n")))}f.isMDXComponent=!0}}]);