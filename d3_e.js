// visualization for Are Your Organization's Leaders Digitally Literate?
//reading csv file
d3.csv("Data/data_e.csv").then((data) => {
  data.forEach((d) => {
    d.Percentage = +d.Percentage;
  });
  render(data);
});

// creating empty arrays to be populated with data further
var percentage = [],
  answer = [];

//selecting root svg
const svg = d3.select("svg");
//appending new graph on top of root svg
const graf = svg.append("g");

// positional co-ordinates for the percentages
var dataX = [37, 81, 124];

// styling the base svg circles on the graph
var circle = d3
  .selectAll(".circleE")
  .style("fill", "#ffffff")
  .style("stroke", "#ffe9c9")
  .style("stroke-width", "5px");

const render = (data) => {
  // mapping the data from each column into a separate array
  data.map(d => {
    percentage.push(d.Percentage);
    answer.push(d.Answer);
  });

  // creating percentage texts on the graph
  var perc = graf
    .selectAll(".text")
    .data(percentage)
    .enter()
    .append("text")
    .attr("y", 537.5)
    .text(d => {
      return d + "%";
    })
    .data(dataX)
    .attr("x", d => {
      return d;
    })
    .attr("fill", "#ee742a")
    .attr("font-size", 6.5)
    .attr("font-weight", 600)
    .attr("font-family", "sans-serif");

  // creating arc 1
  var arc1 = d3
    .arc()
    .innerRadius(10.5)
    .outerRadius(15.5)
    .startAngle(0)
    .endAngle(percentage[0] * ((2 * Math.PI) / 100));
  // appending arc 1 on the graph
  graf
    .append("path")
    .attr("d", arc1)
    .attr("fill", "#fcb344")
    .attr("transform", "translate(43,535)");
  // creating arc 2
  var arc2 = d3
    .arc()
    .innerRadius(10.5)
    .outerRadius(15.5)
    .startAngle(0)
    .endAngle(percentage[1] * ((2 * Math.PI) / 100));
  // appending arc 2 on the graph
  graf
    .append("path")
    .attr("d", arc2)
    .attr("fill", "#fcb344")
    .attr("transform", "translate(87,535)");
  // creating arc 3
  var arc3 = d3
    .arc()
    .innerRadius(10.5)
    .outerRadius(15.5)
    .startAngle(0)
    .endAngle(percentage[2] * ((2 * Math.PI) / 100));
  // appending arc 3 on the graph
  graf
    .append("path")
    .attr("d", arc3)
    .attr("fill", "#fcb344")
    .attr("transform", "translate(130,535)");
};
