d3.csv("Data.csv").then(function (data) {
    console.log(data);
    var movies = data;
    var button = d3.select("#search");
    var form = d3.select("#form");
    button.on("click", runEnter);
    form.on("submit", runEnter);

// Defining the function
function runEnter() {

    // This line of code selects the <tbody> from the html and clears it. If this is not used, then the results would appear on top of the previous result.
    d3.select("tbody").html("") 
    
    // This code is needed to prevent the page from reloading.
    d3.event.preventDefault(); 
    
    // This code will get the user's input from what the user will type in the html <input> since we assigned it the "user-input" id. It will get the value and store it in our inputValue variable
    var inputValue = d3.select("#user-input").property("value");
    
    // This code will filter the movies looking at the actors column. It will store the values when there is a match from the text sequence the user entered and the text from our actors column from the CSV data.
    var filteredMovies = 
    movies.filter(movies => movies.actors.includes(inputValue));
    
    // This was the easiest approach I found to sort the results by a different column in descending order. I had to include a new script in my head to use the _.sortBy 
    //This is the script:  
    //<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/0.10.0/lodash.min.js"></script>
    var output = _.sortBy(filteredMovies, 'avg_vote').reverse()
    // Once I had all the values in my output variable, all I needed was to loop through them and add them to the table one by one. This was done using d3, where I inserted the value for each one of the columns I wanted using the necessary html to fit each table row.
    for (var i = 0; i < filteredMovies.length; i++) {
    d3.select("tbody").insert("tr").html(
    "<td>" + [i+1] + "</td>" +
    "<td>" + (output[i]['original_title'])+"</a>"+"</td>" + 
    "<td>" + (output[i]['avg_vote'])+"</td>" +
    "<td>" + (output[i]['year'])+"</td>" +
    "<td>" + (output[i]['description'])+"</td>" ) }}
});