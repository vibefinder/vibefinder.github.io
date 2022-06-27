const realtime = new Ably.Realtime({ key: "bboIFQ.58-WjQ:NC-apeYhS3cxv7wHV3wh0FIzk4_wzEV2r63ixNkXpo8" });

// Channels
const stageChannel = realtime.channels.get("stage-channel");
const myVotingChannel1 = realtime.channels.get("voting-channel1");
const myVotingChannel2 = realtime.channels.get("voting-channel2");
const myVotingChannel3a = realtime.channels.get("voting-channel3a");
const myVotingChannel3b = realtime.channels.get("voting-channel3b");
const myVotingChannel2g = realtime.channels.get("voting-channel2g");
const myVotingChannel2d = realtime.channels.get("voting-channel2d");
const myVotingChannel2e = realtime.channels.get("voting-channel2e");
const myVotingChannel2f = realtime.channels.get("voting-channel2f");
const myVotingChannel5 = realtime.channels.get("voting-channel5");
const myVotingChannelBTC = realtime.channels.get("voting-BTC");

// var events = require('events');
// var eventEmitter = new events.EventEmitter();

let moduleZero = "waiting-room",
    moduleOne = "module1",
    moduleTwo = "module2",
    moduleThreeA = "module3a",
    moduleThreeB = "module3b",
    moduleTwoGOne = "module2g-1",
    moduleTwoGTwo = "module2g-2",
    moduleTwoDSymph = "module2d-symph",
    moduleTwoDSynth = "module2d-synth",
    moduleTwoE = "module2e",
    moduleTwoF = "module2f",
    moduleFiveOneA = "module5.1a",
    moduleFiveOneB = "module5.1b",
    moduleFiveTwoB = "module5.2b",
    moduleTrading = "module-trading";

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

    case "2g.1":
    currentModule = moduleTwoGOne
    $("#current-module").load('./modules/interface/module2g-1.html');
    break;

    case "2g.2":
    currentModule = moduleTwoGTwo
    $("#current-module").load('./modules/interface/module2g-2.html');
    break;

    case "btc":
    currentModule = moduleTrading
    $("#current-module").load('./modules/interface/trading.html');
    break;

    case "2d-symph":
    currentModule = moduleTwoDSymph
    $("#current-module").load('./modules/interface/module2d-symph.html');
    break;

    case "2d-synth":
    currentModule = moduleTwoDSynth
    $("#current-module").load('./modules/interface/module2d-synth.html');
    break;

    case "2e":
    currentModule = moduleTwoE
    $("#current-module").load('./modules/interface/module2e.html');
    break;

    case "2f":
    currentModule = moduleTwoF
    $("#current-module").load('./modules/interface/module2f.html');
    break;

    case "5.1aSymph":
    currentModule = moduleFiveOneA
    $("#current-module").load('./modules/interface/module5-1aSymph.html');
    break;

    case "5.1bSymph":
    currentModule = moduleFiveOneB
    $("#current-module").load('./modules/interface/module5-1bSymph.html');
    break;

    case "5.1aSynth":
    currentModule = moduleFiveOneA
    $("#current-module").load('./modules/interface/module5-1aSynth.html');
    break;

    case "5.1bSynth":
    currentModule = moduleFiveOneB
    $("#current-module").load('./modules/interface/module5-1bSynth.html');
    break;

    case "5.2b":
    currentModule = moduleFiveTwoB
    $("#current-module").load('./modules/interface/module5-2b.html');
    break;
  }
  console.log(currentModule);
  console.log(currentHTML);
});