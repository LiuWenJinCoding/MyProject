var events = require('events');
var eventEmitter = new events.EventEmitter();

//事件处理程序
var connectHandler = function connected() {
    console.log('connected');
    eventEmitter.emit('data_received');
}

//绑定事件
eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_received', function() {
    console.log('get data');
});

//触发事件
eventEmitter.emit('connection');

console.log('over !');