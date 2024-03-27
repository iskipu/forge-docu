"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7610],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>h});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,h=c["".concat(s,".").concat(d)]||c[d]||g[d]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(8168),i=(n(6540),n(5680));const o={},a="Writing Publishers",l={unversionedId:"advanced/extending-electron-forge/writing-publishers",id:"advanced/extending-electron-forge/writing-publishers",title:"Writing Publishers",description:"An Electron Forge Publisher has to export a single class that extends the base publisher. The base plugin can be depended on by installing@electron-forge/publisher-base.",source:"@site/docs/advanced/extending-electron-forge/writing-publishers.md",sourceDirName:"advanced/extending-electron-forge",slug:"/advanced/extending-electron-forge/writing-publishers",permalink:"/forge-docu/next/advanced/extending-electron-forge/writing-publishers",draft:!1,editUrl:"https://github.com/iskipu/forge-docu/edit/main/docs/advanced/extending-electron-forge/writing-publishers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Writing Makers",permalink:"/forge-docu/next/advanced/extending-electron-forge/writing-makers"}},s={},p=[{value:"<code>publish(options: PublisherOptions): Promise&lt;void&gt;</code>",id:"publishoptions-publisheroptions-promisevoid",level:3}],u={toc:p},c="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"writing-publishers"},"Writing Publishers"),(0,i.yg)("p",null,"An Electron Forge Publisher has to export a single class that extends the base publisher. The base plugin can be depended on by installing",(0,i.yg)("inlineCode",{parentName:"p"},"@electron-forge/publisher-base"),"."),(0,i.yg)("p",null,"Check out the interface of ",(0,i.yg)("a",{parentName:"p",href:"https://js.electronforge.io/modules/_electron_forge_publisher_base.html"},(0,i.yg)("inlineCode",{parentName:"a"},"PublisherBase"))," for more advanced API details."),(0,i.yg)("p",null,"The publisher ",(0,i.yg)("strong",{parentName:"p"},"must")," implement one method:"),(0,i.yg)("h3",{id:"publishoptions-publisheroptions-promisevoid"},(0,i.yg)("inlineCode",{parentName:"h3"},"publish(options: PublisherOptions): Promise<void>")),(0,i.yg)("p",null,"Publishers must implement this method to publish the artifacts returned from make calls. If any errors occur you must throw them, failing silently or simply logging will not propagate issues up to Forge."),(0,i.yg)("p",null,'Please note for a given version, publish will be called multiple times, once for each set of "platform" and "arch". This means if you are publishing ',(0,i.yg)("inlineCode",{parentName:"p"},"darwin")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"win32")," artifacts to somewhere like GitHub on the first publish call, you will have to create the version on GitHub and the second call will just be appending files to the existing version.  Your ",(0,i.yg)("inlineCode",{parentName:"p"},"publish")," implementation will not be aware that another call is coming, however it must just be able to handle this case."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"config")," for the publisher will be available on ",(0,i.yg)("inlineCode",{parentName:"p"},"this.config"),"."),(0,i.yg)("p",null,"The options object is documented in ",(0,i.yg)("a",{parentName:"p",href:"https://js.electronforge.io/interfaces/_electron_forge_publisher_base.PublisherOptions.html"},(0,i.yg)("inlineCode",{parentName:"a"},"PublisherOptions")),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"export default class MyPublisher extends PublisherBase {\n  async publish (opts) {\n    for (const result of opts.makeResults) {\n      await createVersionIfNotExists();\n      await uploadDistributable(result);\n    }\n  }\n}\n")))}g.isMDXComponent=!0}}]);