var data = [["Fall 2015", 2.5], ["Spring 2016", 3.7], ["Fall 2016", 1.8]];

var graph = d3.select("#gpa-graph");
var height = graph.style("height").replace("px", "");
var width = graph.style("width").replace("px", "");

var x = d3.scaleOrdinal().domain([0, 2]).range([0, width]);
var y = d3.scaleLinear().domain([0, 5]).range([height, 0]);

var xAxis = d3.axisBottom().scale(x).tickFormat(function(d) { return d; });
var yAxis = d3.axisLeft().scale(y);

var line = d3.line()
    .x(function(d) { return x(d[0]); })
    .y(function(d) { return y(d[1]); });

graph.append("svg:g")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxis);
graph.append("svg:g").call(yAxis);
graph.append("svg:path").attr("d", line(data));
