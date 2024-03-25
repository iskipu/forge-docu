"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5620],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>u});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,u=d["".concat(l,".").concat(m)]||d[m]||g[m]||o;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8963:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(8168),a=(r(6540),r(5680));const o={},i="Writing Makers",s={unversionedId:"advanced/extending-electron-forge/writing-makers",id:"advanced/extending-electron-forge/writing-makers",title:"Writing Makers",description:"An Electron Forge Maker has to export a single class that extends our base maker. The base maker can be depended on by installing@electron-forge/maker-base.",source:"@site/docs/advanced/extending-electron-forge/writing-makers.md",sourceDirName:"advanced/extending-electron-forge",slug:"/advanced/extending-electron-forge/writing-makers",permalink:"/advanced/extending-electron-forge/writing-makers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/advanced/extending-electron-forge/writing-makers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Writing Templates",permalink:"/advanced/extending-electron-forge/writing-templates"},next:{title:"Writing Publishers",permalink:"/advanced/extending-electron-forge/writing-publishers"}},l={},p=[{value:"<code>isSupportedOnCurrentPlatform(): boolean</code>",id:"issupportedoncurrentplatform-boolean",level:3},{value:"<code>make(options: MakerOptions): Promise&lt;string[]&gt;</code>",id:"makeoptions-makeroptions-promisestring",level:3}],c={toc:p},d="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"writing-makers"},"Writing Makers"),(0,a.yg)("p",null,"An Electron Forge Maker has to export a single class that extends our base maker. The base maker can be depended on by installing",(0,a.yg)("inlineCode",{parentName:"p"},"@electron-forge/maker-base"),"."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"MakerBase")," class has some helper methods for your convenience. Check out the interface of ",(0,a.yg)("a",{parentName:"p",href:"https://js.electronforge.io/classes/_electron_forge_maker_base.MakerBase.html"},(0,a.yg)("inlineCode",{parentName:"a"},"MakerBase"))," for more advanced API details."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Method"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"ensureDirectory(path)")),(0,a.yg)("td",{parentName:"tr",align:"left"},"Ensures the directory exists and is forced to be empty.  This is a destructive operation.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"ensureFile(path)")),(0,a.yg)("td",{parentName:"tr",align:"left"},"Ensures the path to the file exists and the file does not exist, if the file exists it is deleted and the path created.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"isInstalled(moduleName)")),(0,a.yg)("td",{parentName:"tr",align:"left"},"Checks if the given module is installed, used for testing if optional dependencies are installed or not.")))),(0,a.yg)("p",null,"Your maker ",(0,a.yg)("strong",{parentName:"p"},"must")," implement two methods:"),(0,a.yg)("h3",{id:"issupportedoncurrentplatform-boolean"},(0,a.yg)("inlineCode",{parentName:"h3"},"isSupportedOnCurrentPlatform(): boolean")),(0,a.yg)("p",null,"This method must synchronously return a boolean indicating whether or not this maker can run on the current platform. Normally this is just a ",(0,a.yg)("inlineCode",{parentName:"p"},"process.platform")," check but it can be a deeper check for dependencies like ",(0,a.yg)("inlineCode",{parentName:"p"},"fake-root")," or other required external build tools."),(0,a.yg)("p",null,"If the issue is a missing dependency you should log out a ",(0,a.yg)("strong",{parentName:"p"},"helpful")," error message telling the developer exactly what is missing and if possible how to get it."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"export default class MyMaker extends MakerBase {\n  isSupportedOnCurrentPlatform () {\n    return process.platform === 'linux' && this.isFakeRootInstalled();\n  }\n\n  isFakeRootInstalled () { /* ... */ }\n}\n")),(0,a.yg)("h3",{id:"makeoptions-makeroptions-promisestring"},(0,a.yg)("inlineCode",{parentName:"h3"},"make(options: MakerOptions): Promise<string[]>")),(0,a.yg)("p",null,"Makers must implement this method and return an array of ",(0,a.yg)("strong",{parentName:"p"},"absolute")," paths to the artifacts this maker generated. If an error occurs, reject the promise and Electron Forge will stop the ",(0,a.yg)("inlineCode",{parentName:"p"},"make")," process."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"config")," for the maker will be available on ",(0,a.yg)("inlineCode",{parentName:"p"},"this.config"),"."),(0,a.yg)("p",null,"The options object is documented in ",(0,a.yg)("a",{parentName:"p",href:"https://js.electronforge.io/interfaces/_electron_forge_maker_base.MakerOptions.html"},(0,a.yg)("inlineCode",{parentName:"a"},"MakerOptions")),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"export default class MyMaker extends MakerBase {\n  async make (opts) {\n    const pathToMagicInstaller = await makeMagicInstaller(opts.dir);\n    return [pathToMagicInstaller];\n  }\n}\n")))}g.isMDXComponent=!0}}]);