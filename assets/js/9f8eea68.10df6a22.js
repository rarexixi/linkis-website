"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[8729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"LDAP",sidebar_position:1},o=void 0,l={unversionedId:"auth/ldap",id:"auth/ldap",title:"LDAP",description:"LDAP (Lightweight Directory Access Protocol) configuration, after the default installation and deployment, only supports configured static user and password login (only one can be configured), if you need to support multi-user login, you can use LDAP",source:"@site/docs/auth/ldap.md",sourceDirName:"auth",slug:"/auth/ldap",permalink:"/docs/1.3.2/auth/ldap",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/auth/ldap.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"LDAP",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Seatunnel Engine",permalink:"/docs/1.3.2/engine-usage/seatunnel"},next:{title:"Token",permalink:"/docs/1.3.2/auth/token"}},s={},p=[{value:"1. Implementation logic introduction",id:"1-implementation-logic-introduction",level:2},{value:"2. How to use",id:"2-how-to-use",level:2},{value:"2.1 Step1 Enable ladp login password verification method",id:"21-step1-enable-ladp-login-password-verification-method",level:3},{value:"2.2 Step2 Restart the service of linkis-mg-gateway",id:"22-step2-restart-the-service-of-linkis-mg-gateway",level:3},{value:"3 Notes",id:"3-notes",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"LDAP (Lightweight Directory Access Protocol) configuration, after the default installation and deployment, only supports configured static user and password login (only one can be configured), if you need to support multi-user login, you can use LDAP")),(0,a.kt)("h2",{id:"1-implementation-logic-introduction"},"1. Implementation logic introduction"),(0,a.kt)("p",null,"The default way to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-mg-gateway.properties")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"#default username\nwds.linkis.admin.user=hadoop\n#default password \nwds.linkis.admin.password=123456\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.linkis.gateway.security.UserPwdAbstractUserRestful#tryLogin")," during login request processing,\nIf the login user name/user password is inconsistent with the configured default value, LDAP mode will be used.\nLDAP core processing ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.linkis.gateway.security.LDAPUserRestful#login")," is authenticated by calling jdk general ldap tool class.\n",(0,a.kt)("inlineCode",{parentName:"p"},"javax.naming.ldap.InitialLdapContext#InitialLdapContext(java.util.Hashtable<?,?>, javax.naming.ldap.Control[])")),(0,a.kt)("h2",{id:"2-how-to-use"},"2. How to use"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The premise is that there is an available LDAP service")),(0,a.kt)("h3",{id:"21-step1-enable-ladp-login-password-verification-method"},"2.1 Step1 Enable ladp login password verification method"),(0,a.kt)("p",null,"Modify ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-mg-gateway.properties")," configuration"),(0,a.kt)("p",null,"Fill in LDAP related parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"##LDAP\n#ldap service address\nwds.linkis.ldap.proxy.url=ldap://localhost:1389/\n#Directory Name(DN) Directory composition of ldap\nwds.linkis.ldap.proxy.baseDN==dc=linkis,dc=org\n#Username formatting Generally, no configuration is required\nwds.linkis.ldap.proxy.userNameFormat=\n")),(0,a.kt)("h3",{id:"22-step2-restart-the-service-of-linkis-mg-gateway"},"2.2 Step2 Restart the service of linkis-mg-gateway"),(0,a.kt)("p",null,"After modifying the configuration, you need to restart the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-mg-gateway")," service ",(0,a.kt)("inlineCode",{parentName:"p"},"sh sbin/linkis-daemon.sh start mg-mgtaeway")," to take effect"),(0,a.kt)("h2",{id:"3-notes"},"3 Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The authentication type uses the simple mode in ",(0,a.kt)("inlineCode",{parentName:"p"},"java.naming.security.authentication")," (security type, three values: none, simple or strong.)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For the introduction of ldap, please refer to ","[LDAP directory server introduction]"," (",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903857311449102"},"https://juejin.cn/post/6844903857311449102"),")"))))}c.isMDXComponent=!0}}]);