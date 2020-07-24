var events = require('events');
const { EventEmitter } = require('events');
var emitter = new events.EventEmitter();

//监听器1
var listener1 = function listener1() {
    console.log('监听器listener1 执行。');
}

var listener2 = function listener2() {
    console.log('监听器 listener2执行。');
}

emitter.addListener('connection', listener1);

var eventListeners = emitter.listenerCount('connection');
console.log(eventListeners + ' 个监听器监听连接事件');

emitter.emit('connection');

//移除绑定的listeners
emitter.removeListener('connection', listener1);
console.log('listener1 不再受监听');

emitter.emit('connection');
eventListeners = emitter.listenerCount('connection');
console.log(eventListeners + ' 个监听器监听连接事件');

emitter.emit('error');

