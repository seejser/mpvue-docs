(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{281:function(e,t,a){"use strict";a.r(t);var o=a(38),n=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mpvue-template-compiler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mpvue-template-compiler","aria-hidden":"true"}},[e._v("#")]),e._v(" mpvue-template-compiler")]),e._v(" "),a("blockquote",[a("p",[e._v("This package is auto-generated. For pull requests please see "),a("a",{attrs:{href:"https://github.com/Meituan-Dianping/mpvue/blob/master/src/platforms/mp/entry-compiler.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/platforms/mp/entry-compiler.js"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("This package can be used to pre-compile Vue 2.0 templates into render functions to avoid runtime-compilation overhead and CSP restrictions. You will only need it if you are writing build tools with very specific needs. In most cases you should be using "),a("a",{attrs:{href:"http://mpvue.com/build-tool/mpvue-loader/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mpvue-loader"),a("OutboundLink")],1),e._v(" instead, both of which use this package internally.")]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" mpvue-template-compiler\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" compiler "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'mpvue-template-compiler'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[e._v("#")]),e._v(" API")]),e._v(" "),a("h3",{attrs:{id:"compiler-compile-template-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compiler-compile-template-options","aria-hidden":"true"}},[e._v("#")]),e._v(" compiler.compile(template, [options])")]),e._v(" "),a("p",[e._v("Compiles a template string and returns compiled JavaScript code. The returned result is an object of the following format:")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),e._v("ASTElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// parsed template elements to AST")]),e._v("\n  render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// main render function code")]),e._v("\n  staticRenderFns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Array"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("string"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// render code for static sub trees, if any")]),e._v("\n  errors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Array"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("string"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// template syntax errors, if any")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("Note the returned function code uses "),a("code",[e._v("with")]),e._v(" and thus cannot be used in strict mode code.")]),e._v(" "),a("h4",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[e._v("#")]),e._v(" Options")]),e._v(" "),a("p",[e._v("It's possible to hook into the compilation process to support custom template features. "),a("strong",[e._v("However, beware that by injecting custom compile-time modules, your templates will not work with other build tools built on standard built-in modules, e.g "),a("code",[e._v("mpvue-loader")]),e._v(" and "),a("code",[e._v("vueify")]),e._v(".")])]),e._v(" "),a("p",[e._v("The optional "),a("code",[e._v("options")]),e._v(" object can contain the following:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("modules")])]),e._v(" "),a("p",[e._v("An array of compiler modules. For details on compiler modules, refer to the "),a("code",[e._v("ModuleOptions")]),e._v(" type in "),a("a",{attrs:{href:"https://github.com/vuejs/vue/blob/dev/flow/compiler.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("flow declarations"),a("OutboundLink")],1),e._v(" and the "),a("a",{attrs:{href:"https://github.com/vuejs/vue/tree/dev/src/platforms/web/compiler/modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("built-in modules"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("directives")])]),e._v(" "),a("p",[e._v("An object where the key is the directive name and the value is a function that transforms an template AST node. For example:")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("compiler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'<div v-test></div>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  directives"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("test")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" directiveMeta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// transform node based on directiveMeta")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("By default, a compile-time directive will extract the directive and the directive will not be present at runtime. If you want the directive to also be handled by a runtime definition, return "),a("code",[e._v("true")]),e._v(" in the transform function.")]),e._v(" "),a("p",[e._v("Refer to the implementation of some "),a("a",{attrs:{href:"https://github.com/vuejs/vue/tree/dev/src/platforms/web/compiler/directives",target:"_blank",rel:"noopener noreferrer"}},[e._v("built-in compile-time directives"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("preserveWhitespace")])]),e._v(" "),a("p",[e._v("Defaults to "),a("code",[e._v("true")]),e._v(". This means the compiled render function respects all the whitespaces between HTML tags. If set to "),a("code",[e._v("false")]),e._v(", all whitespaces between tags will be ignored. This can result in slightly better performance but may affect layout for inline elements.")])])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"compiler-compiletofunctions-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compiler-compiletofunctions-template","aria-hidden":"true"}},[e._v("#")]),e._v(" compiler.compileToFunctions(template)")]),e._v(" "),a("p",[e._v("Similar to "),a("code",[e._v("compiler.compile")]),e._v(", but directly returns instantiated functions:")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  staticRenderFns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Array"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Function"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("This is only useful at runtime with pre-configured builds, so it doesn't accept any compile-time options. In addition, this method uses "),a("code",[e._v("new Function()")]),e._v(" so it is not CSP-compliant.")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"compiler-ssrcompile-template-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compiler-ssrcompile-template-options","aria-hidden":"true"}},[e._v("#")]),e._v(" compiler.ssrCompile(template, [options])")]),e._v(" "),a("blockquote",[a("p",[e._v("2.4.0+")])]),e._v(" "),a("p",[e._v("Same as "),a("code",[e._v("compiler.compile")]),e._v(" but generates SSR-specific render function code by optimizing parts of the template into string concatenation in order to improve SSR performance.")]),e._v(" "),a("p",[e._v("This is used by default in "),a("code",[e._v("vue-loader@>=12")]),e._v(" and can be disabled using the "),a("a",{attrs:{href:"https://vue-loader.vuejs.org/en/options.html#optimizessr",target:"_blank",rel:"noopener noreferrer"}},[e._v("optimizeSSR"),a("OutboundLink")],1),e._v(" option.")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"compiler-ssrcompiletofunction-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compiler-ssrcompiletofunction-template","aria-hidden":"true"}},[e._v("#")]),e._v(" compiler.ssrCompileToFunction(template)")]),e._v(" "),a("blockquote",[a("p",[e._v("2.4.0+")])]),e._v(" "),a("p",[e._v("Same as "),a("code",[e._v("compiler.compileToFunction")]),e._v(" but generates SSR-specific render function code by optimizing parts of the template into string concatenation in order to improve SSR performance.")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"compiler-parsecomponent-file-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compiler-parsecomponent-file-options","aria-hidden":"true"}},[e._v("#")]),e._v(" compiler.parseComponent(file, [options])")]),e._v(" "),a("p",[e._v("Parse a SFC (single-file component, or "),a("code",[e._v("*.vue")]),e._v(" file) into a descriptor (refer to the "),a("code",[e._v("SFCDescriptor")]),e._v(" type in "),a("a",{attrs:{href:"https://github.com/vuejs/vue/blob/dev/flow/compiler.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("flow declarations"),a("OutboundLink")],1),e._v("). This is used in SFC build tools like "),a("code",[e._v("vue-loader")]),e._v(" and "),a("code",[e._v("vueify")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"options-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Options")]),e._v(" "),a("h4",{attrs:{id:"pad"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pad","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("pad")])]),e._v(" "),a("p",[a("code",[e._v("pad")]),e._v(" is useful when you are piping the extracted content into other pre-processors, as you will get correct line numbers or character indices if there are any syntax errors.")]),e._v(" "),a("ul",[a("li",[e._v("with "),a("code",[e._v('{ pad: "line" }')]),e._v(", the extracted content for each block will be prefixed with one newline for each line in the leading content from the original file to ensure that the line numbers align with the original file.")]),e._v(" "),a("li",[e._v("with "),a("code",[e._v('{ pad: "space" }')]),e._v(", the extracted content for each block will be prefixed with one space for each character in the leading content from the original file to ensure that the character count remains the same as the original file.")])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"compiler-compiletowxml-compiled-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compiler-compiletowxml-compiled-options","aria-hidden":"true"}},[e._v("#")]),e._v(" compiler.compileToWxml(compiled, [options])")]),e._v(" "),a("p",[e._v("Parse a AST（Abstract Syntax Tree）into a String which is the type of string of a WXML(WeiXin Markup Language) file.This is used after a template compiled into a AST with the function "),a("code",[e._v("compiler.compile(template, [options])")]),e._v(" .")]),e._v(" "),a("h4",{attrs:{id:"compiled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compiled","aria-hidden":"true"}},[e._v("#")]),e._v(" compiled")]),e._v(" "),a("p",[a("code",[e._v("compiled")]),e._v(" is the result of "),a("a",{attrs:{href:"#compilercompiletemplate-options"}},[e._v("compiler.compile")]),e._v(",with this function you can compile the "),a("router-link",{attrs:{to:"/mpvue/mpvue-template-compiler.html#https://cn.vuejs.org/v2/guide/syntax.html"}},[e._v("template")]),e._v(" strings.")],1),e._v(" "),a("h4",{attrs:{id:"options-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Options")]),e._v(" "),a("ul",[a("li",[e._v("components: "),a("code",[e._v("components")]),e._v(" is an Object includes the properties of the components in the template where is the paramter "),a("code",[e._v("compiled")]),e._v(" comes from.\n"),a("code",[e._v("components")]),e._v(" is necessary if there are components declared in your vue file before compiling. The formate of "),a("code",[e._v("components")]),e._v(" maybe like this:\n"),a("code",[e._v("{ componentA: { src: '/components/coma', name: 'componentA' }, componentB: { src: '/components/comb', name: 'componentB' } }")])]),e._v(" "),a("li",[e._v("moduleId: The unique identifier of component.Using "),a("code",[e._v("moduleId")]),e._v(" you can inject an only name of components and when you use it in "),a("code",[e._v("[css scoped]")]),e._v(" or "),a("code",[e._v("[css modules]")]),e._v(" ,the style of component won't be covered.")])])])},[],!1,null,null,null);t.default=n.exports}}]);