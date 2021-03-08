const EventEmitter = require('events');

//Create Class
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

//Event listener
myEmitter.on('event', () => console.log('Evenet FIred!'));

//Init event
myEmitter.emit('event');