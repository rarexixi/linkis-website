"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[20200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),k=a,m=c["".concat(o,".").concat(k)]||c[k]||d[k]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},20209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u514d\u5bc6\u8ba4\u8bc1",sidebar_position:3},i=void 0,s={unversionedId:"auth/test",id:"auth/test",title:"\u514d\u5bc6\u8ba4\u8bc1",description:"\u5728\u6709\u4e9b\u573a\u666f\u4e0b\uff0c\u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\u8c03\u8bd5\uff0c\u80fd\u591f\u65b9\u4fbf\u7684\u8bbf\u95ee\u9875\u9762\u548c\u63a5\u53e3\uff0c\u53ef\u4ee5\u5f00\u542f\u6d4b\u8bd5\u6a21\u5f0f\u914d\u7f6e\uff0c\u8fdb\u884c\u514d\u5bc6\u8ba4\u8bc1",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/auth/test.md",sourceDirName:"auth",slug:"/auth/test",permalink:"/zh-CN/docs/1.3.2/auth/test",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/auth/test.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u514d\u5bc6\u8ba4\u8bc1",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Token",permalink:"/zh-CN/docs/1.3.2/auth/token"},next:{title:"\u4ee3\u7406\u8ba4\u8bc1",permalink:"/zh-CN/docs/1.3.2/auth/proxy"}},o={},p=[{value:"1. \u5b9e\u73b0\u903b\u8f91\u4ecb\u7ecd",id:"1-\u5b9e\u73b0\u903b\u8f91\u4ecb\u7ecd",level:2},{value:"2. \u4f7f\u7528\u65b9\u5f0f",id:"2-\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"2.1 Step1 \u5f00\u542f\u6d4b\u8bd5\u6a21\u5f0f",id:"21-step1-\u5f00\u542f\u6d4b\u8bd5\u6a21\u5f0f",level:3},{value:"2.2 Step2 \u91cd\u542f\u5bf9\u5e94\u7684\u670d\u52a1",id:"22-step2-\u91cd\u542f\u5bf9\u5e94\u7684\u670d\u52a1",level:3},{value:"2.3 Step3 \u8bf7\u6c42\u9a8c\u8bc1",id:"23-step3-\u8bf7\u6c42\u9a8c\u8bc1",level:3},{value:"3  \u6ce8\u610f\u4e8b\u9879",id:"3--\u6ce8\u610f\u4e8b\u9879",level:2},{value:"3.1 wds.linkis.test.user\u7684\u503c\u8bbe\u7f6e",id:"31-wdslinkistestuser\u7684\u503c\u8bbe\u7f6e",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u6709\u4e9b\u573a\u666f\u4e0b\uff0c\u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\u8c03\u8bd5\uff0c\u80fd\u591f\u65b9\u4fbf\u7684\u8bbf\u95ee\u9875\u9762\u548c\u63a5\u53e3\uff0c\u53ef\u4ee5\u5f00\u542f\u6d4b\u8bd5\u6a21\u5f0f\u914d\u7f6e\uff0c\u8fdb\u884c\u514d\u5bc6\u8ba4\u8bc1")),(0,a.kt)("h2",{id:"1-\u5b9e\u73b0\u903b\u8f91\u4ecb\u7ecd"},"1. \u5b9e\u73b0\u903b\u8f91\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u901a\u8fc7\u7edf\u4e00\u7684\u8ba4\u8bc1\u5904\u7406filter:",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.linkis.server.security.SecurityFilter")," \u6765\u63a7\u5236 "),(0,a.kt)("p",null,"\u914d\u7f6e\u9879"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"#\u662f\u5426\u5f00\u542f\u6d4b\u8bd5\u6a21\u5f0f\nwds.linkis.test.mode=true\n#\u6d4b\u8bd5\u6a21\u5f0f\u7684\u6a21\u62df\u7528\u6237\u540d\nwds.linkis.test.user=hadoop\n")),(0,a.kt)("p",null,"\u5b9e\u73b0\u7684\u4f2a\u4ee3\u7801 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val BDP_TEST_USER = CommonVars("wds.linkis.test.user", "")\nval IS_TEST_MODE = CommonVars("wds.linkis.test.mode", false)\n\nif (IS_TEST_MODE.getValue) {\n    logger.info("test mode! login for uri: " + request.getRequestURI)\n    // \u8bbe\u7f6e\u767b\u9646\u7528\u6237\u4fe1\u606f\u4e3a\u914d\u7f6e\u6307\u5b9a\u7684\u7528\u6237\n    SecurityFilter.setLoginUser(response, BDP_TEST_USER)\n    true\n}\n')),(0,a.kt)("h2",{id:"2-\u4f7f\u7528\u65b9\u5f0f"},"2. \u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("h3",{id:"21-step1-\u5f00\u542f\u6d4b\u8bd5\u6a21\u5f0f"},"2.1 Step1 \u5f00\u542f\u6d4b\u8bd5\u6a21\u5f0f"),(0,a.kt)("p",null,"\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis.properties"),"\uff08\u5bf9linkis\u6240\u6709\u670d\u52a1\u751f\u6548\uff09, \u4fee\u6539\u5bf9\u5e94\u7684\u914d\u7f6e\u5982\u4e0b "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#\u662f\u5426\u5f00\u542f\u6d4b\u8bd5\u6a21\u5f0f\nwds.linkis.test.mode=true\n#\u6d4b\u8bd5\u6a21\u5f0f\u7684\u6a21\u62df\u7528\u6237\u540d\nwds.linkis.test.user=hadoop\n")),(0,a.kt)("p",null,"\u5982\u679c\u53ea\u9700\u8981\u5f00\u542f\u67d0\u4e2a\u670d\u52a1\u7684\u6d4b\u8bd5\u6a21\u5f0f\uff0c\u53ef\u4ee5\u4fee\u6539\u5bf9\u5e94\u7684\u670d\u52a1\u914d\u7f6e\u9879\u3002\n\u5982 \u53ea\u5f00\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"entrance")," \u670d\u52a1\u7684\u6d4b\u8bd5\u6a21\u5f0f\n\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-cg-entrance.properties"),"\uff08\u5bf9linkis\u7684entrance\u670d\u52a1\u751f\u6548\uff09, \u4fee\u6539\u5bf9\u5e94\u7684\u914d\u7f6e\u5982\u4e0b "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#\u662f\u5426\u5f00\u542f\u6d4b\u8bd5\u6a21\u5f0f\nwds.linkis.test.mode=true\n#\u6d4b\u8bd5\u6a21\u5f0f\u7684\u6a21\u62df\u7528\u6237\u540d\nwds.linkis.test.user=hadoop\n")),(0,a.kt)("h3",{id:"22-step2-\u91cd\u542f\u5bf9\u5e94\u7684\u670d\u52a1"},"2.2 Step2 \u91cd\u542f\u5bf9\u5e94\u7684\u670d\u52a1"),(0,a.kt)("p",null,"\u4fee\u6539\u914d\u7f6e\u540e\uff0c\u9700\u8981\u91cd\u542f\u5bf9\u5e94\u7684\u670d\u52a1\uff08\u5982\u679c\u662f\u6240\u6709\u670d\u52a1\u90fd\u5f00\u542f\uff0c\u91cd\u542f\u6240\u6709\u670d\u52a1\uff09\uff0c\u624d\u80fd\u751f\u6548"),(0,a.kt)("h3",{id:"23-step3-\u8bf7\u6c42\u9a8c\u8bc1"},"2.3 Step3 \u8bf7\u6c42\u9a8c\u8bc1"),(0,a.kt)("p",null,"\u91cd\u542f\u670d\u52a1\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u76f4\u63a5\u8bf7\u6c42\u539f\u6765\u9700\u8981\u8ba4\u8bc1\u7684http\u63a5\u53e3\uff0c\u65e0\u9700\u989d\u5916\u7684\u8ba4\u8bc1\uff0c\u4fbf\u80fd\u6b63\u5e38\u8bf7\u6c42.\n\u7ba1\u7406\u53f0\u4e5f\u65e0\u9700\u767b\u9646\u8ba4\u8bc1\uff0c\u5c31\u53ef\u4ee5\u8bbf\u95ee\u5185\u5bb9\u9875\u9762"),(0,a.kt)("h2",{id:"3--\u6ce8\u610f\u4e8b\u9879"},"3  \u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("h3",{id:"31-wdslinkistestuser\u7684\u503c\u8bbe\u7f6e"},"3.1 wds.linkis.test.user\u7684\u503c\u8bbe\u7f6e"),(0,a.kt)("p",null,"\u56e0\u4e3a\u90e8\u5206\u63a5\u53e3\u4f1a\u8fdb\u884c\u7528\u6237\u89d2\u8272\u7684\u6743\u9650\u6821\u9a8c\uff0c\u5982: \u3010\u641c\u7d22\u5386\u53f2EC\u4fe1\u606f\u3011\u7684\u63a5\u53e3:",(0,a.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/linkisManager/ecinfo/ecrHistoryList"),"\n\u89d2\u8272\u6709\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u89d2\u8272\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6743\u9650\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406\u5458\u89d2\u8272"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6700\u9ad8\u6743\u9650\uff0c\u62e5\u6709\u6240\u6709\u6743\u9650\u64cd\u4f5c"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"wds.linkis.governance.station.admin")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"hadoop"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5386\u53f2\u4efb\u52a1\u89d2\u8272"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76f8\u5bf9\u666e\u901a\u7528\u6237\uff0c\u8fd8\u53ef\u4ee5\u67e5\u770b\u5176\u4ed6\u7528\u6237\u7684\u6240\u6709\u4efb\u52a1\u5217\u8868\u4fe1\u606f"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"wds.linkis.jobhistory.admin")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"hadoop"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u666e\u901a\u89d2\u8272"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u7684\u89d2\u8272"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4e0d\u540c\u573a\u666f\u7684\u6d4b\u8bd5\uff0c\u8bbe\u7f6e\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"wds.linkis.test.user"),"\u7684\u503c\uff0c\u4f1a\u6709\u4e0d\u540c\uff0c\u9700\u8981\u6309\u5b9e\u9645\u573a\u666f\u8fdb\u884c\u8bbe\u7f6e\u3002\n\u5982\u679c\u9700\u8981\u8bbf\u95ee\u6240\u6709\u63a5\u53e3\uff0c\u9700\u8981\u914d\u7f6e\u4e3a\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"wds.linkis.governance.station.admin"),"\u4e00\u6837\u7684\u503c\uff0c\u4e00\u822c\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"hadoop")))}d.isMDXComponent=!0}}]);