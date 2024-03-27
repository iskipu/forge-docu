"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4991],{5680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>u});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),g=c(n),d=i,u=g["".concat(p,".").concat(d)]||g[d]||s[d]||a;return n?r.createElement(u,o(o({ref:t},m),{},{components:n})):r.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[g]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(8168),i=(n(6540),n(5680));const a={description:"How to write custom templates for Electron Forge."},o="Writing Templates",l={unversionedId:"advanced/extending-electron-forge/writing-templates",id:"advanced/extending-electron-forge/writing-templates",title:"Writing Templates",description:"How to write custom templates for Electron Forge.",source:"@site/docs/advanced/extending-electron-forge/writing-templates.md",sourceDirName:"advanced/extending-electron-forge",slug:"/advanced/extending-electron-forge/writing-templates",permalink:"/forge-docu/next/advanced/extending-electron-forge/writing-templates",draft:!1,editUrl:"https://github.com/iskipu/forge-docu/edit/main/docs/advanced/extending-electron-forge/writing-templates.md",tags:[],version:"current",frontMatter:{description:"How to write custom templates for Electron Forge."},sidebar:"tutorialSidebar",previous:{title:"Writing Plugins",permalink:"/forge-docu/next/advanced/extending-electron-forge/writing-plugins"},next:{title:"Writing Makers",permalink:"/forge-docu/next/advanced/extending-electron-forge/writing-makers"}},p={},c=[],m={toc:c},g="wrapper";function s(e){let{components:t,...n}=e;return(0,i.yg)(g,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"writing-templates"},"Writing Templates"),(0,i.yg)("p",null,"Templates in Electron Forge implement the ",(0,i.yg)("inlineCode",{parentName:"p"},"ForgeTemplate")," interface, namely:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"requiredForgeVersion")," ",(0,i.yg)("em",{parentName:"li"},"(required)")," - the semantic version range of Electron Forge versions that this template supports. For example, ",(0,i.yg)("inlineCode",{parentName:"li"},"^6.0.0-beta.1")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"dependencies")," ",(0,i.yg)("em",{parentName:"li"},"(optional)")," - a list of package identifiers that you pass to a package manager (which may include a version range) to add to the ",(0,i.yg)("inlineCode",{parentName:"li"},"dependencies")," field in ",(0,i.yg)("inlineCode",{parentName:"li"},"package.json"),". For example, ",(0,i.yg)("inlineCode",{parentName:"li"},"jquery")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"jquery@^3.0.0")," "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"devDependencies")," ",(0,i.yg)("em",{parentName:"li"},"(optional)")," - a list of package identifiers that you pass to a package manager (which may include a version range) to add to the ",(0,i.yg)("inlineCode",{parentName:"li"},"devDependencies")," field in ",(0,i.yg)("inlineCode",{parentName:"li"},"package.json"),". For example, ",(0,i.yg)("inlineCode",{parentName:"li"},"eslint")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"eslint@^7.0.0")," "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"initializeTemplate")," ",(0,i.yg)("em",{parentName:"li"},"(optional)")," - an ",(0,i.yg)("inlineCode",{parentName:"li"},"async")," function that allows the template to perform custom actions, for example copying files from a ",(0,i.yg)("inlineCode",{parentName:"li"},"tmpl")," folder into the new app. The exact function signature is defined in the shared types package.")),(0,i.yg)("p",null,"To use the custom template, run the ",(0,i.yg)("a",{parentName:"p",href:"/forge-docu/next/cli#init"},"init")," command and point the template at the file that contains the ",(0,i.yg)("inlineCode",{parentName:"p"},"ForgeTemplate")," implementation."))}s.isMDXComponent=!0}}]);