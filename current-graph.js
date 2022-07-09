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
const myVotingChannel63 = realtime.channels.get("voting-channel6.3");
const myVotingChannel64 = realtime.channels.get("voting-channel6.4");
const myVotingChannel69 = realtime.channels.get("voting-channel6.9");
const myVotingChannel69Symph = realtime.channels.get("voting-channel6.9symph");
const myVotingChannel69Synth = realtime.channels.get("voting-channel6.9synth");
const myVotingChannel7 = realtime.channels.get("voting-channel7");
const myVotingChannelBTC = realtime.channels.get("voting-BTC");

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
    moduleSixThree = "module6.3",
    moduleSixFour = "module6.4",
    moduleSixNine = "module6.9",
    moduleSixNineSymph = "module6.9symph",
    moduleSixNineSynth = "module6.9synth",
    moduleSeven = "module7",
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
    choiceSixteen = 0,
    choiceSeventeen = 0,
    choiceEighteen = 0,
    choiceNineteen = 0,
    choiceTwenty = 0,
    choiceTwentyOne = 0,
    choiceTwentyTwo = 0,
    choiceTwentyThree = 0,
    choiceTwentyFour = 0,
    choiceTwentyFive = 0,
    choiceTwentySix = 0,
    choiceTwentySeven = 0,
    choiceTwentyEight = 0,
    choiceTwentyNine = 0,
    choiceThirty = 0,
    choiceThirtyOne = 0,
    choiceThirtyTwo = 0,
    choiceThirtyThree = 0,
    choiceThirtyFour = 0,
    choiceThirtyFive = 0,
    choiceThirtySix = 0,
    choiceThirtySeven = 0,
    choiceThirtyEight = 0,
    choiceThirtyNine = 0,
    choiceFourty = 0,
    choiceFourtyOne = 0,
    choiceFourtyTwo = 0,

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

// chart 2d
// Preparing the chart data
let chartData2d = [
  {
    label: "TERMINAL P-89",
    value: choiceSixteen,
  },
  {
    label: "ELYSIUM IX/XI",
    value: choiceSeventeen,
  },
  {
    label: "เดินทางผ่านรูหนอน",
    value: choiceEighteen,
  },
  {
    label: "High-Frequency Zone",
    value: choiceNineteen,
  },
];
// Chart Configuration
let chartConfig2d = {
type: "pie2d",
renderAt: "chart-container",
id: "vote-chart2d",
width: "100%",
height: "400",
dataFormat: "json",
dataSource: {
chart: {
  caption: "ชัยชนะชั่วครู่",
  subCaption: "ไปไหนต่อ?",
  theme: "fusion",
},
// Chart Data from Step 2
data: chartData2d,
},
};

// chart 2e
// Preparing the chart data
let chartData2e = [
  {
    label: "ตรงไปที่รูหนอน",
    value: choiceTwenty,
  },
  {
    label: "ยอมจำนนต่อนายพล CLEF",
    value: choiceTwentyOne,
  },
];
// Chart Configuration
let chartConfig2e = {
type: "pie2d",
renderAt: "chart-container",
id: "vote-chart2e",
width: "100%",
height: "400",
dataFormat: "json",
dataSource: {
chart: {
  caption: "Defeated?",
  subCaption: "เราแพ้แล้ว ทำยังไงดี?",
  theme: "fusion",
},
// Chart Data from Step 2
data: chartData2e,
},
};

// chart 2f
// Preparing the chart data
let chartData2f = [
  {
    label: "รับ TONIC",
    value: choiceTwentyTwo,
  },
  {
    label: "ไม่รับ TONIC",
    value: choiceTwentyThree,
  },
];
// Chart Configuration
let chartConfig2f = {
type: "pie2d",
renderAt: "chart-container",
id: "vote-chart2f",
width: "100%",
height: "400",
dataFormat: "json",
dataSource: {
chart: {
  caption: "Savior",
  subCaption: "รับ TONIC ขึ้น Launch ดีหรือไม่?",
  theme: "fusion",
},
// Chart Data from Step 2
data: chartData2f,
},
};

