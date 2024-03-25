"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4085],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),g=o,y=p["".concat(s,".").concat(g)]||p[g]||b[g]||i;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(8168),o=(r(6540),r(5680));const i={description:"The Bitbucket publish target allows you to publish your artifacts directly to Bitbucket where users will be able to download them."},a="Bitbucket",l={unversionedId:"config/publishers/bitbucket",id:"config/publishers/bitbucket",title:"Bitbucket",description:"The Bitbucket publish target allows you to publish your artifacts directly to Bitbucket where users will be able to download them.",source:"@site/docs/config/publishers/bitbucket.md",sourceDirName:"config/publishers",slug:"/config/publishers/bitbucket",permalink:"/config/publishers/bitbucket",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/config/publishers/bitbucket.md",tags:[],version:"current",frontMatter:{description:"The Bitbucket publish target allows you to publish your artifacts directly to Bitbucket where users will be able to download them."},sidebar:"tutorialSidebar",previous:{title:"Publishers",permalink:"/config/publishers/"},next:{title:"Electron Release Server",permalink:"/config/publishers/electron-release-server"}},s={},u=[{value:"Usage",id:"usage",level:2}],c={toc:u},p="wrapper";function b(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"bitbucket"},"Bitbucket"),(0,o.yg)("p",null,'{% hint style="warning" %}\nThis publish target is for ',(0,o.yg)("a",{parentName:"p",href:"https://bitbucket.org"},"Bitbucket Cloud")," only and will not work with self hosted Bitbucket Server instances.\n{% endhint %}"),(0,o.yg)("p",null,"Full configuration options are documented in ",(0,o.yg)("a",{parentName:"p",href:"https://js.electronforge.io/interfaces/_electron_forge_publisher_bitbucket.PublisherBitbucketConfig.html"},(0,o.yg)("inlineCode",{parentName:"a"},"PublisherBitbucketConfig")),"."),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("p",null,'{% code title="forge.config.js" %}'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  // ...\n  publishers: [\n    {\n      name: '@electron-forge/publisher-bitbucket',\n      config: {\n        repository: {\n          owner: 'myusername',\n          name: 'myreponame'\n        },\n        auth: {\n          username: process.env.BITBUCKET_USERNAME, // string\n          appPassword: process.env.BITBUCKET_APP_PASSWORD // string\n        }\n      }\n    }\n  ]\n};\n")),(0,o.yg)("p",null,"{% endcode %}"),(0,o.yg)("p",null,"you can (and should) use environment variables for the authentication"),(0,o.yg)("p",null,'{% code title="env.sh" %}'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'BITBUCKET_USERNAME="myusername"\nBITBUCKET_APP_PASSWORD="mysecretapppassword"\n')),(0,o.yg)("p",null,"{% endcode %}"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"$ source env.sh\n")),(0,o.yg)("p",null,'{% hint style="info" %}\nYour artifacts can be found under the ',(0,o.yg)("inlineCode",{parentName:"p"},"Downloads")," tab of your Bitbucket repository.\n{% endhint %}"))}b.isMDXComponent=!0}}]);