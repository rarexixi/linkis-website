import{o as t,c as e,b as l,e as n,r as i,l as a,u as s}from"./vendor.1180558b.js";var o="/assets/Linkis_1.0_architecture.ba18dcdc.png",r="/assets/wedatasphere_stack_Linkis.efef3aa3.png",u="/assets/wedatasphere_contact_01.ce92bdb6.png";const c={class:"markdown-body"},g=[l("h1",null,"Introduction",-1),l("p",null,"Linkis builds a layer of computation middleware between upper applications and underlying engines. By using standard interfaces such as REST/WS/JDBC provided by Linkis, the upper applications can easily access the underlying engines such as MySQL/Spark/Hive/Presto/Flink, etc., and achieve the intercommunication of user resources like unified variables, scripts, UDFs, functions and resource files at the same time.",-1),l("p",null,"As a computation middleware, Linkis provides powerful connectivity, reuse, orchestration, expansion, and governance capabilities. By decoupling the application layer and the engine layer, it simplifies the complex network call relationship, and thus reduces the overall complexity and saves the development and maintenance costs as well.",-1),l("p",null,[n("Since the first release of Linkis in 2019, it has accumulated more than "),l("strong",null,"700"),n(" trial companies and "),l("strong",null,"1000+"),n(" sandbox trial users, which involving diverse industries, from finance, banking, tele-communication, to manufactory, internet companies and so on. Lots of companies have already used Linkis as a unified entrance for the underlying computation and storage engines of the big data platform.")],-1),l("p",null,[l("img",{src:"/assets/linkis-intro-01.71fb2144.png",alt:"linkis-intro-01"})],-1),l("p",null,[l("img",{src:"/assets/linkis-intro-03.65d1a7b1.png",alt:"linkis-intro-03"})],-1),l("h1",null,"Features",-1),l("ul",null,[l("li",null,[l("p",null,[l("strong",null,"Support for diverse underlying computation storage engines"),n("."),l("br"),n(" Currently supported computation/storage engines: Spark, Hive, Python, Presto, ElasticSearch, MLSQL, TiSpark, JDBC, Shell, etc;"),l("br"),n(" Computation/storage engines to be supported: Flink, Impala, etc;"),l("br"),n(" Supported scripting languages: SparkSQL, HiveQL, Python, Shell, Pyspark, R, Scala and JDBC, etc.")])]),l("li",null,[l("p",null,[l("strong",null,"Powerful task/request governance capabilities"),n(". With services such as Orchestrator, Label Manager and customized Spring Cloud Gateway, Linkis is able to provide multi-level labels based, cross-cluster/cross-IDC fine-grained routing, load balance, multi-tenancy, traffic control, resource control, and orchestration strategies like dual-active, active-standby, etc.")])]),l("li",null,[l("p",null,[l("strong",null,"Support full stack computation/storage engine"),n(". As a computation middleware, it will receive, execute and manage tasks and requests for various computation storage engines, including batch tasks, interactive query tasks, real-time streaming tasks and storage tasks;")])]),l("li",null,[l("p",null,[l("strong",null,"Resource management capabilities"),n(". ResourceManager is not only capable of managing resources for Yarn and Linkis EngineManger as in Linkis 0.X, but also able to provide label-based multi-level resource allocation and recycling, allowing itself to have powerful resource management capabilities across mutiple Yarn clusters and mutiple computation resource types;")])]),l("li",null,[l("p",null,[l("strong",null,"Unified Context Service"),n(". Generate Context ID for each task/request, associate and manage user and system resource files (JAR, ZIP, Properties, etc.), result set, parameter variable, function, etc., across user, system, and computing engine. Set in one place, automatic reference everywhere;")])]),l("li",null,[l("p",null,[l("strong",null,"Unified materials"),n(". System and user-level unified material management, which can be shared and transferred across users and systems.")])])],-1),l("h1",null,"Supported engine types",-1),l("table",null,[l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"left"}},[l("strong",null,"Engine")]),l("th",{style:{"text-align":"left"}},[l("strong",null,"Supported Version")]),l("th",{style:{"text-align":"left"}},[l("strong",null,"Linkis 0.X version requirement")]),l("th",{style:{"text-align":"left"}},[l("strong",null,"Linkis 1.X version requirement")]),l("th",{style:{"text-align":"left"}},[l("strong",null,"Description")])])]),l("tbody",null,[l("tr",null,[l("td",{style:{"text-align":"left"}},"Flink"),l("td",{style:{"text-align":"left"}},"1.11.0"),l("td",{style:{"text-align":"left"}},">=dev-0.12.0, PR #703 not merged yet."),l("td",{style:{"text-align":"left"}},"ongoing"),l("td",{style:{"text-align":"left"}},"Flink EngineConn. Supports FlinkSQL code, and also supports Flink Jar to Linkis Manager to start a new Yarn application.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"Impala"),l("td",{style:{"text-align":"left"}},'>=3.2.0, CDH >=6.3.0"'),l("td",{style:{"text-align":"left"}},">=dev-0.12.0, PR #703 not merged yet."),l("td",{style:{"text-align":"left"}},"ongoing"),l("td",{style:{"text-align":"left"}},"Impala EngineConn. Supports Impala SQL.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"Presto"),l("td",{style:{"text-align":"left"}},">= 0.180"),l("td",{style:{"text-align":"left"}},">=0.11.0"),l("td",{style:{"text-align":"left"}},"ongoing"),l("td",{style:{"text-align":"left"}},"Presto EngineConn. Supports Presto SQL.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"ElasticSearch"),l("td",{style:{"text-align":"left"}},">=6.0"),l("td",{style:{"text-align":"left"}},">=0.11.0"),l("td",{style:{"text-align":"left"}},"ongoing"),l("td",{style:{"text-align":"left"}},"ElasticSearch EngineConn. Supports SQL and DSL code.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"Shell"),l("td",{style:{"text-align":"left"}},"Bash >=2.0"),l("td",{style:{"text-align":"left"}},">=0.9.3"),l("td",{style:{"text-align":"left"}},">=1.0.0_rc1"),l("td",{style:{"text-align":"left"}},"Shell EngineConn. Supports shell code.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"MLSQL"),l("td",{style:{"text-align":"left"}},">=1.1.0"),l("td",{style:{"text-align":"left"}},">=0.9.1"),l("td",{style:{"text-align":"left"}},"ongoing"),l("td",{style:{"text-align":"left"}},"MLSQL EngineConn. Supports MLSQL code.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"JDBC"),l("td",{style:{"text-align":"left"}},"MySQL >=5.0, Hive >=1.2.1"),l("td",{style:{"text-align":"left"}},">=0.9.0"),l("td",{style:{"text-align":"left"}},">=1.0.0_rc1"),l("td",{style:{"text-align":"left"}},"JDBC EngineConn. Supports MySQL and HiveQL code.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"Spark"),l("td",{style:{"text-align":"left"}},"Apache 2.0.0~2.4.7, CDH >=5.4.0"),l("td",{style:{"text-align":"left"}},">=0.5.0"),l("td",{style:{"text-align":"left"}},">=1.0.0_rc1"),l("td",{style:{"text-align":"left"}},"Spark EngineConn. Supports SQL, Scala, Pyspark and R code.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"Hive"),l("td",{style:{"text-align":"left"}},"Apache >=1.0.0, CDH >=5.4.0"),l("td",{style:{"text-align":"left"}},">=0.5.0"),l("td",{style:{"text-align":"left"}},">=1.0.0_rc1"),l("td",{style:{"text-align":"left"}},"Hive EngineConn. Supports HiveQL code.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"Hadoop"),l("td",{style:{"text-align":"left"}},"Apache >=2.6.0, CDH >=5.4.0"),l("td",{style:{"text-align":"left"}},">=0.5.0"),l("td",{style:{"text-align":"left"}},"ongoing"),l("td",{style:{"text-align":"left"}},"Hadoop EngineConn. Supports Hadoop MR/YARN application.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"Python"),l("td",{style:{"text-align":"left"}},">=2.6"),l("td",{style:{"text-align":"left"}},">=0.5.0"),l("td",{style:{"text-align":"left"}},">=1.0.0_rc1"),l("td",{style:{"text-align":"left"}},"Python EngineConn. Supports python code.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"TiSpark"),l("td",{style:{"text-align":"left"}},"1.1"),l("td",{style:{"text-align":"left"}},">=0.5.0"),l("td",{style:{"text-align":"left"}},"ongoing"),l("td",{style:{"text-align":"left"}},"TiSpark EngineConn. Support querying TiDB data by SparkSQL.")])])],-1),l("h1",null,"Download",-1),l("p",null,[n("Please go to the "),l("a",{href:"https://github.com/apache/incubator-linkis/releases"},"Linkis releases page"),n(" to download a compiled distribution or a source code package of Linkis.")],-1),l("h1",null,"Compile and deploy",-1),l("p",null,[n("Please follow "),l("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc/blob/master/en_US/Development_Documents/Linkis_Compilation_Document.md"},"Compile Guide"),n(" to compile Linkis from source code."),l("br"),n(" Please refer to "),l("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc/tree/master/en_US/Deployment_Documents"},"Deployment_Documents"),n(" to do the deployment.")],-1),l("h1",null,"Examples and Guidance",-1),l("p",null,[n("You can find examples and guidance for how to use and manage Linkis in "),l("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc/tree/master/en_US/User_Manual"},"User_Manual"),n(", "),l("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc/tree/master/en_US/Engine_Usage_Documentations"},"Engine_Usage_Documents"),n(" and "),l("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc/tree/master/en_US/API_Documentations"},"API_Documents"),n(".")],-1),l("h1",null,"Documentation",-1),l("p",null,[n("The documentation of linkis is in "),l("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc"},"Linkis-Doc"),n(".")],-1),l("h1",null,"Architecture",-1),l("p",null,"Linkis services could be divided into three categories: computation governance services, public enhancement services and microservice governance services.",-1),l("ul",null,[l("li",null,"The computation governance services, support the 3 major stages of processing a task/request: submission -> preparation -> execution;"),l("li",null,"The public enhancement services, including the material library service, context service, and data source service;"),l("li",null,"The microservice governance services, including Spring Cloud Gateway, Eureka and Open Feign.")],-1),l("p",null,[n("Below is the Linkis architecture diagram. You can find more detailed architecture docs in "),l("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc/tree/master/en_US/Architecture_Documents"},"Linkis-Doc/Architecture"),n(". "),l("img",{src:o,alt:"architecture"})],-1),l("p",null,[n("Based on Linkis the computation middleware, we’ve built a lot of applications and tools on top of it in the big data platform suite "),l("a",{href:"https://github.com/WeBankFinTech/WeDataSphere"},"WeDataSphere"),n(". Below are the currently available open-source projects. More projects upcoming, please stay tuned.")],-1),l("p",null,[l("img",{src:r,alt:"wedatasphere_stack_Linkis"})],-1),l("h1",null,"Contributing",-1),l("p",null,[n("Contributions are always welcomed, we need more contributors to build Linkis together. either code, or doc, or other supports that could help the community."),l("br"),n(" For code and documentation contributions, please follow the "),l("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc/blob/master/en_US/Development_Documents/Contributing.md"},"contribution guide"),n(".")],-1),l("h1",null,"Contact Us",-1),l("p",null,[n("Any questions or suggestions please kindly submit an issue."),l("br"),n(" You can scan the QR code below to join our WeChat and QQ group to get more immediate response.")],-1),l("p",null,[l("img",{src:u,alt:"introduction05"})],-1),l("p",null,[n("Meetup videos on "),l("a",{href:"https://space.bilibili.com/598542776?from=search&seid=14344213924133040656"},"Bilibili"),n(".")],-1),l("h1",null,"Who is Using Linkis",-1),l("p",null,[n("We opened "),l("a",{href:"https://github.com/apache/incubator-linkis/issues/23"},"an issue"),n(" for users to feedback and record who is using Linkis."),l("br"),n(" Since the first release of Linkis in 2019, it has accumulated more than "),l("strong",null,"700"),n(" trial companies and "),l("strong",null,"1000+"),n(" sandbox trial users, which involving diverse industries, from finance, banking, tele-communication, to manufactory, internet companies and so on.")],-1)],d={setup:(l,{expose:n})=>(n({frontmatter:{}}),(l,n)=>(t(),e("div",c,g)))};const p={class:"markdown-body"},h=[l("h1",null,"介绍",-1),l("p",null,[n("Linkis 在上层应用程序和底层引擎之间构建了一层计算中间件。通过使用Linkis 提供的REST/WebSocket/JDBC 等标准接口，上层应用可以方便地连接访问MySQL/Spark/Hive/Presto/Flink 等底层引擎，同时实现变量、脚本、函数和资源文件等用户资源的跨上层应用互通。"),l("br"),n(" 作为计算中间件，Linkis 提供了强大的连通、复用、编排、扩展和治理管控能力。通过计算中间件将应用层和引擎层解耦，简化了复杂的网络调用关系，降低了整体复杂度，同时节约了整体开发和维护成本。"),l("br"),n(" Linkis 自2019年开源发布以来，已累计积累了700多家试验企业和1000+沙盒试验用户，涉及金融、电信、制造、互联网等多个行业。许多公司已经将Linkis 作为大数据平台底层计算存储引擎的统一入口，和计算请求/任务的治理管控利器。")],-1),l("p",null,[l("img",{src:"/assets/before_linkis_cn.6c6e76e4.png",alt:"没有Linkis 之前"})],-1),l("p",null,[l("img",{src:"/assets/after_linkis_cn.f311973b.png",alt:"有了Linkis 之后"})],-1),l("h1",null,"核心特点",-1),l("ul",null,[l("li",null,[l("strong",null,"丰富的底层计算存储引擎支持"),n("。"),l("br"),l("strong",null,"目前支持的计算存储引擎"),n("：Spark、Hive、Python、Presto、ElasticSearch、MLSQL、TiSpark、JDBC和Shell等。"),l("br"),l("strong",null,"正在支持中的计算存储引擎"),n("：Flink、Impala等。"),l("br"),l("strong",null,"支持的脚本语言"),n("：SparkSQL, HiveQL, Python, Shell, Pyspark, R, Scala 和JDBC 等。")]),l("li",null,[l("strong",null,"强大的计算治理能力"),n("。基于Orchestrator、Label Manager和定制的Spring Cloud Gateway等服务，Linkis能够提供基于多级标签的跨集群/跨IDC 细粒度路由、负载均衡、多租户、流量控制、资源控制和编排策略(如双活、主备等)支持能力。")]),l("li",null,[l("strong",null,"全栈计算存储引擎架构支持"),n("。能够接收、执行和管理针对各种计算存储引擎的任务和请求，包括离线批量任务、交互式查询任务、实时流式任务和存储型任务；")]),l("li",null,[l("strong",null,"资源管理能力"),n("。 ResourceManager 不仅具备 Linkis0.X 对 Yarn 和 Linkis EngineManager 的资源管理能力，还将提供基于标签的多级资源分配和回收能力，让 ResourceManager 具备跨集群、跨计算资源类型的强大资源管理能力。")]),l("li",null,[l("strong",null,"统一上下文服务"),n("。为每个计算任务生成context id，跨用户、系统、计算引擎的关联管理用户和系统资源文件（JAR、ZIP、Properties等），结果集，参数变量，函数等，一处设置，处处自动引用；")]),l("li",null,[l("strong",null,"统一物料"),n("。系统和用户级物料管理，可分享和流转，跨用户、系统共享物料。")])],-1),l("h1",null,"支持的引擎类型",-1),l("table",null,[l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"left"}},[l("strong",null,"引擎")]),l("th",{style:{"text-align":"left"}},[l("strong",null,"引擎版本")]),l("th",{style:{"text-align":"left"}},[l("strong",null,"Linkis 0.X 版本要求")]),l("th",{style:{"text-align":"left"}},[l("strong",null,"Linkis 1.X 版本要求")]),l("th",{style:{"text-align":"left"}},[l("strong",null,"说明")])])]),l("tbody",null,[l("tr",null,[l("td",{style:{"text-align":"left"}},"Flink"),l("td",{style:{"text-align":"left"}},"1.11.0"),l("td",{style:{"text-align":"left"}},">=dev-0.12.0, PR #703 尚未合并"),l("td",{style:{"text-align":"left"}},"ongoing"),l("td",{style:{"text-align":"left"}},"Flink EngineConn。支持FlinkSQL 代码，也支持以Flink Jar 形式启动一个新的Yarn 应用程序。")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"Impala"),l("td",{style:{"text-align":"left"}},'>=3.2.0, CDH >=6.3.0"'),l("td",{style:{"text-align":"left"}},">=dev-0.12.0, PR #703 尚未合并"),l("td",{style:{"text-align":"left"}},"ongoing"),l("td",{style:{"text-align":"left"}},"Impala EngineConn. 支持Impala SQL 代码.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"Presto"),l("td",{style:{"text-align":"left"}},">= 0.180"),l("td",{style:{"text-align":"left"}},">=0.11.0"),l("td",{style:{"text-align":"left"}},"ongoing"),l("td",{style:{"text-align":"left"}},"Presto EngineConn. 支持Presto SQL 代码.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"ElasticSearch"),l("td",{style:{"text-align":"left"}},">=6.0"),l("td",{style:{"text-align":"left"}},">=0.11.0"),l("td",{style:{"text-align":"left"}},"ongoing"),l("td",{style:{"text-align":"left"}},"ElasticSearch EngineConn. 支持SQL 和DSL 代码.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"Shell"),l("td",{style:{"text-align":"left"}},"Bash >=2.0"),l("td",{style:{"text-align":"left"}},">=0.9.3"),l("td",{style:{"text-align":"left"}},">=1.0.0_rc1"),l("td",{style:{"text-align":"left"}},"Shell EngineConn. 支持Bash shell 代码.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"MLSQL"),l("td",{style:{"text-align":"left"}},">=1.1.0"),l("td",{style:{"text-align":"left"}},">=0.9.1"),l("td",{style:{"text-align":"left"}},"ongoing"),l("td",{style:{"text-align":"left"}},"MLSQL EngineConn. 支持MLSQL 代码.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"JDBC"),l("td",{style:{"text-align":"left"}},"MySQL >=5.0, Hive >=1.2.1"),l("td",{style:{"text-align":"left"}},">=0.9.0"),l("td",{style:{"text-align":"left"}},">=1.0.0_rc1"),l("td",{style:{"text-align":"left"}},"JDBC EngineConn. 已支持MySQL 和HiveQL，可快速扩展支持其他有JDBC Driver 包的引擎, 如Oracle.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"Spark"),l("td",{style:{"text-align":"left"}},"Apache 2.0.0~2.4.7, CDH >=5.4.0"),l("td",{style:{"text-align":"left"}},">=0.5.0"),l("td",{style:{"text-align":"left"}},">=1.0.0_rc1"),l("td",{style:{"text-align":"left"}},"Spark EngineConn. 支持SQL, Scala, Pyspark 和R 代码.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"Hive"),l("td",{style:{"text-align":"left"}},"Apache >=1.0.0, CDH >=5.4.0"),l("td",{style:{"text-align":"left"}},">=0.5.0"),l("td",{style:{"text-align":"left"}},">=1.0.0_rc1"),l("td",{style:{"text-align":"left"}},"Hive EngineConn. 支持HiveQL 代码.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"Hadoop"),l("td",{style:{"text-align":"left"}},"Apache >=2.6.0, CDH >=5.4.0"),l("td",{style:{"text-align":"left"}},">=0.5.0"),l("td",{style:{"text-align":"left"}},"ongoing"),l("td",{style:{"text-align":"left"}},"Hadoop EngineConn. 支持Hadoop MR/YARN application.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"Python"),l("td",{style:{"text-align":"left"}},">=2.6"),l("td",{style:{"text-align":"left"}},">=0.5.0"),l("td",{style:{"text-align":"left"}},">=1.0.0_rc1"),l("td",{style:{"text-align":"left"}},"Python EngineConn. 支持python 代码.")]),l("tr",null,[l("td",{style:{"text-align":"left"}},"TiSpark"),l("td",{style:{"text-align":"left"}},"1.1"),l("td",{style:{"text-align":"left"}},">=0.5.0"),l("td",{style:{"text-align":"left"}},"ongoing"),l("td",{style:{"text-align":"left"}},"TiSpark EngineConn. 支持用SparkSQL 查询TiDB.")])])],-1),l("h1",null,"下载",-1),l("p",null,[n("请前往"),l("a",{href:"https://github.com/apache/incubator-linkis/releases"},"Linkis releases 页面"),n(" 下载Linkis 的已编译版本或源码包。")],-1),l("h1",null,"编译和安装部署",-1),l("p",null,[n("请参照"),l("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc/blob/master/zh_CN/Development_Documents/Linkis%E7%BC%96%E8%AF%91%E6%96%87%E6%A1%A3.md"},"编译指引"),n(" 来编译Linkis 源码。"),l("br"),n(" 请参考"),l("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc/tree/master/zh_CN/Deployment_Documents"},"安装部署文档"),n(" 来部署Linkis。")],-1),l("h1",null,"示例和使用指引",-1),l("p",null,[n("请到 "),l("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc/tree/master/zh_CN/User_Manual"},"用户手册"),n(", "),l("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc/tree/master/zh_CN/Engine_Usage_Documentations"},"各引擎使用指引"),n(" 和"),l("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc/tree/master/zh_CN/API_Documentations"},"API 文档"),n(" 中，查看如何使用和管理Linkis 的示例和指引。")],-1),l("h1",null,"文档",-1),l("p",null,[n("完整的Linkis 文档参见"),l("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc"},"Linkis-Doc"),n(" 或"),l("a",{href:"https://github.com/apache/incubator-linkis/wiki"},"wiki"),n(".")],-1),l("h1",null,"架构概要",-1),l("p",null,"Linkis 基于微服务架构开发，其服务可以分为3类:计算治理服务、公共增强服务和微服务治理服务。",-1),l("ul",null,[l("li",null,"计算治理服务，支持计算任务/请求处理流程的3个主要阶段:提交->准备->执行;"),l("li",null,"公共增强服务，包括上下文服务、物料管理服务及数据源服务等;"),l("li",null,"微服务治理服务，包括定制化的Spring Cloud Gateway、Eureka、Open Feign。")],-1),l("p",null,[n("下面是Linkis 的架构概要图. 更多详细架构文档请见 "),l("a",{href:"https://github.com/WeBankFinTech/Linkis-Doc/tree/master/zh_CN/Architecture_Documents"},"Linkis-Doc/Architecture"),n(". "),l("img",{src:o,alt:"architecture"})],-1),l("p",null,[n("基于Linkis 计算中间件，我们在大数据平台套件"),l("a",{href:"https://github.com/WeBankFinTech/WeDataSphere"},"WeDataSphere"),n(" 中构建了许多应用和工具系统。下面是目前可用的开源项目。")],-1),l("p",null,[l("img",{src:r,alt:"wedatasphere_stack_Linkis"})],-1),l("ul",null,[l("li",null,[l("p",null,[l("a",{href:"https://github.com/WeBankFinTech/DataSphereStudio"},[l("strong",null,"DataSphere Studio"),n(" - 数据应用集成开发框架")])])]),l("li",null,[l("p",null,[l("a",{href:"https://github.com/WeBankFinTech/Scriptis"},[l("strong",null,"Scriptis"),n(" - 数据研发IDE工具")])])]),l("li",null,[l("p",null,[l("a",{href:"https://github.com/WeBankFinTech/Visualis"},[l("strong",null,"Visualis"),n(" - 数据可视化工具")])])]),l("li",null,[l("p",null,[l("a",{href:"https://github.com/WeBankFinTech/Schedulis"},[l("strong",null,"Schedulis"),n(" - 工作流调度工具")])])]),l("li",null,[l("p",null,[l("a",{href:"https://github.com/WeBankFinTech/Qualitis"},[l("strong",null,"Qualitis"),n(" - 数据质量工具")])])]),l("li",null,[l("p",null,[l("a",{href:"https://github.com/WeBankFinTech/prophecis"},[l("strong",null,"MLLabis"),n(" - 容器化机器学习notebook 开发环境")])])])],-1),l("p",null,"更多项目开源准备中，敬请期待。",-1),l("h1",null,"贡献",-1),l("p",null,[n("我们非常欢迎和期待更多的贡献者参与共建Linkis, 不论是代码、文档，或是其他能够帮助到社区的贡献形式。"),l("br"),n(" 代码和文档相关的贡献请参照"),l("a",{href:"https://github.com/apache/incubator-linkis/blob/master/Contributing_CN.md"},"贡献指引"),n(".")],-1),l("h1",null,"联系我们",-1),l("p",null,[n("对Linkis 的任何问题和建议，敬请提交issue，以便跟踪处理和经验沉淀共享。"),l("br"),n(" 您也可以扫描下面的二维码，加入我们的微信/QQ群，以获得更快速的响应。 "),l("img",{src:u,alt:"introduction05"})],-1),l("p",null,[n("Meetup 视频 "),l("a",{href:"https://space.bilibili.com/598542776?from=search&seid=14344213924133040656"},"Bilibili"),n(".")],-1),l("h1",null,"谁在使用Linkis",-1),l("p",null,[n("我们创建了"),l("a",{href:"https://github.com/apache/incubator-linkis/issues/23"},"一个 issue"),n(" 以便用户反馈和记录谁在使用Linkis."),l("br"),n(" Linkis 自2019年开源发布以来，累计已有700多家试验企业和1000+沙盒试验用户，涉及金融、电信、制造、互联网等多个行业。")],-1)],f={setup:(l,{expose:n})=>(n({frontmatter:{}}),(l,n)=>(t(),e("div",p,h)))},y={setup(e){const l=i(localStorage.getItem("locale")||"en");return(e,n)=>"en"===l.value?(t(),a(s(d),{key:0})):(t(),a(s(f),{key:1}))}};export{y as default};
