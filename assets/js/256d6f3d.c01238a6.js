"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7163],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>g});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(g,l(l({ref:t},s),{},{components:r})):a.createElement(g,l({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:n,l[1]=c;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9365:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(6540),n=r(53);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,l),hidden:r},t)}},1470:(e,t,r)=>{r.d(t,{A:()=>k});var a=r(8168),n=r(6540),o=r(53),l=r(3104),c=r(6347),i=r(7485),u=r(1682),s=r(9466);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const a=(0,c.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=g({queryString:r,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,s.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=i??p;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=r(2303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:c,selectValue:i,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),d=e=>{const t=e.currentTarget,r=s.indexOf(t),a=u[r].value;a!==c&&(p(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;t=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;t=s[r]??s[s.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.A)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.A)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":c===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,o.A)("tabs-container",h.tabList)},n.createElement(y,(0,a.A)({},e,t)),n.createElement(v,(0,a.A)({},e,t)))}function k(e){const t=(0,b.A)();return n.createElement(w,(0,a.A)({key:String(t)},e))}},9425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var a=r(8168),n=(r(6540),r(5680)),o=r(1470),l=r(9365);const c={description:"How to create an Electron app with React and Electron Forge"},i="React",u={unversionedId:"guides/framework-integration/react",id:"guides/framework-integration/react",title:"React",description:"How to create an Electron app with React and Electron Forge",source:"@site/docs/guides/framework-integration/react.md",sourceDirName:"guides/framework-integration",slug:"/guides/framework-integration/react",permalink:"/forge-docu/next/guides/framework-integration/react",draft:!1,editUrl:"https://github.com/iskipu/forge-docu/edit/main/docs/guides/framework-integration/react.md",tags:[],version:"current",frontMatter:{description:"How to create an Electron app with React and Electron Forge"},sidebar:"tutorialSidebar",previous:{title:"Parcel",permalink:"/forge-docu/next/guides/framework-integration/parcel"},next:{title:"React with TypeScript",permalink:"/forge-docu/next/guides/framework-integration/react-with-typescript"}},s={},p=[{value:"Create the app and setup the Webpack config",id:"create-the-app-and-setup-the-webpack-config",level:3},{value:"Add the React dependencies",id:"add-the-react-dependencies",level:3},{value:"Integrate React code",id:"integrate-react-code",level:3}],d={toc:p},m="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(m,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"react"},"React"),(0,n.yg)("p",null,"Adding React support to the Webpack template doesn't require a complicated boilerplate to get started."),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"The following guide has been tested with React 18, Babel 7, and Webpack 5.")),(0,n.yg)("h3",{id:"create-the-app-and-setup-the-webpack-config"},"Create the app and setup the Webpack config"),(0,n.yg)("p",null,"Create the app with the ",(0,n.yg)("a",{parentName:"p",href:"/forge-docu/next/templates/webpack-template"},"Webpack template"),". Add the following packages to your ",(0,n.yg)("inlineCode",{parentName:"p"},"devDependencies")," so that JSX and other React features can be used properly:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @babel/core @babel/preset-react babel-loader\n")),(0,n.yg)("p",null,"Set up the ",(0,n.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/babel-loader"},(0,n.yg)("inlineCode",{parentName:"a"},"babel-loader")),"module with the ",(0,n.yg)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-react"},"React preset")," in ",(0,n.yg)("inlineCode",{parentName:"p"},"webpack.rules.js"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="webpack.rules.js"',title:'"webpack.rules.js"'},'module.exports = [\n  // ... existing loader config ...\n  {\n    test: /\\.jsx?$/,\n    use: {\n      loader: "babel-loader",\n      options: {\n        exclude: /node_modules/,\n        presets: ["@babel/preset-react"],\n      },\n    },\n  },\n  // ... existing loader config ...\n];\n')),(0,n.yg)("h3",{id:"add-the-react-dependencies"},"Add the React dependencies"),(0,n.yg)("p",null,"Add the basic React packages to your ",(0,n.yg)("inlineCode",{parentName:"p"},"dependencies"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npm install --save react react-dom\n")),(0,n.yg)("h3",{id:"integrate-react-code"},"Integrate React code"),(0,n.yg)("p",null,"You should now be able to start writing and using React components in your Electron app. The following is a very minimal example of how to start to add React code:"),(0,n.yg)(o.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"app.jsx",label:"src/app.jsx",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx"},'import * as React from "react";\nimport { createRoot } from "react-dom/client";\n\nconst root = createRoot(document.body);\nroot.render(<h2>Hello from React!</h2>);\n'))),(0,n.yg)(l.A,{value:"renderer.js",label:"src/renderer.js",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},'// Add this to the end of the existing file\nimport "./app.jsx";\n')))),(0,n.yg)("p",null,"For more about React, see their ",(0,n.yg)("a",{parentName:"p",href:"https://react.dev/learn/add-react-to-an-existing-project"},"documentation"),"."))}g.isMDXComponent=!0}}]);