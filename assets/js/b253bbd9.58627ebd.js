"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9630],{5680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>f});var i=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),g=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=g(e.components);return i.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=g(t),p=r,f=u["".concat(c,".").concat(p)]||u[p]||d[p]||o;return t?i.createElement(f,a(a({ref:n},l),{},{components:t})):i.createElement(f,a({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var g=2;g<o;g++)a[g]=t[g];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var i=t(8168),r=(t(6540),t(5680));const o={description:"Code signing is a security technology that you use to certify that an app was created by you."},a="Signing a Windows app",s={unversionedId:"guides/code-signing/code-signing-windows",id:"guides/code-signing/code-signing-windows",title:"Signing a Windows app",description:"Code signing is a security technology that you use to certify that an app was created by you.",source:"@site/docs/guides/code-signing/code-signing-windows.md",sourceDirName:"guides/code-signing",slug:"/guides/code-signing/code-signing-windows",permalink:"/forge-docu/next/guides/code-signing/code-signing-windows",draft:!1,editUrl:"https://github.com/iskipu/forge-docu/edit/main/docs/guides/code-signing/code-signing-windows.md",tags:[],version:"current",frontMatter:{description:"Code signing is a security technology that you use to certify that an app was created by you."},sidebar:"tutorialSidebar",previous:{title:"Code Signing",permalink:"/forge-docu/next/guides/code-signing/"},next:{title:"Signing a macOS app",permalink:"/forge-docu/next/guides/code-signing/code-signing-macos"}},c={},g=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing Visual Studio",id:"installing-visual-studio",level:3},{value:"Acquiring a certificate",id:"acquiring-a-certificate",level:3},{value:"Configuring Electron Forge",id:"configuring-electron-forge",level:2}],l={toc:g},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,i.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"signing-a-windows-app"},"Signing a Windows app"),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Starting June 1, 2023 at 00:00 UTC, private keys for code signing certificates need to be stored on a hardware storage module compliant with FIPS 140 Level 2, Common Criteria EAL 4+ or equivalent."),(0,r.yg)("p",{parentName:"admonition"},"In practice, this means that software-based OV certificates used in the steps below will no longer be available for purchase. For instructions on how to sign applications with newer token-based certificates, consult your Certificate Authority's documentation.")),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("h3",{id:"installing-visual-studio"},"Installing Visual Studio"),(0,r.yg)("p",null,"On Windows, apps are signed using ",(0,r.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/framework/tools/signtool-exe"},"Sign Tool"),", which is included in Visual Studio. Install Visual Studio to get the signing utility (the free ",(0,r.yg)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/vs/community/"},"Community Edition")," is enough)."),(0,r.yg)("h3",{id:"acquiring-a-certificate"},"Acquiring a certificate"),(0,r.yg)("p",null,"You can get a ",(0,r.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows-hardware/drivers/install/authenticode"},"Windows Authenticode")," code signing certificate from many vendors. Prices vary, so it may be worth your time to shop around. Popular vendors include:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.digicert.com/dc/code-signing/microsoft-authenticode.htm"},"digicert")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://sectigo.com/ssl-certificates-tls/code-signing"},"Sectigo")),(0,r.yg)("li",{parentName:"ul"},"Amongst others, please shop around to find one that suits your needs! \ud83d\ude04")),(0,r.yg)("admonition",{type:"danger"},(0,r.yg)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"mdxAdmonitionTitle"},"Keep your certificate password private")),(0,r.yg)("p",{parentName:"admonition"},"Your certificate password should be a ",(0,r.yg)("strong",{parentName:"p"},"secret"),". Do not share it publicly or commit it to your source code.")),(0,r.yg)("h2",{id:"configuring-electron-forge"},"Configuring Electron Forge"),(0,r.yg)("p",null,"On Windows, Electron apps are signed on the installer level at the ",(0,r.yg)("strong",{parentName:"p"},"Make")," step."),(0,r.yg)("p",null,"Once you have a Personal Information Exchange (",(0,r.yg)("inlineCode",{parentName:"p"},".pfx"),") file for your certificate, you can sign ",(0,r.yg)("a",{parentName:"p",href:"/forge-docu/next/config/makers/squirrel.windows"},"Squirrel.Windows")," and ",(0,r.yg)("a",{parentName:"p",href:"/forge-docu/next/config/makers/wix-msi"},"MSI")," installers in Electron Forge with the ",(0,r.yg)("inlineCode",{parentName:"p"},"certificateFile")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"certificatePassword")," fields in their respective configuration objects."),(0,r.yg)("p",null,"For example, if you are creating a Squirrel.Windows installer:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="forge.config.js"',title:'"forge.config.js"'},'module.exports = {\n  packagerConfig: {},\n  makers: [\n    {\n      name: "@electron-forge/maker-squirrel",\n      config: {\n        certificateFile: "./cert.pfx",\n        certificatePassword: process.env.CERTIFICATE_PASSWORD,\n      },\n    },\n  ],\n};\n')))}d.isMDXComponent=!0}}]);