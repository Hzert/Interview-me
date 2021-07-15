# 面试题
## 前言
就是收集的一些面试题 有些是自己遇到过的
## cookies，sessionStorage和localStorage 的区别？
`sessionStorage` 用于本地存储一个会话（session）中的数据，这些数据只有在同一个会 话中的页面才能访问并且当会话结束后数据也随之销毁。因此 sessionStorage 不是一种 持久化的本地存储，仅仅是会话级别的存储。
而 `localStorage` 用于持久化的本地存储，除 非主动删除数据，否则数据是永远不会过期的。 
`web storage `和 `cookie `的区别 Web Storage 的概念和 cookie 相似，区别是它是为了更大容量存储设计的。Cookie 的 大小是受限的，并且每次你请求一个新的页面的时候 Cookie 都会被发送过去，这样无形 中浪费了带宽，另外 cookie 还需要指定作用域，不可以跨域调用。 除此之外，Web Storage 拥有 `setItem,getItem,removeItem,clear `等方法，不像 cookie 需要前端开发者自己封装 `setCookie，getCookie`。但是 Cookie 也是不可以或缺的： Cookie 的作用是与服务器进行交互，作为 `HTTP 规范`的一部分而存在 ，而 Web Storage 仅仅是为了在本地`“存储”`数据而生。`


## 深拷贝和浅拷贝的实现原理，以及为什么要深拷贝?
`B复制A，A变，B变，浅拷贝。`
`B复制A，A变，B不变，深拷贝`
引用数据类型：object，list，function

基本数据类型`名称和值`都存储在`栈内存`当中都有一个`单独的内存空间`，当进行赋值时会开辟单独的内存空间
```
  let a = 1;
  let b;
  b = a;
  a = 2;
  console.log(a);   // 2
  console.log(b);   // 1
```
引用数据类型 `名称`存储在栈内存, `值`存储在堆内存, `栈内存的名称`会提供一个`引用的地址`指向`堆内存的值`,
当`b=a`进行拷贝时, 赋值的其实是`引用的地址`，而并非是堆内存的值
```
  let a = [1,2,3];
  b = a;
  a.splice(0,1);
  console.log(a); //[2,3]
  console.log(b); //[2,3]
```
当对`a`里的值进行修改之后， `b`也会进行变化,因为引用的地址没有变，这就是`浅拷贝`

如何实现深拷贝？
1.通过`JSON.parse()和JSON.stringify()`
```
  let a = [1,2,3,4];
  let b;
  b = JSON.parse(JSON.stringify(a))
  a.splice(0,1);
  console.log(a);  // [2,3,4]
  console.log(b);  // [1,2,3,4]
```
对于不是很复杂的引用数据类型可以用`JSON.parse(), JSON.stringify()`来处理深拷贝
但是缺点非常明显，无法copy`函数`，`undefined`和`symbol`，同样也无法解决循环引用的对象

2.递归拷贝
```
// 定义一个深拷贝函数  接收目标target参数
  function deepClone(target) {
    // 定义一个变量
    let result;
    // 如果当前需要深拷贝的是一个对象的话
    if (typeof target === 'object') {
    // 如果是一个数组的话
        if (Array.isArray(target)) {
            result = []; // 将result赋值为一个数组，并且执行遍历
            for (let i in target) {
                // 递归克隆数组中的每一项
                result.push(deepClone(target[i]))
            }
         // 判断如果当前的值是null的话；直接赋值为null
        } else if(target===null) {
            result = null;
         // 判断如果当前的值是一个RegExp对象的话，直接赋值    
        } else if(target.constructor===RegExp){
            result = target;
        }else {
         // 否则是普通对象，直接for in循环，递归赋值对象的所有值
            result = {};
            for (let i in target) {
                result[i] = deepClone(target[i]);
            }
        }
     // 如果不是对象的话，就是基本数据类型，那么直接赋值
    } else {
        result = target;
    }
     // 返回最终结果
    return result;
  }
```

## 谈谈你对闭包的理解（谈到闭包的话，一般会顺势问到防抖和节流。有些面试官会直接问，有些面试官会说一个试用场景，让你回答用什么方法解决。）
`闭包`就是函数执行产生一个`私有的作用域`，在这个作用域中的`私有变量`和`外界互不干扰`，而且作用域`不销毁`，这些`私`有变量存储的值也都保存下来了，所有整体来说`闭包就是为了保护和保存变量`。
应用场景：
1.`循环事件绑定，`
2.`单例模式管理代码`
```
let  xxxRender = (function () {
  return {
    init: function() {
    }
  }
})
```
3.函数柯里化
```
Function.prototype.bind = function bind(context, ...arg) {
  return () => {
    fn.call(context, ...arg);
  }
}
```
如何输出 5 -> 0 -> 1 -> 2 -> 3 -> 4
```
  for (var i = 0; i < 5; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000);
    })(i);
  }
  console.log(new Date, i);
```



