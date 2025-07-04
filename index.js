// Get a reference to the HTML element
const myElement = document.getElementById("profile-description");
console.log(myElement);

// Get the text content of the element
var textContent = myElement.textContent;

// Get the length of the text content
const textLength = textContent.length;
const lengthLimit = 140;

// Check if the text in the description is longer than the limit.
if (textLength > lengthLimit) {
  myElement.innerHTML = textContent.slice(0, lengthLimit);
} // if
