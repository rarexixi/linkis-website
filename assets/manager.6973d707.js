import{o as n,c as l,b as e,e as t,r as a,l as i,u}from"./vendor.1180558b.js";var r="/assets/linkis-manager-01.fb5e443a.png",o="/assets/app-manager-03.5aaff6ed.png",s="/assets/resource-manager-01.86e09124.png";const g={class:"markdown-body"},c=[e("h1",null,"LinkisManager Architecture Design",-1),e("p",null,"        As an independent microservice of Linkis, LinkisManager provides AppManager (application management), ResourceManager (resource management), and LabelManager (label management) capabilities. It can support multi-active deployment and has the characteristics of high availability and easy expansion.",-1),e("h2",null,"1. Architecture Diagram",-1),e("p",null,[e("img",{src:r,alt:"Architecture Diagram"})],-1),e("h3",null,"Noun explanation",-1),e("ul",null,[e("li",null,"EngineConnManager (ECM): Engine Manager, used to start and manage engines."),e("li",null,"EngineConn (EC): Engine connector, used to connect the underlying computing engine."),e("li",null,"ResourceManager (RM): Resource Manager, used to manage node resources.")],-1),e("h2",null,"2. Introduction to the second-level module",-1),e("h3",null,"2.1. Application management module linkis-application-manager",-1),e("p",null,"        AppManager is used for unified scheduling and management of engines:",-1),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Core Interface/Class"),e("th",null,"Main Function")])]),e("tbody",null,[e("tr",null,[e("td",null,"EMInfoService"),e("td",null,"Defines EngineConnManager information query and modification functions")]),e("tr",null,[e("td",null,"EMRegisterService"),e("td",null,"Defines EngineConnManager registration function")]),e("tr",null,[e("td",null,"EMEngineService"),e("td",null,"Defines EngineConnManager’s creation, query, and closing functions of EngineConn")]),e("tr",null,[e("td",null,"EngineAskEngineService"),e("td",null,"Defines the function of querying EngineConn")]),e("tr",null,[e("td",null,"EngineConnStatusCallbackService"),e("td",null,"Defines the function of processing EngineConn status callbacks")]),e("tr",null,[e("td",null,"EngineCreateService"),e("td",null,"Defines the function of creating EngineConn")]),e("tr",null,[e("td",null,"EngineInfoService"),e("td",null,"Defines EngineConn query function")]),e("tr",null,[e("td",null,"EngineKillService"),e("td",null,"Defines the stop function of EngineConn")]),e("tr",null,[e("td",null,"EngineRecycleService"),e("td",null,"Defines the recycling function of EngineConn")]),e("tr",null,[e("td",null,"EngineReuseService"),e("td",null,"Defines the reuse function of EngineConn")]),e("tr",null,[e("td",null,"EngineStopService"),e("td",null,"Defines the self-destruct function of EngineConn")]),e("tr",null,[e("td",null,"EngineSwitchService"),e("td",null,"Defines the engine switching function")]),e("tr",null,[e("td",null,"AMHeartbeatService"),e("td",null,"Provides EngineConnManager and EngineConn node heartbeat processing functions")])])],-1),e("p",null,[t("        The process of applying for an engine through AppManager is as follows:"),e("br"),e("img",{src:o,alt:"AppManager"})],-1),e("h3",null,"2. Label management module linkis-label-manager",-1),e("p",null,"        LabelManager provides label management and analysis capabilities.",-1),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Core Interface/Class"),e("th",null,"Main Function")])]),e("tbody",null,[e("tr",null,[e("td",null,"LabelService"),e("td",null,"Provides the function of adding, deleting, modifying and checking labels")]),e("tr",null,[e("td",null,"ResourceLabelService"),e("td",null,"Provides resource label management functions")]),e("tr",null,[e("td",null,"UserLabelService"),e("td",null,"Provides user label management functions")]),e("tr",null,[e("td",null,"The LabelManager architecture diagram is as follows:"),e("td")]),e("tr",null,[e("td",null,[e("img",{src:s,alt:"ResourceManager"})]),e("td")])])],-1),e("h3",null,"4. Monitoring module linkis-manager-monitor",-1),e("p",null,"        Monitor provides the function of node status monitoring.",-1)],d={setup:(e,{expose:t})=>(t({frontmatter:{}}),(e,t)=>(n(),l("div",g,c)))};const p={class:"markdown-body"},E=[e("h1",null,"LinkisManager架构设计",-1),e("p",null,"LinkisManager作为Linkis的一个独立微服务，对外提供了AppManager（应用管理）、ResourceManager（资源管理）、LabelManager（标签管理）的能力，能够支持多活部署，具备高可用、易扩展的特性。",-1),e("h2",null,"一. 架构图",-1),e("p",null,[e("img",{src:r,alt:"01"})],-1),e("h3",null,"名词解释",-1),e("ul",null,[e("li",null,"EngineConnManager（ECM）： 引擎管理器，用于启动和管理引擎"),e("li",null,"EngineConn（EC）：引擎连接器，用于连接底层计算引擎"),e("li",null,"ResourceManager（RM）：资源管理器，用于管理节点资源")],-1),e("h2",null,"二. 二级模块介绍",-1),e("h3",null,"1. 应用管理模块 linkis-application-manager",-1),e("p",null,"AppManager用于引擎的统一调度和管理",-1),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"核心接口/类"),e("th",null,"主要功能")])]),e("tbody",null,[e("tr",null,[e("td",null,"EMInfoService"),e("td",null,"定义了EngineConnManager信息查询、修改功能")]),e("tr",null,[e("td",null,"EMRegisterService"),e("td",null,"定义了EngineConnManager注册功能")]),e("tr",null,[e("td",null,"EMEngineService"),e("td",null,"定义了EngineConnManager对EngineConn的创建、查询、关闭功能")]),e("tr",null,[e("td",null,"EngineAskEngineService"),e("td",null,"定义了查询EngineConn的功能")]),e("tr",null,[e("td",null,"EngineConnStatusCallbackService"),e("td",null,"定义了处理EngineConn状态回调的功能")]),e("tr",null,[e("td",null,"EngineCreateService"),e("td",null,"定义了创建EngineConn的功能")]),e("tr",null,[e("td",null,"EngineInfoService"),e("td",null,"定义了EngineConn查询功能")]),e("tr",null,[e("td",null,"EngineKillService"),e("td",null,"定义了EngineConn的停止功能")]),e("tr",null,[e("td",null,"EngineRecycleService"),e("td",null,"定义了EngineConn的回收功能")]),e("tr",null,[e("td",null,"EngineReuseService"),e("td",null,"定义了EngineConn的复用功能")]),e("tr",null,[e("td",null,"EngineStopService"),e("td",null,"定义了EngineConn的自毁功能")]),e("tr",null,[e("td",null,"EngineSwitchService"),e("td",null,"定义了引擎切换功能")]),e("tr",null,[e("td",null,"AMHeartbeatService"),e("td",null,"提供了EngineConnManager和EngineConn节点心跳处理功能")])])],-1),e("p",null,[t("通过AppManager申请引擎流程如下： "),e("img",{src:o,alt:""})],-1),e("h3",null,"2. 标签管理模块 linkis-label-manager",-1),e("p",null,"LabelManager提供标签管理和解析能力",-1),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"核心接口/类"),e("th",null,"主要功能")])]),e("tbody",null,[e("tr",null,[e("td",null,"LabelService"),e("td",null,"提供了标签增删改查功能")]),e("tr",null,[e("td",null,"ResourceLabelService"),e("td",null,"提供了资源标签管理功能")]),e("tr",null,[e("td",null,"UserLabelService"),e("td",null,"提供了用户标签管理功能")])])],-1),e("p",null,[t("LabelManager架构图如下： "),e("img",{src:"/assets/label-manager-01.530390e5.png",alt:""})],-1),e("h3",null,"3. 资源管理模块 linkis-resource-manager",-1),e("p",null,"ResourceManager用于管理引擎和队列的所有资源分配",-1),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"核心接口/类"),e("th",null,"主要功能")])]),e("tbody",null,[e("tr",null,[e("td",null,"RequestResourceService"),e("td",null,"提供了EngineConn资源申请功能")]),e("tr",null,[e("td",null,"ResourceManagerService"),e("td",null,"提供了EngineConn资源释放功能")]),e("tr",null,[e("td",null,"LabelResourceService"),e("td",null,"提供了标签对应资源管理功能")])])],-1),e("p",null,"ResourceManager架构图如下：",-1),e("p",null,[e("img",{src:s,alt:""})],-1),e("h3",null,"4. 监控模块 linkis-manager-monitor",-1),e("p",null,"Monitor提供了节点状态监控的功能",-1)],f={setup:(e,{expose:t})=>(t({frontmatter:{}}),(e,t)=>(n(),l("div",p,E)))},m={setup(l){const e=a(localStorage.getItem("locale")||"en");return(l,t)=>"en"===e.value?(n(),i(u(d),{key:0})):(n(),i(u(f),{key:1}))}};export{m as default};
