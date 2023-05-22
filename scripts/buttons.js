// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

var buttonContainer = document.getElementById("button-container");

// Open a GET request to the JSON file
xhr.open("GET", "./resources/outcomes.json", true);

// Set the responseType to "json"
xhr.responseType = "json";

function createButton(label, clickHandler) {
  var button = document.createElement("button");
  button.textContent = label;
  button.addEventListener("click", clickHandler);
  return button;
}

// Add an event listener to handle the onload event
xhr.onload = function() {
  // Check if the status is OK
  if (xhr.status === 200) {
    // Get the JSON response
    var outcomesDataset = xhr.response;

    // Loop through each key in the JSON data object and create a button element for each key
    for (var label in outcomesDataset) {
      // Create a new button element
      var button = createButton(label, function(event) {
        // Remove all previously created buttons
        buttonContainer.innerHTML = '';

        // Get the label of the clicked button
        var clickedLabel = event.target.textContent;

        // Loop through each key in the next level of nested data and create a button element for each key
        for (var label2 in outcomesDataset[clickedLabel]) {
          // Create a new button element
          var button2 = createButton(label2, function(event) {
            // Remove all previously created buttons
            buttonContainer.innerHTML = '';

            // Get the label of the clicked button
            var clickedLabel2 = event.target.textContent;

            // Loop through each key in the next level of nested data (Key3)
            for (var label3 in outcomesDataset[clickedLabel][clickedLabel2]) {
              var button3 = createButton(label3, function(event) {
                // Remove all other button3 elements
                buttonContainer.innerHTML = '';

                // Get the label of the clicked button
                var clickedLabel3 = event.target.textContent;

                // Loop through each key in the next level of nested data (Key4)
                for (var label4 in outcomesDataset[clickedLabel][clickedLabel2][clickedLabel3]) {
                  var button4 = createButton(label4, function(event) {
                    // Remove all other button4 elements
                    buttonContainer.innerHTML = '';

                    // Get the label of the clicked button
                    var clickedLabel4 = event.target.textContent;

                    // Check if the current key is "Pic"
                      // Get the path to the picture
                      buttonContainer.innerHTML = '';
                      var picPath = outcomesDataset[clickedLabel][clickedLabel2][clickedLabel3][clickedLabel4]['Pic'];
                      console.log(picPath)

                      // Step 1: Create the element
                      var posterIMG = document.createElement('img');

                      // Step 2: Set attributes and content
                      // newElement.id = 'poster-image';
                      posterIMG.src = picPath

                      // Step 3: Select the parent element
                      var parentElment = document.getElementById('poster-img');

                      // Step 4: Add the new element to the parent element
                      parentElment.appendChild(posterIMG);

                    
                  });

                  // Add a class to button4 for easier removal
                  button4.classList.add("button4");

                  // Add the button to the parent element
                  buttonContainer.appendChild(button4);
                }
              });

              // Add a class to button3 for easier removal
              button3.classList.add("button3");

              // Add the button to the parent element
              buttonContainer.appendChild(button3);
            }
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
