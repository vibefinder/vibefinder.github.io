const realtime = new Ably.Realtime({ key: "bboIFQ.58-WjQ:NC-apeYhS3cxv7wHV3wh0FIzk4_wzEV2r63ixNkXpo8" });

// Channels
const stageChannel = realtime.channels.get("stage-channel");
const myVotingChannel1 = realtime.channels.get("voting-channel1");
const myVotingChannel2 = realtime.channels.get("voting-channel2");
const myVotingChannel3a = realtime.channels.get("voting-channel3a");
const myVotingChannel3b = realtime.channels.get("voting-channel3b");
const myVotingChannel2g = realtime.channels.get("voting-channel2g");
const myVotingChannelBTC = realtime.channels.get("voting-BTC");

let moduleZero = "waiting-room",
    moduleOne = "module1",
    moduleTwo = "module2",
    moduleThreeA = "module3a",
    moduleThreeB = "module3b",
    moduleTwoGOne = "module2g-1",
    moduleTwoGTwo = "module2g-2",
    moduleTrading = "module-trading";

let choiceOne = 0,
    choiceTwo = 0,
    choiceThree = 0,
    choiceFour = 0,
    choiceFive = 0,
    choiceSix = 0,
    choiceSeven = 0,
    choiceEight = 0,
    choiceNine = 0,
    choiceTen = 0,
    choiceEleven = 0,
    choiceTwelve = 0,
    choiceThirteen = 0,
    choiceFourteen = 0,
    choiceFifteen = 0,

    choiceBuy = 0,
    choiceSell = 0;

let currentModule = "";

// Chart 1
// Preparing the chart data
let chartData1 = [
  {
    label: "Help TONIC",
    value: choiceOne,
  },
  {
    label: "Left TONIC",
    value: choiceTwo,
  },
];
// Chart Configuration
let chartConfig1 = {
  type: "pie2d",
  renderAt: "chart-container",
  id: "vote-chart",
  width: "100%",
  height: "400",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "First Companion",
      subCaption: "Should we help TONIC?",
      theme: "fusion",
    },
    // Chart Data from Step 2
    data: chartData1,
  },
};

// chart 2
// Preparing the chart data
let chartData2 = [
  {
    label: "Earth",
    value: choiceThree,
  },
  {
    label: "Tau Ceti G",
    value: choiceFour,
  },
  {
    label: "High-Frequency Zone",
    value: choiceFive,
  },
];
// Chart Configuration
let chartConfig2 = {
  type: "pie2d",
  renderAt: "chart-container",
  id: "vote-chart2",
  width: "100%",
  height: "400",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Which way to go?",
      subCaption: "Earth, Tau Ceti G, or High Frequency Zone?",
      theme: "fusion",
    },
    // Chart Data from Step 2
    data: chartData2,
  },
};

// chart 3a
// Preparing the chart data
let chartData3a = [
  {
    label: "Dr.SYMPH On Board",
    value: choiceSix,
  },
  {
    label: "Permission Declined",
    value: choiceSeven,
  },
];
// Chart Configuration
let chartConfig3a = {
type: "pie2d",
renderAt: "chart-container",
id: "vote-chart3a",
width: "100%",
height: "400",
dataFormat: "json",
dataSource: {
chart: {
  caption: "Time to make a SYMPHONIC decision.",
  subCaption: "Let Dr.SYMPH come with us?",
  theme: "fusion",
},
// Chart Data from Step 2
data: chartData3a,
},
};

// chart 3b
// Preparing the chart data
let chartData3b = [
  {
    label: "SYNTH On Baord",
    value: choiceEight,
  },
  {
    label: "Permission Declined",
    value: choiceNine,
  },
];
// Chart Configuration
let chartConfig3b = {
type: "pie2d",
renderAt: "chart-container",
id: "vote-chart3b",
width: "100%",
height: "400",
dataFormat: "json",
dataSource: {
chart: {
  caption: "Time to make a SYNTHETIC decision.",
  subCaption: "Let SYNTH come with us?",
  theme: "fusion",
},
// Chart Data from Step 2
data: chartData3b,
},
};

// chart 2g.1
// Preparing the chart data
let chartData2gOne = [
  {
    label: "SYMPH",
    value: choiceTen,
  },
  {
    label: "TONIC",
    value: choiceEleven,
  },
  {
    label: "ไม่เลือกใครเลย",
    value: choiceTwelve,
  },
];
// Chart Configuration
let chartConfig2gOne = {
type: "pie2d",
renderAt: "chart-container",
id: "vote-chart2g.1",
width: "100%",
height: "400",
dataFormat: "json",
dataSource: {
chart: {
  caption: "การปลอบโยน",
  subCaption: "SOLO กำลังเศร้า ใครควรจะปลอบเขา?",
  theme: "fusion",
},
// Chart Data from Step 2
data: chartData2gOne,
},
};

// chart 2g.2
// Preparing the chart data
let chartData2gTwo = [
  {
    label: "SYNTH",
    value: choiceThirteen,
  },
  {
    label: "TONIC",
    value: choiceFourteen,
  },
  {
    label: "ไม่เลือกใครเลย",
    value: choiceFifteen,
  },
];
// Chart Configuration
let chartConfig2gTwo = {
type: "pie2d",
renderAt: "chart-container",
id: "vote-chart2g.2",
width: "100%",
height: "400",
dataFormat: "json",
dataSource: {
chart: {
  caption: "การปลอบโยน",
  subCaption: "SOLO กำลังเศร้า ใครควรจะปลอบเขา?",
  theme: "fusion",
},
// Chart Data from Step 2
data: chartData2gTwo,
},
};

// chart trading
// Preparing the chart data
let chartDataBTC = [
  {
    label: "ช้อน",
    value: choiceBuy,
  },
  {
    label: "ปล่อย",
    value: choiceSell,
  },
];
// Chart Configuration
let chartConfigBTC = {
type: "pie2d",
renderAt: "chart-container",
id: "vote-chartBTC",
width: "100%",
height: "400",
dataFormat: "json",
dataSource: {
chart: {
  caption: "การปลอบโยน",
  subCaption: "SOLO กำลังเศร้า ใครควรจะปลอบเขา?",
  theme: "fusion",
},
// Chart Data from Step 2
data: chartDataBTC,
},
};

// end

stageChannel.subscribe("vote", (msg) => {
  switch (msg.data) {
    case "0":
    currentModule = moduleZero
    $("#current-graph").load('./modules/graph/waiting-room.html');
    break;
    case "1":
    currentModule = moduleOne
    $("#current-graph").load('./modules/graph/graph1.html');
    break;
    case "2":
    currentModule = moduleTwo
    $("#current-graph").load('./modules/graph/graph2.html');
    break;
    case "3a":
    currentModule = moduleThreeA
    $("#current-graph").load('./modules/graph/graph3a.html');
    break;
    case "3b":
    currentModule = moduleThreeB
    $("#current-graph").load('./modules/graph/graph3b.html');
    break;
    case "2g.1":
    currentModule = moduleTwoGOne
    $("#current-graph").load('./modules/graph/graph2g-1.html');
    break;
    case "2g.2":
    currentModule = moduleTwoGTwo
    $("#current-graph").load('./modules/graph/graph2g-2.html');
    break;
    case "btc":
    currentModule = moduleTrading
    $("#current-graph").load('./modules/graph/trading.html');
    break;
  }
  console.log(currentModule);
  console.log(currentHTML);
});