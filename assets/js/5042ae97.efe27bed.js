"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[83298],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),d=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),s=d(n),k=r,c=s["".concat(m,".").concat(k)]||s[k]||o[k]||l;return n?a.createElement(c,i(i({ref:e},p),{},{components:n})):a.createElement(c,i({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var u={};for(var m in e)hasOwnProperty.call(e,m)&&(u[m]=e[m]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},34274:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return p},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],u={title:"Linkis built-in time variable introduction",sidebar_position:7},m=void 0,d={unversionedId:"user-guide/using_dynamic_variables",id:"user-guide/using_dynamic_variables",isDocsHomePage:!1,title:"Linkis built-in time variable introduction",description:"1. General",source:"@site/docs/user-guide/using_dynamic_variables.md",sourceDirName:"user-guide",slug:"/user-guide/using_dynamic_variables",permalink:"/docs/1.2.0/user-guide/using_dynamic_variables",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/user-guide/using_dynamic_variables.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Linkis built-in time variable introduction",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"DataSource Client SDK",permalink:"/docs/1.2.0/user-guide/linkis-datasource-client"},next:{title:"Overview",permalink:"/docs/1.2.0/engine-usage/overview"}},p=[{value:"1. General",id:"1-general",children:[{value:"Requirements Background",id:"requirements-background",children:[]},{value:"Target",id:"target",children:[]}]},{value:"2. Overall Design",id:"2-overall-design",children:[]},{value:"3. Function introduction",id:"3-function-introduction",children:[{value:"3.1 Examples of built-in variables",id:"31-examples-of-built-in-variables",children:[]},{value:"3.2 Custom Variable Usage Example",id:"32-custom-variable-usage-example",children:[]}]}],o={toc:p};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-general"},"1. General"),(0,l.kt)("h3",{id:"requirements-background"},"Requirements Background"),(0,l.kt)("p",null,"Users hope that when writing code, the time format requirements are ever-changing, and the existing ",(0,l.kt)("a",{parentName:"p",href:"https://linkis.apache.org/docs/latest/architecture/commons/variable/"},"Linkis custom variables")," is currently not enough to support these requirements. In addition, some of the existing time operation -1 means minus one month, and some minus one day, which is easy for users to confuse"),(0,l.kt)("h3",{id:"target"},"Target"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Other date built-in variables are calculated relative to run_date"),(0,l.kt)("li",{parentName:"ul"},"Support Pattern format time and users can specify at will"),(0,l.kt)("li",{parentName:"ul"},"Support \xb1y/\xb1M/\xb1d/\xb1H etc.")),(0,l.kt)("p",null,"Pattern format comparison table:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Letter"),(0,l.kt)("th",{parentName:"tr",align:null},"Date or Time Component"),(0,l.kt)("th",{parentName:"tr",align:null},"Presentation"),(0,l.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"G"),(0,l.kt)("td",{parentName:"tr",align:null},"Era designator"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"AD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},"Year"),(0,l.kt)("td",{parentName:"tr",align:null},"Year"),(0,l.kt)("td",{parentName:"tr",align:null},"1996; 96")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"Week year"),(0,l.kt)("td",{parentName:"tr",align:null},"Year"),(0,l.kt)("td",{parentName:"tr",align:null},"2009; 09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"Month in year"),(0,l.kt)("td",{parentName:"tr",align:null},"Month"),(0,l.kt)("td",{parentName:"tr",align:null},"July; Jul; 07")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"w"),(0,l.kt)("td",{parentName:"tr",align:null},"Week in year"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"27")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"W"),(0,l.kt)("td",{parentName:"tr",align:null},"Week in month"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"Day in year"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"189")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"d"),(0,l.kt)("td",{parentName:"tr",align:null},"Day in month"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},"Day of week in month"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E"),(0,l.kt)("td",{parentName:"tr",align:null},"Day name in week"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"Tuesday; Tue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"u"),(0,l.kt)("td",{parentName:"tr",align:null},"Day number of week (1 = Monday, \u2026, 7 = Sunday)"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"a"),(0,l.kt)("td",{parentName:"tr",align:null},"Am/pm marker"),(0,l.kt)("td",{parentName:"tr",align:null},"Text"),(0,l.kt)("td",{parentName:"tr",align:null},"PM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"H"),(0,l.kt)("td",{parentName:"tr",align:null},"Hour in day (0-23)"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"k"),(0,l.kt)("td",{parentName:"tr",align:null},"Hour in day (1-24)"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"24")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"K"),(0,l.kt)("td",{parentName:"tr",align:null},"Hour in am/pm (0-11)"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"h"),(0,l.kt)("td",{parentName:"tr",align:null},"Hour in am/pm (1-12)"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"m"),(0,l.kt)("td",{parentName:"tr",align:null},"Minute in hour"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null},"Second in minute"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"S"),(0,l.kt)("td",{parentName:"tr",align:null},"Millisecond"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"978")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"z"),(0,l.kt)("td",{parentName:"tr",align:null},"Time zone"),(0,l.kt)("td",{parentName:"tr",align:null},"General time zone"),(0,l.kt)("td",{parentName:"tr",align:null},"Pacific Standard Time; PST; GMT-08:00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Z"),(0,l.kt)("td",{parentName:"tr",align:null},"Time zone"),(0,l.kt)("td",{parentName:"tr",align:null},"RFC 822 time zone"),(0,l.kt)("td",{parentName:"tr",align:null},"-0800")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"Time zone"),(0,l.kt)("td",{parentName:"tr",align:null},"ISO 8601 time zone"),(0,l.kt)("td",{parentName:"tr",align:null},"-08; -0800; -08:00")))),(0,l.kt)("h2",{id:"2-overall-design"},"2. Overall Design"),(0,l.kt)("p",null,"The overall design and technical architecture refer to ",(0,l.kt)("a",{parentName:"p",href:"https://linkis.apache.org/docs/latest/architecture/commons/variable/"},"Linkis Custom Variables")),(0,l.kt)("h2",{id:"3-function-introduction"},"3. Function introduction"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The variable types supported by Linkis are divided into custom variables (not to be repeated) and system built-in variables. The custom variable date supports +-."),(0,l.kt)("li",{parentName:"ul"},"Among them, +- is to perform operation on the built-in parameter run_date of linkis, and then replace the pattern field before %. Non-pattern characters do not support operation replacement.")),(0,l.kt)("h3",{id:"31-examples-of-built-in-variables"},"3.1 Examples of built-in variables"),(0,l.kt)("p",null,"You can define parameters that need to be dynamically rendered according to your own preferences/business actual situation"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"variable"),(0,l.kt)("th",{parentName:"tr",align:null},"result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&{yyyy-01-01}"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-01-01")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&{yyyy-01-01%-2y}"),(0,l.kt)("td",{parentName:"tr",align:null},"2019-01-01")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&{yyyy-MM-01%-2M}"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-02-01")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&{yyyy-MM-dd%-2d}"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-03-31")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&{yyyy MM ----- HH%-1H}"),(0,l.kt)("td",{parentName:"tr",align:null},"2021 04 ----- 14")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&{yyyyMMdd%-1d}"),(0,l.kt)("td",{parentName:"tr",align:null},"20210401")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&{yyyyMM01%-1M}"),(0,l.kt)("td",{parentName:"tr",align:null},"20210301")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"&{HH%-1H}"),(0,l.kt)("td",{parentName:"tr",align:null},"14")))),(0,l.kt)("h3",{id:"32-custom-variable-usage-example"},"3.2 Custom Variable Usage Example"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Example 1: sql")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM hive.tmp.fund_nav_histories\nWHERE dt <= DATE_FORMAT(DATE_ADD('day', -1, DATE(Date_parse('&{yyyyMMdd%-1d}', '%Y%m%d'))), '%Y%m%d')\n")),(0,l.kt)("p",null,"after rendering"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM hive.tmp.fund_nav_histories\nWHERE dt <= DATE_FORMAT(DATE_ADD('day', -1, DATE(Date_parse('20220705', '%Y%m%d'))), '%Y%m%d')\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Example 2: shell")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"aws s3 ls s3://***/ads/tmp/dws_member_active_detail_d_20210601_20211231/pt=&{yyyyMMdd%-1d}/\n")),(0,l.kt)("p",null,"after rendering"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"aws s3 ls s3://***/ads/tmp/dws_member_active_detail_d_20210601_20211231/pt=20220705/\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Example 3: datax json")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "job": {\n    "setting": {\n      "speed": {\n        "channel": 1\n      }\n    },\n    "content": [\n      {\n        "reader": {\n          "name": "s3reader",\n          "parameter": {\n            "bucket": "****************",\n            "path": [\n              "ads/tmp/ccass_tm_announcements/&{yyyyMMdd%-1d}/"\n            ],\n            "stored": "parquet",\n            "compression": "NONE",\n            "column": [\n              {\n                "index": 0,\n                "type": "int"\n              },\n              {\n                "index": 1,\n                "type": "string",\n                "constant": "&{yyyyMMdd%-1d}"\n              }\n            ]\n          }\n        },\n        "writer": {\n          "name": "streamwriter",\n          "parameter": {\n            "print": true\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,l.kt)("p",null,"after rendering"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "job": {\n    "setting": {\n      "speed": {\n        "channel": 1\n      }\n    },\n    "content": [\n      {\n        "reader": {\n          "name": "s3reader",\n          "parameter": {\n            "bucket": "****************",\n            "path": [\n              "ads/tmp/ccass_tm_announcements/20220705/"\n            ],\n            "stored": "parquet",\n            "compression": "NONE",\n            "column": [\n              {\n                "index": 0,\n                "type": "int"\n              },\n              {\n                "index": 1,\n                "type": "string",\n                "constant": "20220705"\n              }\n            ]\n          }\n        },\n        "writer": {\n          "name": "streamwriter",\n          "parameter": {\n            "print": true\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Example 4: python")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"print(&{yyyyMMdd%-1d})\n")),(0,l.kt)("p",null,"after rendering"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," 20220705\n")))}s.isMDXComponent=!0}}]);