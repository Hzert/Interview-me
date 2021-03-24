## CSS
写完上一篇文章[想学Node.js，stream先有必要搞清楚](https://juejin.im/post/5d25ce36f265da1ba84ab97a)
留下了悬念，`stream`对象数据流转的具体内容是什么？本篇文章将为大家进行深入讲解。
## Buffer探究
看一段之前使用`stream`操作文件的例子：
```JavaScript
var fileName = path.resolve(__dirname, 'data.txt');
var stream=fs.createReadStream(fileName);
console.log('stream内容',stream);
stream.on('data',function(chunk){
console.log(chunk instanceof Buffer)
console.log(chunk);
})
```
