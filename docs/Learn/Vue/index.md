Vue

**对Vue生命周期的理解** 

​	**生命周期是什么**

​	Vue实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模版、挂载Dom -> 渲染、更新->渲染、卸载等一系列过程，这就是Vue的生命周期

​	**各个生命周期的作用**

​		beforeCreate：组件实例被创建之初，组件属性生效之前

​		created: 组件实例已经完全创建，属性也绑定，但真实的dom还没有生成，$el还不能用

​		beforeMount: 在挂载开始之前被调用：相关的render函数首次被调用

​		mounted:  el被新创建的vm.$el替换，并挂载到实例上去之后调用该钩子

​		beforeUpdate: 组件数据更新之前调用，发生在虚拟DOM打补丁之前

​		update: 组件数据更新之后

​		activited: keep-alive专属，组件被激活时调用

​		deadctivated: keep-alive专属，组件被销毁时调用

​		 beforeDestory: 组件销毁前调用

​	 	destory: 组件销毁后调用

​	**异步请求适合在哪个生命周期调用**

​		官方实例的异步请求时在***mounted***生命周期中调用，而实际上也可以在***created***生命周期调用



**Vue组件如何通信**

 1. props  $emit + v-on: 通过props将数据自上而下传递，而通过$emit和v-on来向上传递信息

 2. EventBus: 通过EventBus进行信息的发布与订阅

 3. vuex: 全局数据管理库，可以通过vuex管理全局的数据流

 4. provide  inject: 以允许一个祖先组件向其他所有子孙后代注入一个依赖，不论组件层次有多深，并在其上下游关系成立时间里始终生效，这成为了跨组件通信的基础

    还有一些用solt插槽或者ref实例进行通信

    

    

    

**computed和watch有什么区别**

​	computed:

		1. computed是计算属性，也就是计算值，更多用于计算值的场景
  		2. computed具有缓存性，computed的值在getter执行后是会缓存的，只有在它依赖的属性值改变之后，下次获取computed的值时才会重新调用对应的getter来计算
  		3. computed适用于计算比较耗性能的计算场景



​	watch:

	1. 更多的是观察的作用，类似于某些数据的监听回调，用于观察***props*** ***$emit***或者本组件的值，当数据变化时来执行回调进行后续操作
 	2. 无缓存性，页面重新渲染时值不变化也会执行

​	

​	小结：

	1. 当我们要进行数值计算，而且依赖于其他数据，那么把这个数据设计为computed
 	2. 如果你需要在某个数据变化时做一些事情，使用watch来观察这个数据变化



**Vue是如何实现双向绑定的**

利用***Object.defineProperty***劫持对象的访问器，在属性值发生变化时我们可以获取变化，然后根据变化进行后续响应，在vue3.0中通过Proxy代理对象进行类似的操作

```javascript
// 这是将要被劫持的对象
const data = {
  name: '',
}

function say(name){
  if(name === '古天乐'){
    console.log('给大家推荐一款超好玩的游戏');
  } else if (name === '渣渣辉'){
    console.log('戏我演过很多，可游戏我只玩贪玩懒月')；
  } else {
    console.log('来做我的兄弟');
  }
}

//遍历对象，对其属性值进行劫持
Object.keys(data).forEach(function(key) {
	Object.defineProperty(data, key, {
    enumerable: true,
    configurale: true,
    get: function() {
      console.log('get');
    },
    set: function(newVal) {
      // 当属性值发生变化时我们可以进行额外操作
      console.log(`大家好，我系${newVal}`);
      say(newVal);
    }
  })
})

data.name = '渣渣辉'；
// 大家好，我系渣渣辉
// 戏我演过很多，可游戏我只玩贪玩懒月
```



**Proxy和Object.defineProperty的优劣对比**

Proxy的优势如下：

1. Proxy可以直接监听对象而非属性

2. Proxy可以直接监听数组的变化

3. Proxy有多达13种拦截方法，不限于apply、ownKeys、deleteProperty、has等等是Object.defineProperty不具备的

4. Proxy返回的是一个新对象，我们可以只操作新的对象达到目的，而Object.defineProperty只能遍历对象直接修改

5. Proxy作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利

   

Object.defineProperty的优势如下：

1.兼容性好，支持IE9
