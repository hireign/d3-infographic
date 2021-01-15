// visualization for Top Motivators for Implementing an Emerging Technology
//reading csv file
const fileParser = (file) =>
  d3.csv(file).then((data) => {
    data.forEach((d) => {
      d.Percentage = +d.Percentage;
    });
    render(data); // renders the data and creates graphs by calling the render function
  });

// array to be populated with csv data
var percentage = [];

//original colors for the donut visualization
const colors = [
  "#d56734",
  "#f78644",
  "#f9a334",
  "#ffba45",
  "#fdcf84",
  "#ffe7be",
];
//below are the colors for hovering effect from segment names given beside on the webpage
const colorArr = [
  ["#bfff00", "#f78644aa", "#f9a334aa", "#ffba45aa", "#fdcf84aa", "#ffe7beaa"],
  ["#d56734aa", "#bfff00", "#f9a334aa", "#ffba45aa", "#fdcf84aa", "#ffe7beaa"],
  ["#d56734aa", "#f78644aa", "#bfff00", "#ffba45aa", "#fdcf84aa", "#ffe7beaa"],
  ["#d56734aa", "#f78644aa", "#f9a334aa", "#bfff00", "#fdcf84aa", "#ffe7beaa"],
  ["#d56734aa", "#f78644aa", "#f9a334aa", "#ffba45aa", "#bfff00", "#ffe7beaa"],
  ["#d56734aa", "#f78644aa", "#f9a334aa", "#ffba45aa", "#fdcf84aa", "#bfff00"],
];

//data(in percentage)
const r = 25;
//pie() and arc() functions for calculations of start,end angles of different chart segments
const py = d3.pie().value(function (d) {
  return d;
});
//arc foundation for the donut
const arc = d3.arc().innerRadius(16).outerRadius(r);
//arc foundation for labels
const arcL = d3.arc().innerRadius(30).outerRadius(33);

//selecting root svg
const svg = d3.select("svg");

const render = (data) => {
  percentage = [];
  // removing graph element if already exists in case of reloading the graph
  d3.select("#g-graph-a").remove();
  // mapping the data from percentage column into a separate array
  data.map((d) => {
    percentage.push(d.Percentage);
  });

  //appending new graph on top of root svg
  const graf = svg.append("g").attr("id", "g-graph-a");

  //central position co-ordinates and positioning the graph
  const positionX = 58;
  const positionY = 228;
  graf.attr("transform", `translate(${positionX},${positionY})`);

  //creation of arc segments
  var arcs = graf.selectAll(".arc").data(py(percentage)).enter().append("g");
  //creation of whole path including multiple arc segments
  var paths = arcs.append("path");
  paths
    .attr("d", arc)
    .attr("id", (d, i) => "graph-arc-a" + (i + 1))
    .attr(
      "class",
      (d, i) => "graph-elements-a graph-arcs-a graph-elements-a" + (i + 1)
    )
    .attr("fill", function (d, i) {
      return colors[i];
    });

  //creation of percentage labels
  var labels = graf
    .selectAll(".text")
    .data(percentage)
    .enter()
    .append("g")
    .attr("transform", "translate(-2,2)");
  labels
    .append("text")
    .data(percentage)
    .text(function (d, i) {
      return percentage[i] + "%";
    })
    .data(py(percentage))
    .attr("id", (d, i) => "graph-percentage-a" + (i + 1))
    .attr(
      "class",
      (d, i) =>
        "graph-elements-a graph-percentages-a graph-elements-a" + (i + 1)
    )
    .attr("transform", function (d) {
      return "translate(" + arcL.centroid(d) + ")";
    })
    .style("font-size", "4px")
    .style("fill", "#777777")
    .style("font-weight", "600")
    .style("font-family", "sans-serif");

  //creation of line segments from label to graph
  graf
    .selectAll("lines")
    .data(py(percentage))
    .enter()
    .append("polyline")
    .attr("id", (d, i) => "graph-line-a" + (i + 1))
    .attr(
      "class",
      (d, i) => "graph-elements-a graph-lines-a graph-elements-a" + (i + 1)
    )
    .attr("stroke", "#838383")
    .attr("stroke-width", 0.5)
    .attr("points", function (d) {
      var x = arc.centroid(d);
      var y = arcL.centroid(d);
      return [x, y];
    })
    .attr("transform", "scale(0.9)");

  //to apply colors to legend squares
  d3.selectAll(".graph-squares-a").attr("fill", (d, i) => colors[i]);

  // animation for rotation at beginning
  graf
    .selectAll(".graph-arcs-a")
    .transition()
    .duration(3000)
    .attrTween("transform", rotate360);

  // function to rotate the graph
  function rotate360() {
    var i = d3.interpolate(0, 3600);
    return function (t) {
      return "rotate(" + i(t) + ")";
    };
  }

  //code snippets to highlight a graph segment from the graph legend beside
  d3.selectAll(".graph-elements-a")
    .on("mouseover", mouseoverA)
    .on("mouseout", mouseoutA);

  // function to highlight relevant graph segment on legend hover
  function mouseoverA() {
    var segmemtId = this.id.slice(-1); //represents the id for the graph segment (1,2,3,...,7)
    paths.attr("fill", (data, i) => colorArr[parseInt(segmemtId) - 1][i]); //to change the color of the arcs
    d3.select("#graph-label-a" + segmemtId) //to highlight the label fonts
      .style("font-weight", 700)
      .style("fill", "#222222");
    d3.select("#graph-percentage-a" + segmemtId) //to highlight the percentage fonts
      .style("fill", "#222222")
      .style("font-weight", "700");
    d3.select("#graph-line-a" + segmemtId) //to highlight the percentage fonts
      .attr("stroke", "#444444")
      .attr("stroke-width", 0.6);
    d3.select("#graph-square-a" + segmemtId).attr("fill", "#bfff00"); //to highlight the legend square
  }

  // function to reset the graph color
  function mouseoutA() {
    paths.attr("fill", (d, i) => colors[i]); //to reset the color of the arcs
    d3.selectAll(".graph-labels-a") //to reset the label fonts
      .style("font-weight", 500)
      .style("fill", "#838383");
    d3.selectAll(".graph-percentages-a") //to reset the percentage fonts
      .style("font-weight", 600)
      .style("fill", "#777777");
    d3.selectAll(".graph-lines-a") //to reset the percentage fonts
      .attr("stroke", "#838383")
      .attr("stroke-width", 0.5);
    d3.selectAll(".graph-squares-a").attr("fill", (d, i) => colors[i]); //to reset the legend square
  }
};

// parsing csv file and causing the data to render
var csvFile = "data/data-a.csv";
fileParser(csvFile);

export {fileParser};