// chart 5.1a
// Preparing the chart data
let chartData51a = [
  {
    label: "Dr.SYMPH/SYNTH สำรวจ",
    value: choiceTwentyFour,
  },
  {
    label: "Dr.SYMPH/SYNTH อยู่บนยาน",
    value: choiceTwentyFive,
  },
];
// Chart Configuration
let chartConfig51a = {
type: "pie2d",
renderAt: "chart-container",
id: "vote-chart5.1a",
width: "100%",
height: "400",
dataFormat: "json",
dataSource: {
chart: {
  caption: "Terminal",
  subCaption: "ให้ Dr. SYMPH/SYNTH ลงไปสำรวจดาวหรือไม่?",
  theme: "fusion",
},
// Chart Data from Step 2
data: chartData51a,
},
};

// chart 5.1b
// Preparing the chart data
let chartData51b = [
  {
    label: "Dr.SYMPH/SYNTH",
    value: choiceTwentySix,
  },
  {
    label: "TONIC",
    value: choiceTwentySeven,
  },
];
// Chart Configuration
let chartConfig51b = {
type: "pie2d",
renderAt: "chart-container",
id: "vote-chart5.1b",
width: "100%",
height: "400",
dataFormat: "json",
dataSource: {
chart: {
  caption: "Terminal",
  subCaption: "ให้ใครลงไปสำรวจดาวหรือไม่?",
  theme: "fusion",
},
// Chart Data from Step 2
data: chartData51b,
},
};

// chart 5.2b
// Preparing the chart data
let chartData52b = [
  {
    label: "เปิด Aerial Portal",
    value: choiceTwentyEight,
  },
  {
    label: "ล็อค Aerial Portal",
    value: choiceTwentyNine,
  },
];
// Chart Configuration
let chartConfig52b = {
type: "pie2d",
renderAt: "chart-container",
id: "vote-chart5.2b",
width: "100%",
height: "400",
dataFormat: "json",
dataSource: {
chart: {
  caption: "Confrontation",
  subCaption: "เปิด Aerial Portal ให้ TONIC หรือไม่?",
  theme: "fusion",
},
// Chart Data from Step 2
data: chartData52b,
},
};

// chart 6.3
// Preparing the chart data
let chartData63 = [
  {
    label: "ไป High Frequency Zone",
    value: choiceThirty,
  },
  {
    label: "กลับบ้าน",
    value: choiceThirtyOne,
  },
];
// Chart Configuration
let chartConfig63 = {
type: "pie2d",
renderAt: "chart-container",
id: "vote-chart6.3",
width: "100%",
height: "400",
dataFormat: "json",
dataSource: {
chart: {
  caption: "Crossroad",
  subCaption: "อยากไปต่อ หรือกลับบ้าน?",
  theme: "fusion",
},
// Chart Data from Step 2
data: chartData63,
},
};

// chart 6.4
// Preparing the chart data
let chartData64 = [
  {
    label: "รับ MINOR ไปด้วยกัน",
    value: choiceThirtyTwo,
  },
  {
    label: "รับ MINOR และทิ้ง TONIC",
    value: choiceThirtyThree,
  },
  {
    label: "ฆ่า MINOR",
    value: choiceThirtyFour,
  },
];
// Chart Configuration
let chartConfig64 = {
type: "pie2d",
renderAt: "chart-container",
id: "vote-chart6.4",
width: "100%",
height: "400",
dataFormat: "json",
dataSource: {
chart: {
  caption: "The Hard Choices",
  subCaption: "รับ MINOR มาด้วยกันหรือไม่?",
  theme: "fusion",
},
// Chart Data from Step 2
data: chartData64,
},
};

// chart 6.9
// Preparing the chart data
let chartData69 = [
  {
    label: "กลับบ้าน",
    value: choiceThirtyFive,
  },
  {
    label: "ช่วยพ่อ TONIC",
    value: choiceThirtySix,
  },
];
// Chart Configuration
let chartConfig69 = {
type: "pie2d",
renderAt: "chart-container",
id: "vote-chart6.9",
width: "100%",
height: "400",
dataFormat: "json",
dataSource: {
chart: {
  caption: "Where is your VIBE",
  subCaption: "The Vibe ของคุณอยู่ที่ไหน?",
  theme: "fusion",
},
// Chart Data from Step 2
data: chartData69,
},
};

