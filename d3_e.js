// visualization for Are Your Organization's Leaders Digitally Literate?
//selecting root svg
const svg = d3.select('svg');
//appending new graph on top of root svg
const graf = svg.append('g')

var data = [53, 25, 22];
var dataX = [37, 81, 124];

var perc = graf.selectAll('.text')
    .data(data)
    .enter()
    .append('g');

var circle = d3.selectAll('.circleE');

circle.style('fill', '#ffffff')
    .style('stroke', '#ffe9c9')
    .style('stroke-width', '5px');
    
perc.append('text')
    .data(data)
    .attr("y", 537.5)
    .text(function(d,i){
        return(data[i]+"%")
    })
    .data(dataX)
    .attr("x", function(d) {return d})
    .attr('fill', '#ee742a')
    .attr('font-size', 6.5)
    .attr('font-weight', 600)
    .attr('font-family', 'sans-serif');
    ;

var arc1 = d3.arc()
    .innerRadius(10.5)
    .outerRadius(15.5)
    .startAngle(0)
    .endAngle(data[0]*(2*Math.PI/100));
graf.append('path')
    .attr('d', arc1)
    .attr('fill', '#fcb344')
    .attr("transform", "translate(43,535)");

var arc2 = d3.arc()
    .innerRadius(10.5)
    .outerRadius(15.5)
    .startAngle(0)
    .endAngle(data[1]*(2*Math.PI/100));
graf.append('path')
    .attr('d', arc2)
    .attr('fill', '#fcb344')
    .attr("transform", "translate(87,535)");

var arc3 = d3.arc()
    .innerRadius(10.5)
    .outerRadius(15.5)
    .startAngle(0)
    .endAngle(data[2]*(2*Math.PI/100));
graf.append('path')
    .attr('d', arc3)
    .attr('fill', '#fcb344')
    .attr("transform", "translate(130,535)");