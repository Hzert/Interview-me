# 面试题
## 前言
就是收集的一些面试题 有些是自己遇到过的
## cookies，sessionStorage和localStorage 的区别？
`sessionStorage` 用于本地存储一个会话（session）中的数据，这些数据只有在同一个会 话中的页面才能访问并且当会话结束后数据也随之销毁。因此 sessionStorage 不是一种 持久化的本地存储，仅仅是会话级别的存储。
而 `localStorage` 用于持久化的本地存储，除 非主动删除数据，否则数据是永远不会过期的。 
`web storage `和 `cookie `的区别 Web Storage 的概念和 cookie 相似，区别是它是为了更大容量存储设计的。Cookie 的 大小是受限的，并且每次你请求一个新的页面的时候 Cookie 都会被发送过去，这样无形 中浪费了带宽，另外 cookie 还需要指定作用域，不可以跨域调用。 除此之外，Web Storage 拥有 `setItem,getItem,removeItem,clear `等方法，不像 cookie 需要前端开发者自己封装 `setCookie，getCookie`。但是 Cookie 也是不可以或缺的： Cookie 的作用是与服务器进行交互，作为 `HTTP 规范`的一部分而存在 ，而 Web Storage 仅仅是为了在本地`“存储”`数据而生。`
