// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log("app.js is loaded")
var tbody = d3.select("tbody");
console.log(data)

data.forEach(function(sightings){
    console.log(sightings);
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
});
});





// var button = d3.select('#filter-btn');
// button.on("click", runEnter);
// function runEnter() {
//     d3.event.preentDefault();
//     var inputElement = d3.select('#datetime');
//     var inputValue = inputElement.property('value')
//     console.log(inputValue);