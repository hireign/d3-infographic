// visualization for Are Your Organization's Leaders Receptive to Emerging Tech?
import { select, 
    csv
 } from 'https://unpkg.com/d3?module';

const svg = select('svg');
const graf = svg.append('g')

const positionX = 58;
const positionY = 228;

graf.attr('transform', `translate(${positionX},${positionY})`);
var colors = ['#ec7936','#fca24c','#fecd88', '#fdeac2'];

var data = [23, 50, 17, 7];
var dataX = [117, 147, 178, 209];
var perc = graf.selectAll('.text')
    .data(data)
    .enter()
    .append('g');

var circle = d3.selectAll('.circleF');

circle.data(colors)
    .style('fill', '#ffffff')
    .style('stroke', function(d,i){
    return(colors[i]);
})
    .style('stroke-width', '2px')
    .attr('transform', 'translate(143, 476)')
    
perc.append('text')
    .data(data)
    .attr("y", 311)
    .text(function(d,i){
        return(data[i]+"%")
    })
    .data(dataX)
    .attr("x", function(d) {return d})
    .style('font-size', '8px')
    .style('fill', '#838383')
    .style('font-weight', '600')
    .style('font-family', 'sans-serif')
    ;