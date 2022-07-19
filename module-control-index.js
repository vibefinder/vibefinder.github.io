const realtime = new Ably.Realtime({ key: "" });
const stageChannel = realtime.channels.get("stage-channel");

var events = require('events');
var stageEmitter = new events.EventEmitter();

function castStage(choice) {
  stageChannel.publish("vote", choice, (err) => {
    console.log(choice);
    console.log(err);
  });
}