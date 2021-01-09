// visualization for Technologies With Most Potential to Deliver Transformational Value
//reading csv file
d3.csv("Data/data_d.csv").then(data =>{
    data.forEach(d => {
        d.Percentage = +d.Percentage
    });
    render(data);
});

//selecting root svg
const svg = d3.select('svg');
const width = 270;
const height = 60;
//appending new graph on top of root svg
const graf = svg.append('g')

//central position co-ordinates and positioning the graph
const positionX = 20;
const positionY = 483-height;
graf.attr('transform', `translate(${positionX},${positionY})`);

//original colors for the donut visualization
var colors = ["#e97d35", "#f78b4b", "#f9a334", "#ffba45", "#fdcf84", "#feeac9", "#fbf6e0"];
//colors for hovering effect from legend
var colors1 = ["#bfff00", "#f78b4baa", "#f9a334aa", "#ffba45aa", "#fdcf84aa", "#feeac9aa", "#fbf6e0aa"];
var colors2 = ["#e97d35aa", "#bfff00", "#f9a334aa", "#ffba45aa", "#fdcf84aa", "#feeac9aa", "#fbf6e0aa"];
var colors3 = ["#e97d35aa", "#f78b4baa", "#bfff00", "#ffba45aa", "#fdcf84aa", "#feeac9aa", "#fbf6e0aa"];
var colors4 = ["#e97d35aa", "#f78b4baa", "#f9a334aa", "#bfff00", "#fdcf84aa", "#feeac9aa", "#fbf6e0aa"];
var colors5 = ["#e97d35aa", "#f78b4baa", "#f9a334aa", "#ffba45aa", "#bfff00", "#feeac9aa", "#fbf6e0aa"];
var colors6 = ["#e97d35aa", "#f78b4baa", "#f9a334aa", "#ffba45aa", "#fdcf84aa", "#bfff00", "#fbf6e0aa"];
var colors7 = ["#e97d35aa", "#f78b4baa", "#f9a334aa", "#ffba45aa", "#fdcf84aa", "#feeac9aa", "#bfff00"];

//rendering data from csv
const render = data => {
    const xValue = d => d.Technology;
    const yValue = d => d.Percentage;

//creating xScale
const xScale = d3.scaleBand()
    .domain(data.map(xValue))
    .range([0, width])
    .padding(0.4)
const xOffset = d => xScale(xValue(d));

// creating yScale
const yScale = d3.scaleLinear()
  .domain([0, d3.max(data, yValue)])
  .range([height, 0]);
const yOffset = d => yScale(yValue(d));

//creating bars using rectangles
var bars = graf
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
      .attr("id", d => d.Technology.replace(/[ '/]/g,"-").toLowerCase())
      .attr("x",d => xOffset(d))
      .attr('width', xScale.bandwidth())
      .attr("height", 0)
      .attr("y",d => yOffset(0))
      .attr("fill", (d, i) => colors[i]);

// Animation at the page load
bars
  .transition()
  .duration(800)
  .attr("y",d => yOffset(d))
  .attr("height", (d) => height - yOffset(d))
  .delay((d,i) => (i*100));
bars
  .attr("class","graph-elements-d graph-bars-d");

//code snippets to highlight a bar segment from the graph legend beside
d3.selectAll('.graph-elements-d')
    .on('mouseover', mouseoverD)
    .on('mouseout', mouseoutD);

// function to highlight relevant bar segment on hover
function mouseoverD(){
  if(this.id == "graph-label-d1" || this.id == "graph-square-d1" || this.id == "big-data-analytics" || this.id == "graph-image-x1"  || this.id == "graph-label-x1"){
    bars.attr("fill", (data, i) => colors1[i]);
    d3.select("#graph-label-d1").style("font-weight",700).style("fill","#111111");
    d3.select("#graph-square-d1").attr("fill", "#bfff00");
  }
  else if(this.id == "graph-label-d2" || this.id == "graph-square-d2" || this.id == "artificial-intelligence-machine-learning-cognitive" || this.id == "graph-image-x2"  || this.id == "graph-label-x2"){
    bars.attr("fill", (data, i) => colors2[i]);
    d3.select("#graph-label-d2").style("font-weight",700).style("fill","#111111");
    d3.select("#graph-square-d2").attr("fill", "#bfff00");
  }
  else if(this.id == "graph-label-d3" || this.id == "graph-square-d3" || this.id == "public-cloud" || this.id == "graph-image-x3"  || this.id == "graph-label-x3"){
    bars.attr("fill", (data, i) => colors3[i]);
    d3.select("#graph-label-d3").style("font-weight",700).style("fill","#111111");
    d3.select("#graph-square-d3").attr("fill", "#bfff00");
  }
  else if(this.id == "graph-label-d4" || this.id == "graph-square-d4" || this.id == "iot" || this.id == "graph-image-x4"  || this.id == "graph-label-x4"){
    bars.attr("fill", (data, i) => colors4[i]);
    d3.select("#graph-label-d4").style("font-weight",700).style("fill","#111111");
    d3.select("#graph-square-d4").attr("fill", "#bfff00");
  }
  else if(this.id == "graph-label-d5" || this.id == "graph-square-d5" || this.id == "blockchain" || this.id == "graph-image-x5"  || this.id == "graph-label-x5"){
    bars.attr("fill", (data, i) => colors5[i]);
    d3.select("#graph-label-d5").style("font-weight",700).style("fill","#111111");
    d3.select("#graph-square-d5").attr("fill", "#bfff00");
  }
  else if(this.id == "graph-label-d6" || this.id == "graph-square-d6" || this.id == "ar-vr"){
    bars.attr("fill", (data, i) => colors6[i]);
    d3.select("#graph-label-d6").style("font-weight",700).style("fill","#111111");
    d3.select("#graph-square-d6").attr("fill", "#bfff00");
  }
  else if(this.id == "graph-label-d7" || this.id == "graph-square-d7" || this.id == "3d-printing"){
    bars.attr("fill", (data, i) => colors7[i]);
    d3.select("#graph-label-d7").style("font-weight",700).style("fill","#111111");
    d3.select("#graph-square-d7").attr("fill", "#bfff00");
  }
};

// function to reset the graph color
function mouseoutD(){
  bars.attr("fill", (d, i) => colors[i]);
  d3.selectAll(".graph-labels-d").style("font-weight",500).style("fill","#838383");
  d3.selectAll(".graph-squares-d").attr("fill", (d,i) => colors[i]);
};

//appying percentage labels on top of each bar
const topText = graf.append('g')
const texts = topText
.selectAll('text')
.data(data)
.enter()
.append('text')
  .text(d => yValue(d)+"%")
  .attr('x', d => xOffset(d) + xScale.bandwidth() / 4)
  .attr('y', d => yOffset(d) - 3)
  .attr('fill', '#777777')
  .attr('font-size', 6)
  .attr('font-weight', 600)
  .attr('font-family', 'sans-serif');
};