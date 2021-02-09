const EventEmitter = require('events')

class MyEventEmitter extends EventEmitter { }

const event = new MyEventEmitter()

event.on('play', data => {
    console.log(data);
})

event.emit('play', 'text')      // text