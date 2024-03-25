"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3584],{5680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>y});var t=a(6540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=o,y=d["".concat(p,".").concat(u)]||d[u]||g[u]||r;return a?t.createElement(y,i(i({ref:n},c),{},{components:a})):t.createElement(y,i({ref:n},c))}));function y(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5605:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var t=a(8168),o=(a(6540),a(5680));const r={description:"Transform and bundle code for your Electron Forge app with webpack."},i="Webpack Plugin",l={unversionedId:"config/plugins/webpack",id:"config/plugins/webpack",title:"Webpack Plugin",description:"Transform and bundle code for your Electron Forge app with webpack.",source:"@site/docs/config/plugins/webpack.md",sourceDirName:"config/plugins",slug:"/config/plugins/webpack",permalink:"/forge-docu/config/plugins/webpack",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/config/plugins/webpack.md",tags:[],version:"current",frontMatter:{description:"Transform and bundle code for your Electron Forge app with webpack."},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/forge-docu/config/plugins/"},next:{title:"Vite Plugin",permalink:"/forge-docu/config/plugins/vite"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Plugin configuration",id:"plugin-configuration",level:3},{value:"Project files",id:"project-files",level:3},{value:"package.json",id:"packagejson",level:4},{value:"Main process code",id:"main-process-code",level:4},{value:"Advanced configuration",id:"advanced-configuration",level:2},{value:"webpack-dev-server",id:"webpack-dev-server",level:3},{value:"devServer",id:"devserver",level:4},{value:"devContentSecurityPolicy",id:"devcontentsecuritypolicy",level:4},{value:"Native Node modules",id:"native-node-modules",level:3},{value:"Node integration",id:"node-integration",level:3},{value:"Enabling Node integration in your app code",id:"enabling-node-integration-in-your-app-code",level:4},{value:"Setting the correct webpack target in your plugin config",id:"setting-the-correct-webpack-target-in-your-plugin-config",level:4},{value:"Hot module replacement",id:"hot-module-replacement",level:2},{value:"Hot reload caching",id:"hot-reload-caching",level:3},{value:"Hot Reloading for React",id:"hot-reloading-for-react",level:3},{value:"What happens in production?",id:"what-happens-in-production",level:2},{value:"How do I do virtual routing?",id:"how-do-i-do-virtual-routing",level:2}],c={toc:s},d="wrapper";function g(e){let{components:n,...a}=e;return(0,o.yg)(d,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"webpack-plugin"},"Webpack Plugin"),(0,o.yg)("p",null,"This plugin makes it easy to set up standard ",(0,o.yg)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," tooling to compile both your main process code and your renderer process code, with built-in support for ",(0,o.yg)("a",{parentName:"p",href:"https://webpack.js.org/concepts/hot-module-replacement/"},"Hot Module Replacement (HMR)")," in the renderer process and support for multiple renderers."),(0,o.yg)("h2",{id:"installation"},"Installation"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @electron-forge/plugin-webpack\n")),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("h3",{id:"plugin-configuration"},"Plugin configuration"),(0,o.yg)("p",null,"You must provide two webpack configuration files: one for the main process in ",(0,o.yg)("inlineCode",{parentName:"p"},"mainConfig"),", and one for the renderer process in ",(0,o.yg)("inlineCode",{parentName:"p"},"renderer.config"),". The complete config options are available in the API docs under ",(0,o.yg)("a",{parentName:"p",href:"https://js.electronforge.io/interfaces/_electron_forge_plugin_webpack.WebpackPluginConfig.html"},(0,o.yg)("inlineCode",{parentName:"a"},"WebpackPluginConfig")),"."),(0,o.yg)("p",null,"For example, this is the ",(0,o.yg)("a",{parentName:"p",href:"/forge-docu/config/configuration"},"configuration")," taken from Forge's ",(0,o.yg)("a",{parentName:"p",href:"/forge-docu/templates/webpack-template"},"webpack template"),":"),(0,o.yg)("p",null,'{% tabs %}\n{% tab title="forge.config.js" %}'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  // ...\n  plugins: [\n    {\n      name: '@electron-forge/plugin-webpack',\n      config: {\n        mainConfig: './webpack.main.config.js',\n        renderer: {\n          config: './webpack.renderer.config.js',\n          entryPoints: [{\n            name: 'main_window',\n            html: './src/renderer/index.html',\n            js: './src/renderer/index.js',\n            preload: {\n              js: './src/preload.js'\n            }\n          }]\n        }\n      }\n    }\n  ]\n  // ...\n};\n")),(0,o.yg)("p",null,"{% endtab %}"),(0,o.yg)("p",null,'{% tab title="package.json" %}'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsonc"},'{\n  // ...\n  "config": {\n    "forge": {\n      "plugins": [\n        {\n          "name": "@electron-forge/plugin-webpack",\n          "config": {\n            "mainConfig": "./webpack.main.config.js",\n            "renderer": {\n              "config": "./webpack.renderer.config.js",\n              "entryPoints": [{\n                "name": "main_window",\n                "html": "./src/renderer/index.html",\n                "js": "./src/renderer/index.js",\n                "preload": {\n                  "js": "./src/preload.js"\n                }\n              }]\n            }\n          }\n        }\n      ]\n    }\n  }\n  // ...\n}\n')),(0,o.yg)("p",null,"{% endtab %}\n{% endtabs %}"),(0,o.yg)("h3",{id:"project-files"},"Project files"),(0,o.yg)("p",null,"This plugin generates a separate entry for the main process, as well as each renderer process and preload script."),(0,o.yg)("p",null,"You need to do two things in your project files in order to make this plugin work."),(0,o.yg)("h4",{id:"packagejson"},"package.json"),(0,o.yg)("p",null,"First, your ",(0,o.yg)("inlineCode",{parentName:"p"},"main")," entry in your ",(0,o.yg)("inlineCode",{parentName:"p"},"package.json")," file needs to point at ",(0,o.yg)("inlineCode",{parentName:"p"},'"./.webpack/main"')," like so:"),(0,o.yg)("p",null,'{% code title="package.json" %}'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "name": "my-app",\n  "main": "./.webpack/main",\n  // ...\n}\n')),(0,o.yg)("p",null,"{% endcode %}"),(0,o.yg)("h4",{id:"main-process-code"},"Main process code"),(0,o.yg)("p",null,"Second, all ",(0,o.yg)("inlineCode",{parentName:"p"},"loadURL")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"preload")," paths need to reference the magic global variables that this plugin will define for you."),(0,o.yg)("p",null,"Each entry point has two globals defined based on the name assigned to your entry point:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The renderer's entry point will be suffixed with ",(0,o.yg)("inlineCode",{parentName:"li"},"_WEBPACK_ENTRY")),(0,o.yg)("li",{parentName:"ul"},"The renderer's preload script will be suffixed with ",(0,o.yg)("inlineCode",{parentName:"li"},"_PRELOAD_WEBPACK_ENTRY"))),(0,o.yg)("p",null,"In the case of the ",(0,o.yg)("inlineCode",{parentName:"p"},"main_window")," entry point in the earlier example, the global variables will be named ",(0,o.yg)("inlineCode",{parentName:"p"},"MAIN_WINDOW_WEBPACK_ENTRY")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY"),". An example of how to use them is given below:"),(0,o.yg)("p",null,'{% code title="main.js" %}'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"const mainWindow = new BrowserWindow({\n  webPreferences: {\n    preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY\n  }\n});\n\nmainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);\n")),(0,o.yg)("p",null,"{% endcode %}"),(0,o.yg)("p",null,"These variables are only defined in the main process. If you need to use one of these paths in a renderer (e.g. to pass a preload script to a ",(0,o.yg)("inlineCode",{parentName:"p"},"<webview>")," tag), you can pass the magic variable value with a synchronous IPC round trip."),(0,o.yg)("p",null,'{% tabs %}\n{% tab title="Main Process" %}\n{% code title="main.js" %}'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"// make sure this listener is set before your renderer.js code is called\nipcMain.on('get-preload-path', (e) => {\n  e.returnValue = WINDOW_PRELOAD_WEBPACK_ENTRY;\n});\n")),(0,o.yg)("p",null,"{% endcode %}\n{% endtab %}"),(0,o.yg)("p",null,'{% tab title="Preload Script" %}\n{% code title="preload.js" %}'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"const { contextBridge, ipcRenderer } = require('electron');\n\ncontextBridge.exposeInMainWorld('electron', {\n  getPreloadPath: () => ipcRenderer.sendSync('get-preload-path')\n});\n")),(0,o.yg)("p",null,"{% endcode %}\n{% endtab %}"),(0,o.yg)("p",null,'{% tab title="Renderer Process" %}\n{% code title="renderer.js" %}'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"const preloadPath = window.electron.getPreloadPath();\n")),(0,o.yg)("p",null,"{% endcode %}\n{% endtab %}\n{% endtabs %}"),(0,o.yg)("p",null,'{% hint style="info" %}\n',(0,o.yg)("strong",{parentName:"p"},"Usage with TypeScript")),(0,o.yg)("p",null,"If you're using the webpack plugin with TypeScript, you will need to manually declare these magic variables to avoid compiler errors."),(0,o.yg)("p",null,'{% code title="main.js (Main Process)" %}'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-typescript"},"declare const MAIN_WINDOW_WEBPACK_ENTRY: string;\ndeclare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;\n")),(0,o.yg)("p",null,"{% endcode %}\n{% endhint %}"),(0,o.yg)("h2",{id:"advanced-configuration"},"Advanced configuration"),(0,o.yg)("h3",{id:"webpack-dev-server"},"webpack-dev-server"),(0,o.yg)("p",null,"Forge's webpack plugin uses ",(0,o.yg)("a",{parentName:"p",href:"https://webpack.js.org/configuration/dev-server/"},(0,o.yg)("inlineCode",{parentName:"a"},"webpack-dev-server"))," to help you quickly iterate on renderer process code in development mode. Running ",(0,o.yg)("inlineCode",{parentName:"p"},"electron-forge start")," with the webpack plugin active will launch a dev server that is configurable through the plugin config."),(0,o.yg)("h4",{id:"devserver"},"devServer"),(0,o.yg)("p",null,"In development mode, you can change most ",(0,o.yg)("inlineCode",{parentName:"p"},"webpack-dev-server")," options by setting ",(0,o.yg)("inlineCode",{parentName:"p"},"devServer")," in your Forge Webpack plugin configuration."),(0,o.yg)("p",null,'{% code title="Plugin configuration" %}'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"{\n  name: '@electron-forge/plugin-webpack',\n  config: {\n    // other Webpack plugin config...\n    devServer: {\n      stats: 'verbose'\n    }\n    // ...\n  }\n}\n")),(0,o.yg)("p",null,"{% endcode %}"),(0,o.yg)("h4",{id:"devcontentsecuritypolicy"},"devContentSecurityPolicy"),(0,o.yg)("p",null,"In development mode, you can set a ",(0,o.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"},"Content Security Policy (CSP)")," by setting ",(0,o.yg)("inlineCode",{parentName:"p"},"devContentSecurityPolicy")," in your Forge Webpack plugin configuration."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"{\n  name: '@electron-forge/plugin-webpack',\n  config: {\n    // other Webpack plugin config...\n    devContentSecurityPolicy: 'default-src \\'self\\' \\'unsafe-inline\\' data:; script-src \\'self\\' \\'unsafe-eval\\' \\'unsafe-inline\\' data:',\n    // other Webpack plugin config...\n    mainConfig: './webpack.main.config.js',\n    renderer: {\n      /* renderer config here, see above section */\n    }\n  }\n}\n")),(0,o.yg)("p",null,'{% hint style="info" %}\nIf you wish to use ',(0,o.yg)("strong",{parentName:"p"},"source maps")," in development, you'll need to set ",(0,o.yg)("inlineCode",{parentName:"p"},"'unsafe-eval'")," for the ",(0,o.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src"},(0,o.yg)("inlineCode",{parentName:"a"},"script-src"))," directive. Using ",(0,o.yg)("inlineCode",{parentName:"p"},"'unsafe-eval'")," will cause Electron itself to trigger a warning in the DevTools console about having that value enabled, which is usually fine so long as you ",(0,o.yg)("strong",{parentName:"p"},"do not set that value in production"),".\n{% endhint %}"),(0,o.yg)("h3",{id:"native-node-modules"},"Native Node modules"),(0,o.yg)("p",null,"If you used the ",(0,o.yg)("a",{parentName:"p",href:"/forge-docu/templates/webpack-template"},"Webpack")," or ",(0,o.yg)("a",{parentName:"p",href:"/forge-docu/templates/typescript-+-webpack-template"},"TypeScript + Webpack")," templates to create your application, native modules will mostly work out of the box."),(0,o.yg)("p",null,"If you are setting up the plugin manually, you can make native modules work by adding the following two loaders to your ",(0,o.yg)("inlineCode",{parentName:"p"},"module.rules")," configuration in your Webpack config. Ensure you install both ",(0,o.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/node-loader"},(0,o.yg)("inlineCode",{parentName:"a"},"node-loader"))," and ",(0,o.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/@vercel/webpack-asset-relocator-loader"},(0,o.yg)("inlineCode",{parentName:"a"},"@vercel/webpack-asset-relocator-loader"))," as development dependencies."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev node-loader @vercel/webpack-asset-relocator-loader@1.7.3\n")),(0,o.yg)("p",null,'{% hint style="warning" %}\nElectron Forge monkeypatches the asset relocator loader in order for it to work with Electron properly, so the version has been pinned to ensure compatibility. If you upgrade that version, you do so at your own risk.\n{% endhint %}'),(0,o.yg)("p",null,'{% code title="webpack.main.config.js" %}'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  module: {\n    rules: [\n      {\n        // We're specifying native_modules in the test because the asset\n        // relocator loader generates a \"fake\" .node file which is really\n        // a cjs file.\n        test: /native_modules\\/.+\\.node$/,\n        use: 'node-loader'\n      },\n      {\n        test: /\\.(m?js|node)$/,\n        parser: { amd: false },\n        use: {\n          loader: '@vercel/webpack-asset-relocator-loader',\n          options: {\n            outputAssetBase: 'native_modules'\n          }\n        }\n      }\n    ]\n  }\n};\n")),(0,o.yg)("p",null,"{% endcode %}"),(0,o.yg)("p",null,"If the asset relocator loader does not work for your native module, you may want to consider using webpack's ",(0,o.yg)("a",{parentName:"p",href:"https://webpack.js.org/configuration/externals/"},"externals configuration"),"."),(0,o.yg)("h3",{id:"node-integration"},"Node integration"),(0,o.yg)("h4",{id:"enabling-node-integration-in-your-app-code"},"Enabling Node integration in your app code"),(0,o.yg)("p",null,"In Electron, you can enable Node.js in the renderer process with ",(0,o.yg)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/api/browser-window"},(0,o.yg)("inlineCode",{parentName:"a"},"BrowserWindow")," constructor options"),". Renderers with the following options enabled will have a browser-like web environment with access to Node.js ",(0,o.yg)("a",{parentName:"p",href:"https://nodejs.org/api/modules.html#requireid"},(0,o.yg)("inlineCode",{parentName:"a"},"require"))," and all of its core APIs:"),(0,o.yg)("p",null,'{% code title="main.js (Main Process)" %}'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"const win = new BrowserWindow({\n  webPreferences: {\n    contextIsolation: false,\n    nodeIntegration: true\n  }\n});\n")),(0,o.yg)("p",null,"{% endcode %}"),(0,o.yg)("p",null,"This creates a unique environment that requires additional webpack configuration."),(0,o.yg)("h4",{id:"setting-the-correct-webpack-target-in-your-plugin-config"},"Setting the correct webpack target in your plugin config"),(0,o.yg)("p",null,"Webpack ",(0,o.yg)("a",{parentName:"p",href:"https://webpack.js.org/configuration/target/"},"targets")," have first-class support for various Electron environments. Forge's webpack plugin will set the compilation target for renderers based on the ",(0,o.yg)("inlineCode",{parentName:"p"},"nodeIntegration")," option in the config:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"When ",(0,o.yg)("inlineCode",{parentName:"li"},"nodeIntegration")," is ",(0,o.yg)("strong",{parentName:"li"},"true"),", the ",(0,o.yg)("inlineCode",{parentName:"li"},"target")," is ",(0,o.yg)("inlineCode",{parentName:"li"},"electron-renderer"),"."),(0,o.yg)("li",{parentName:"ul"},"When ",(0,o.yg)("inlineCode",{parentName:"li"},"nodeIntegration")," is ",(0,o.yg)("strong",{parentName:"li"},"false"),", the ",(0,o.yg)("inlineCode",{parentName:"li"},"target")," is ",(0,o.yg)("inlineCode",{parentName:"li"},"web"),".")),(0,o.yg)("p",null,"This option is ",(0,o.yg)("strong",{parentName:"p"},"false")," by default","*","*",".","*","*"," You can set this option for all renderers via the ",(0,o.yg)("inlineCode",{parentName:"p"},"renderer.nodeIntegration")," option, and you can override its value in each renderer you create in the ",(0,o.yg)("inlineCode",{parentName:"p"},"entryPoints")," array."),(0,o.yg)("p",null,"In the below configuration example, webpack will compile to the ",(0,o.yg)("inlineCode",{parentName:"p"},"electron-renderer")," target for all entry points except for ",(0,o.yg)("inlineCode",{parentName:"p"},"media_player"),", which will compile to the ",(0,o.yg)("inlineCode",{parentName:"p"},"web")," target."),(0,o.yg)("p",null,'{% code title="Plugin configuration" %}'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"{\n  name: '@electron-forge/plugin-webpack',\n  config: {\n    mainConfig: './webpack.main.config.js',\n    renderer: {\n      config: './webpack.renderer.config.js',\n      nodeIntegration: true, // Implies `target: 'electron-renderer'` for all entry points\n      entryPoints: [\n        {\n          html: './src/app/app.html',\n          js: './src/app/app.tsx',\n          name: 'app'\n        },\n        {\n          html: './src/mediaPlayer/index.html',\n          js: './src/mediaPlayer/index.tsx',\n          name: 'media_player',\n          nodeIntegration: false // Overrides the default nodeIntegration set above\n        }\n      ]\n    }\n  }\n}\n")),(0,o.yg)("p",null,"{% endcode %}"),(0,o.yg)("p",null,'{% hint style="warning" %}\nIt is important that you enable ',(0,o.yg)("inlineCode",{parentName:"p"},"nodeIntegration")," in ",(0,o.yg)("strong",{parentName:"p"},"both")," in the main process code and the webpack plugin configuration. This option duplication is necessary because webpack targets are fixed upon compilation, but BrowserWindow's web preferences are determined on run time.\n{% endhint %}"),(0,o.yg)("h2",{id:"hot-module-replacement"},"Hot module replacement"),(0,o.yg)("p",null,"In development mode, all your renderer processes in development will have ",(0,o.yg)("a",{parentName:"p",href:"https://webpack.js.org/concepts/hot-module-replacement/"},"Hot Module Replacement (HMR)")," enabled by default thanks to ",(0,o.yg)("inlineCode",{parentName:"p"},"webpack-dev-server"),"."),(0,o.yg)("p",null,"However, it is impossible for HMR to work inside preload scripts. However, webpack is constantly watching and recompiling those files so reload the renderer to get updates for preload scripts."),(0,o.yg)("p",null,"For the main process, type ",(0,o.yg)("inlineCode",{parentName:"p"},"rs")," in the console you launched ",(0,o.yg)("inlineCode",{parentName:"p"},"electron-forge")," from and Forge will restart your app for you with the new main process code."),(0,o.yg)("h3",{id:"hot-reload-caching"},"Hot reload caching"),(0,o.yg)("p",null,"When using Webpack 5 caching, asset permissions need to be maintained through their own cache, and the public path needs to be injected into the build."),(0,o.yg)("p",null,"To insure these cases work out, make sure to run ",(0,o.yg)("inlineCode",{parentName:"p"},"initAssetCache")," in the build, with the ",(0,o.yg)("inlineCode",{parentName:"p"},"options.outputAssetBase")," argument:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"const relocateLoader = require('@vercel/webpack-asset-relocator-loader');\nwebpack({\n  // ...\n  plugins: [\n    {\n      apply (compiler) {\n        compiler.hooks.compilation.tap('webpack-asset-relocator-loader', compilation => {\n          relocateLoader.initAssetCache(compilation, outputAssetBase);\n        });\n      }\n    }\n  ]\n});\n")),(0,o.yg)("h3",{id:"hot-reloading-for-react"},"Hot Reloading for React"),(0,o.yg)("p",null,"If you're using React components, you may want to have HMR automatically pick up a change and reload the component without having to manually refresh the page. This is possible by installing ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/gaearon/react-hot-loader"},(0,o.yg)("inlineCode",{parentName:"a"},"react-hot-loader"))," to define which modules should be hot reloaded."),(0,o.yg)("p",null,"Here's a usage example in TypeScript with ",(0,o.yg)("inlineCode",{parentName:"p"},"App")," being the topmost component in a React component tree:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-typescript"},'import { hot } from "react-hot-loader";\n\nconst App: FunctionComponent = () => (\n  <div>\n    ...\n  </div>\n);\n\nexport default hot(module)(App)\n')),(0,o.yg)("p",null,"You can use this pattern in any other components depending on what you want to reload. For example, if you use the ",(0,o.yg)("inlineCode",{parentName:"p"},"hot()")," HOC for an ",(0,o.yg)("inlineCode",{parentName:"p"},"AppBar")," component and make a change to a child of ",(0,o.yg)("inlineCode",{parentName:"p"},"AppBar"),", then the entire ",(0,o.yg)("inlineCode",{parentName:"p"},"AppBar")," gets reloaded, but the higher-level ",(0,o.yg)("inlineCode",{parentName:"p"},"App")," layout remains otherwise unchanged. In essence, a change will propagate up to the first ",(0,o.yg)("inlineCode",{parentName:"p"},"hot()")," HOC found in a component tree."),(0,o.yg)("h2",{id:"what-happens-in-production"},"What happens in production?"),(0,o.yg)("p",null,"In theory, you shouldn't need to care. In development, we spin up ",(0,o.yg)("inlineCode",{parentName:"p"},"webpack-dev-server")," instances to power your renderer processes. In production, we just build the static files."),(0,o.yg)("p",null,"Assuming you use the defined globals we explained in the above section, everything should work when your app is packaged."),(0,o.yg)("h2",{id:"how-do-i-do-virtual-routing"},"How do I do virtual routing?"),(0,o.yg)("p",null,"If you want to use something like ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ReactTraining/react-router"},(0,o.yg)("inlineCode",{parentName:"a"},"react-router"))," to do virtual routing in your app, you will need to ensure you use a history method that is not based on the browser history APIs. Browser history will work in development but not in production, as your code will be loaded from the filesystem, not a web server. In the ",(0,o.yg)("inlineCode",{parentName:"p"},"react-router")," case, you should use the ",(0,o.yg)("a",{parentName:"p",href:"https://reactrouter.com/en/main/router-components/memory-router"},(0,o.yg)("inlineCode",{parentName:"a"},"MemoryRouter"))," to make everything work."))}g.isMDXComponent=!0}}]);