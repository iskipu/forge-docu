"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9074],{5680:(e,n,o)=>{o.d(n,{xA:()=>s,yg:()=>f});var t=o(6540);function i(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){i(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,i=function(e,n){if(null==e)return{};var o,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(i[o]=e[o]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var p=t.createContext({}),c=function(e){var n=t.useContext(p),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},s=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var o=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=c(o),d=i,f=g["".concat(p,".").concat(d)]||g[d]||u[d]||r;return o?t.createElement(f,a(a({ref:n},s),{},{components:o})):t.createElement(f,a({ref:n},s))}));function f(e,n){var o=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[g]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=o[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4951:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=o(8168),i=(o(6540),o(5680));const r={description:"How to configure Electron Forge"},a="Overview",l={unversionedId:"config/configuration",id:"config/configuration",title:"Overview",description:"How to configure Electron Forge",source:"@site/docs/config/configuration.md",sourceDirName:"config",slug:"/config/configuration",permalink:"/config/configuration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/config/configuration.md",tags:[],version:"current",frontMatter:{description:"How to configure Electron Forge"},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/cli"},next:{title:"Plugins",permalink:"/config/plugins/"}},p={},c=[{value:"Configuration options",id:"configuration-options",level:2},{value:"Electron Packager config",id:"electron-packager-config",level:3},{value:"Electron Rebuild config",id:"electron-rebuild-config",level:3},{value:"Makers",id:"makers",level:3},{value:"Publishers",id:"publishers",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Hooks",id:"hooks",level:3},{value:"Build identifiers",id:"build-identifiers",level:3}],s={toc:c},g="wrapper";function u(e){let{components:n,...o}=e;return(0,i.yg)(g,(0,t.A)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"overview"},"Overview"),(0,i.yg)("p",null,"Electron Forge configuration is centralized in a single configuration object. You can specify this config in your package.json on the ",(0,i.yg)("inlineCode",{parentName:"p"},"config.forge")," property. This property can have be in one of two forms:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"An object containing your entire Forge configuration."),(0,i.yg)("li",{parentName:"ul"},"A relative path pointing at a JavaScript file that exports your config.")),(0,i.yg)("p",null,"If you do not have ",(0,i.yg)("inlineCode",{parentName:"p"},"config.forge")," set in your package.json file, Forge will attempt to find a ",(0,i.yg)("inlineCode",{parentName:"p"},"forge.config.js")," file in your project root."),(0,i.yg)("p",null,'{% tabs %}\n{% tab title="forge.config.js" %}\n{% code title="forge.config.js" %}'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  packagerConfig: {},\n  makers: [\n    {\n      name: '@electron-forge/maker-zip'\n    }\n  ]\n};\n")),(0,i.yg)("p",null,"{% endcode %}\n{% endtab %}"),(0,i.yg)("p",null,'{% tab title="package.json" %}\n{% code title="package.json" %}'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-app",\n  "version": "0.0.1",\n  "config": {\n    "forge": {\n      "packagerConfig": {},\n      "makers": [\n        {\n          "name": "@electron-forge/maker-zip"\n        }\n      ]\n    }\n  }\n}\n')),(0,i.yg)("p",null,"{% endcode %}\n{% endtab %}\n{% endtabs %}"),(0,i.yg)("p",null,'{% hint style="info" %}\nWe recommend using JavaScript for your config file since it enables conditional logic within your configuration.\n{% endhint %}'),(0,i.yg)("h2",{id:"configuration-options"},"Configuration options"),(0,i.yg)("p",null,'{% tabs %}\n{% tab title="forge.config.js" %}'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  packagerConfig: { /* ... */ },\n  rebuildConfig: { /* ... */ },\n  makers: [],\n  publishers: [],\n  plugins: [],\n  hooks: { /* ... */ },\n  buildIdentifier: 'my-build'\n};\n")),(0,i.yg)("p",null,"{% endtab %}"),(0,i.yg)("p",null,'{% tab title="package.json" %}'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsonc"},'// Only the relevant section of package.json is shown, for brevity.\n{\n  "config": {\n    "forge": {\n      "packagerConfig": { ... },\n      "rebuildConfig": { ... },\n      "makers": [ ... ],\n      "publishers": [ ... ],\n      "plugins": [ ... ],\n      "hooks": { ... },\n      "buildIdentifier": "my-build"\n    }\n  }\n}\n')),(0,i.yg)("p",null,"{% endtab %}\n{% endtabs %}"),(0,i.yg)("p",null,'{% hint style="success" %}\nAll properties are optional\n{% endhint %}'),(0,i.yg)("h3",{id:"electron-packager-config"},"Electron Packager config"),(0,i.yg)("p",null,"The top level property ",(0,i.yg)("inlineCode",{parentName:"p"},"packagerConfig")," on the configuration object maps directly to the options sent to ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/electron/electron-packager"},(0,i.yg)("inlineCode",{parentName:"a"},"electron-packager"))," during the package step of Electron Forge's build process."),(0,i.yg)("p",null,"The options you can put in this object are documented in the ",(0,i.yg)("a",{parentName:"p",href:"https://electron.github.io/packager/main/interfaces/Options.html"},"Electron Packager API docs"),"."),(0,i.yg)("p",null,'{% hint style="warning" %}\nYou can not override the ',(0,i.yg)("inlineCode",{parentName:"p"},"dir"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"arch"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"platform, out")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"electronVersion")," options as they are set by Electron Forge internally.\n{% endhint %}"),(0,i.yg)("h3",{id:"electron-rebuild-config"},"Electron Rebuild config"),(0,i.yg)("p",null,"The top level property ",(0,i.yg)("inlineCode",{parentName:"p"},"rebuildConfig")," on the configuration object maps directly to the options sent to ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/electron/electron-rebuild"},(0,i.yg)("inlineCode",{parentName:"a"},"electron-rebuild"))," during both the package and start step of Electron Forge's build process."),(0,i.yg)("p",null,"The options you can put in this object are documented in the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/electron/electron-rebuild#how-can-i-integrate-this-into-grunt--gulp--whatever"},"Electron Rebuild API docs"),"."),(0,i.yg)("p",null,'{% hint style="warning" %}\nYou can not override the ',(0,i.yg)("inlineCode",{parentName:"p"},"buildPath"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"arch"),", or ",(0,i.yg)("inlineCode",{parentName:"p"},"electronVersion")," options as they are set by Electron Forge internally\n{% endhint %}"),(0,i.yg)("h3",{id:"makers"},"Makers"),(0,i.yg)("p",null,"The top level property ",(0,i.yg)("inlineCode",{parentName:"p"},"makers")," on the configuration object is an array of maker configurations. Check out the ",(0,i.yg)("a",{parentName:"p",href:"makers/"},"Makers")," documentation for all possible makers and their config options."),(0,i.yg)("h3",{id:"publishers"},"Publishers"),(0,i.yg)("p",null,"The top level property ",(0,i.yg)("inlineCode",{parentName:"p"},"publishers")," on the configuration object is an array of publisher configurations. Check out the ",(0,i.yg)("a",{parentName:"p",href:"publishers/"},"Publishers")," documentation for all possible publishers and their config options."),(0,i.yg)("h3",{id:"plugins"},"Plugins"),(0,i.yg)("p",null,"The top level property ",(0,i.yg)("inlineCode",{parentName:"p"},"plugins")," on the configuration object is an array of plugin configurations. Check out the ",(0,i.yg)("a",{parentName:"p",href:"plugins/"},"Plugins")," documentation for all possible plugins and their config options."),(0,i.yg)("h3",{id:"hooks"},"Hooks"),(0,i.yg)("p",null,"The top level property ",(0,i.yg)("inlineCode",{parentName:"p"},"hooks")," on the configuration object is an object containing hooks that can be used to insert custom logic during the build lifecycle."),(0,i.yg)("p",null,"Check out the ",(0,i.yg)("a",{parentName:"p",href:"/config/hooks",title:"mention"},"hooks.md")," documentation for all possible hooks and their config options."),(0,i.yg)("h3",{id:"build-identifiers"},"Build identifiers"),(0,i.yg)("p",null,"This property can be used to identify different build configurations. Normally, this property is set to the channel the build will release to, or some other unique identifier. For example, common values are ",(0,i.yg)("inlineCode",{parentName:"p"},"prod")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"beta"),". This identifier can be used in conjunction with the ",(0,i.yg)("inlineCode",{parentName:"p"},"fromBuildIdentifier")," function to generate release channel or environment specific configuration. For example:"),(0,i.yg)("p",null,'{% code title="forge.config.js" %}'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"const { utils: { fromBuildIdentifier } } = require('@electron-forge/core');\n\nmodule.exports = {\n  buildIdentifier: process.env.IS_BETA ? 'beta' : 'prod',\n  packagerConfig: {\n    appBundleId: fromBuildIdentifier({ beta: 'com.beta.app', prod: 'com.app' })\n  }\n};\n")),(0,i.yg)("p",null,"{% endcode %}"),(0,i.yg)("p",null,"In this example the ",(0,i.yg)("inlineCode",{parentName:"p"},"appBundleId")," option passed to Electron Packager will be selected based on the ",(0,i.yg)("inlineCode",{parentName:"p"},"buildIdentifer")," based on whether you are building for ",(0,i.yg)("inlineCode",{parentName:"p"},"prod")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"beta"),". This allows you to make shared configs incredibly easily as only the values that change need to be wrapped with this function."))}u.isMDXComponent=!0}}]);