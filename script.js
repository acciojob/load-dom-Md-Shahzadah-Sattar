//your JS code here. If required.
// Student can write their JavaScript code here
// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Create a new paragraph element
    var paragraph = document.createElement("p");

    // Set the text content of the paragraph
    paragraph.textContent = "DOM load success";

    // Append the paragraph to the body
    document.body.appendChild(paragraph);
});
