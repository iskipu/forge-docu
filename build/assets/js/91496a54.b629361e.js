"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7112],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7519:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(8168),o=(t(6540),t(5680));const i={description:"Developing with Windows Subsystem for Linux, on Windows"},a="Developing with WSL",s={unversionedId:"guides/developing-with-wsl",id:"guides/developing-with-wsl",title:"Developing with WSL",description:"Developing with Windows Subsystem for Linux, on Windows",source:"@site/docs/guides/developing-with-wsl.md",sourceDirName:"guides",slug:"/guides/developing-with-wsl",permalink:"/guides/developing-with-wsl",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/developing-with-wsl.md",tags:[],version:"current",frontMatter:{description:"Developing with Windows Subsystem for Linux, on Windows"},sidebar:"tutorialSidebar",previous:{title:"Vue 3",permalink:"/guides/framework-integration/vue-3"},next:{title:"Auto Update",permalink:"/advanced/auto-update"}},l={},u=[],p={toc:u},d="wrapper";function c(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"developing-with-wsl"},"Developing with WSL"),(0,o.yg)("p",null,"If you're using ",(0,o.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/"},"Windows Subsystem for Linux ","(","WSL",")"),", there are some quirks to running Electron apps. Since you can run a mostly complete Linux distribution inside it, it justifiably declares itself as Linux when you're inside of it. However, as of February 2021 there is no support for running graphical apps compiled for Linux out of the box. Simply trying to run an Electron app in development that you've installed dependencies in WSL will try and fail to find an X11 server, and thus not launch."),(0,o.yg)("p",null,"Fortunately, one of the features of WSL is that you can run Windows executables from a WSL terminal seamlessly. The caveat is that you'll need to reinstall Electron in order to pick up the prebuilt binaries for Windows instead of Linux. Inside a WSL terminal, assuming that you've installed Node.js for Linux, you can run:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"# If node_modules exists already that was installed in WSL:\n\nrm -r node_modules\n\n# then:\n\nnpm install --platform=win32\n\n# or:\n\nnpm_config_platform=win32 npm install\n\n")),(0,o.yg)("p",null,"Then, start the Electron app in development mode as usual via ",(0,o.yg)("inlineCode",{parentName:"p"},"npm start"),"."),(0,o.yg)("p",null,"For package/make/publish, you'll still need to specify the platform if you want to generate bundles/distributables for Windows."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm run make -- --platform=win32\n")),(0,o.yg)("p",null,"{% hint style=\"warning\" %}\nSome of the dependencies of Electron Forge don't quite work with WSL, as they don't detect that they're running in WSL ",(0,o.yg)("em",{parentName:"p"},"(","instead of Linux",")")," and thus tries to run certain tooling provided as Windows executables in... Wine. We are actively working on making the dependent tooling WSL-aware. The workaround is to run package/make/publish outside of WSL.\n{% endhint %}"))}c.isMDXComponent=!0}}]);