// visualization for Evaluating Opportunities Arising From Emerging Technologies
import { select, 
    csv
 } from 'https://unpkg.com/d3?module';
//reading csv file
csv("Data/data_b.csv").then(data =>{
    data.forEach(d => {
        d.Percentage = +d.Percentage
    });
    render(data);
});
const svg = select('svg');
const graf = svg.append('g')

const positionX = 32;
const positionY = 327;

graf.attr('transform', `translate(${positionX},${positionY})`);
//rendering data
const render = data => {
//creating base square segments
const base1 = graf
    .append('rect')
        .attr('width', 30)
        .attr('height', 7)
        .attr("fill", '#ffe9c7')
        //transition effect
        .on('mouseenter', function (d, i) {
          d3.select(this)
              .attr('fill', '#ffaf46')
              .transition().attr("width", "15").attr("height", "7").duration(2000)
              .transition().attr("width", "20").attr("height", "7").duration(2000)
              .transition().attr("width", "25").attr("height", "7").duration(2000)
              .transition().attr("width", "30").attr("height", "7").duration(2000)
              .attr("fill", '#ffe9c7')
              .transition().attr("width", "30").attr("height", "7").duration(500)
            })
        .on('mouseout', function (d, i) {
          d3.select(this)
              .attr('width', 30)
              .attr('height', 7)
              .attr('fill', '#ffe9c7')
        });
        
const base2 = graf
    .append('rect')
        .attr('x', 50)
        .attr('width', 30)
        .attr('height', 7)
        .attr("fill", '#ffe9c7')
        .on('mouseenter', function (d, i) {
          d3.select(this)
              .attr('fill', '#ffaf46')
              .transition().attr("width", "15").attr("height", "7").duration(2000)
              .transition().attr("width", "20").attr("height", "7").duration(2000)
              .transition().attr("width", "25").attr("height", "7").duration(2000)
              .transition().attr("width", "30").attr("height", "7").duration(2000)
              .attr("fill", '#ffe9c7')
              .transition().attr("width", "30").attr("height", "7").duration(500)
            })
        .on('mouseout', function (d, i) {
          d3.select(this)
              .attr('width', 30)
              .attr('height', 7)
              .attr('fill', '#ffe9c7')
        });
//creation of actual progress using percentage
const progress1 = graf
    .append('rect')
        .attr('width', ((data[0].Percentage)/100)*30)
        .attr('height', 7)
        .attr("fill", '#ffaf46');

const progress2 = graf
    .append('rect')
        .attr('x', 50)
        .attr('width', ((data[1].Percentage)/100)*30)
        .attr('height', 7)
        .attr("fill", '#ffaf46');
//applying labels
const label1 = graf
.append('text')
  .text(d => data[0].Percentage+"%")
  .attr('x', 0)
  .attr('y', -3)
  .attr('fill', '#ee742a')
  .attr('font-size', 15)
  .attr('font-weight', 600)
  .attr('font-family', 'sans-serif');

const label2 = graf
.append('text')
  .text(d => data[1].Percentage+"%")
  .attr('x', 50)
  .attr('y', -3)
  .attr('fill', '#ee742a')
  .attr('font-size', 15)
  .attr('font-weight', 600)
  .attr('font-family', 'sans-serif');

const label3 = graf
.append('text')
  .text('organizations')
  .attr('x', 0)
  .attr('y', 13)
  .attr('fill', '#838383')
  .attr('font-size', 5)
  .attr('font-weight', 500)
  .attr('font-family', 'sans-serif');

const label4 = graf
.append('text')
  .text('organizations')
  .attr('x', 50)
  .attr('y', 13)
  .attr('fill', '#ee742a')
  .attr('font-size', 15)
  .attr('fill', '#838383')
  .attr('font-size', 5)
  .attr('font-weight', 500)
  .attr('font-family', 'sans-serif');

const label5 = graf
.append('text')
  .text(data[0].Type)
  .attr('x', -1)
  .attr('y', 19)
  .attr('fill', '#838383')
  .attr('font-size', 4.5)
  .attr('font-weight', 600)
  .attr('font-family', 'sans-serif');

const label6 = graf
.append('text')
  .text(data[1].Type)
  .attr('x', 45)
  .attr('y', 19)
  .attr('fill', '#ee742a')
  .attr('font-size', 15)
  .attr('fill', '#838383')
  .attr('font-size', 4.5)
  .attr('font-weight', 600)
  .attr('font-family', 'sans-serif');
};