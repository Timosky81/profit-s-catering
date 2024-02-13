// Get the text element
var textElement = document.getElementById("nav");

// Function to hide the text after a delay
function hideText() {
    textElement.style.display = "none"; // Hide the text
}

// Set a timeout to call the hideText function after a delay (e.g., 5 seconds)
setTimeout(hideText, 5000); // 5000 milliseconds = 5 seconds
