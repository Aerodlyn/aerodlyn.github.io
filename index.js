var overallGPA = [{semester: "Fall 2015", gpa: 3.22}, {semester: "Spring 2016", gpa: 3.62}, 
    {semester: "Fall 2016", gpa: 3.42}];
var inMajorGPA = [{semester: "Fall 2015", gpa: 4.00}, {semester: "Spring 2016", gpa: 4.00}, 
    {semester: "Fall 2016", gpa: 3.54}];

var graph = d3.select("#gpa-graph");
var height = graph.style("height").replace("px", "");
var width = graph.style("width").replace("px", "");

var x = d3.scaleBand().domain(overallGPA.map(function(d) { return d.semester; })).range([0, width]).padding(0.1);
var y = d3.scaleLinear().domain([0, 4]).range([height, 0]);

var xAxis = d3.axisBottom().scale(x);
var yAxis = d3.axisLeft().scale(y);

graph.append("svg:g")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxis);
graph.append("svg:g").call(yAxis);
graph.selectAll(".bar")
    .data(overallGPA)
    .enter()
    .append("rect")
    .attr("class", "overall-bar")
    .attr("x", function(d) { return x(d.semester); })
    .attr("width", x.bandwidth())
    .attr("y", function(d) { return y(d.gpa); })
    .attr("height", function(d) { return height - y(d.gpa); });
