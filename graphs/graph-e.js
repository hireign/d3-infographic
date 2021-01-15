// visualization for Are Your Organization's Leaders Digitally Literate?
//reading csv file
var csvFile = "data/data-e.csv"; // file containing graph data
const fileParser = (filename) =>
  d3.csv(filename).then((data) => {
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

// positional co-ordinates for the percentages
var dataX = [37, 81, 124];

// styling the base svg circles on the graph
var circle = d3
  .selectAll(".graph-circles-e")
  .style("fill", "#ffffff")
  .style("stroke", "#ffe9c9")
  .style("stroke-width", "5px");

const render = (data) => {
  //emptying the arrays if already populated
  percentage = [];
  answer = [];
  // mapping the data from each column into a separate array
  data.map((d) => {
    percentage.push(d.Percentage);
    answer.push(d.Answer);
  });

  // removing graph element if already exists in case of reloading the graph
  d3.select("#g-graph-e").remove();

  //appending new graph on top of root svg
  const graf = svg.append("g").attr("id", "g-graph-e");

  // creating percentage texts on the graph
  var perc = graf
    .selectAll(".text")
    .data(percentage)
    .enter()
    .append("text")
    .attr("y", 537.5)
    .text((d) => {
      return d + "%";
    })
    .data(dataX)
    .attr("x", (d) => {
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
    .attr("id", "graphEarc1")
    //hovering effect
    .on("mouseenter", function (d, i) {
      d3.select("#graphEarc1")
        .transition()
        .duration(2000)
        .attrTween("transform", rotate360);
    });
  // animation for bounce
  graf
    .select("#graphEarc1")
    .transition()
    .attr("transform", "translate(43,535)")
    .delay(600)
    .duration(2500)
    .ease(d3.easeBounce);

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
    .attr("id", "graphEarc2")
    //hovering effect
    .on("mouseenter", function (d, i) {
      d3.select("#graphEarc2")
        .transition()
        .duration(2000)
        .attrTween("transform", rotate360);
    });
  // animation for bounce
  graf
    .select("#graphEarc2")
    .transition()
    .attr("transform", "translate(87,535)")
    .delay(800)
    .duration(2500)
    .ease(d3.easeBounce);

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
    .attr("id", "graphEarc3")
    //hovering effect
    .on("mouseenter", function (d, i) {
      d3.select("#graphEarc3")
        .transition()
        .duration(2000)
        .attrTween("transform", rotate360);
    });
  // animation for bounce
  graf
    .select("#graphEarc3")
    .transition()
    .attr("transform", "translate(130,535)")
    .delay(1000)
    .duration(2500)
    .ease(d3.easeBounce);

  // function to rotate the arcs
  function rotate360() {
    var i = d3.interpolate(0, 360);
    return function (t) {
      if (this.id == "graphEarc1")
        return "translate(43,535) rotate(" + i(t) + ")";
      else if (this.id == "graphEarc2")
        return "translate(87,535) rotate(" + i(t) + ")";
      else if (this.id == "graphEarc3")
        return "translate(130,535) rotate(" + i(t) + ")";
    };
  }
};

// parsing csv file and causing the data to render
fileParser(csvFile);

export { fileParser };
