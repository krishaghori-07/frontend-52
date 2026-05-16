var event = require('events');
var em = new event.EventEmitter();

//create event emitter 
// create 3 function that will run in case of emergency 
em.addListener("emergency", function (email) {
    console.log("I have send email to " + email);
});

em.on("emergency", function (phone) {
    console.log("I have send SMS on " + phone);
});

em.once("emergency", function (phone) {
    console.log("Informed police .....");
});


//use function when there is emergency event 
em.emit("emergency","abc");
em.emit("emergency","xyz");