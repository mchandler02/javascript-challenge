// from data.js
var UFOdata = data;

// YOUR CODE HERE!
// console.log("app.js is loaded")
var tbody = d3.select("tbody");
// console.log(data)


UFOdata.forEach(function(sightings){
    // console.log(sightings);
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(function([key, value]) {
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
});
});

var button = d3.select('#filter-btn');
var form = d3.select('#form');
button.on("click", runEnter);
form.on("submit", runEnter);
function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select('#datetime');
    var inputValue = inputElement.property('value');
    // console.log(inputValue);
    // console.log(UFOdata);
    var filteredSightings = UFOdata.filter(sighting => sighting.datetime == inputValue);
    console.log(filteredSightings)
    tbody.html("");
    filteredSightings.forEach(function(sightings){
        var filteredRow = tbody.append("tr");
        Object.entries(sightings).forEach(function([key, value]){
            var filteredCell = filteredRow.append("td");
            filteredCell.text(value);
        });
    });
};