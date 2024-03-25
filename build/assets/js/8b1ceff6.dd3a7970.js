"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[400],{5680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>y});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,y=c["".concat(s,".").concat(d)]||c[d]||g[d]||o;return r?t.createElement(y,i(i({ref:n},p),{},{components:r})):t.createElement(y,i({ref:n},p))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},811:(e,n,r)=>{r.r(n),r.d(n,{appName:()=>p,assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var t=r(8168),a=(r(6540),r(5680));const o={description:"Create a Windows installer for your Electron app using Electron Forge."},i="Squirrel.Windows",l={unversionedId:"config/makers/squirrel.windows",id:"config/makers/squirrel.windows",title:"Squirrel.Windows",description:"Create a Windows installer for your Electron app using Electron Forge.",source:"@site/docs/config/makers/squirrel.windows.md",sourceDirName:"config/makers",slug:"/config/makers/squirrel.windows",permalink:"/config/makers/squirrel.windows",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/config/makers/squirrel.windows.md",tags:[],version:"current",frontMatter:{description:"Create a Windows installer for your Electron app using Electron Forge."},sidebar:"tutorialSidebar",previous:{title:"Snapcraft",permalink:"/config/makers/snapcraft"},next:{title:"WiX MSI",permalink:"/config/makers/wix-msi"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Mandatory metadata",id:"mandatory-metadata",level:3},{value:"In package.json",id:"in-packagejson",level:4},{value:"In your Forge config",id:"in-your-forge-config",level:4},{value:"Handling startup events",id:"handling-startup-events",level:2}],p="{appName}",c={toc:u,appName:p},g="wrapper";function d(e){let{components:n,...r}=e;return(0,a.yg)(g,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"squirrelwindows"},"Squirrel.Windows"),(0,a.yg)("p",null,"The Squirrel.Windows target builds your application using the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Squirrel/Squirrel.Windows"},"Squirrel.Windows")," framework. It generates three files:"),(0,a.yg)("table",null,(0,a.yg)("thead",null,(0,a.yg)("tr",null,(0,a.yg)("th",{width:"258"},"File"),(0,a.yg)("th",null,"Description"))),(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("code",null,p," Setup.exe")),(0,a.yg)("td",null,"The main executable installer for your application")),(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("code",null,p,"-full.nupkg")),(0,a.yg)("td",null,"The NuGet package file used for updates")),(0,a.yg)("tr",null,(0,a.yg)("td",null,(0,a.yg)("code",null,"RELEASES")),(0,a.yg)("td",null,"Metadata file used to check if an update is available")))),(0,a.yg)("p",null,"Squirrel.Windows is a no-prompt, no-hassle, no-admin method of installing Windows applications, and is therefore the most user friendly you can get."),(0,a.yg)("p",null,"You can only build the Squirrel.Windows target on a Windows machine or on a Linux machine with ",(0,a.yg)("inlineCode",{parentName:"p"},"mono")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"wine")," installed."),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("p",null,"Add this module to the ",(0,a.yg)("a",{parentName:"p",href:"./"},"makers")," section of your ",(0,a.yg)("a",{parentName:"p",href:"/config/configuration"},"Forge configuration"),":"),(0,a.yg)("p",null,'{% code title="forge.config.js" %}'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  makers: [\n    {\n      name: "@electron-forge/maker-squirrel",\n      config: {\n        certificateFile: "./cert.pfx",\n        certificatePassword: process.env.CERTIFICATE_PASSWORD,\n      },\n    },\n  ],\n};\n')),(0,a.yg)("p",null,"{% endcode %}"),(0,a.yg)("h2",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"The Squirrel.Windows maker inherits all of its config options from the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/electron/windows-installer"},(0,a.yg)("inlineCode",{parentName:"a"},"electron-winstaller"))," module, ",(0,a.yg)("em",{parentName:"p"},"except")," for ",(0,a.yg)("inlineCode",{parentName:"p"},"appDirectory")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"outputDirectory"),", which are set by the maker."),(0,a.yg)("p",null,"Complete configuration options are documented in the ",(0,a.yg)("a",{parentName:"p",href:"https://js.electronforge.io/modules/_electron_forge_maker_squirrel.html#MakerSquirrelConfig"},(0,a.yg)("inlineCode",{parentName:"a"},"MakerSquirrelConfig"))," types."),(0,a.yg)("h3",{id:"mandatory-metadata"},"Mandatory metadata"),(0,a.yg)("p",null,"Squirrel.Windows requires mandatory package metadata to satisfy the ",(0,a.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/nuget/reference/nuspec"},(0,a.yg)("inlineCode",{parentName:"a"},".nuspec"))," manifest format. There are two ways to specify this information in Electron Forge."),(0,a.yg)("h4",{id:"in-packagejson"},"In package.json"),(0,a.yg)("p",null,"By default, the Squirrel.Windows maker fetches the ",(0,a.yg)("inlineCode",{parentName:"p"},"author")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"description")," fields in the project's package.json file."),(0,a.yg)("p",null,'{% code title="package.json" %}'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsonc"},'{\n  // ...\n  "author": "Alice and Bob",\n  "description": "An example Electron app"\n  // ...\n}\n')),(0,a.yg)("p",null,"{% endcode %}"),(0,a.yg)("h4",{id:"in-your-forge-config"},"In your Forge config"),(0,a.yg)("p",null,"Alternatively, you can also override these values directly in your Squirrel.Windows maker config."),(0,a.yg)("p",null,'{% code title="forge.config.js" %}'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  makers: [\n    {\n      name: "@electron-forge/maker-squirrel",\n      config: {\n        authors: "Alice and Bob",\n        description: "An example Electron app",\n      },\n    },\n  ],\n};\n')),(0,a.yg)("p",null,"{% endcode %}"),(0,a.yg)("p",null,'{% hint style="warning" %}\nNote that the Forge config field is ',(0,a.yg)("strong",{parentName:"p"},'"authors"')," while the package.json field is called ",(0,a.yg)("strong",{parentName:"p"},'"author".'),"\n{% endhint %}"),(0,a.yg)("h2",{id:"handling-startup-events"},"Handling startup events"),(0,a.yg)("p",null,"When first running your app, updating it, and uninstalling it, Squirrel.Windows will spawn your app an additional time with some special arguments. You can read more about these arguments on the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/electron/windows-installer"},(0,a.yg)("inlineCode",{parentName:"a"},"electron-winstaller"))," README."),(0,a.yg)("p",null,"The easiest way to handle these arguments and stop your app launching multiple times during these events is to use the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/mongodb-js/electron-squirrel-startup"},(0,a.yg)("inlineCode",{parentName:"a"},"electron-squirrel-startup"))," module as one of the first things your app does."),(0,a.yg)("p",null,'{% code title="main.js" %}'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'const { app } = require("electron");\n\n// run this as early in the main process as possible\nif (require("electron-squirrel-startup")) app.quit();\n')),(0,a.yg)("p",null,"{% endcode %}"))}d.isMDXComponent=!0}}]);