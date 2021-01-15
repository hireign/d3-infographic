import { fileParser as fileParserA } from '../graphs/graph-a.js';

console.log("lodaded reload js")

// function to reload the graph
function reloadData() {
  console.log("a called");
  fileParserA("data/data-a.csv"); 
}

// to fetch the reload button from html dom
window.onload = () => {
  var btn = document.getElementById("btn-reload");
  console.log("loaded");
  btn.onclick = reloadData;
};