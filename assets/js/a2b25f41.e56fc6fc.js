"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[95957],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),c=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,k=m["".concat(u,".").concat(h)]||m[h]||s[h]||r;return n?i.createElement(k,l(l({ref:t},p),{},{components:n})):i.createElement(k,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6183:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],o={title:"Release Notes 1.3.0",sidebar_position:11},u=void 0,c={unversionedId:"release-notes-1.3.0",id:"release-notes-1.3.0",title:"Release Notes 1.3.0",description:"Apache Linkis(incubating) 1.3.0 includes all Project Linkis-1.3.0.",source:"@site/download/release-notes-1.3.0.md",sourceDirName:".",slug:"/release-notes-1.3.0",permalink:"/download/release-notes-1.3.0",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/download/release-notes-1.3.0.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Release Notes 1.3.0",sidebar_position:11},sidebar:"defaultSidebar",previous:{title:"Download Logo",permalink:"/download/download-logo"}},p=[{value:"new features",id:"new-features",children:[],level:2},{value:"Enhancement",id:"enhancement",children:[],level:2},{value:"Bugs Fix",id:"bugs-fix",children:[],level:2},{value:"Thanks",id:"thanks",children:[],level:2}],s={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache Linkis(incubating) 1.3.0 includes all ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis/projects/14"},"Project Linkis-1.3.0"),"."),(0,r.kt)("p",null,"The release of Linkis 1.3.0 mainly supports the deployment of Linkis services in the Kubernetes environment, including unified image construction, complete Helm Charts, and complete testing peripherals based on Kind. In addition, some functional optimizations and bug fixes have been made."),(0,r.kt)("p",null,"The main functions are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linkis unified image construction for multiple microservices, and adding actions for automatic image construction"),(0,r.kt)("li",{parentName:"ul"},"Added Helm Charts for deploying Linkis as a whole to Kubernetes environment"),(0,r.kt)("li",{parentName:"ul"},"Kind-based local Kubernetes test environment support"),(0,r.kt)("li",{parentName:"ul"},"Linkis microservice Remote Debug support on Kubernetes environment"),(0,r.kt)("li",{parentName:"ul"},"Added mirror LDH (Linkis Distribution, including Apache Hadoop) build of Hadoop ecosystem All-in-one"),(0,r.kt)("li",{parentName:"ul"},"Optimize the performance of distributed locks of Manager, and fix the problem of slow SQL query caused by high concurrency scenarios")),(0,r.kt)("p",null,"abbreviation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"COMMON: Linkis Common"),(0,r.kt)("li",{parentName:"ul"},"ENTRANCE: Linkis Entrance"),(0,r.kt)("li",{parentName:"ul"},"EC: Engineconn"),(0,r.kt)("li",{parentName:"ul"},"ECM: EngineConnManager"),(0,r.kt)("li",{parentName:"ul"},"ECP: EngineConnPlugin"),(0,r.kt)("li",{parentName:"ul"},"DMS: Data Source Manager Service"),(0,r.kt)("li",{parentName:"ul"},"MDS: MetaData Manager Service"),(0,r.kt)("li",{parentName:"ul"},"LM: Linkis Manager"),(0,r.kt)("li",{parentName:"ul"},"PS: Linkis Public Service"),(0,r.kt)("li",{parentName:"ul"},"PE: Linkis Public Enhancement"),(0,r.kt)("li",{parentName:"ul"},"RPC: Linkis Common RPC"),(0,r.kt)("li",{parentName:"ul"},"CG: Linkis Computation Governance"),(0,r.kt)("li",{parentName:"ul"},"DEPLOY: Linkis Deployment"),(0,r.kt)("li",{parentName:"ul"},"WEB: Linkis Web"),(0,r.kt)("li",{parentName:"ul"},"GATEWAY: Linkis Gateway"),(0,r.kt)("li",{parentName:"ul"},"EP: Engine Plugin")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"new-features"},"new features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","DEPLOY]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2478"},"[LINKIS-2478]")," Added git action to automatically build and publish images when publishing"),(0,r.kt)("li",{parentName:"ul"},"[","DEPLOY]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/3441"},"[LINKIS-3441]")," Add base image and introduce image cache mechanism for image acceleration"),(0,r.kt)("li",{parentName:"ul"},"[","DEPLOY]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2447"},"[LINKIS-2447]")," Add Dockerfile for Linkis backend and frontend service, and add maven profile to build image"),(0,r.kt)("li",{parentName:"ul"},"[","DEPLOY]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2446"},"[LINKIS-2446]")," Add Helm Charts for Linkis backend and frontend services, and Charts for database initialization job"),(0,r.kt)("li",{parentName:"ul"},"[","DEPLOY]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2465"},"[LINKIS-2465]")," Add login-pod and remote-debug-proxy to facilitate debugging in k8s environment"),(0,r.kt)("li",{parentName:"ul"},"[","DEPLOY]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2540"},"[LINKIS-2540]")," Introduce LDH (Linkis Distribution, including Hadoop) image, integrate Hadoop/Spark/Flink/Hive etc. to facilitate testing"),(0,r.kt)("li",{parentName:"ul"},"[","EP]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2916"},"[LINKIS-2916]")," Add EnginePlugin management module"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/3231"},"[LINKIS-3231]")," Add SQL DDL/DML git action check"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/3201"},"[LINKIS-3201]")," Added configuration item to support skipping Python code parsing"),(0,r.kt)("li",{parentName:"ul"},"[","ECP]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/3239"},"[LINKIS-3239]")," Optimize the logic of JDBC parameter filling")),(0,r.kt)("h2",{id:"enhancement"},"Enhancement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","LM]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2930"},"[LINKIS-2930]")," Optimize the performance of the Manager's distributed locks and fix slow SQL queries caused by high concurrency scenarios question"),(0,r.kt)("li",{parentName:"ul"},"[","EC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2709"},"[LINKIS-2709]")," EC log is added, which can be pushed according to fixed time interval"),(0,r.kt)("li",{parentName:"ul"},"[","ENTRANCE]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2713"},"[LINKIS-2713]")," Optimize Entrance concurrency"),(0,r.kt)("li",{parentName:"ul"},"[","Gateway]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2699"},"[LINKIS-2699]")," After the user logs in, clear the expired cookie of Gateway to solve the problem of authentication failure"),(0,r.kt)("li",{parentName:"ul"},"[","WEB]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2483"},"[LINKIS-2483]")," Linkis Web added dependencies install"),(0,r.kt)("li",{parentName:"ul"},"[","ECP]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2898"},"[LINKIS-2898]")," Improve Python testability"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2761"},"[LINKIS-2761]")," Code formatting enhancements, including scalafmt, spotless, parent pom adjustments, etc."),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2711"},"[LINKIS-2711]")," SparkPreExecutionHook refactoring"),(0,r.kt)("li",{parentName:"ul"},"[","EC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2976"},"[LINKIS-2976]")," Refactoring the configuration items of EngineConn")),(0,r.kt)("h2",{id:"bugs-fix"},"Bugs Fix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2769"},"[LINKIS-2769]")," fix WebMvcConfigurer issue caused by package conflict"),(0,r.kt)("li",{parentName:"ul"},"[","WEB]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2499"},"[LINKIS-2498]")," fix Apache Rat Check bug"),(0,r.kt)("li",{parentName:"ul"},"[","LM]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2892"},"[LINKIS-2892]")," Fix Yarn resource capacity calculation error"),(0,r.kt)("li",{parentName:"ul"},"[","CG]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2764"},"[LINKIS-2764]")," Fix Python code parser's parsing failure issue"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/2756"},"[LINKIS-2756]")," fix ResultSet may fail to read"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/3156"},"[LINKIS-3156]")," fix variable substitution bug"),(0,r.kt)("li",{parentName:"ul"},"[","COMMON]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/3307"},"[LINKIS-3307]")," fix NPE issue for FsPath"),(0,r.kt)("li",{parentName:"ul"},"[","EC]",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis/pull/3298"},"[LINKIS-3298]")," fix EC indicator update delay")),(0,r.kt)("h2",{id:"thanks"},"Thanks"),(0,r.kt)("p",null,"The release of Apache Linkis(incubating) 1.3.0 is inseparable from the contributors of the Linkis community. Thanks to all the community contributors, including but not limited to the following Contributors (in no particular order):\nAaronLinOops, Alexkun, jacktao007, legendtkl, peacewong, casionone, QuintinTao, cydenghua, jackxu2011, ruY9527, huiyuanjjjjuice,\nbinbinCheng, yyuser5201314, Beacontownfc, duhanmin, whiterxine, aiceflower, weipengfei-sj, zhaoyun006, CCweixiao, Beacontownfc, mayinrain"))}m.isMDXComponent=!0}}]);