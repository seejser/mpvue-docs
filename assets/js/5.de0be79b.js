(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{268:function(t,e,a){t.exports=a.p+"assets/img/1.101ae151.png"},269:function(t,e,a){t.exports=a.p+"assets/img/2.57a8a93a.png"},270:function(t,e,a){t.exports=a.p+"assets/media/dev.15959a71.mp4"},285:function(t,e,a){"use strict";a.r(e);var s=a(38),n=Object(s.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"快速上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速上手","aria-hidden":"true"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),s("p",[t._v("本文假设你既不会 vue 也不会小程序，如嫌拖沓，请直接快进跳读。")]),t._v(" "),s("h2",{attrs:{id:"_1-初始化一个-mpvue-项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始化一个-mpvue-项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 初始化一个 mpvue 项目")]),t._v(" "),s("p",[t._v("现代前端开发框架和环境都是需要 Node.js 的，如果没有的话，请先下载 "),s("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodejs"),s("OutboundLink")],1),t._v(" 并安装。")]),t._v(" "),s("p",[t._v("然后打开命令行工具：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 先检查下 Node.js 是否安装成功")]),t._v("\n$ node -v\nv8.9.0\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" -v\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.6")]),t._v(".0\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. 由于众所周知的原因，可以考虑切换源为 taobao 源")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" registry https://registry.npm.taobao.org/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. 全局安装 vue-cli")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一般是要 sudo 权限的")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --global vue-cli@2.9\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4. 创建一个基于 mpvue-quickstart 模板的新项目")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新手一路回车选择默认就可以了")]),t._v("\n$ vue init mpvue/mpvue-quickstart my-project\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5. 安装依赖，走你")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" my-project\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])]),s("p",[t._v("随着运行成功的回显之后，可以看到本地多了个 "),s("code",[t._v("dist")]),t._v(" 目录，这个目录里就是生成的小程序相关代码。")]),t._v(" "),s("h2",{attrs:{id:"_2-搭建小程序的开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-搭建小程序的开发环境","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 搭建小程序的开发环境")]),t._v(" "),s("p",[t._v("小程序自己有一个专门的"),s("a",{attrs:{href:"https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信开发者工具"),s("OutboundLink")],1),t._v("，"),s("a",{attrs:{href:"https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("最新版本下载地址"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("这一步比较简单，按照提示一步步安装好就行，然后用微信扫描二维码登陆。\n至此小程序的开发环境差不多完成。")]),t._v(" "),s("h2",{attrs:{id:"_3-调试开发-mpvue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-调试开发-mpvue","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 调试开发 mpvue")]),t._v(" "),s("p",[t._v("选择 "),s("code",[t._v("小程序项目")]),t._v(" 并依次填好需要的信息：")]),t._v(" "),s("ul",[s("li",[t._v("项目目录：就是刚刚创建的项目目录（非 dist 目录）")]),t._v(" "),s("li",[t._v("AppID：没有的话可以点选体验“小程序”，只影响是否可以真机调试。")]),t._v(" "),s("li",[t._v("项目名称。")])]),t._v(" "),s("p",[t._v("如图：")]),t._v(" "),s("img",{attrs:{src:a(268),width:"300",alt:"小程序项目配置"}}),t._v(" "),s("p",[t._v("点击“确定”按钮后会跳到正式的开发页面，点击“编辑器”按钮，关闭自带的小程序编辑器。然后如图：")]),t._v(" "),s("img",{attrs:{src:a(269),width:"600",alt:"mpvue-start"}}),t._v(" "),s("p",[t._v("此时，整个 "),s("code",[t._v("mpvue")]),t._v(" 项目已经跑起来了。")]),t._v(" "),s("p",[t._v("用自己趁手的编辑器（或者IDE）打开 "),s("code",[t._v("my-project")]),t._v(" 中的 "),s("code",[t._v("src")]),t._v(" 目录下的代码试试，如示例：")]),t._v(" "),s("p",[s("video",{attrs:{src:a(270),width:"100%",height:"auto",controls:"controls"}})]),t._v(" "),s("p",[t._v("到此，上手完毕。")]),t._v(" "),s("h2",{attrs:{id:"_4-分包机制-2018-7-23"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-分包机制-2018-7-23","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 分包机制 "),s("code",[t._v("2018.7.23+")])]),t._v(" "),s("p",[t._v("mpvue-loader 1.1.2-rc.2 之后，优化了 build 后的文件生成结构，生成的目录结构保持了源文件夹下的目录结构，有利于对分包的支持。")]),t._v(" "),s("h2",{attrs:{id:"_5-webpack-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-webpack-配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. webpack 配置")]),t._v(" "),s("h2",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),s("ol",[s("li",[t._v("新增的页面需要重新 "),s("code",[t._v("npm run dev")]),t._v(" 来进行编译")])])])},[],!1,null,null,null);e.default=n.exports}}]);