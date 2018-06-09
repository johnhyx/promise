//promise 是什么
//promise对象用作异步计算,表示一个现在、将来或用永不可能可用的值；
//可以将异步操作队列华，按照期望的顺序执行，返回预期的结果；
//可以在对象之间传递和操作promie，帮助我们处理队列；

//w为什么会有promise
//1.js中存在大量异步操作（javascript是为检查表单而生成，创造他的首要目的就是操作DOM）
//利用异步操作防止界面冻结；（同步服务，异步服务，异步服务会带来更好的体验）
//异步的常见语法:时间事件与响应：

// document.getElementById('start').addEventListener('click',start, false);
//  function start() {
      //响应事件，以及相关操作
//  }
//jQuery用‘.on()’也属于事件监听；

//另一个就是回调函数(先调用一个外部函数，当外部函数执行后再执行回调函数)；
//例子1：
// $.ajax('http://baidu.com', {
//     success: function () {
//         //这里就是回调函数
//     }
// });
//
//例子2:
// 或者jQuery利用在页面加载完毕后回调
// $(function () {
//    回调函数
// });

//在node出现之后，对异步的依赖进一步加剧：
//无阻塞高并发，是node的招牌
//异步操作是其保障
//大量操作依赖回调函数


//爆发异步回调的问题：
//操作不慎，会陷入回调地狱，嵌套成熟层数很深，难以维护
//无法正常使用return和throw
//无法正常检索堆栈信息
//多个回调之间难以建立联系。


//promise产生
new Promise(
    /*执行器*/
    function () {
        //一段好事很长的异步操作
        resolve(); //数据处理完成
        reject(); //数据处理出错
    }
).then(function () {
    //成功，下一步
},function () {
    //失败，做相应处理
});

//将一个执行时间很长的异步操作放在执行器中，当成功之后就执行resolve()方法，失败则执行reject()方法；

//promise是一个代理对象，它和原来要进行的操作并无关系。
//通过一个回调，避免更多的回调
//promise三个状态:
// pending初始化状态
// fulfilled操作成功(调用了resolve)
// reject操作失败（调用了reject）

//Promise状态发生改变，就会触发.then()里的响应函数来做处理后续的步骤；
//promise的状态一经改变，就不会再变

//promise的实例一经创建，执行器就会立即执行
//声明实例，生成一个执行器，然后生成一个任务队列，灭一个then就会返回一个新的promise实例，
// 当执行器执行完毕，开始去判断状态，把状态改变为成功或者是失败，接着就是去调用then里面的对应处理函数
//然后一个then处理完了之后，就会接着一个then，一直到所有的都处理完；


//实例1：
console.log('here we go');
new Promise( resolve => {
    setTimeout( () => {
        resolve('hello');
},2000);
}).then( value => {
    console.log(value + 'world');
});
//结果先输出 here we go 在过两秒输出 hello world

//实例2：
console.log('here we go');
new Promise( resolve => {
    setTimeout( () => {
    resolve('hello');
},2000);
}).then( value => {
    console.log(value);
    return new Promise( resolve => {
        setTimeout( () => {
            resolve('world')
},2000);
    })
}).then({
    console.log(value + ' world');
});
//结果先输出here we go 再过两秒输出 hello，再过两秒输出 world world

//连续多个回调函数，promise才会有比较大的作用


//在一个promise完成之后，我们再.then()会怎样；
//实例3：

console.log('start');
 let Promise = new Promise(resolve => {
     setTimeout(() => {
         console.log('the promise fulfilled');
         resolve('hello world');
},1000);
 });

setTimeout(() => {
    promise.then( value => {
        console.log(value);
});
}, 3000);

//先输出start ，过一秒输出 the promise fufilled,再过2秒输出hello world


//也就是说我们在任意一个地方生成一个promise对象之后，我们操作如果是一个队列式的存在，我们可以把它作为一个变量在其他地方调用。
//不管前面的promise是完成了还是没有完成，队列都会按照固定的事件顺序去执行，如果没有完成
//就会按照顺序继续去完成，如果已完成，后面追加的then，也可以调用前面的promise返回的值；



