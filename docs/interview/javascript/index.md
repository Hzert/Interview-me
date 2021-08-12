### Javascript 面试题

1. ## Javascript 的数据类型

   基本类型 （number string null undefined Boolean symbol）

   引用类型  （function  Object  Array）

   基本类型保存在栈内存

   引用类型保存在堆内存  堆内存只能按引用访问

   举例：Symbol的作用

   symbol 本质上是一种唯一的标识符，可用作对象的唯一属性名，这样其他人就不会改写或者覆盖你设置的属性值

2. ## 判断变量的类型

   typeof

   instanceof及原理

   Object.toString().call()及原理[[class]]

   举例: typeof null // 'object'

   ​		 判断数组的方法

   ```javascript
   const arr = []
   instanceof arr === Array // true
   Array.isArray(arr) // true
   Object.prototype.isPrototypeOf(arr, Array.prototype) // true
   Object.getPrototypeOf(arr) === Array.prototype // true
   Object.prototype.toString.call(arr) === '[object Array]' //true 
   ```

   ​		判断空对象的方法

   ```javascript
   // 转化为json字符串再判断
   const data = {}
   const b = (JSON.stringify(data) === "{}");
   console.log(b); // true
   
   // for in 循环判断
   const obj = {};
   const b = function() {
     for(const key in obj){
       return false;
     }
     return true;
   }
   console.log(b());
   
   // Object.getOwnPropertyNames()方法
   const data = {};
   const arr = Object.getOwnPropertyNames(data);
   console.log(arr.length == 0); // true
   
   
   // es6的Object.keys()方法
   const data = {};
   const arr = Object.keys(data);
   console.log(arr.length == 0); //true 

3. ## 数据类型转换

   ​	相等==和全等===

   判断值相等 和 类型相等的区别

   ​	强制转换和隐式转换

   ​	包装类型

4. ## 原型和原型链

   举例：描述构造函数、实例和原型之间的关系

   ​	构造函数是普通函数加了new运算符，有函数的prototype属性

   ​	实例是通过构造函数创建出来的对象

   ​	原型指的是原型对象，至于是谁的原型对象，需要靠函数的prototype属性和实例的 __proto__  属性来区别

   ​	原型链指从一个实例对象开始往上找，这个实例对象的proto属性所指向的则是这个实例对象的原型对象，如果用obj表示这个实例，则原型对象表示为obj.__proto__。同时，这个原型对象顾名思义也是一个对象，而且它也有上一级的原型对象，相对于上一级原型对象而言，它也是一个实例对象，那么它也拥有__proto__属性，它的__proto__属性也指向它的原型对象，后面也以此类推，一直到Object.prototype这个原型为止，Object.prototype为原型链的末尾点。

   

   1. 任何函数都具有一个 prototype 属性，该属性是一个对象
   2. 构造函数的 prototype 对象默认都有一个 constructor 属性，指向 prototype 对象所在函数
   3. 通过构造函数得到的实例对象内部会包含一个指向构造函数的 prototype 对象的指针 __proto__
   4. 所有实例都直接或间接继承了原型对象的成员

5. ## 闭包及优缺点

   函数变量可以保存在函数作用域内

   指有权访问另一个函数作用域中变量的函数

   **优点：**

   1. 包含函数内变量的安全，实现封装，防止变量流入其他环境发生命名冲突，造成环境污染。
   2. 在适当的时候，可以在内存中维护变量并缓存，提高执行效率。

   **缺点：**

   消耗内存：通常来说，函数的活动对象会随着上下文环境一起被销毁，但是由于闭包引用的是外部函数的活动对象，因此这个活动对象无法被销毁，因为闭包比一般函数消耗更多内存。

6. ## call/apply/bind

   call可以调用函数，call可以改变函数中this指向

   apply与call传参不一样  apply是数组，call 是string

   bind会作为一个返回值返回

7. ## DOM事件流和事件委托

   捕获、冒泡

   ```javascript
   捕获
   事件被从目标元素的所有祖先元素依次往下传递，在这个过程中，事件会被从文档根到事件目标元素之间各个继承派生的元素所捕获
   element.addEventListener(eventType, fn, useCapture)
   ```

   ```javascript
   冒泡
   当事件在某一 DOM 元素被触发时，例如用户在客户名字节点上点击鼠标，事件将跟随着该节点继承自的各个父节点冒泡穿过整个的 DOM 节点层次，直到它遇到依附有该事件类型处理器的节点。在冒泡过程中的任何时候都可以终止事件的冒泡(调用事件的 stopPropagation 方法)，如果不停止事件的传播，事件将一直通过 DOM 冒泡直至到达文档根。
   ```

   - 有些 DOM 事件是没有冒泡的，比如：blur、focus、mouseenter、mouseleave
   - scroll (滚动事件),浏览器禁止终止该事件冒泡。

   事件委托及好处

   ​	比如我们需要为一百个 li 元素注册想同的点击事件，那就要用循环遍历，注册一百个事件处理程序。在 JS 中，添加到页面上的事件处理程序数量将直接关系到页面的整体运行性能，因为需要不断的与 DOM 节点进行交互，访问 DOM 的次数越多，引起浏览器重绘与重排的次数也就越多，就会延长整个页面的交互就绪时间；同时，对象越多，内容占用就越大。如果要用事件委托，就会将所有的操作放到 JS 程序里面，与 DOM 的操作就只需要交互一次，从而提高性能。

8. ## Cookie/storage

   cookie的构成

   localStorage和sessionStorage

   举例：cookie的HTTPOnly

9. ## 数组和对象的常见方法

   Array: slice/splice/concat/filter/map/reduce

   Object: keys/assign

   举例：改变原数组的方法

   ```javascript
   // pop()删除数组最后一个元素
   // shift()删除数组第一个元素
   // push() 数组尾部添加元素
   // unshift()数组首部添加元素
   // splice()添加删除元素
       let a = [1, 2, 3, 4, 5, 6, 7];
       let item = a.splice(0, 3); // [1,2,3]
       console.log(a); // [4,5,6,7]
       // 从数组下标0开始，删除3个元素
       let item = a.splice(-1, 3); // [7]
       // 从最后一个元素开始删除3个元素，因为最后一个元素，
   // reverse() 翻转数组
   // sort() 数组排序
   默认情况下sort()方法没有传比较函数的话，默认按字母升序，如果不是元素不是字符串的话，会调用toString()方法将元素转化为字符串的Unicode(万国码)位点，然后再比较字符。
   // 字符串排列 看起来很正常
       var a = ["Banana", "Orange", "Apple", "Mango"];
       a.sort(); // ["Apple","Banana","Mango","Orange"]
       // 数字排序的时候 因为转换成Unicode字符串之后，有些数字会比较大会排在后面 这显然不是我们想要的
       var	a = [10, 1, 3, 20,25,8];
       console.log(a.sort()) // [1,10,20,25,3,8];
   // fill()填充数组
       参数:
       第一个元素(必须): 要填充数组的值
       第二个元素(可选): 填充的开始位置,默认值为0
       第三个元素(可选)：填充的结束位置，默认是为this.length
       ['a', 'b', 'c'].fill(7)
       // [7, 7, 7]
       ['a', 'b', 'c'].fill(7, 1, 2)
       // ['a', 7, 'c']	
   ```

   举例：不改变原数组的方法

   ```javascript
   // join()数组转换字符串
   // toLocaleString() 数组转字符串
   // toString() 数组转字符串
   // slice() 浅拷贝数组元素 截取
   // concat() 数组连接
   // indexOf()查找指定元素下标
   // lastIndexOf() 查找指定元素下标
   // includes() 查找数组是否包含某个元素 返回一个布尔值，表示某个数组是否包含给定的值
   array.includes(searchElement, formIndex=0)
   ```

   举例：遍历数组

   ```javascript
   // forEach 按升序为数组中含有效值的每一项执行一次回调函数。
     array.forEach(function(currentValue,index,arr), thisValue)
     关于forEach()你要知道：
       无法中途退出循环，只能用return退出本次回调，进行下一次回调。
       它总是返回 undefined值,即使你return了一个值。
     // every 检测数组所有元素是否都符合判断条件
     array.every(function(currentValue,index,arr), thisValue)
     function isBigEnough(element, index, array) {
        return (element >= 10); //数组中是否有一个元素大于 10
      }
      let result = [2, 5, 8, 1, 4].every(isBigEnough); // false
      let result = [12, 5, 8, 1, 4].every(isBigEnough); // true
   
   // some 组中的是否有满足判断条件的元素
     array.some(function(currentValue, index, arr), thisValue)
     function isBigEnough(element, index, array) {
        return (element >= 10); //数组中是否有一个元素大于 10
      }
      let result = [2, 5, 8, 1, 4].some(isBigEnough); // false
      let result = [12, 5, 8, 1, 4].some(isBigEnough); // true
   
   // filter 过滤原始数组，返回新数组
     let a = [32, 33, 16, 40];
     let result = a.filter(function (value, index, array) {
       return value >= 18; // 返回a数组中所有大于18的元素
     });
     console.log(result,a);// [32,33,40] [32,33,16,40]
   
     // map 对数组中的每个元素进行处理，返回新的数组
     let a = ['1','2','3','4'];
     let result = a.map(function (value, index, array) {
       return value + '新数组的新元素'
     });
     console.log(result, a); 
     // ["1新数组的新元素","2新数组的新元素","3新数组的新元素","4新数组的新元素"] ["1","2","3","4"]
   
   // reduce 为数组提供累加器，合并为一个值
     array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
     // 回调函数的参数
     1. total(必须)，初始值, 或者上一次调用回调返回的值
     2. currentValue(必须),数组当前元素的值
     3. index(可选), 当前元素的索引值
     4. arr(可选),数组对象本身
   
     // 数组求和 
     let sum = [0, 1, 2, 3].reduce(function (a, b) {
       return a + b;
     }, 0);
     // 6
     // 将二维数组转化为一维 将数组元素展开
     let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
       (a, b) => a.concat(b),
       []
     );
     // [0, 1, 2, 3, 4, 5]
   
   // find(), findIndex() 根据条件查找数组元素
     let new_array = arr.find(function(currentValue, index, arr), thisArg)
     let new_array = arr.findIndex(function(currentValue, index, arr), thisArg)
     // find
     let a = [1, 4, -5, 10].find((n) => n < 0); // 返回元素-5
     let b = [1, 4, -5, 10,NaN].find((n) => Object.is(NaN, n));  // 返回元素NaN
     // findIndex
     let a = [1, 4, -5, 10].findIndex((n) => n < 0); // 返回索引2
     let b = [1, 4, -5, 10,NaN].findIndex((n) => Object.is(NaN, n));  // 返回索引4
   
   // keys()  values()  entries() 遍历键名、遍历键值、遍历键名+键值
   	array.keys()
     array.values()
     array.entries()
     for (let index of ['a', 'b'].keys()) {
       console.log(index);
     }
     // 0
     // 1
   
     for (let elem of ['a', 'b'].values()) {
       console.log(elem);
     }
     // 'a'
     // 'b'
   
     for (let [index, elem] of ['a', 'b'].entries()) {
       console.log(index, elem);
     }
     // 0 "a"
     // 1 "b"
   
   ```

   **对象方法**

   Object.assign(target, ...sources)用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，它将返回目标对象。
   target:目标对象;
   sources:源对象;返回值:目标对象。
   (1)用来复制一个新对象，并不会影响原对象

   ```javascript
   let obj = { a: 1 };
   let copy = Object.assign({}, obj);
   console.log(copy);    // { a: 1 }
   ```

   (2)用来合并对象属性，将源对象的所有可枚举属性，复制到目标对象。

   ```javascript
   //object.assign(obj, obj2)  obj2是源对象，obj 是目标对象，返回目标对象
    
   let obj = { a: 1 };
   let obj2={b:2};
   
   console.log(Object.assign(obj,obj2)===obj);  //true，返回目标对象
   console.log(obj);       //{a:1,b:2} obj的值已被更改
   
   ```

   (3)如果目标对象和源对象中有相同的键，则属性将被源对象的属性覆盖，后面的源属性会覆盖之前的相同键的源属性。

   ```
   let obj = { a: 1 };
   let obj2 = {a:5,b:2};
   let obj3 = {b:1,d:0};
   Object.assign(obj,obj2,obj3);
   
   console.log(obj);       // {a: 5, b: 1, d: 0}
   
   ```

   (4)当assign只有一个对象时，则直接返回这个对象，不做任何操作；

   ```
   let obj = { a: 1 }
   Object.assign(obj);
   console.log(obj);        //{a:1}
   
   ```

   (5)Object.assign()方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。

   ```
   let obj1 = { a: 0 , b: { c: 0}};
   let obj2 = Object.assign({}, obj1);
   obj1.b.c=5;
   
   console.log(obj2)       //{a:0,b:{c:5}};
   
   ```

   （6）给当前的对象添加新的属性

   ```
   const a = {};
   Object.assign(a, { x: 3 });  // a => x:3
   ```

   ### Object.keys()

   Object.keys()方法返回一个由一个给定对象的自身可枚举属性组成的数组，数组的属性的排列顺序和使用for..in循环遍历该对象时返回的顺序一致两者的主要区别是 一个 for-in循环还会枚举其原型链上的属性

   Object.keys(obj)

   参数

   obj:要返回其枚举自身属性的对象。

   返回值:一个表示给定对象的所有可枚举属性的字符串数组。

   1）数组Array对象（返回索引值）

   ```
   let arr=[1,2,3];            
   Object.keys(arr)         //  ["0", "1", "2”]
   
   ```

   (2)object对象(返回key值)

   ```
   let obj = { foo: "bar", baz: 42 };
   Object.keys(obj)        //  ["foo", "baz”]
   
   ```

   (3)类数组，对象

   ```
   let obj = { 0 : "a", 1 : "b", 2 : "c”};
   Object.keys(obj)       // ["0", "1", "2"]
   
   ```

   (4)类数组对象 随机key排序

   ```
   let Obj = { 100: 'a’, 2: 'b’,7: 'c’ };
   console.log(Object.keys(Obj));     // ['2', '7', '100’]. 返回从小到大排序后的结果
   
   ```

   ### Object.values()

   Object.value()方法返回一个给定对象自己的所有可枚举属性值的数组，值的顺序与使用for..in循环相同，返回的对象的value值，与Object.key()相反

   例： （1）正常对象

   ```
   let obj={a:1,b:2,c:3};
   console.log(Object.values(obj))         //  [1, 2, 3]
   
   ```

   （2）类数组对象

   ```
   let obj ={0:'a',1:'b',2:'c'};
   console.log(Object.values(obj)).       //  a,b,c
   
   ```

   (3)  key值为无序number

   ```
   let obj={100:'a',10:'b',1:'1'};
   console.log(Object.values(obj)).   // ["1", "b", "a"]
   
   ```

   ### Object.entries()

   Object.entries()返回一个数组，其元素是与直接在object上找到的可枚举属性键值对相对应的数组。属性的顺序与通过手动循环对象的属性值所给出的顺序相同。

   例： （1）当键值为正常字符时，返回的键的值为字符串

   ```
   let obj1 = {a:1,b:2};
   let obj2 = Object.entries(obj1);
   console.log(obj2) ;       //  [ ["a":1],["b":2] ] 
   
   ```

   （2）当键值为数字时，返回的键的值也是字符串

   ```
   let obj = { 0: 'a', 1: 'b', 2: 'c' };
   console.log(Object.entries(obj));     // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ] 
   
   ```

   （3）当键值的数字错乱无序时，它会将其排序后返回

   ```
   let anObj = { 100: 'a', 2: 'b', 9: 'c' };
   console.log(Object.entries(anObj));   //[["2","b"],["9","c"],["100","a"]]
   
   ```

   （4）展开对象

   ```
   const object1 = {
    a: 'somestring',
    b: 42
   };
   
   for (let [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
   }
   //     "a: somestring"
   //     "b: 42"
   ```

10.  ## new内部做了什么

    **new的基本作用是用于构造函数生产对象**

    1. 隐式创建this对象；在函数体最前面隐式的加上this = {}
    2. 执行this.xxx = xxx
    3. 隐式的返回this对象

    总结梳理一下new的内部原理：

    1. 在函数体最前头隐式创建this对象；相当于 let this = {}
    2. 给this对象身上添加__proto__属性指向构造函数的原型prototype
    3. 执行构造函数中的每一条语句（注意构造函数执行时，里面this指向绑定为新对象哦）
    4. 判断构造函数本身是否有显示的return数据：如果没有显示return数据，那么返回隐式的this对象；如果有显示return数据，判断return的数据的是原始值还是引用值，如果是原始值，返回结果还是隐式的this对象；如果是引用值，返回的就是显示返回的东西

11. ## 防抖和节流

12. ## requestAnimationFrame

    优势

13. ## this指向

14. ## 作用域链

15. ## let/const/var的区别

    ## let和const

    1. **不会变量提升**，只存在于声明的内部环境中
    2. 存在暂时性死区，如果要调用和let/const相关的函数，必须**先声明再调用**，否则会报错，但无论是否声明，相关变量已经存在于该内部环境中
    3. const不可以重复声明
    4. 不会挂载到顶层(window)之下
    5. 块级作用域

    > const在声明后需要立刻赋值
    >
    > let可以在声明后,再赋值

    ## var的怪异

    1. var声明后在其内部环境，和全局作用域都可以被访问
    2. 捕获变量会发生变化

    ```
    for(var=0;i<10;++i){
        settimeout(function(){
            consloe.log(i)
        },1000)
    };//打印全部为10
    ```

16. ## ES6异步编程：Promise和async await

    promise简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。

    从语法上看，promise是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

    `Promise`对象有以下两个特点： 1）对象的状态不受外界影响，2）一旦状态改变，就不会再变，任何时候都可以得到这个结果

    内部状态: 进行中pending 已成功fulfilled  已失败 rejected

    Promise.race和Promise.all

17. ## 箭头函数与普通函数的区别

    this指向不一样

    普通函数谁调用this指向谁

    箭头函数是在哪里定义this指向谁

18. ## Javascript的运行机制

    单线程、解释性语言

    事件循环

    宏任务/微任务

19. ## 实现继承的几种方式

    1. 利用原型链
    2. 利用构造函数  改变父类this 继承原型对象
    3. 前两种的组合式
    4. 寄生组合式
    5. class  extends  constructor  super

20. ## 垃圾回收

    在变量进入执行环境时，会添加一个进入标记，当变量离开时，会添加一个离开标记，标记清除是 GC 在运行时会给所有变量加上标记，然后去掉那些还在环境中或还被环境中变量引用的变量，清除剩下还被标记的所有变量。

    

### Javascript 手写代码面试题

1. 防抖和节流

2. 深拷贝和浅拷贝

   **创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝**。如果这个`对象中的属性`是`基本类型`，拷贝的就是基本类型的值，如果属性是`引用类型`，拷贝的就是`内存地址` ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。

   **浅拷贝**

   ```javascript
   1. Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
   2. 展开操作符 ...
   3. Array.prototype.slice()
   ```

   **深拷贝**

   ```javascript
   1. JSON.parse(JSON.stringify(object)) // undefined symbol new Date() 正则 函数 不能深拷贝
   2.function clone(target) {
       if (typeof target === 'object') {
           let cloneTarget = Array.isArray(target) ? [] : {};
           for (const key in target) {
               cloneTarget[key] = clone(target[key]);
           }
           return cloneTarget;
       } else {
           return target;
       }
   };
   3. loadsh  
   const targetObj = _.cloneDeep(originObj)
   4. 首先明确需求，支持的数据类型, 所有的原始类型，普通对象，数组，不支持原型链上属性的拷贝
       deepClone(origin, target) {
         var target = target || {},
           toStr = Object.prototype.toString,
           arrStr = "[object Array]";
         for (var prop in origin) {
           if (origin.hasOwnProperty(prop)) {
             if (typeof (origin[prop] !== null && origin[prop]) === "object") { //判断是不是对象
               if (toStr.call(origin[prop]) === arrStr) { // 判断是不是数组
                 target[prop] = [];
               } else {
                 target[prop] = {};
               }
               deepClone(origin[prop], target[prop]); // 递归
             } else { // 原始值走这里
               target[prop] = origin[prop];
             }
           }
         }
         return target;
       }
   ```

   

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

   方法二：两层for循环+splice

   ```javascript
   const arr = [1,1,'1',17,true,true,false,false,'true','a',{},{}];
   // => [1,'1',17,true,false,'true','a',{},{}]
   
   const unique = arr => {
     let len = arr.length;
     for(let i = 0; i < len; i++) {
       for(let j = i + 1; j < len; j++) {
         if (arr[i] === arr[j]){
           arr.splice(j, 1);
           len--;
           j--;
         }
       }
     }
     return arr;
   }
   ```

   方法三：利用indexOf

   ```javascript
   const arr = [1,1,'1',17,true,true,false,false,'true','a',{},{}];
   // => [1,'1',17,true,false,'true','a',{},{}]
   
   const unique2 = arr => {
     const res = [];
     for(let i = 0; i < arr.length; i++) {
       if (res.indexOf(arr[i]) === -1) {
         res.push(arr[i]);
       }
     }
     return res;
   } 
   ```

   方法四： 利用includes

   ```javascript
   const arr = [1,1,'1',17,true,true,false,false,'true','a',{},{}];
   // => [1,'1',17,true,false,'true','a',{},{}]
   const unique3 = arr => {
     const res = [];
     for (let i = 0; i < arr.length; i++) {
       if(!res.includes(arr[i])){
         res.push(arr[i]);
       }
     }
     return res;
   }
   ```

   方法五：利用filter

   ```javascript
   const arr = [1,1,'1',17,true,true,false,false,'true','a',{},{}];
   // => [1,'1',17,true,false,'true','a',{},{}]
   const unique4 = arr => {
     return arr.filter((item, index) => {
       return arr.indexOf(item) === index;
     })
   }
   ```

   方法六：利用Map

   ```javascript
   const arr = [1,1,'1',17,true,true,false,false,'true','a',{},{}];
   // => [1,'1',17,true,false,'true','a',{},{}]
   const unique5 = arr => {
     const map = new Map();
     const res = [];
     for(let i = 0; i < arr.length; i++) {
       if (!map.has(arr[i]){
       	map.set(arr[i], true);
       	res.push(arr[i]);
       }
     }
   	return res;
   }
   ```

   

   数组对象去重： 对象访问属性的方法

   ```javascript
   const filterArray = arr => {
     const obj = {};
     return arr.reduce((item, next) => {
       obj[next.name] ? '' : obj[next.name] = true && item.push(next);
       // name是去重对象里的属性
       return item;
     },[]);
   }
   ```

   

6. 手写promise.all 和 promise.race

7. 模拟实现new

8. 实现call/apply/bind

   ```javascript
   Funtion.prototype.call = function(context = window, ...args) {
     if (typeof this !== 'function') {
       throw new TypeError('Type Error');
     }
     const fn = Symbol('fn');
     context[fn] = this;
     
     const res = context[fn](...args);
     delete context[fn];
     return res;
   }
   ```

   

   ```javascript
   Function.prototype.apply = function(context = window, args) {
     if (typeof this !== 'function') {
       throw new TypeError('Type Error');
     }
     const fn = Symbol('fn');
     context[fn] = this;
     
     const res = context[fn](...args);
     delete context[fn];
     return res;
   }
   ```

   ```javascript
   Function.prototype.bind = function(context = window, ...args) {
     if (typeof this !== 'function') {
       throw new TypeError('Type Error');
     }
     // 保存this的值
     var self = this;
     return function F(){
       // 考虑new的情况
       if(this instanceof F) {
         return new self(...args, ...arguments)
       }
       return self.apply(context, [...args, ...arguments])
     }
   }
   ```

   

9. 模拟Object.create()的实现

10. 千分位分隔符

11. 实现三角形

12. 实现三栏布局/双栏布局