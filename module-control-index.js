const realtime = new Ably.Realtime({ key: "IyYMzQ.7zcd_g:IAky2PXxzdYDmalV2z15t0tVkjP-p-8JWuQwF0BUwiQ" });
const stageChannel = realtime.channels.get("stage-channel");

var events = require('events');
var stageEmitter = new events.EventEmitter();

function castStage(choice) {
  stageChannel.publish("vote", choice, (err) => {
    console.log(choice);
    console.log(err);
  });
}