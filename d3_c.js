// visualization for Who is Responsible for Evaluating Emerging Technologies
//reading csv file
d3.csv("Data/data_c.csv").then((data) => {
  data.forEach((d) => {
    d.Percentage = +d.Percentage;
  });
  render(data);
});
//selecting root svg
const svg = d3.select("svg");
const width = 120;
const height = 60;
//appending new graph on top of root svg
const graf = svg.append("g");

//central position co-ordinates and positioning the graph
const positionX = 159;
const positionY = 367 - height;
graf.attr("transform", `translate(${positionX},${positionY})`);

//rendering data for calculations
const render = (data) => {
  const xValue = (d) => d.Percentage;
  const yValue = (d) => d.Groups;

  //creation of y scale
  const yScale = d3
    .scaleBand()
    .domain(data.map(yValue))
    .range([0, height])
    .padding(0.2);

  //creation of x scale
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, xValue)])
    .range([0, width - 50]);

  //creating bars using rectangle shapes
  const bars = graf
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("id", d => yValue(d).replace(/[ ']/g,""))
    .attr("y", (d) => yScale(yValue(d)))
    .attr("width", (d) => xScale(xValue(d)))
    .attr("height", yScale.bandwidth())
    .attr("fill", "#ffaf46")
    //for hovering effect
    .on("mouseenter", function (d, i) {
      d3.select(this).attr("fill", "#bfff00");
    })
    .on("mouseout", function (d, i) {
      d3.select(this).attr("fill", "#ffaf46");
    });

  //appending percentage label on each bar
  const label1 = graf.append("g");
  const labelx = label1
    .selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text(d => xValue(d) + "%")
    .attr("x", 2)
    .attr("y", (d) => yScale(yValue(d)) + 7)
    .attr("fill", "#fefefe")
    .attr("font-size", 6)
    .attr("font-weight", 600)
    .attr("font-family", "sans-serif")
    //for hovering effect
    .on("mouseenter", function (d, i) {
      d3.select("#"+d.Groups.replace(/[ ']/g,"")).attr("fill", "#bfff00");
    })
    .on("mouseout", function (d, i) {
      d3.select("#"+d.Groups.replace(/[ ']/g,"")).attr("fill", "#ffaf46");
    });

  //appending responsible group names beside bar ends
  const label2 = graf.append("g");
  const labely = label2
    .selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text(d => yValue(d))
    .attr("x", (d) => xScale(xValue(d)) + 3)
    .attr("y", (d) => yScale(yValue(d)) + 6.5)
    .attr("fill", "#ee742a")
    .attr("font-size", 5)
    .attr("font-weight", 600)
    .attr("font-family", "sans-serif");
};
