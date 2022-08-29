var xValues = ["Sales", "Profit", "Growth", "Vistors", "Argentina"];
var yValues = [55, 49, 44, 24];
var barColors = [
  "rgb(218, 235, 250)",
  " rgb(225, 246, 194)",
  "rgb(222, 218, 250)",
  "#ffe1f3",
];

new Chart("earnings-chart", {
  type: "doughnut",
  data: {
    labels: null,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: false,
      text: ""
    }
  }
});

var xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("line-graph", {
type: "line",
data: {
labels: xValues,
datasets: [{
  data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
  borderColor: "red",
  fill: false
},{
  data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
  borderColor: "green",
  fill: false
},{
  data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
  borderColor: "blue",
  fill: false
}]
},
options: {
legend: {display: false}
}
});

var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("bar-graph", {
type: "bar",
data: {
labels: xValues,
datasets: [{
  backgroundColor: barColors,
  data: yValues
}]
},
options: {
legend: {display: false},
title: {
  display: false,
  text: "World Wine Production 2018"
}
}
});