const realtime = new Ably.Realtime({ key: "bboIFQ.58-WjQ:NC-apeYhS3cxv7wHV3wh0FIzk4_wzEV2r63ixNkXpo8" });
const stageChannel = realtime.channels.get("stage-channel");

var events = require('events');
var stageEmitter = new events.EventEmitter();

function castStage(choice) {
  stageChannel.publish("vote", choice, (err) => {
    console.log(choice);
    console.log(err);
  });
}