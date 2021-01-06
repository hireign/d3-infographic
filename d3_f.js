// visualization for Are Your Organization's Leaders Receptive to Emerging Tech?

//selecting root svg
const svg = d3.select("svg");
//appending new graph on top of root svg
const graf = svg.append("g");

//central position co-ordinates and positioning the graph
const positionX = 58;
const positionY = 228;
graf.attr("transform", `translate(${positionX},${positionY})`);

// colors for all 4 circles
var colors = ["#ec7936", "#fca24c", "#fecd88", "#fdeac2"];
// manipulating and transforming the svg circles already created on the base graph
var circle = d3.selectAll(".circleF")
  .style("fill", "#ffffff")
  .style("stroke", function (d, i) {
    return colors[i];   
  })
  .style("stroke-width", "2px")
  .attr("transform", "translate(143, 476)");

// percentage data to be displayed
var data = [23, 50, 17, 7];
// positional co-ordinates for the percentages
var dataX = [117, 147, 177, 207];
// appending percentages to the graph
var perc = graf.selectAll(".text")
  .data(data)
  .enter()
  .append("text")
  .text(function (d, i) {
    return data[i] + "%";
  })
  .attr("y", 311)
  .data(dataX)      // x co-ordinates for attr("x")
  .attr("x", function (d) {
    return d;
  })
  .style("font-size", "8px")
  .style("fill", "#838383")
  .style("font-weight", "600")
  .style("font-family", "sans-serif");
