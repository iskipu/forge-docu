"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4991],{5680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>u});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,u=m["".concat(p,".").concat(d)]||m[d]||g[d]||i;return n?r.createElement(u,o(o({ref:t},s),{},{components:n})):r.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const i={description:"How to write custom templates for Electron Forge."},o="Writing Templates",l={unversionedId:"advanced/extending-electron-forge/writing-templates",id:"advanced/extending-electron-forge/writing-templates",title:"Writing Templates",description:"How to write custom templates for Electron Forge.",source:"@site/docs/advanced/extending-electron-forge/writing-templates.md",sourceDirName:"advanced/extending-electron-forge",slug:"/advanced/extending-electron-forge/writing-templates",permalink:"/forge-docu/advanced/extending-electron-forge/writing-templates",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/advanced/extending-electron-forge/writing-templates.md",tags:[],version:"current",frontMatter:{description:"How to write custom templates for Electron Forge."},sidebar:"tutorialSidebar",previous:{title:"Writing Plugins",permalink:"/forge-docu/advanced/extending-electron-forge/writing-plugins"},next:{title:"Writing Makers",permalink:"/forge-docu/advanced/extending-electron-forge/writing-makers"}},p={},c=[],s={toc:c},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"writing-templates"},"Writing Templates"),(0,a.yg)("p",null,"Templates in Electron Forge implement the ",(0,a.yg)("inlineCode",{parentName:"p"},"ForgeTemplate")," interface, namely:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"requiredForgeVersion")," ",(0,a.yg)("em",{parentName:"li"},"(required)")," - the semantic version range of Electron Forge versions that this template supports. For example, ",(0,a.yg)("inlineCode",{parentName:"li"},"^6.0.0-beta.1")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"dependencies")," ",(0,a.yg)("em",{parentName:"li"},"(optional)")," - a list of package identifiers that you pass to a package manager (which may include a version range) to add to the ",(0,a.yg)("inlineCode",{parentName:"li"},"dependencies")," field in ",(0,a.yg)("inlineCode",{parentName:"li"},"package.json"),". For example, ",(0,a.yg)("inlineCode",{parentName:"li"},"jquery")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"jquery@^3.0.0")," "),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"devDependencies")," ",(0,a.yg)("em",{parentName:"li"},"(optional)")," - a list of package identifiers that you pass to a package manager (which may include a version range) to add to the ",(0,a.yg)("inlineCode",{parentName:"li"},"devDependencies")," field in ",(0,a.yg)("inlineCode",{parentName:"li"},"package.json"),". For example, ",(0,a.yg)("inlineCode",{parentName:"li"},"eslint")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"eslint@^7.0.0")," "),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"initializeTemplate")," ",(0,a.yg)("em",{parentName:"li"},"(optional)")," - an ",(0,a.yg)("inlineCode",{parentName:"li"},"async")," function that allows the template to perform custom actions, for example copying files from a ",(0,a.yg)("inlineCode",{parentName:"li"},"tmpl")," folder into the new app. The exact function signature is defined in the shared types package.")),(0,a.yg)("p",null,"To use the custom template, run the ",(0,a.yg)("a",{parentName:"p",href:"/forge-docu/cli#init"},"init")," command and point the template at the file that contains the ",(0,a.yg)("inlineCode",{parentName:"p"},"ForgeTemplate")," implementation."))}g.isMDXComponent=!0}}]);