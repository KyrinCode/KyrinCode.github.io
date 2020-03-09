(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{344:function(e,s,t){"use strict";t.r(s);var a=t(10),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("blockquote",[t("p",[e._v("由于hexo是基于node的框架，所以关于web前端的知识我不会讲太细，如果你是python工程师、ruby工程师，都有其对应的框架，简化搭建博客的难度，不用在hexo上过分用心.\n因为直到现在我才明白，我花费了很多心思搞服务器、弄域名、学后台语言，为的是自己搞一个网站，然而却忽略了最为重要的是"),t("strong",[e._v("内容")]),e._v("。")])]),e._v(" "),t("h2",{attrs:{id:"安装node环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装node环境"}},[e._v("#")]),e._v(" 安装node环境")]),e._v(" "),t("p",[e._v("请移步 "),t("a",{attrs:{href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("nodeJS中文网"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"安装git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装git"}},[e._v("#")]),e._v(" 安装git")]),e._v(" "),t("p",[e._v("请移步 "),t("a",{attrs:{href:"https://git-scm.com/book/zh/v1/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git",target:"_blank",rel:"noopener noreferrer"}},[e._v("起步 - 安装 Git"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"全局安装hexo并初始化一个工程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局安装hexo并初始化一个工程"}},[e._v("#")]),e._v(" 全局安装hexo并初始化一个工程")]),e._v(" "),t("p",[e._v("过程与安装大部分脚手架工具一样类似，工具可以使用命令行工具或git bash")]),e._v(" "),t("ol",[t("li",[e._v("全局安装hexo"),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ npm install hexo-cli -g\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[e._v("进入一个文件夹（你想把工程放到哪个文件夹就进入哪个文件夹，我的是 "),t("code",[e._v("D:/files/hexo")]),e._v(" ），初始化一个工程"),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ hexo init yourProjectName\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[e._v("进入你的工程，安装需要的资源"),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cd blog\n$ npm install\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])])]),e._v(" "),t("li",[e._v("启动你的工程，默认监听4000端口，打开 "),t("code",[e._v("localhost:4000")]),e._v(" 便可以访问到"),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ hexo server\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[e._v("常用的命令就四个\n"),t("ul",[t("li",[e._v("hexo clean 清空缓存")]),e._v(" "),t("li",[e._v("hexo generate 简写hexo g，生成静态文件")]),e._v(" "),t("li",[e._v("hexo serve 简写hexo s，启动一个服务，将本地静态文件可视化")]),e._v(" "),t("li",[e._v("hexo deploy 简写hexo d，发布")])])])]),e._v(" "),t("p",[e._v("这时候一个最原始的hexo博客就搭建好了。")]),e._v(" "),t("h2",{attrs:{id:"安装主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装主题"}},[e._v("#")]),e._v(" 安装主题")]),e._v(" "),t("p",[e._v("可以去官方主题库区找，也可以去百度一下信誉比较好的主题，这个根据自己的喜好选择就行。")]),e._v(" "),t("ol",[t("li",[e._v("安装。主题一般都是托管在GitHub，可以直接将主题直接clone到你的工程下的themes文件夹下，也可以下载压缩包解压到themes文件夹下。")]),e._v(" "),t("li",[e._v("配置。打开_config.yml（主题文件夹内还有一个_config.yml，不要弄混）文件进行设置，比如你安装好的主题的文件夹叫themeABC，那就将theme设置为themeABC")])]),e._v(" "),t("h2",{attrs:{id:"发布到自己的github-pages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布到自己的github-pages"}},[e._v("#")]),e._v(" 发布到自己的GitHub pages")]),e._v(" "),t("p",[e._v("pages分两种，一种是对应自己的GitHub账号，一种对应GitHub上的一个工程，现在我们讲的是对应自己GitHub账号的那种。")]),e._v(" "),t("ol",[t("li",[e._v("创建。创建一个工程，格式为 "),t("code",[e._v("nickname.github.io")]),e._v(" ，我的GitHub昵称叫做recoluan，所以我的pages名字叫做 "),t("code",[e._v("recoluan.github.io")])]),e._v(" "),t("li",[e._v("配置。打开_config.yml，配置自己的工程。"),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("deploy:\n  type: git\n  repo: git@github.com:recoluan/recoluan.github.io.git\n  branch: master\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])])]),e._v(" "),t("li",[e._v("在你的本体工程下使用命令行工具发布到 GitHub 工程，并使用 nickname.github.io 访问。"),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ hexo g\n$ hexo d\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])])])]),e._v(" "),t("h2",{attrs:{id:"绑定域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#绑定域名"}},[e._v("#")]),e._v(" 绑定域名")]),e._v(" "),t("ol",[t("li",[e._v("解析域名。在你的域名服务平台的控制台进行解析，设置两条记录，记录的类型都选择 CNAME，记录值都选择 nickname.github.io ，主机记录一条为空，另一条填写 www。")]),e._v(" "),t("li",[e._v("设置pages。在github上打开你的工程，点击 Settings ，然后找到 GitHub Pages 下的 Custom domain ，填写你的 www 域名，点击 save 保存，这时域名就可以访问到你的网站了。")]),e._v(" "),t("li",[e._v("修复本地工程。GitHub工程里会出现一个CNAME文件里面写着你域名，见这个文件放到你的本地工程的所用主题下的source文件夹下，不然下次发布时会清空这个文件。")])]),e._v(" "),t("h2",{attrs:{id:"使用gitment添加评论功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用gitment添加评论功能"}},[e._v("#")]),e._v(" 使用gitment添加评论功能")]),e._v(" "),t("ol",[t("li",[e._v("注册 OAuth Apps。代开你的 GitHub 的设置，然后在左边菜单栏最下方找到 Developer settings 选项，点击进去找到 OAuth Apps，添加新的账号，其中“Application name”对应的你的Pages地址，我的是 "),t("code",[e._v("recoluan.github.io")]),e._v(" ,“Homepage URL”和“Authorization callback URL”对应的是域名，我的是 "),t("code",[e._v("http://www.recoluan.com")]),e._v(" ,这样会生成client_id和client_secret。")]),e._v(" "),t("li",[e._v("配置_config.yml。"),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gitment:\n  enable: true\n  owner: recoluan\n  repo: recoluan.github.io\n  client_id: your client_id\n  client_secret: your client_secret\n  perPage: 10\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])])]),e._v(" "),t("li",[e._v("将前端代码放到文章页或者专门的评论页"),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<% if(theme.gitment.enable && is_post()) { %>\n    <script type="text/javascript" src="https://imsun.github.io/gitment/dist/gitment.browser.js"><\/script>\n    <script>\n    var gitment = new Gitment({\n        id: window.location.pathname,\n        owner:"<%= theme.gitment.owner%>",\n        repo:"<%= theme.gitment.repo%>",\n        oauth: {\n          client_id:"<%= theme.gitment.client_id%>",\n          client_secret:"<%= theme.gitment.client_secret%>"\n        },\n        perPage:"<%= theme.gitment.perPage%>",\n    });\n    gitment.render(\'comments\');\n    <\/script>\n<% } else { %>\n   <p>评论系统未开启，无法评论！</p>\n<%}%>\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br")])])])]),e._v(" "),t("h2",{attrs:{id:"jsoncontent配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsoncontent配置"}},[e._v("#")]),e._v(" jsonContent配置")]),e._v(" "),t("ol",[t("li",[e._v("首先安装hexo-generator-json-content"),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("hexo-generator-json-content \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[e._v("然后在当前主题中的 "),t("code",[e._v("_config.yml")]),e._v(" 中配置"),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("## 搜索\njsonContent:\n  searchLocal: true\n  searchGoogle: false\n  meta: false\n  pages: false\n  posts:\n    title: true\n    date: true\n    path: true\n    text: true\n    raw: false\n    content: false\n    slug: false\n    updated: false\n    comments: false\n    link: false\n    permalink: false\n    excerpt: false\n    categories: false\n    tags: true\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br")])])])]),e._v(" "),t("h2",{attrs:{id:"设置banner图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置banner图"}},[e._v("#")]),e._v(" 设置banner图")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("banner:\n    img: /img/banner.jpg\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("这里注意，"),t("code",[e._v("/")]),e._v("代表的是根目录，项目会去根目录去寻找，否则会自动在当前目录为基础寻找。")]),e._v(" "),t("h3",{attrs:{id:"持续更新中。。。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#持续更新中。。。"}},[e._v("#")]),e._v(" 持续更新中。。。")]),e._v(" "),t("p",[e._v("个人博客："),t("a",{attrs:{href:"http://recoluan.gitlab.io",target:"_blank",rel:"noopener noreferrer"}},[t("strong",[e._v("午后南杂")]),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);