// chart 6.9 Symph
// Preparing the chart data
let chartData69Symph = [
  {
    label: "กลับบ้าน",
    value: choiceThirtyNine,
  },
  {
    label: "พา SYMPH ไปรักษา",
    value: choiceFourty,
  },
];
// Chart Configuration
let chartConfig69Symph = {
type: "pie2d",
renderAt: "chart-container",
id: "vote-chart6.9symph",
width: "100%",
height: "400",
dataFormat: "json",
dataSource: {
chart: {
  caption: "Where is your VIBE",
  subCaption: "The Vibe ของคุณอยู่ที่ไหน?",
  theme: "fusion",
},
// Chart Data from Step 2
data: chartData69Symph,
},
};

// chart 6.9 Synth
// Preparing the chart data
let chartData69Synth = [
  {
    label: "กลับบ้าน",
    value: choiceFourtyOne,
  },
  {
    label: "พา SYNTH ไปดาว CENTURA",
    value: choiceFourtyTwo,
  },
];
// Chart Configuration
let chartConfig69Synth = {
type: "pie2d",
renderAt: "chart-container",
id: "vote-chart6.9synth",
width: "100%",
height: "400",
dataFormat: "json",
dataSource: {
chart: {
  caption: "Where is your VIBE",
  subCaption: "The Vibe ของคุณอยู่ที่ไหน?",
  theme: "fusion",
},
// Chart Data from Step 2
data: chartData69Synth,
},
};

// chart 7
// Preparing the chart data
let chartData7 = [
  {
    label: "สู้",
    value: choiceThirtySeven,
  },
  {
    label: "ยอมแพ้",
    value: choiceThirtyEight,
  },
];
// Chart Configuration
let chartConfig7 = {
type: "pie2d",
renderAt: "chart-container",
id: "vote-chart7",
width: "100%",
height: "400",
dataFormat: "json",
dataSource: {
chart: {
  caption: "General's Launch Approaching",
  subCaption: "จะสู้หรือยอมแพ้?",
  theme: "fusion",
},
// Chart Data from Step 2
data: chartData7,
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
    case "2d":
    currentModule = moduleTwoD
    $("#current-graph").load('./modules/graph/graph2d.html');
    case "2d-symph":
    currentModule = moduleTwoDSymph
    $("#current-graph").load('./modules/graph/graph2d.html');
    break;
    case "2d-synth":
    currentModule = moduleTwoDSynth
    $("#current-graph").load('./modules/graph/graph2d.html');
    break;
    case "2e":
    currentModule = moduleTwoE
    $("#current-graph").load('./modules/graph/graph2e.html');
    break;
    case "2f":
    currentModule = moduleTwoF
    $("#current-graph").load('./modules/graph/graph2f.html');
    break;
    case "5.1aSymph":
    currentModule = moduleFiveOneA
    $("#current-graph").load('./modules/graph/graph5-1a.html');
    break;
    case "5.1bSymph":
    currentModule = moduleFiveOneB
    $("#current-graph").load('./modules/graph/graph5-1b.html');
    break;
    case "5.1aSynth":
    currentModule = moduleFiveOneA
    $("#current-graph").load('./modules/graph/graph5-1a.html');
    break;
    case "5.1bSynth":
    currentModule = moduleFiveOneB
    $("#current-graph").load('./modules/graph/graph5-1b.html');
    break;
    case "5.2b":
    currentModule = moduleFiveTwoB
    $("#current-graph").load('./modules/graph/graph5-2b.html');
    break;
    case "6.3":
    currentModule = moduleSixThree
    $("#current-graph").load('./modules/graph/graph6-3.html');
    break;
    case "6.4":
    currentModule = moduleSixFour
    $("#current-graph").load('./modules/graph/graph6-4.html');
    break;
    case "6.9":
    currentModule = moduleSixNine
    $("#current-graph").load('./modules/graph/graph6-9.html');
    break;
    case "6.9Symph":
    currentModule = moduleSixNineSymph
    $("#current-graph").load('./modules/graph/graph6-9symph.html');
    break;
    case "6.9Synth":
    currentModule = moduleSixNineSynth
    $("#current-graph").load('./modules/graph/graph6-9synth.html');
    break;
    case "7":
    currentModule = moduleSeven
    $("#current-graph").load('./modules/graph/graph7.html');
    break;
  }
  console.log(currentModule);
  console.log(currentHTML);
});