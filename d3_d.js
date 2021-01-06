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
//below are the colors for hovering effect from segment names given beside on the webpage
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
//creating x and y scales
const xScale = d3.scaleBand()
    .domain(data.map(xValue))
    .range([0, width])
    .padding(0.4)
const xOffset = d => xScale(xValue(d));

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
      .attr('height', d => height - yOffset(d))
      .attr("fill", (d, i) => colors[i])
      .attr('transform', d => `translate(${xOffset(d)},${yOffset(d)})`)
      //hovering effect
      .on('mouseenter', function (d, i) {
        d3.select(this)
            .attr('fill', '#bfff00')
      })
      .on('mouseout', function (d, i) {
        d3.select(this)
            .attr('fill', colors[i])
      });
//code snippets to highlight bars using chart legent
d3.selectAll('#graphElementsD1')
  .on('mouseover', mouseover1)
  .on('mouseout', mouseoutD);
function mouseover1(){
  graf.selectAll('rect').attr("fill", (d, i) => colors1[i])
};
d3.selectAll('#graphElementsD2')
  .on('mouseover', mouseover2)
  .on('mouseout', mouseoutD);
function mouseover2(){ 
  graf.selectAll('rect').attr("fill", (d, i) => colors2[i])
};
d3.selectAll('#graphElementsD3')
  .on('mouseover', mouseover3)
  .on('mouseout', mouseoutD);
function mouseover3(){
  graf.selectAll('rect').attr("fill", (d, i) => colors3[i])
};
d3.selectAll('#graphElementsD4')
  .on('mouseover', mouseover4)
  .on('mouseout', mouseoutD);
function mouseover4(){
  graf.selectAll('rect').attr("fill", (d, i) => colors4[i])
};
d3.selectAll('#graphElementsD5')
  .on('mouseover', mouseover5)
  .on('mouseout', mouseoutD);
function mouseover5(){
  graf.selectAll('rect').attr("fill", (d, i) => colors5[i])
};
d3.selectAll('#graphElementsD6')
  .on('mouseover', mouseover6)
  .on('mouseout', mouseoutD);
function mouseover6(){
  graf.selectAll('rect').attr("fill", (d, i) => colors6[i])
};
d3.selectAll('#graphElementsD7')
  .on('mouseover', mouseover7)
  .on('mouseout', mouseoutD);
function mouseover7(){
  graf.selectAll('rect').attr("fill", (d, i) => colors7[i])
};
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