// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

var buttonContainer = document.getElementById("button-container");

// Open a GET request to the JSON file
xhr.open("GET", "./resources/outcomes.json", true);

// Set the responseType to "json"
xhr.responseType = "json";

// Add an event listener to handle the onload event
xhr.onload = function() {
  // Check if the status is OK
  if (xhr.status === 200) {
    // Get the JSON response
    var outcomesDataset = xhr.response;

    // Loop through each key in the JSON data object and create a button element for each key
    for (var label in outcomesDataset) {
      // Create a new button element
      var button = document.createElement("button");
      
      // Set the label of the button to the current key
      button.textContent = label;
      button.classList = "button-created"
      
      // Add an event listener to the button that records its label when clicked
      button.addEventListener("click", function(event) {
        // Remove all previously created buttons
        buttonContainer.innerHTML = '';
      
        // Get the label of the clicked button
        var clickedLabel = event.target.textContent;
      
        // Loop through each key in the next level of nested data and create a button element for each key
        for (var label2 in outcomesDataset[clickedLabel]) {
          // Create a new button element
          var button2 = document.createElement("button");
      
          // Set the label of the button to the current key
          button2.textContent = label2;
      
          // Add an event listener to the button that records its label when clicked
          button2.addEventListener("click", function(event) {
            // Get the label of the clicked button
            var clickedLabel2 = event.target.textContent;
      
            // Do something with the clicked label
            console.log(clickedLabel2);
          });
      
          // Add the button to the parent element
          buttonContainer.appendChild(button2);
        }
      });
      
      // Add the button to the parent element
      buttonContainer.appendChild(button);
    }
  }
};

// Send the request
xhr.send();
