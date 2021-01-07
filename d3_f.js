// visualization for Are Your Organization's Leaders Receptive to Emerging Tech?
//reading csv file
d3.csv("Data/data_f.csv").then(data => {
  data.forEach(d => {
    d.Percentage = +d.Percentage;
  });
  render(data);
});

// creating empty arrays to be populated with data further
var percentage = [],
  scale = [];

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
var circle = d3
  .selectAll(".circleF")
  .style("fill", "#ffffff")
  .style("stroke", function (d, i) {
    return colors[i];
  })
  .attr("transform", "translate(400, 476)")
  .style("stroke-width", "2px")
  //hovering effect
  .on('mouseover', bounce);

  function bounce() {
    d3.select(this)
    .transition()
    .duration(2000)
    .attr("cy","84")
    .ease(d3.easeBounce)
    .transition()
    .attr("cy","60")
    .ease(d3.easeBackIn)
  }

  // animation for sliding in at beginning
  circle
  .transition()
  .attr("transform", "translate(143, 476)")
  .delay(500)
  .duration(1000);

// positional co-ordinates for the percentages
var dataX = [117, 147.5, 178, 208.5];

const render = (data) => {
  // mapping the data from each column into a separate array
  data.map(d => {
    percentage.push(d.Percentage);
    scale.push(d.Scale);
  });

  // creating percentage texts on the graph
  var perc = graf
    .selectAll(".text")
    .data(percentage)
    .enter() // dynamically creates placeholder references corresponding to the number of values
    .append("text")
    .text(d => {
      return d + "%";
    })
    .attr("y", 311)
    .data(dataX) // x co-ordinates for attr("x")
    .attr("x", d => {
      return d;
    })
    .style("font-size", "8px")
    .style("fill", "#838383")
    .style("font-weight", "600")
    .style("font-family", "sans-serif");
};
