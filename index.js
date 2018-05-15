var overallGPA = [{semester: "Fall 2015", gpa: 3.2231}, {semester: "Spring 2016", gpa: 3.6214}, 
    {semester: "Fall 2016", gpa: 3.4250}, {semester: "Spring 2017", gpa: 3.5000}, {semester: "Fall 2017", gpa: 3.1750},
    {semester: "Spring 2018", gpa: 3.7750}, {semester: "Overall", gpa: 3.4533}];
var inMajorGPA = [{semester: "Fall 2015", gpa: 0.00}, {semester: "Spring 2016", gpa: 4.00}, 
    {semester: "Fall 2016", gpa: 3.3500}, {semester: "Spring 2017", gpa: 3.5000}, {semester: "Fall 2017", gpa: 3.0000},
    {semester: "Spring 2018", gpa: 3.8000}, {semester: "Overall", gpa: 3.4630}];

var data = [overallGPA, inMajorGPA];
var dataNames = ["Overall GPA", "In-Major GPA"];

var graph = d3.select("#gpa-graph");
var height = graph.style("height").replace("px", "");
var width = graph.style("width").replace("px", "");

var x = d3.scaleBand().domain(overallGPA.map(function(d) { return d.semester; })).range([0, width]).padding(0.25);
var y = d3.scaleLinear().domain([0, 4]).range([height, 0]);
var z = d3.scaleOrdinal().range([getComputedStyle(document.body).getPropertyValue("--header-background-color"), 
    getComputedStyle(document.body).getPropertyValue("--header-text-color")]);

var xAxis = d3.axisBottom().scale(x);
var yAxis = d3.axisLeft().scale(y);

graph.append("svg:g")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxis);
graph.append("svg:g").call(yAxis);
graph.append("g")
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("fill", function(d, i) { return z(i); })
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter()
    .append("rect")
    .attr("x", function(d) {
        var index = -1;
        
        for (i = 0; i < data.length; i++) {
            if (data[i].includes(d)) {
                index = i;
                break;
            }
        }

        return x(d.semester) + i * (x.bandwidth() / data.length);
    })
    .attr("width", x.bandwidth() / data.length)
    .attr("y", function(d) { return y(d.gpa); })
    .attr("height", function(d) { return height - y(d.gpa); });

var legend = graph.append("g")
    .selectAll("g")
    .data(dataNames)
    .enter()
    .append("g")
    .attr("class", "legend")
    .attr("transform", function(d, i) {
        return "translate(" + (width * 1.25) + ", " + (25 * i) + ")";
    });

legend.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 20)
    .attr("height", 20)
    .style("fill", function(d, i) { return z(i); });

legend.append("text")
    .attr("x", -100)
    .attr("y", 15)
    .text(function(d) { console.log(d); return d; });
