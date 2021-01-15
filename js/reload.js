import {
  fileParser as fileParserA,
  csvFile as csvA,
} from "../graphs/graph-a.js";
import {
  fileParser as fileParserB,
  csvFile as csvB,
} from "../graphs/graph-a.js";
import {
  fileParser as fileParserC,
  csvFile as csvC,
} from "../graphs/graph-a.js";
import {
  fileParser as fileParserD,
  csvFile as csvD,
} from "../graphs/graph-a.js";
import {
  fileParser as fileParserE,
  csvFile as csvE,
} from "../graphs/graph-a.js";
import {
  fileParser as fileParserF,
  csvFile as csvF,
} from "../graphs/graph-a.js";

var csvArray = [csvA, csvB, csvC, csvD, csvE, csvF];
var fileParserArray = [
  fileParserA,
  fileParserB,
  fileParserC,
  fileParserD,
  fileParserE,
  fileParserF,
];

// function to reload the graph
const reloadData = (callback, csv) => {
  callback(csv);
};

// to fetch the reload button from html dom
window.onload = () => {
  var btn = document.getElementById("btn-reload");
  btn.onclick = (d,i) => reloadData(fileParserArray[i], csvArray[i]);
};
