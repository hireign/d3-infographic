import {
  fileParser as fileParserA,
  csvFile as csvA,
} from "../graphs/graph-a.js";
import {
  fileParser as fileParserB,
  csvFile as csvB,
} from "../graphs/graph-b.js";
import {
  fileParser as fileParserC,
  csvFile as csvC,
} from "../graphs/graph-c.js";
import {
  fileParser as fileParserD,
  csvFile as csvD,
} from "../graphs/graph-d.js";
import {
  fileParser as fileParserE,
  csvFile as csvE,
} from "../graphs/graph-e.js";
import {
  fileParser as fileParserF,
  csvFile as csvF,
} from "../graphs/graph-f.js";

var csvArray = [csvA, csvB, csvC, csvD, csvE, csvF];
var fileParserArray = [
  fileParserA,
  fileParserB,
  fileParserC,
  fileParserD,
  fileParserE,
  fileParserF,
];

console.log(typeof fileParserA)

// function to reload the graph
const reloadData = () => fileParserArray.forEach((d,i) => fileParserArray[i](csvArray[i]))

// to fetch the reload button from html dom
window.onload = () => {
  var btn = document.getElementById("btn-reload");
  btn.onclick = () => reloadData();
};
