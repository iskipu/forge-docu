"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8406],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>g});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,g=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return t?n.createElement(g,a(a({ref:r},u),{},{components:t})):n.createElement(g,a({ref:r},u))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3214:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(8168),o=(t(6540),t(5680));const i={},a="Publishers",s={unversionedId:"config/publishers/README",id:"version-old/config/publishers/README",title:"Publishers",description:"Publishers are Electron Forge's way of taking the artifacts generated by the make command and sending them to a service somewhere for you to distribute or use as updates. This could be your update server or an S3 bucket.",source:"@site/versioned_docs/version-old/config/publishers/README.md",sourceDirName:"config/publishers",slug:"/config/publishers/",permalink:"/forge-docu/config/publishers/",draft:!1,editUrl:"https://github.com/iskipu/forge-docu/edit/main/versioned_docs/version-old/config/publishers/README.md",tags:[],version:"old",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Zip",permalink:"/forge-docu/config/makers/zip"},next:{title:"Bitbucket",permalink:"/forge-docu/config/publishers/bitbucket"}},l={},c=[],u={toc:c},p="wrapper";function f(e){let{components:r,...t}=e;return(0,o.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"publishers"},"Publishers"),(0,o.yg)("p",null,"Publishers are Electron Forge's way of taking the artifacts generated by the ",(0,o.yg)("a",{parentName:"p",href:"/forge-docu/config/makers/"},(0,o.yg)("inlineCode",{parentName:"a"},"make")," command")," and sending them to a service somewhere for you to distribute or ",(0,o.yg)("a",{parentName:"p",href:"/forge-docu/advanced/auto-update"},"use as updates"),". This could be your update server or an S3 bucket."),(0,o.yg)("p",null,"Each publisher has to be configured in the ",(0,o.yg)("inlineCode",{parentName:"p"},"publishers")," section of your Forge configuration with which platforms to run for and the publisher specific config. For example:"),(0,o.yg)("p",null,'{% code title="forge.config.js" %}'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  publishers: [\n    {\n      name: "@electron-forge/publisher-s3",\n      platforms: ["darwin", "linux"],\n      config: {\n        bucket: "my-bucket",\n        folder: "my/key/prefix",\n      },\n    },\n  ],\n};\n')),(0,o.yg)("p",null,"{% endcode %}"),(0,o.yg)("p",null,"Please note that all publishers default to publishing all platforms, so you only need to specify the ",(0,o.yg)("inlineCode",{parentName:"p"},"platforms")," key if you don't want that default."))}f.isMDXComponent=!0}}]);