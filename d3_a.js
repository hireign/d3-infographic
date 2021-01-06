// visualization for Top Motivators for Implementing an Emerging Technology
//selecting root svg
const svg = d3.select('svg');
//appending new graph on top of root svg
const graf = svg.append('g');

//central position co-ordinates and positioning the graph
const positionX = 58;
const positionY = 228;
graf.attr('transform', `translate(${positionX},${positionY})`);

//original colors for the donut visualization
var colors = ['#d56734',  '#ffe7be','#fdcf84', '#ffba45', '#f9a334', '#f78644'];
//below are the colors for hovering effect from segment names given beside on the webpage
var colors1 = ['#bfff00',  '#ffe7beaa','#fdcf84aa', '#ffba45aa', '#f9a334aa', '#f78644aa'];
var colors2 = ['#d56734aa',  '#ffe7beaa','#fdcf84aa', '#ffba45aa', '#f9a334aa', '#bfff00'];
var colors3 = ['#d56734aa',  '#ffe7beaa','#fdcf84aa', '#ffba45aa', '#bfff00', '#f78644aa'];
var colors4 = ['#d56734aa',  '#ffe7beaa','#fdcf84aa', '#bfff00', '#f9a334aa', '#f78644aa'];
var colors5 = ['#d56734aa',  '#ffe7beaa','#bfff00', '#ffba45aa', '#f9a334aa', '#f78644aa'];
var colors6 = ['#d56734aa',  '#bfff00','#fdcf84aa', '#ffba45aa', '#f9a334aa', '#f78644aa'];
//data(in percentage)
var data = [29, 3, 9, 15, 18, 24];
const r = 25;
//pie() and arc() functions for calculations of start,end angles of different chart segments
var py = d3.pie().value(function(d) { 
    return d; 
});
//arc for the donut
var arc = d3.arc()
    .innerRadius(16)
    .outerRadius(r);
//arc for labels
var arcL = d3.arc()
    .innerRadius(30)
    .outerRadius(33);
//creation of arc segments
var arcs = graf.selectAll('.arc')
    .data(py(data))
    .enter()
    .append('g')
    .attr('class', 'arc');
//creation of whole path including multiple arc segments
var paths = arcs.append('path')
function pathcreation(){
  paths
  .attr('d', arc)
  .attr('fill', function(d, i) { return colors[i]; })
  //hovering effect
  .on('mouseenter', function (d, i) {
    d3.select(this)
        .attr('fill', '#bfff00')
  })
  .on('mouseout', mouseoutA);
}
pathcreation();

//code snippets to highlight a graph segment from the graph legend beside
d3.selectAll('#graphElementsA1, #graphElementsA2, #graphElementsA3, #graphElementsA4, #graphElementsA5, #graphElementsA6')
    .on('mouseover', mouseover_a)
    .on('mouseout', mouseoutA);
// function to highlight relevant graph segment on legend hover
function mouseover_a(){
  if(this.id == "graphElementsA1")
    graf.selectAll('path').attr("fill", (data, i) => colors1[i])
  else if(this.id == "graphElementsA2")
    graf.selectAll('path').attr("fill", (data, i) => colors2[i])
  else if(this.id == "graphElementsA3")
    graf.selectAll('path').attr("fill", (data, i) => colors3[i])
  else if(this.id == "graphElementsA4")
    graf.selectAll('path').attr("fill", (data, i) => colors4[i])
  else if(this.id == "graphElementsA5")
    graf.selectAll('path').attr("fill", (data, i) => colors5[i])
  else
    graf.selectAll('path').attr("fill", (data, i) => colors6[i])
};
// function to reset the graph color
  function mouseoutA(){
    graf.selectAll('path').attr("fill", (d, i) => colors[i])
  };
  
//creation of percentage labels  
var labels = graf.selectAll('.text')
    .data(data)
    .enter()
    .append('g')
    .attr("transform", "translate(-2,2)");
labels.append('text')
    .data(data)
    .text(function(d,i){
        return(data[i]+"%")
    })
    .data(py(data))
    .attr("transform", function(d) { return "translate(" + arcL.centroid(d) + ")"; })
    .style('font-size', '4px')
    .style('fill', '#666666')
    .style('font-weight', '600')
    .style('font-family', 'sans-serif')
    .attr('class', 'arcLabel');
    
//creation of line segments from label to graph
graf.selectAll('lines')
  .data(py(data))
  .enter()
  .append('polyline')
    .attr("stroke", "#838383")
    .attr("stroke-width", 0.5)
    .attr('points', function(d) {
      var x = arc.centroid(d)
      var y = arcL.centroid(d) 
      return [x, y]
    })
    .attr("transform", "scale(0.9)")