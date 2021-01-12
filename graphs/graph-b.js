// visualization for Evaluating Opportunities Arising From Emerging Technologies
//reading csv file
d3.csv("data/data-b.csv").then((data) => {
  data.forEach((d) => {
    d.Percentage = +d.Percentage;
  });
  render(data);
});

//selecting root svg
const svg = d3.select("svg");
//appending new graph on top of root svg
const graf = svg.append("g");

//central position co-ordinates and positioning the graph
const positionX = 32;
const positionY = 327;
graf.attr("transform", `translate(${positionX},${positionY})`);

//rendering data
const render = (data) => {
  //rendering data
  //creating base square segments
  const base1 = graf //base rectangle 1
    .append("rect")
    .attr("width", 30)
    .attr("height", 7)
    .attr("fill", "#ffe9c7")
    .attr("id", "graph-basebar-b1")
    .attr(
      "class",
      "graph-elements-b graph-basebars-b graph-bars-b graph-elements-b1"
    )
    .on("mouseenter", transitionB1); // for transition effect
  const base2 = graf //base rectangle 2
    .append("rect")
    .attr("x", 50)
    .attr("width", 30)
    .attr("height", 7)
    .attr("fill", "#ffe9c7")
    .attr("id", "graph-basebar-b2")
    .attr(
      "class",
      "graph-elements-b graph-basebars-b graph-bars-b graph-elements-b2"
    )
    .on("mouseenter", transitionB2); // for transition effect

  //creation of actual progress bars using percentage from csv
  //creation of first graph b1
  const progress1 = graf
    .append("rect")
    .attr("x", 0)
    .attr("width", 0)
    .attr("height", 7)
    .attr("id", "graph-progressbar-b1")
    .attr(
      "class",
      "graph-elements-b graph-progressbars-b graph-bars-b graph-elements-b1"
    )
    .attr("fill", "#ffaf46")
    .on("mouseenter", transitionB1); // for transition effect
  //creation of second graph b2
  const progress2 = graf
    .append("rect")
    .attr("x", 50)
    .attr("width", 0)
    .attr("height", 7)
    .attr("id", "graph-progressbar-b2")
    .attr(
      "class",
      "graph-elements-b graph-progressbars-b graph-bars-b graph-elements-b2"
    )
    .attr("fill", "#ffaf46")
    .on("mouseenter", transitionB2); // for transition effect

  // Animation at the page load for bar graph
  progress1
    .transition()
    .duration(800)
    .attr("width", (data[0].Percentage / 100) * 30)
    .delay((d, i) => i * 100);
  progress2
    .transition()
    .duration(800)
    .attr("width", (data[1].Percentage / 100) * 30)
    .delay((d, i) => i * 100);

  //labels for graph b
  // percentage label for first graph
  const percentage1 = graf
    .append("text")
    .text((d) => data[0].Percentage + "%")
    .attr("x", 0)
    .attr("y", -3)
    .attr("fill", "#ee742a")
    .attr("font-size", 15)
    .attr("font-weight", 600)
    .attr("font-family", "sans-serif")
    .attr("id", "graph-percentage-b1")
    .attr("class", "graph-elements-b graph-percentages-b graph-elements-b1");
  // percentage label for second graph
  const percentage2 = graf
    .append("text")
    .text((d) => data[1].Percentage + "%")
    .attr("x", 50)
    .attr("y", -3)
    .attr("fill", "#ee742a")
    .attr("font-size", 15)
    .attr("font-weight", 600)
    .attr("font-family", "sans-serif")
    .attr("id", "graph-percentage-b2")
    .attr("class", "graph-elements-b graph-percentages-b graph-elements-b2");
  // static text for organizations
  const label1 = graf
    .append("text")
    .text("organizations")
    .attr("x", 0)
    .attr("y", 13)
    .attr("fill", "#838383")
    .attr("font-size", 5)
    .attr("font-weight", 500)
    .attr("font-family", "sans-serif")
    .attr("class", "graph-elements-b graph-elements-b1");
  // static text for organizations
  const label2 = graf
    .append("text")
    .text("organizations")
    .attr("x", 50)
    .attr("y", 13)
    .attr("fill", "#ee742a")
    .attr("font-size", 15)
    .attr("fill", "#838383")
    .attr("font-size", 5)
    .attr("font-weight", 500)
    .attr("font-family", "sans-serif")
    .attr("class", "graph-elements-b graph-elements-b2");
  // label to show evaluation type loaded from csv
  const label3 = graf
    .append("text")
    .text(data[0].Type)
    .attr("x", -1)
    .attr("y", 19)
    .attr("fill", "#838383")
    .attr("font-size", 4.5)
    .attr("font-weight", 600)
    .attr("font-family", "sans-serif")
    .attr("id", "graph-label-b1")
    .attr("class", "graph-elements-b graph-labels-b graph-elements-b1");
  // label to show evaluation type loaded from csv
  const label4 = graf
    .append("text")
    .text(data[1].Type)
    .attr("x", 45)
    .attr("y", 19)
    .attr("fill", "#ee742a")
    .attr("font-size", 15)
    .attr("fill", "#838383")
    .attr("font-size", 4.5)
    .attr("font-weight", 600)
    .attr("font-family", "sans-serif")
    .attr("id", "graph-label-b2")
    .attr("class", "graph-elements-b graph-labels-b graph-elements-b2");

  // transition effect functions
  function transitionB1() {
    //transition for graph b1
    progress1
      .transition()
      .attr("fill", "#bfff00")
      .attr("width", "30")
      .attr("height", "7")
      .duration(1500)
      .transition()
      .attr("fill", "#bfff00")
      .attr("width", (data[0].Percentage / 100) * 5)
      .attr("height", "7")
      .duration(400)
      .transition()
      .attr("fill", "#bfff00")
      .attr("width", (data[0].Percentage / 100) * 30)
      .attr("height", "7")
      .duration(200)
      .transition()
      .attr("fill", "#bfff00")
      .attr("width", (data[0].Percentage / 100) * 20)
      .attr("height", "7")
      .duration(200)
      .transition()
      .attr("fill", "#bfff00")
      .attr("width", (data[0].Percentage / 100) * 28)
      .attr("height", "7")
      .duration(150)
      .transition()
      .attr("fill", "#bfff00")
      .attr("width", (data[0].Percentage / 100) * 22)
      .attr("height", "7")
      .duration(150)
      .transition()
      .attr("fill", "#ffaf46")
      .attr("width", (data[0].Percentage / 100) * 28)
      .attr("height", "7")
      .duration(100)
      .transition()
      .attr("fill", "#ffaf46")
      .attr("width", (data[0].Percentage / 100) * 30)
      .attr("height", "7")
      .duration(50);
  }

  function transitionB2() {
    //transition for graph b2
    progress2
      .transition()
      .attr("fill", "#bfff00")
      .attr("width", "30")
      .attr("height", "7")
      .duration(1500)
      .transition()
      .attr("fill", "#bfff00")
      .attr("width", (data[1].Percentage / 100) * 5)
      .attr("height", "7")
      .duration(400)
      .transition()
      .attr("fill", "#bfff00")
      .attr("width", (data[1].Percentage / 100) * 30)
      .attr("height", "7")
      .duration(200)
      .transition()
      .attr("fill", "#bfff00")
      .attr("width", (data[1].Percentage / 100) * 20)
      .attr("height", "7")
      .duration(200)
      .transition()
      .attr("fill", "#bfff00")
      .attr("width", (data[1].Percentage / 100) * 28)
      .attr("height", "7")
      .duration(150)
      .transition()
      .attr("fill", "#bfff00")
      .attr("width", (data[1].Percentage / 100) * 22)
      .attr("height", "7")
      .duration(150)
      .transition()
      .attr("fill", "#ffaf46")
      .attr("width", (data[1].Percentage / 100) * 28)
      .attr("height", "7")
      .duration(100)
      .transition()
      .attr("fill", "#ffaf46")
      .attr("width", (data[1].Percentage / 100) * 30)
      .attr("height", "7")
      .duration(50);
  }
};
