var events = require('events');
var emitter = new events.EventEmitter();

//once 只触发一次
emitter.once('someEvent', function(arg1, arg2) {
    console.log('listener1', arg1, arg2);
});

emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener2', arg1, arg2);
});

emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener3', arg1, arg2);
});

emitter.emit('someEvent', 'arg1 - 1', 'arg2 - 2');
emitter.emit('someEvent', 'arg1 - 1', 'arg2 - 2');
console.log('count', emitter.listenerCount('someEvent'));

