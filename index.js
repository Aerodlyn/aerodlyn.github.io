var overallGPA = [{semester: "Fall 2015", gpa: 3.22}, {semester: "Spring 2016", gpa: 3.62}, 
    {semester: "Fall 2016", gpa: 3.42}];
var inMajorGPA = [{semester: "Fall 2015", gpa: 4.00}, {semester: "Spring 2016", gpa: 4.00}, 
    {semester: "Fall 2016", gpa: 3.54}];

var graph = d3.select("#gpa-graph");
var height = graph.style("height").replace("px", "");
var width = graph.style("width").replace("px", "");

var x = d3.scalePoint().domain(overallGPA.map(function(d) { return d.semester; })).range([0, width]);
var y = d3.scaleLinear().domain([3, 4]).range([height, 0]);

var xAxis = d3.axisBottom().scale(x);
var yAxis = d3.axisLeft().scale(y);

var line = d3.line()
    .x(function(d) { return x(d.semester); })
    .y(function(d) { return y(d.gpa); });

graph.append("svg:g")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxis);
graph.append("svg:g").call(yAxis);
graph.append("svg:path").attr("d", line(overallGPA));
graph.append("svg:path").attr("d", line(inMajorGPA));
