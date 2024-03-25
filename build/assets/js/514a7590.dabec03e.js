"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[983],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>h});var i=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(t),d=a,h=g["".concat(l,".").concat(d)]||g[d]||u[d]||o;return t?i.createElement(h,r(r({ref:n},c),{},{components:t})):i.createElement(h,r({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=t(8168),a=(t(6540),t(5680));const o={description:"The purpose of this guide is to walk through the process of generating and setting an app icon, as well as setting installer and setup icons."},r="Custom App Icons",s={unversionedId:"guides/create-and-add-icons",id:"guides/create-and-add-icons",title:"Custom App Icons",description:"The purpose of this guide is to walk through the process of generating and setting an app icon, as well as setting installer and setup icons.",source:"@site/docs/guides/create-and-add-icons.md",sourceDirName:"guides",slug:"/guides/create-and-add-icons",permalink:"/guides/create-and-add-icons",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/create-and-add-icons.md",tags:[],version:"current",frontMatter:{description:"The purpose of this guide is to walk through the process of generating and setting an app icon, as well as setting installer and setup icons."},sidebar:"tutorialSidebar",previous:{title:"Signing a macOS app",permalink:"/guides/code-signing/code-signing-macos"},next:{title:"Framework Integration",permalink:"/guides/framework-integration/"}},l={},p=[{value:"Generating an icon",id:"generating-an-icon",level:2},{value:"Supporting higher pixel densities",id:"supporting-higher-pixel-densities",level:3},{value:"Supported formats",id:"supported-formats",level:3},{value:"Setting the app icon",id:"setting-the-app-icon",level:2},{value:"Windows and macOS",id:"windows-and-macos",level:3},{value:"Linux",id:"linux",level:3},{value:"Configuring installer icons",id:"configuring-installer-icons",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Refreshing the icon cache (Windows)",id:"refreshing-the-icon-cache-windows",level:3}],c={toc:p},g="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,i.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"custom-app-icons"},"Custom App Icons"),(0,a.yg)("h2",{id:"generating-an-icon"},"Generating an icon"),(0,a.yg)("p",null,"Generating your icon can be done using various conversion tools found online. It is recommended to start with a 1024x1024px image before converting it to various sizes."),(0,a.yg)("h3",{id:"supporting-higher-pixel-densities"},"Supporting higher pixel densities"),(0,a.yg)("p",null,"On platforms that have high-DPI support (such as Apple Retina displays), you can append ",(0,a.yg)("inlineCode",{parentName:"p"},"@2x")," after the image's base filename to mark it as a high resolution image. For example, if ",(0,a.yg)("inlineCode",{parentName:"p"},"icon.png")," is a normal image with standard resolution, then ",(0,a.yg)("inlineCode",{parentName:"p"},"icon@2x.png")," will be treated as a high resolution image that has double the DPI intensity."),(0,a.yg)("p",null,"If you want to support different displays with different DPI densities at the same time, you can put images with different sizes in the same folder and use the filename without DPI suffixes. For example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"images/\n\u251c\u2500\u2500 icon.png\n\u251c\u2500\u2500 icon@2x.png\n\u2514\u2500\u2500 icon@3x.png\n")),(0,a.yg)("p",null,'{% hint style="info" %}\nThe following suffixes for DPI are also supported:'),(0,a.yg)("p",null,"@1x, @1.25x, @1.33x, @1.4x, @1.5x, @1.8x, @2x, @2.5x, @3x, @4x, and @5x.\n{% endhint %}"),(0,a.yg)("h3",{id:"supported-formats"},"Supported formats"),(0,a.yg)("p",null,"The recommended file formats and icon sizes for each platform are as follows:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Operating system"),(0,a.yg)("th",{parentName:"tr",align:null},"Format"),(0,a.yg)("th",{parentName:"tr",align:null},"Size"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"macOS"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},".icns")),(0,a.yg)("td",{parentName:"tr",align:null},"512x512 pixels (1024x1024 for Retina displays)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Windows"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},".ico")),(0,a.yg)("td",{parentName:"tr",align:null},"256x256 pixels")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Linux"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},".png")),(0,a.yg)("td",{parentName:"tr",align:null},"512x512 pixels")))),(0,a.yg)("h2",{id:"setting-the-app-icon"},"Setting the app icon"),(0,a.yg)("h3",{id:"windows-and-macos"},"Windows and macOS"),(0,a.yg)("p",null,"Configuring the path to your icon can be done in your Forge configuration."),(0,a.yg)("p",null,'{% code title="forge.config.js" %}'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  // ...\n  packagerConfig: {\n    icon: "/path/to/icon", // no file extension required\n  },\n  // ...\n};\n')),(0,a.yg)("p",null,"{% endcode %}"),(0,a.yg)("p",null,'{% hint style="success" %}\nForge will automatically add the correct extension for each platform, so appending ',(0,a.yg)("inlineCode",{parentName:"p"},".ico")," or ",(0,a.yg)("inlineCode",{parentName:"p"},".icns")," to the path is not required.\n{% endhint %}"),(0,a.yg)("p",null,"After the config has been updated, build your project to generate your executable with the Make command."),(0,a.yg)("h3",{id:"linux"},"Linux"),(0,a.yg)("p",null,"Configuring the path to your icon must be done in both package.json as well as in Electron's main process."),(0,a.yg)("p",null,"The icon must be additionally loaded when instantiating your ",(0,a.yg)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/api/browser-window#new-browserwindowoptions"},"BrowserWindow"),"."),(0,a.yg)("p",null,"Once the path to the icon has been configured, build your project to generate your executable with either ",(0,a.yg)("inlineCode",{parentName:"p"},"npm run make"),"."),(0,a.yg)("h2",{id:"configuring-installer-icons"},"Configuring installer icons"),(0,a.yg)("p",null,"Installers usually have icons! Don't forget to configure those in the Maker-specific config within the ",(0,a.yg)("a",{parentName:"p",href:"https://www.electronforge.io/config/makers"},"Makers section of your Forge configuration"),"."),(0,a.yg)("p",null,"Here is an example of how that can be done:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'// forge.config.js\nmodule.exports = {\n  // ...\n  makers: [\n    {\n      name: "@electron-forge/maker-squirrel",\n      config: {\n        // An URL to an ICO file to use as the application icon (displayed in Control Panel > Programs and Features).\n        iconUrl: "https://url/to/icon.ico",\n        // The ICO file to use as the icon for the generated Setup.exe\n        setupIcon: "/path/to/icon.ico",\n      },\n    },\n    {\n      // Path to a single image that will act as icon for the application\n      name: "@electron-forge/maker-deb",\n      config: {\n        options: {\n          icon: "/path/to/icon.png",\n        },\n      },\n    },\n    {\n      // Path to the icon to use for the app in the DMG window\n      name: "@electron-forge/maker-dmg",\n      config: {\n        icon: "/path/to/icon.icns",\n      },\n    },\n    {\n      name: "@electron-forge/maker-wix",\n      config: {\n        icon: "/path/to/icon.ico",\n      },\n    },\n  ],\n  // ...\n};\n')),(0,a.yg)("p",null,"Once again, once you are done configuring your icons, don't forget to build your project with the Make command."),(0,a.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.yg)("p",null,"Operating systems have an icon cache. Resetting the cache is recommended if the icon is not updated or still uses the default one."),(0,a.yg)("h3",{id:"refreshing-the-icon-cache-windows"},"Refreshing the icon cache (Windows)"),(0,a.yg)("p",null,"Windows caches all application icons in a hidden Icon Cache Database. If your Electron app's icon is not showing up, you may need to rebuild this cache. To invalidate the cache, use the system ",(0,a.yg)("inlineCode",{parentName:"p"},"ie4uinit.exe")," utility:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"ie4uinit.exe -show\n")))}u.isMDXComponent=!0}}]);