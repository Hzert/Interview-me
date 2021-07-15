### Javascript 面试题

1. Javascript 的数据类型

   基本类型 （number string null undefined Boolean symbol）

   引用类型

   举例：Symbol的作用

2. 判断变量的类型

   typeof

   instanceof及原理

   Object.toString().call()及原理[[class]]

   举例: typeof null // 'object'

   ​		 判断数组的方法

   ​		判断控对象的方法

3. 数据类型转换

   ​	相等==和全等===

   ​	强制转换和隐式转换

   ​	包装类型

4. 原型和原型链

   举例：描述构造函数、实例和原型之间的关系

5. 闭包及优缺点

   优缺点

6. call/apply/bind

7. DOM事件流和事件委托

   捕获、冒泡

   事件委托及好处

8. Cookie/storage

   cookie的构成

   localStorage和sessionStorage

   举例：cookie的HTTPOnly

9. 数组和对象的常见方法

   Array: slice/splice/concat/filter/map/reduce

   Object: keys/assign

   举例：改变原数组的方法

10. new内部做了什么

11. 防抖和节流

12. requestAnimationFrame

    优势

13. this指向

14. 作用域链

15. let/const/var的区别

16. ES6异步编程：Promise和async await

    内部状态

    Promise.race和Promise.all

17. 箭头函数

18. Javascript的运行机制

    单线程、解释性语言

    事件循环

    宏任务/微任务

19. 实现继承的几种方式

20. 垃圾回收



### Javascript 手写代码面试题

1. 防抖和节流

2. 深拷贝

3. 数组扁平化

   数组扁平化是指将一个多维数组变为一个一维数组

   ```javascript
   const arr = [1,[2,[3,[4,5]]],6,7] ===> [1,2,3,4,5,6,7]
   ```

   方法一： 使用falt()

   ```javascript
   const arr = [1,[2,[3,[4,5]]],6,7];
   // => [1,2,3,4,5,6,7]
   const res = arr.flat(Infinity);
   ```

   方法二：使用reduce

   ```javascript
   const arr = [1,[2,[3,[4,5]]],6,7];
   // => [1,2,3,4,5,6,7]
   const flatten = arr => {
     return arr.reduce((pre, cur) => {
       return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
     }, [])
   }
   const res = flatten(arr);
   ```

   方法三：函数递归

   ```javascript
   const arr = [1,[2,[3,[4,5]]],6,7];
   // => [1,2,3,4,5,6,7]
   const res = [];
   const fn = arr => {
     for(let i = 0; i < arr.length; i++) {
       if(Array.isArray(arr[i])) {
         fn(arr[i]);
       } else {
         res.push(arr[i]);
       }
     }
   }
   fn(arr);
   ```

   

4. 单例模式

5. 数组去重

   ```javascript
   const arr = [1,1,'1',17,true,true,false,false,'true','a',{},{}];
   // => [1,'1',17,true,false,'true','a',{},{}]
   ```

   方法一：利用Set

   ```javascript
   const arr = [1,1,'1',17,true,true,false,false,'true','a',{},{}];
   // => [1,'1',17,true,false,'true','a',{},{}]
   const res = Array.from(new Set(arr));
   ```

   

6. 手写promise.all 和 promise.race

7. 模拟实现new

8. 实现call/apply/bind

9. 模拟Object.create()的实现

10. 千分位分隔符

11. 实现三角形

12. 实现三栏布局/双栏布局