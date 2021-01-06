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
//selecting root svg
const svg = select('svg');
//appending new graph on top of root svg
const graf = svg.append('g')

//central position co-ordinates
const positionX = 32;
const positionY = 327;

graf.attr('transform', `translate(${positionX},${positionY})`);
//rendering data
const render = data => {  //rendering data
  //creating base square segments
  const base1 = graf    //base rectangle 1
    .append('rect')
    .attr('width', 30)
    .attr('height', 7)
    .attr("fill", '#ffe9c7')
    .on('mouseenter', transition_b1);   // for transition effect
  const base2 = graf    //base rectangle 2
    .append('rect')
    .attr('x', 50)
    .attr('width', 30)
    .attr('height', 7)
    .attr("fill", '#ffe9c7')
    .on('mouseenter', transition_b2);   // for transition effect

  //creation of actual progress bars using percentage from csv
  const progress1 = graf    //creation of first graph b1
    .append('rect')
    .attr('x', 0)
    .attr('width', ((data[0].Percentage)/100)*30)
    .attr('height', 7)
    .attr('id', "progress1_b")
    .attr("fill", '#ffaf46')
    .on('mouseenter', transition_b1);   // for transition effect
  const progress2 = graf    //creation of second graph b2
    .append('rect')
    .attr('x', 50)
    .attr('width', ((data[1].Percentage)/100)*30)
    .attr('height', 7)
    .attr('id', "progress2_b")
    .attr("fill", '#ffaf46')
    .on('mouseenter', transition_b2);   // for transition effect

  // transition effect functions
  function transition_b1(){   //transition for graph b1
    d3.select("#progress1_b")
        .transition().attr("fill", '#bfff00').attr("width", "30").attr("height", "7").duration(1500)
        .transition().attr("fill", '#bfff00').attr('width', ((data[0].Percentage)/100)*5).attr("height", "7").duration(400)
        .transition().attr("fill", '#bfff00').attr('width', ((data[0].Percentage)/100)*30).attr("height", "7").duration(200)
        .transition().attr("fill", '#bfff00').attr('width', ((data[0].Percentage)/100)*20).attr("height", "7").duration(200)
        .transition().attr("fill", '#bfff00').attr('width', ((data[0].Percentage)/100)*28).attr("height", "7").duration(150)
        .transition().attr("fill", '#bfff00').attr('width', ((data[0].Percentage)/100)*22).attr("height", "7").duration(150)
        .transition().attr("fill", '#ffaf46').attr('width', ((data[0].Percentage)/100)*28).attr("height", "7").duration(100)
        .transition().attr("fill", '#ffaf46').attr('width', ((data[0].Percentage)/100)*30).attr("height", "7").duration(50)
  }
  function transition_b2(){   //transition for graph b2
    d3.select("#progress2_b")
        .transition().attr("fill", '#bfff00').attr("width", "30").attr("height", "7").duration(1500)
        .transition().attr("fill", '#bfff00').attr('width', ((data[1].Percentage)/100)*5).attr("height", "7").duration(400)
        .transition().attr("fill", '#bfff00').attr('width', ((data[1].Percentage)/100)*30).attr("height", "7").duration(200)
        .transition().attr("fill", '#bfff00').attr('width', ((data[1].Percentage)/100)*20).attr("height", "7").duration(200)
        .transition().attr("fill", '#bfff00').attr('width', ((data[1].Percentage)/100)*28).attr("height", "7").duration(150)
        .transition().attr("fill", '#bfff00').attr('width', ((data[1].Percentage)/100)*22).attr("height", "7").duration(150)
        .transition().attr("fill", '#ffaf46').attr('width', ((data[1].Percentage)/100)*28).attr("height", "7").duration(100)
        .transition().attr("fill", '#ffaf46').attr('width', ((data[1].Percentage)/100)*30).attr("height", "7").duration(50)
  }

  //labels for graph b
  // percentage label for first graph
  const label1 = graf
  .append('text')
    .text(d => data[0].Percentage+"%")
    .attr('x', 0)
    .attr('y', -3)
    .attr('fill', '#ee742a')
    .attr('font-size', 15)
    .attr('font-weight', 600)
    .attr('font-family', 'sans-serif');
  // percentage label for second graph
  const label2 = graf
  .append('text')
    .text(d => data[1].Percentage+"%")
    .attr('x', 50)
    .attr('y', -3)
    .attr('fill', '#ee742a')
    .attr('font-size', 15)
    .attr('font-weight', 600)
    .attr('font-family', 'sans-serif');
  // static text for organizations
  const label3 = graf
  .append('text')
    .text('organizations')
    .attr('x', 0)
    .attr('y', 13)
    .attr('fill', '#838383')
    .attr('font-size', 5)
    .attr('font-weight', 500)
    .attr('font-family', 'sans-serif');
  // static text for organizations
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
  // label to show evaluation type loaded from csv
  const label5 = graf
  .append('text')
    .text(data[0].Type)
    .attr('x', -1)
    .attr('y', 19)
    .attr('fill', '#838383')
    .attr('font-size', 4.5)
    .attr('font-weight', 600)
    .attr('font-family', 'sans-serif');
  // label to show evaluation type loaded from csv
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