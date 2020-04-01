(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{450:function(s,a,t){"use strict";t.r(a);var e=t(3),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("介绍 Python 打包工具 Pyinstaller 的安装和使用")]),s._v(" "),t("h2",{attrs:{id:"pyinstaller"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pyinstaller"}},[s._v("#")]),s._v(" Pyinstaller")]),s._v(" "),t("p",[s._v("如果想要将写好的 Python 程序不通过配置环境，而是可以直接执行，则需要打包工具来完成。")]),s._v(" "),t("p",[s._v("Python 有几款打包工具，其中跨平台支持比较好的有 Pyinstaller 和 cxfreeze。在刚学习 Python 的时候按照教程做过一个 Alien_Invasion 的游戏，当时为了给用 win 的同学玩，用过一次 cxfreeze，成功在 win 平台上打包出 exe。但在给我的 Translator 项目打包的时候比较拉胯，就换用了 Pyinstaller。很ok👌")]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pyinstaller\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),t("p",[s._v("常用命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pyinstaller -h\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 产生单个可执行文件")]),s._v("\npyinstaller -F "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("入口程序"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行过后，会在当前目录生成 build、dist 目录和 <入口程序>.spec 文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dist 目录下的就是产生的单一可执行文件")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 产生一个目录（包含多个文件）作为可执行程序")]),s._v("\npyinstaller -D "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("入口程序"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dist 目录下有很多子文件，运行其中的 <入口程序> 就可以执行了")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);