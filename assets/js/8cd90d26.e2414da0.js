"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[87311],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var i=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,i,t=function(e,n){if(null==e)return{};var r,i,t={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=i.createContext({}),s=function(e){var n=i.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(r),m=t,k=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?i.createElement(k,c(c({ref:n},u),{},{components:r})):i.createElement(k,c({ref:n},u))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var s=2;s<o;s++)c[s]=r[s];return i.createElement.apply(null,c)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},90921:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=r(87462),t=(r(67294),r(3905));const o={title:"Source Code Directory Structure",sidebar_position:6},c="Source Code Directory Structure",a={unversionedId:"deployment/sourcecode-hierarchical-structure",id:"deployment/sourcecode-hierarchical-structure",isDocsHomePage:!1,title:"Source Code Directory Structure",description:"Linkis source code hierarchical directory structure description, if you want to learn more about Linkis modules, please check Linkis related architecture design",source:"@site/docs/deployment/sourcecode-hierarchical-structure.md",sourceDirName:"deployment",slug:"/deployment/sourcecode-hierarchical-structure",permalink:"/docs/1.3.0/deployment/sourcecode-hierarchical-structure",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/deployment/sourcecode-hierarchical-structure.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Source Code Directory Structure",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Installation Scriptis Tool",permalink:"/docs/1.3.0/deployment/linkis-scriptis-install"},next:{title:"Installation Package Directory Structure",permalink:"/docs/1.3.0/deployment/unpack-hierarchical-structure"}},l=[],s={toc:l};function u(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,i.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"source-code-directory-structure"},"Source Code Directory Structure"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Linkis source code hierarchical directory structure description, if you want to learn more about Linkis modules, please check ",(0,t.kt)("a",{parentName:"p",href:"/docs/1.3.0/architecture/overview"},"Linkis related architecture design"))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},"|-- linkis-dist //Compile the module of the entire project\n|        |-- assembly-combined\n|        |-- bin\n|        |-- deploy-config\n|        |-- src\n|-- linkis-commons //Core abstraction, which contains all common modules\n|        |-- linkis-common //Common module, built-in many common tools\n|        |-- linkis-hadoop-common\n|        |-- linkis-httpclient //Java SDK top-level interface\n|        |-- linkis-message-scheduler\n|        |-- linkis-module\n|        |-- linkis-mybatis //SpringCloud's Mybatis module\n|        |-- linkis-protocol\n|        |-- linkis-rpc //RPC module, complex two-way communication based on Feign\n|        |-- linkis-scheduler //General scheduling module\n|        |-- linkis-storage\n|        |\n|-- linkis-computation-governance //computing governance service\n|        |-- linkis-client //Java SDK, users can directly access Linkis through Client\n|        |-- linkis-computation-governance-common\n|        |-- linkis-engineconn\n|        |-- linkis-engineconn-manager\n|        |-- linkis-entrance //General low-level entrance module\n|        |-- linkis-entrance-client\n|        |-- linkis-jdbc-driver\n|        |-- linkis-manager\n|\n|-- linkis-engineconn-plugins\n|        |-- engineconn-plugins\n|        |-- linkis-engineconn-plugin-framework\n|\n|-- linkis-extensions\n|        |-- linkis-io-file-client\n|-- linkis-orchestrator\n|        |-- linkis-code-orchestrator\n|        |-- linkis-computation-orchestrator\n|        |-- linkis-orchestrator-core\n|        |-- plugin\n|-- linkis-public-enhancements //Public enhancement services\n|        |-- linkis-bml // Material library\n|        |-- linkis-context-service //Unified context\n|        |-- linkis-datasource //Data source service\n|        |-- linkis-publicservice //Public Service\n|-- linkis-spring-cloud-services //Microservice governance\n|        |-- linkis-service-discovery\n|        |-- linkis-service-gateway //Gateway\n|-- db //Database information\n|-- license-doc //license details\n|        |-- license //The license of the background project\n|         - ui-license //License of linkis management desk\n|-- tool //Tool script\n|        |-- check.sh\n|        |-- dependencies\n|\n|-- web //Management desk code of linkis\n|\n|-- scalastyle-config.xml //Scala code format check configuration file\n|-- CONTRIBUTING.md\n|-- CONTRIBUTING_CN.md\n|-- DISCLAIMER-WIP\n|-- LICENSE //LICENSE of the project source code\n|-- LICENSE-binary //LICENSE of binary package\n|-- LICENSE-binary-ui //LICENSE of the front-end compiled package\n|-- NOTICE //NOTICE of project source code\n|-- NOTICE-binary // NOTICE of binary package\n|-- NOTICE-binary-ui // NOTICE of front-end binary package\n|-- licenses-binary The detailed dependent license file of the binary package\n|-- licenses-binary-ui //The license file that the front-end compilation package depends on in detail\n|-- README.md\n|-- README_CN.md\n")))}u.isMDXComponent=!0}}]);