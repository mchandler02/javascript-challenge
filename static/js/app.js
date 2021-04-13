// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log("app.js is loaded")
var button = d3.select('#filter-btn');
button.on("click", runEnter);
function runEnter() {
    d3.event.preentDefault();
    var inputElement = d3.select('#datetime');
    var inputValue = inputElement.property('value')
    console.log(inputValue);
    
}