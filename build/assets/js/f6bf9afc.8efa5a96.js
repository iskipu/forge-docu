"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5716],{5680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),d=c(t),u=i,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var g={};for(var l in n)hasOwnProperty.call(n,l)&&(g[l]=n[l]);g.originalType=e,g[d]="string"==typeof e?e:i,a[1]=g;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7549:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>g,toc:()=>c});var r=t(8168),i=(t(6540),t(5680));const o={},a="Debugging",g={unversionedId:"advanced/debugging",id:"advanced/debugging",title:"Debugging",description:"In Electron apps, the main and renderer processes have different debugging mechanisms:",source:"@site/docs/advanced/debugging.md",sourceDirName:"advanced",slug:"/advanced/debugging",permalink:"/advanced/debugging",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/advanced/debugging.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Auto Update",permalink:"/advanced/auto-update"},next:{title:"Extending Electron Forge",permalink:"/advanced/extending-electron-forge/"}},l={},c=[{value:"Debugging on the command line",id:"debugging-on-the-command-line",level:2},{value:"Debugging with VS Code",id:"debugging-with-vs-code",level:2},{value:"Debugging with WebStorm or Other Jetbrains IDEs",id:"debugging-with-webstorm-or-other-jetbrains-ides",level:2}],s={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"debugging"},"Debugging"),(0,i.yg)("p",null,"In Electron apps, the main and renderer processes have different debugging mechanisms:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Renderer processes can be debugged using Chromium DevTools."),(0,i.yg)("li",{parentName:"ul"},"The main process can be debugged via the ",(0,i.yg)("inlineCode",{parentName:"li"},"--inspect")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"--inspect-brk")," command line flags.")),(0,i.yg)("p",null,"This guide goes over Forge-specific ways of debugging the main process through the command line or with a code editor."),(0,i.yg)("p",null,'{% hint style="info" %}\nEach section in this guide assumes your ',(0,i.yg)("inlineCode",{parentName:"p"},"package.json")," has a ",(0,i.yg)("inlineCode",{parentName:"p"},'"start": "electron-forge start"')," script.\n{% endhint %}"),(0,i.yg)("p",null,"For more general information on debugging Electron apps, see the ",(0,i.yg)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/tutorial/application-debugging#renderer-process"},"main Electron docs on Application Debugging"),"."),(0,i.yg)("h2",{id:"debugging-on-the-command-line"},"Debugging on the command line"),(0,i.yg)("p",null,"You can specify the ",(0,i.yg)("inlineCode",{parentName:"p"},"--inspect-electron")," flag when running ",(0,i.yg)("inlineCode",{parentName:"p"},"electron-forge start"),". Internally, this will activate the ",(0,i.yg)("a",{parentName:"p",href:"http://electronjs.org/docs/tutorial/debugging-main-process#--inspectport"},"Electron ",(0,i.yg)("inlineCode",{parentName:"a"},"--inspect"),"flag"),", and the main process will listen for a debugging client on port 5858."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"npm run start -- --inspect-electron\n")),(0,i.yg)("p",null,"Once your app is active, open ",(0,i.yg)("a",{parentName:"p",href:"chrome://inspect"},(0,i.yg)("inlineCode",{parentName:"a"},"chrome://inspect"))," in any Chromium-based browser to attach a debugger to the main process of your app."),(0,i.yg)("p",null,'{% hint style="info" %}\nTo add a breakpoint at the first line of execution when debugging, you can use Forge\'s ',(0,i.yg)("inlineCode",{parentName:"p"},"--inspect-brk-electron")," flag instead.\n{% endhint %}"),(0,i.yg)("h2",{id:"debugging-with-vs-code"},"Debugging with VS Code"),(0,i.yg)("p",null,"To debug the main process through VS Code, add the following ",(0,i.yg)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging"},"Node.js launch configuration"),":"),(0,i.yg)("p",null,'{% code title=".vscode/launch.json" %}'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json5"},'{\n  "configurations": [\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "Electron Main",\n      "runtimeExecutable": "${workspaceFolder}/node_modules/@electron-forge/cli/script/vscode.sh",\n      "windows": {\n        "runtimeExecutable": "${workspaceFolder}/node_modules/@electron-forge/cli/script/vscode.cmd"\n      },\n      // runtimeArgs will be passed directly to your Electron application\n      "runtimeArgs": [\n        "foo",\n        "bar"\n      ],\n      "cwd": "${workspaceFolder}",\n      "console": "integratedTerminal"\n    }\n  ]\n}\n')),(0,i.yg)("p",null,"{% endcode %}"),(0,i.yg)("p",null,"Once this configuration is added, launch the app via VS Code's Run and Debug view to start debugging."),(0,i.yg)("h2",{id:"debugging-with-webstorm-or-other-jetbrains-ides"},"Debugging with WebStorm or Other Jetbrains IDEs"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Access the ",(0,i.yg)("inlineCode",{parentName:"li"},"Run > Debug...")," menu and select the ",(0,i.yg)("inlineCode",{parentName:"li"},"Edit Configurations...")," option to open the ",(0,i.yg)("inlineCode",{parentName:"li"},"Run/Debug Configurations")," window."),(0,i.yg)("li",{parentName:"ol"},"Click on the ",(0,i.yg)("inlineCode",{parentName:"li"},"Add new configuration")," button (the ",(0,i.yg)("inlineCode",{parentName:"li"},"+")," icon) in the upper-left corner and select the ",(0,i.yg)("inlineCode",{parentName:"li"},"npm")," template."),(0,i.yg)("li",{parentName:"ol"},"In the ",(0,i.yg)("inlineCode",{parentName:"li"},"Scripts")," dropdown menu, select ",(0,i.yg)("inlineCode",{parentName:"li"},"start"),"."),(0,i.yg)("li",{parentName:"ol"},"Click on ",(0,i.yg)("inlineCode",{parentName:"li"},"Debug")," to start debugging your app.")))}p.isMDXComponent=!0}}]);