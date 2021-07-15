## 3333333redux

 状态容器，保持程序行为的一致性且易于测试

安装redux

​	``` yarn add redux``` 

### reducer

```javascript
const array1 = [1,2,3,4];
const reducer = (accumulatter, currentValue) => accumulatter + currentValue
```

``` javascript
// 1+2+3+4
console.log(array1.reduce(reducer, 5));
```

#### compose  合成

``` javascript
function compose(...funcs) {
	if (funcs.length === 0) {
		return (arg) => arg;
	}
	if (funcs.length === 1) {
		return funcs[0];
	}
	return funcs.reduce((a,b) => (...args) => a(b(...args));)
}
```



reducer 就是一个纯函数，接收旧的state, action，返回新的state

```javascript
(previousState, action) => newState
```

永远不要在reducer里做这些操作

1. 修改传入参数
2. 执行有副作用的操作，如API请求和路由跳转
3. 调用非函数，如Date.now()



```javascript
state ===> dispatch(action) ===>  (previousState,action) ===> Reducers
===> (newState) ===> Store ===> state
```

##### redux上手

1. 需要一个store来存储数据

2. store里的reducer初始化state并定义state修改规则
3. 通过dispatch 一个action来提交对数据的修改
4. action提交到reducer函数里，根据传入的action的type, 来返回新的state



检查点

1. createStore创建store
2. reducer初始化、修改状态函数
3. getState获取状态值
4. dispatch 提交更新
5. subscribe变更订阅

### redux扩展

####  核心实现

· 存储状态state

. 获取状态getState

. 更新状态dispatch

. 变更订阅subscribe



### 异步

redux 默认只支持同步，实现异步，网络请求，延迟需要中间件支持，比如redux-thunk 和redux-logger



applyMiddleware 