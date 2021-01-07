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
      .attr('width', xScale.bandwidth())
      .attr('height', 0)
      .attr("fill", (d, i) => colors[i])
      .attr("id", "graphBarD")
      .attr('transform', d => `translate(${xOffset(d)},${yOffset(d)})`)
      //hovering effect
      .on('mouseenter', function (d, i) {
        d3.select(this)
            .attr('fill', '#bfff00')
      })
      // resetting the color after hover
      .on('mouseout', function (d, i) {
        d3.select(this)
            .attr('fill', colors[i])
      });

// Animation at the page load
svg.selectAll("#graphBarD")
.transition()
.duration(800)
.attr("height", function(d) { return height - yOffset(d); })
.delay((d,i) => (i*100));

//code snippets to highlight a bar segment from the graph legend beside
d3.selectAll('#graphElementsD1, #graphElementsD2, #graphElementsD3, #graphElementsD4, #graphElementsD5, #graphElementsD6, #graphElementsD7')
    .on('mouseover', mouseover_d)
    .on('mouseout', mouseoutD);
// function to highlight relevant bar segment on legend hover
function mouseover_d(){
  if(this.id == "graphElementsD1")
    graf.selectAll('rect').attr("fill", (data, i) => colors1[i])
  else if(this.id == "graphElementsD2")
    graf.selectAll('rect').attr("fill", (data, i) => colors2[i])
  else if(this.id == "graphElementsD3")
    graf.selectAll('rect').attr("fill", (data, i) => colors3[i])
  else if(this.id == "graphElementsD4")
    graf.selectAll('rect').attr("fill", (data, i) => colors4[i])
  else if(this.id == "graphElementsD5")
    graf.selectAll('rect').attr("fill", (data, i) => colors5[i])
  else if(this.id == "graphElementsD6")
    graf.selectAll('rect').attr("fill", (data, i) => colors6[i])
  else
    graf.selectAll('rect').attr("fill", (data, i) => colors7[i])
};
// function to reset the graph color
function mouseoutD(){
  graf.selectAll('rect').attr("fill", (d, i) => colors[i])
};

//appying labels on top of each bar
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