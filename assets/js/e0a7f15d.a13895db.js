"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4764],{5680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>y});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),p=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(g.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,y=m["".concat(g,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(y,o(o({ref:t},s),{},{components:a})):n.createElement(y,o({ref:t},s))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1389:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(8168),r=(a(6540),a(5680));const l={description:"How to use the command line interface (CLI) commands for Electron Forge"},o="CLI",i={unversionedId:"cli",id:"version-old/cli",title:"CLI",description:"How to use the command line interface (CLI) commands for Electron Forge",source:"@site/versioned_docs/version-old/cli.md",sourceDirName:".",slug:"/cli",permalink:"/forge-docu/cli",draft:!1,editUrl:"https://github.com/iskipu/forge-docu/edit/main/versioned_docs/version-old/cli.md",tags:[],version:"old",frontMatter:{description:"How to use the command line interface (CLI) commands for Electron Forge"},sidebar:"tutorialSidebar",previous:{title:"Importing an Existing Project",permalink:"/forge-docu/import-existing-project"},next:{title:"Overview",permalink:"/forge-docu/config/configuration"}},g={},p=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Bootstrap commands",id:"bootstrap-commands",level:2},{value:"Init",id:"init",level:3},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4},{value:"Import",id:"import",level:3},{value:"Options",id:"options-1",level:4},{value:"Usage",id:"usage-1",level:4},{value:"Build commands",id:"build-commands",level:2},{value:"Package",id:"package",level:3},{value:"Options",id:"options-2",level:4},{value:"Usage",id:"usage-2",level:4},{value:"Make",id:"make",level:3},{value:"Options",id:"options-3",level:4},{value:"Usage",id:"usage-3",level:4},{value:"Publish",id:"publish",level:3},{value:"Options",id:"options-4",level:4},{value:"Usage",id:"usage-4",level:4},{value:"Dev commands",id:"dev-commands",level:2},{value:"Start",id:"start",level:3},{value:"Options",id:"options-5",level:4},{value:"Usage",id:"usage-5",level:4},{value:"Programmatic usage",id:"programmatic-usage",level:2}],s={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"cli"},"CLI"),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"Forge's CLI is the main way to run Electron Forge commands. It consists of a thin wrapper for its core API. Configuration for these commands is done through your ",(0,r.yg)("a",{parentName:"p",href:"/forge-docu/config/configuration"},"Forge configuration")," object."),(0,r.yg)("p",null,"If you want to use the core API programmatically, see the ",(0,r.yg)("a",{parentName:"p",href:"/forge-docu/cli#programmatic-usage",title:"mention"},"#programmatic-usage")," section below."),(0,r.yg)("p",null,'{% hint style="info" %}\nForge\'s CLI uses comma-separated value strings to pass multiple arguments into a single flag. Depending on your terminal, these comma-separated values may need to be enclosed in quotation marks.\n{% endhint %}'),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("p",null,"To use the Forge CLI, install the ",(0,r.yg)("inlineCode",{parentName:"p"},"@electron-forge/cli")," module into your project as a devDependency. If you're using the ",(0,r.yg)("inlineCode",{parentName:"p"},"create-electron-app")," script, this module will already be installed for you."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @electron-forge/cli\n")),(0,r.yg)("h2",{id:"bootstrap-commands"},"Bootstrap commands"),(0,r.yg)("p",null,"These commands help you get started with Forge. If you're just getting started with Electron Forge, we recommend you follow the ",(0,r.yg)("a",{parentName:"p",href:"./",title:"mention"},".")," or ",(0,r.yg)("a",{parentName:"p",href:"/forge-docu/import-existing-project",title:"mention"},"import-existing-project.md")," guides."),(0,r.yg)("h3",{id:"init"},"Init"),(0,r.yg)("p",null,'{% hint style="info" %}\nWe recommend using the ',(0,r.yg)("inlineCode",{parentName:"p"},"create-electron-app")," script (which uses this command) to get started rather than running Init directly.\n{% endhint %}"),(0,r.yg)("p",null,"This command will initialize a new Forge-powered application in the given directory (defaults to ",(0,r.yg)("inlineCode",{parentName:"p"},"."),", the current directory)."),(0,r.yg)("p",null,"Please note if you want to use a non-builtin template, it must be installed globally before running the ",(0,r.yg)("inlineCode",{parentName:"p"},"init")," command."),(0,r.yg)("h4",{id:"options"},"Options"),(0,r.yg)("p",null,"All flags are optional."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Flag"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"--template")),(0,r.yg)("td",{parentName:"tr",align:null},"Template Name"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the template to use to make this new app")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"--copy-ci-files")),(0,r.yg)("td",{parentName:"tr",align:null},"N/A"),(0,r.yg)("td",{parentName:"tr",align:null},"Set if you want to copy templated CI files ",(0,r.yg)("em",{parentName:"td"},"(coming soon)"))))),(0,r.yg)("h4",{id:"usage"},"Usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npx electron-forge init --template=webpack\n")),(0,r.yg)("h3",{id:"import"},"Import"),(0,r.yg)("p",null,"This command will attempt to take an existing Electron app and make it compatible with Forge. Normally, this just creates a base Electron Forge configuration and adds the required dependencies."),(0,r.yg)("h4",{id:"options-1"},"Options"),(0,r.yg)("p",null,"There are no options for the Import command."),(0,r.yg)("h4",{id:"usage-1"},"Usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npx electron-forge import\n")),(0,r.yg)("h2",{id:"build-commands"},"Build commands"),(0,r.yg)("p",null,"The Package, Make, and Publish commands are the three main steps of the Electron Forge build pipeline. Each step relies on the output of the previous one, so they are cascading by default (e.g. running ",(0,r.yg)("inlineCode",{parentName:"p"},"publish")," will first run ",(0,r.yg)("inlineCode",{parentName:"p"},"package")," then ",(0,r.yg)("inlineCode",{parentName:"p"},"make"),"."),(0,r.yg)("p",null,'{% hint style="info" %}\nFor more conceptual details, see the ',(0,r.yg)("a",{parentName:"p",href:"/forge-docu/core-concepts/build-lifecycle",title:"mention"},"build-lifecycle.md")," guide.\n{% endhint %}"),(0,r.yg)("h3",{id:"package"},"Package"),(0,r.yg)("p",null,"This command will package your application into a platform-specific executable bundle and put the result in a folder. Please note that this does not make a distributable format. To make proper distributables, please use the Make command."),(0,r.yg)("h4",{id:"options-2"},"Options"),(0,r.yg)("p",null,"All flags are optional."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Flag"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"--arch")),(0,r.yg)("td",{parentName:"tr",align:null},"Architecture, e.g. ",(0,r.yg)("inlineCode",{parentName:"td"},"x64")),(0,r.yg)("td",{parentName:"tr",align:null},"Target architecture to package for. Defaults to the host arch.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"--platform")),(0,r.yg)("td",{parentName:"tr",align:null},"Platform, e.g. ",(0,r.yg)("inlineCode",{parentName:"td"},"mas")),(0,r.yg)("td",{parentName:"tr",align:null},"Target platform to package for. Defaults to the host platform.")))),(0,r.yg)("h4",{id:"usage-2"},"Usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'# By default, the package command corresponds to a package npm script:\nnpm run package -- --arch="ia32"\n# If there is no package script:\nnpx electron-forge package --arch="ia32"\n')),(0,r.yg)("h3",{id:"make"},"Make"),(0,r.yg)("p",null,"This command will make distributables for your application based on your Forge config and the parameters you pass in."),(0,r.yg)("p",null,"If you do not need to repackage your application between Make runs, use the ",(0,r.yg)("inlineCode",{parentName:"p"},"--skip-package")," flag."),(0,r.yg)("h4",{id:"options-3"},"Options"),(0,r.yg)("p",null,"All flags are optional."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Flag"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"--arch")),(0,r.yg)("td",{parentName:"tr",align:null},"Architecture, e.g. ",(0,r.yg)("inlineCode",{parentName:"td"},"x64")),(0,r.yg)("td",{parentName:"tr",align:null},'Target architecture to make for. Defaults to the arch that you\'re running on (the "host" arch). Allowed values are: "ia32", "x64", "armv7l", "arm64", "universal", or "mips64el". Multiple values should be comma-separated.')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"--platform")),(0,r.yg)("td",{parentName:"tr",align:null},"Platform, e.g. ",(0,r.yg)("inlineCode",{parentName:"td"},"mas")),(0,r.yg)("td",{parentName:"tr",align:null},'Target platform to make for, please note you normally can only target platform X from platform X. This defaults to the platform you\'re running on (the "host" platform).')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"--targets")),(0,r.yg)("td",{parentName:"tr",align:null},"Comma separated list of maker names"),(0,r.yg)("td",{parentName:"tr",align:null},"Override your make targets for this run. The maker name is the full node module name, e.g. ",(0,r.yg)("inlineCode",{parentName:"td"},"@electron-forge/maker-deb"),". By default, the make targets used are the ones available and configured for the given platform.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"--skip-package")),(0,r.yg)("td",{parentName:"tr",align:null},"N/A"),(0,r.yg)("td",{parentName:"tr",align:null},"Set if you want to skip the packaging step, useful if you are running sequential makes and want to save time. By default, packaging is ",(0,r.yg)("strong",{parentName:"td"},"not")," skipped.")))),(0,r.yg)("h4",{id:"usage-3"},"Usage"),(0,r.yg)("p",null,"Basic usage:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'# By default, the make command corresponds to a make npm script:\nnpm run make -- --arch="ia32"\n# If there is no make script:\nnpx electron-forge make --arch="ia32"\n')),(0,r.yg)("p",null,"Building for ia32 and x64 architectures:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'npm run make -- --arch="ia32,x64"\n')),(0,r.yg)("h3",{id:"publish"},"Publish"),(0,r.yg)("p",null,"This command will attempt to package, make, and publish the Forge application to the publish targets defined in your Forge config."),(0,r.yg)("p",null,"If you want to verify artifacts from the Make step before publishing, you can use the Dry Run options explained below."),(0,r.yg)("h4",{id:"options-4"},"Options"),(0,r.yg)("p",null,"All flags are optional."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Flag"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"--target")),(0,r.yg)("td",{parentName:"tr",align:null},"Comma separated list of publisher names"),(0,r.yg)("td",{parentName:"tr",align:null},"Override your publish targets for this run")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"--dry-run")),(0,r.yg)("td",{parentName:"tr",align:null},"N/A"),(0,r.yg)("td",{parentName:"tr",align:null},"Triggers a publish dry run which saves state and doesn't upload anything")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"--from-dry-run")),(0,r.yg)("td",{parentName:"tr",align:null},"N/A"),(0,r.yg)("td",{parentName:"tr",align:null},"Attempts to publish artifacts from any dry runs saved on disk")))),(0,r.yg)("h4",{id:"usage-4"},"Usage"),(0,r.yg)("pre",{class:"language-bash"},(0,r.yg)("code",{class:"lang-bash"},(0,r.yg)("strong",null,"# By default, the publish command corresponds to a publish npm script:"),"npm run publish -- --from-dry-run # If there is no publish script: npx electron-forge publish -- --from-dry-run")),(0,r.yg)("h2",{id:"dev-commands"},"Dev commands"),(0,r.yg)("h3",{id:"start"},"Start"),(0,r.yg)("p",null,"This command will launch your app in dev mode with the ",(0,r.yg)("inlineCode",{parentName:"p"},"electron")," binary in the given directory (defaults to ",(0,r.yg)("inlineCode",{parentName:"p"},"."),")."),(0,r.yg)("p",null,"If you type ",(0,r.yg)("inlineCode",{parentName:"p"},"rs")," (and hit enter) in the same terminal where you ran the start command, the running app will be terminated and restarted."),(0,r.yg)("p",null,"Forge plugins can override this command to run custom development logic. For example, the ",(0,r.yg)("a",{parentName:"p",href:"/forge-docu/config/plugins/webpack",title:"mention"},"webpack.md")," runs a webpack-dev-server instance to provide live reloading and HMR."),(0,r.yg)("h4",{id:"options-5"},"Options"),(0,r.yg)("p",null,"All flags are optional."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Flag"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"--app-path")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to your app from the working directory"),(0,r.yg)("td",{parentName:"tr",align:null},"Override the path to the Electron app to launch (defaults to ",(0,r.yg)("inlineCode",{parentName:"td"},"."),")")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"--enable-logging")),(0,r.yg)("td",{parentName:"tr",align:null},"N/A"),(0,r.yg)("td",{parentName:"tr",align:null},"Enable advanced logging. This will log internal Electron things")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"--run-as-node")),(0,r.yg)("td",{parentName:"tr",align:null},"N/A"),(0,r.yg)("td",{parentName:"tr",align:null},"Run the Electron app as a Node.JS script")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"--inspect-electron")),(0,r.yg)("td",{parentName:"tr",align:null},"N/A"),(0,r.yg)("td",{parentName:"tr",align:null},"Triggers inspect mode on Electron to allow debugging the main process")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"--")),(0,r.yg)("td",{parentName:"tr",align:null},"extra arguments"),(0,r.yg)("td",{parentName:"tr",align:null},"Any additional arguments to pass to Electron or the app itself. For example: ",(0,r.yg)("inlineCode",{parentName:"td"},"-- --my-app-argument"))))),(0,r.yg)("h4",{id:"usage-5"},"Usage"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# By default, the start command corresponds to a start npm script:\nnpm start --enable-logging\n# if there is no start script\nnpx electron-forge start --enable-logging\n")),(0,r.yg)("h2",{id:"programmatic-usage"},"Programmatic usage"),(0,r.yg)("p",null,"The Forge CLI should suit most use cases, but we do expose the ",(0,r.yg)("inlineCode",{parentName:"p"},"@electron-forge/core")," package for programmatic command usage."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'const { api } = require("@electron-forge/core");\n\nconst main = async () => {\n  await api.package({\n    // add package command options here\n  });\n};\n\nmain();\n')),(0,r.yg)("p",null,"For more information, see the ",(0,r.yg)("a",{parentName:"p",href:"https://js.electronforge.io/classes/_electron_forge_core.ForgeAPI.html"},"API documentation"),"."))}d.isMDXComponent=!0}}]);