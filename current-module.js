const realtime = new Ably.Realtime({ key: "bboIFQ.58-WjQ:NC-apeYhS3cxv7wHV3wh0FIzk4_wzEV2r63ixNkXpo8" });

// Channels
const stageChannel = realtime.channels.get("stage-channel");
const myVotingChannel1 = realtime.channels.get("voting-channel1");
const myVotingChannel2 = realtime.channels.get("voting-channel2");
const myVotingChannel3a = realtime.channels.get("voting-channel3a");
const myVotingChannel3b = realtime.channels.get("voting-channel3b");

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

let moduleZero = "waiting-room",
    moduleOne = "module1",
    moduleTwo = "module2",
    moduleThreeA = "module3a";
    moduleThreeB = "module3b";

// let currentHTML = require('./modules/interface/module1.html');

let currentModule = "";

stageChannel.subscribe("vote", (msg) => {
  switch (msg.data) {
    case "0":
    currentModule = moduleZero
    $("#current-module").load('./modules/interface/waiting-room.html');
    break;
    case "1":
    currentModule = moduleOne
    $("#current-module").load('./modules/interface/module1.html');
    break;
    case "2":
    currentModule = moduleTwo
    $("#current-module").load('./modules/interface/module2.html');
    break;
    case "3a":
    currentModule = moduleThreeA
    $("#current-module").load('./modules/interface/module3a.html');
    break;
    case "3b":
    currentModule = moduleThreeB
    $("#current-module").load('./modules/interface/module3b.html');
    break;
  }
  console.log(currentModule);
  console.log(currentHTML);
});