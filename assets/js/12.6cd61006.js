(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{556:function(t,s,n){"use strict";n.r(s);var a=n(12),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("Vue")]),t._v(" "),n("p",[n("strong",[t._v("对Vue生命周期的理解")])]),t._v(" "),n("p",[t._v("​\t"),n("strong",[t._v("生命周期是什么")])]),t._v(" "),n("p",[t._v("​\tVue实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模版、挂载Dom -> 渲染、更新->渲染、卸载等一系列过程，这就是Vue的生命周期")]),t._v(" "),n("p",[t._v("​\t"),n("strong",[t._v("各个生命周期的作用")])]),t._v(" "),n("p",[t._v("​\t\tbeforeCreate：组件实例被创建之初，组件属性生效之前")]),t._v(" "),n("p",[t._v("​\t\tcreated: 组件实例已经完全创建，属性也绑定，但真实的dom还没有生成，$el还不能用")]),t._v(" "),n("p",[t._v("​\t\tbeforeMount: 在挂载开始之前被调用：相关的render函数首次被调用")]),t._v(" "),n("p",[t._v("​\t\tmounted:  el被新创建的vm.$el替换，并挂载到实例上去之后调用该钩子")]),t._v(" "),n("p",[t._v("​\t\tbeforeUpdate: 组件数据更新之前调用，发生在虚拟DOM打补丁之前")]),t._v(" "),n("p",[t._v("​\t\tupdate: 组件数据更新之后")]),t._v(" "),n("p",[t._v("​\t\tactivited: keep-alive专属，组件被激活时调用")]),t._v(" "),n("p",[t._v("​\t\tdeadctivated: keep-alive专属，组件被销毁时调用")]),t._v(" "),n("p",[t._v("​\t\t beforeDestory: 组件销毁前调用")]),t._v(" "),n("p",[t._v("​\t \tdestory: 组件销毁后调用")]),t._v(" "),n("p",[t._v("​\t"),n("strong",[t._v("异步请求适合在哪个生命周期调用")])]),t._v(" "),n("p",[t._v("​\t\t官方实例的异步请求时在***mounted***生命周期中调用，而实际上也可以在***created***生命周期调用")]),t._v(" "),n("p",[n("strong",[t._v("Vue组件如何通信")])]),t._v(" "),n("ol",[n("li",[n("p",[t._v("props  $emit + v-on: 通过props将数据自上而下传递，而通过$emit和v-on来向上传递信息")])]),t._v(" "),n("li",[n("p",[t._v("EventBus: 通过EventBus进行信息的发布与订阅")])]),t._v(" "),n("li",[n("p",[t._v("vuex: 全局数据管理库，可以通过vuex管理全局的数据流")])]),t._v(" "),n("li",[n("p",[t._v("provide  inject: 以允许一个祖先组件向其他所有子孙后代注入一个依赖，不论组件层次有多深，并在其上下游关系成立时间里始终生效，这成为了跨组件通信的基础")]),t._v(" "),n("p",[t._v("还有一些用solt插槽或者ref实例进行通信")])])]),t._v(" "),n("p",[n("strong",[t._v("computed和watch有什么区别")])]),t._v(" "),n("p",[t._v("​\tcomputed:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("\t1. computed是计算属性，也就是计算值，更多用于计算值的场景\n\t2. computed具有缓存性，computed的值在getter执行后是会缓存的，只有在它依赖的属性值改变之后，下次获取computed的值时才会重新调用对应的getter来计算\n\t3. computed适用于计算比较耗性能的计算场景\n")])])]),n("p",[t._v("​\twatch:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("1. 更多的是观察的作用，类似于某些数据的监听回调，用于观察***props*** ***$emit***或者本组件的值，当数据变化时来执行回调进行后续操作\n2. 无缓存性，页面重新渲染时值不变化也会执行\n")])])]),n("p",[t._v("​")]),t._v(" "),n("p",[t._v("​\t小结：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("1. 当我们要进行数值计算，而且依赖于其他数据，那么把这个数据设计为computed\n2. 如果你需要在某个数据变化时做一些事情，使用watch来观察这个数据变化\n")])])]),n("p",[n("strong",[t._v("Vue是如何实现双向绑定的")])]),t._v(" "),n("p",[t._v("利用***Object.defineProperty***劫持对象的访问器，在属性值发生变化时我们可以获取变化，然后根据变化进行后续响应，在vue3.0中通过Proxy代理对象进行类似的操作")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是将要被劫持的对象")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'古天乐'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'给大家推荐一款超好玩的游戏'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'渣渣辉'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'戏我演过很多，可游戏我只玩贪玩懒月'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("；\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'来做我的兄弟'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//遍历对象，对其属性值进行劫持")]),t._v("\nObject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tObject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    enumerable"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    configurale"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newVal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当属性值发生变化时我们可以进行额外操作")]),t._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("大家好，我系")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("newVal"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newVal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndata"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'渣渣辉'")]),t._v("；\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 大家好，我系渣渣辉")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 戏我演过很多，可游戏我只玩贪玩懒月")]),t._v("\n")])])]),n("p",[n("strong",[t._v("Proxy和Object.defineProperty的优劣对比")])]),t._v(" "),n("p",[t._v("Proxy的优势如下：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Proxy可以直接监听对象而非属性")])]),t._v(" "),n("li",[n("p",[t._v("Proxy可以直接监听数组的变化")])]),t._v(" "),n("li",[n("p",[t._v("Proxy有多达13种拦截方法，不限于apply、ownKeys、deleteProperty、has等等是Object.defineProperty不具备的")])]),t._v(" "),n("li",[n("p",[t._v("Proxy返回的是一个新对象，我们可以只操作新的对象达到目的，而Object.defineProperty只能遍历对象直接修改")])]),t._v(" "),n("li",[n("p",[t._v("Proxy作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利")])])]),t._v(" "),n("p",[t._v("Object.defineProperty的优势如下：")]),t._v(" "),n("p",[t._v("1.兼容性好，支持IE9")])])}),[],!1,null,null,null);s.default=e.exports}}]);