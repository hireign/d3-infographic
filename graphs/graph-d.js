// visualization for Technologies With Most Potential to Deliver Transformational Value
//reading csv file
var csvFile = "data/data-d.csv"; // file containing graph data
const fileParser = (filename) =>
  d3.csv(filename).then((data) => {
    data.forEach((d) => {
      d.Percentage = +d.Percentage;
    });
    render(data);
  });

//selecting root svg
const svg = d3.select("svg");
const width = 270;
const height = 60;

//original colors for the donut visualization
var colors = [
  "#e97d35",
  "#f78b4b",
  "#f9a334",
  "#ffba45",
  "#fdcf84",
  "#feeac9",
  "#fbf6e0",
];
//colors for hovering effect from legend
var colorArr = [
  [
    "#bfff00",
    "#f78b4baa",
    "#f9a334aa",
    "#ffba45aa",
    "#fdcf84aa",
    "#feeac9aa",
    "#fbf6e0aa",
  ],
  [
    "#e97d35aa",
    "#bfff00",
    "#f9a334aa",
    "#ffba45aa",
    "#fdcf84aa",
    "#feeac9aa",
    "#fbf6e0aa",
  ],
  [
    "#e97d35aa",
    "#f78b4baa",
    "#bfff00",
    "#ffba45aa",
    "#fdcf84aa",
    "#feeac9aa",
    "#fbf6e0aa",
  ],
  [
    "#e97d35aa",
    "#f78b4baa",
    "#f9a334aa",
    "#bfff00",
    "#fdcf84aa",
    "#feeac9aa",
    "#fbf6e0aa",
  ],
  [
    "#e97d35aa",
    "#f78b4baa",
    "#f9a334aa",
    "#ffba45aa",
    "#bfff00",
    "#feeac9aa",
    "#fbf6e0aa",
  ],
  [
    "#e97d35aa",
    "#f78b4baa",
    "#f9a334aa",
    "#ffba45aa",
    "#fdcf84aa",
    "#bfff00",
    "#fbf6e0aa",
  ],
  [
    "#e97d35aa",
    "#f78b4baa",
    "#f9a334aa",
    "#ffba45aa",
    "#fdcf84aa",
    "#feeac9aa",
    "#bfff00",
  ],
];

//rendering data from csv
const render = (data) => {
  const xValue = (d) => d.Technology;
  const yValue = (d) => d.Percentage;

  // removing graph element if already exists in case of reloading the graph
  d3.select("#g-graph-d").remove();

  //appending new graph on top of root svg
  const graf = svg.append("g").attr("id", "g-graph-d");

  //central position co-ordinates and positioning the graph
  const positionX = 20;
  const positionY = 483 - height;
  graf.attr("transform", `translate(${positionX},${positionY})`);

  //creating xScale
  const xScale = d3
    .scaleBand()
    .domain(data.map(xValue))
    .range([0, width])
    .padding(0.4);
  const xOffset = (d) => xScale(xValue(d));

  // creating yScale
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, yValue)])
    .range([height, 0]);
  const yOffset = (d) => yScale(yValue(d));

  //creating bars using rectangles
  var bars = graf
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("id", (d, i) => "graph-bar-d" + (i + 1))
    .attr(
      "class",
      (d, i) => "graph-elements-d graph-bars-d graph-elements-d" + (i + 1)
    )
    .attr("x", (d) => xOffset(d))
    .attr("width", xScale.bandwidth())
    .attr("height", 0)
    .attr("y", (d) => yOffset(0))
    .attr("fill", (d, i) => colors[i]);

  // Animation at the page load
  bars
    .transition()
    .duration(800)
    .attr("y", (d) => yOffset(d))
    .attr("height", (d) => height - yOffset(d))
    .delay((d, i) => i * 100);

  //appying percentage labels on top of each bar
  const topText = graf.append("g");
  const texts = topText
    .selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text((d) => yValue(d) + "%")
    .attr("x", (d) => xOffset(d) + xScale.bandwidth() / 4)
    .attr("y", (d) => yOffset(d) - 3)
    .attr("id", (d, i) => "graph-percentage-d" + (i + 1))
    .attr(
      "class",
      (d, i) => "graph-elements-d graph-percentage-d graph-elements-d" + (i + 1)
    )
    .attr("fill", "#777777")
    .attr("font-size", 6)
    .attr("font-weight", 600)
    .attr("font-family", "sans-serif");

  //to apply colors to legend squares
  d3.selectAll(".graph-squares-d").attr("fill", (d, i) => colors[i]);

  //code snippets to highlight a bar segment from the graph legend beside
  d3.selectAll(".graph-elements-d")
    .on("mouseover", mouseoverD)
    .on("mouseout", mouseoutD);

  // function to highlight relevant bar segment on hover
  function mouseoverD() {
    var segmemtId = this.id.slice(-1); //represents the id for the graph segment (1,2,3,...,7)
    bars.attr("fill", (data, i) => colorArr[parseInt(segmemtId) - 1][i]); //to change the color of the bars
    d3.select("#graph-label-d" + segmemtId) //to highlight the label fonts
      .style("font-weight", 700)
      .style("fill", "#111111");
    d3.select("#graph-percentage-d" + segmemtId) //to highlight the percentage fonts
      .style("font-weight", 700)
      .style("fill", "#111111");
    d3.select("#graph-square-d" + segmemtId).attr("fill", "#bfff00"); //to highlight the legend square
  }

  // function to reset the graph color
  function mouseoutD() {
    bars.attr("fill", (d, i) => colors[i]); //to reset the color of the bars
    d3.selectAll(".graph-labels-d") //to reset the label fonts
      .style("font-weight", 500)
      .style("fill", "#838383");
    d3.selectAll(".graph-percentage-d") //to reset the percentage fonts
      .style("font-weight", 600)
      .style("fill", "#777777");
    d3.selectAll(".graph-squares-d").attr("fill", (d, i) => colors[i]); //to reset the legend square
  }
};

fileParser(csvFile);

export { fileParser };
