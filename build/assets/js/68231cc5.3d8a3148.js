"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3404],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>d});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(r),y=a,d=u["".concat(c,".").concat(y)]||u[y]||m[y]||p;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<p;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5156:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var n=r(8168),a=(r(6540),r(5680));const p={description:"Create a new Electron app with webpack and TypeScript."},i="Webpack + Typescript",o={unversionedId:"templates/typescript-+-webpack-template",id:"templates/typescript-+-webpack-template",title:"Webpack + Typescript",description:"Create a new Electron app with webpack and TypeScript.",source:"@site/docs/templates/typescript-+-webpack-template.md",sourceDirName:"templates",slug:"/templates/typescript-+-webpack-template",permalink:"/templates/typescript-+-webpack-template",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/templates/typescript-+-webpack-template.md",tags:[],version:"current",frontMatter:{description:"Create a new Electron app with webpack and TypeScript."},sidebar:"tutorialSidebar",previous:{title:"Webpack",permalink:"/templates/webpack-template"},next:{title:"Code Signing",permalink:"/guides/code-signing/"}},c={},l=[],s={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"webpack--typescript"},"Webpack + Typescript"),(0,a.yg)("p",null,"To get you up and running as fast as possible with ",(0,a.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," and ",(0,a.yg)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack"),", we provide a template that makes use of the ",(0,a.yg)("a",{parentName:"p",href:"/config/plugins/webpack"},(0,a.yg)("inlineCode",{parentName:"a"},"@electron-forge/plugin-webpack")," module")," with sane TypeScript configuration defaults."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm init electron-app@latest my-new-app -- --template=webpack-typescript\n")),(0,a.yg)("p",null,'{% hint style="warning" %}\nThere have been reports that using the Git Bash command line on Windows specifically with this template will prevent the Electron app from rendering (packaged apps are fine). We recommend that on Windows, you use CMD.exe, PowerShell, or ',(0,a.yg)("a",{parentName:"p",href:"/guides/developing-with-wsl"},"WSL2"),".\n{% endhint %}"),(0,a.yg)("p",null,"Once you've initialized the template, you'll need to run ",(0,a.yg)("inlineCode",{parentName:"p"},"npm start")," in the generated directory. See the ",(0,a.yg)("a",{parentName:"p",href:"/config/plugins/webpack"},"Webpack Plugin")," documentation for Electron Forge-specific configuration options."))}m.isMDXComponent=!0}}]);