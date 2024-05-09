// Function to convert Celsius to Fahrenheit
function convertToFar() {
  var celsius = parseFloat(document.getElementById("celsius").value);
  var fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
}

// Function to convert Fahrenheit to Celsius
function convertToCel() {
  var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  var celsius = (fahrenheit - 32) * 5/9;
  document.getElementById("celsius").value = celsius.toFixed(2);
}

// Function to toggle dark mode
function toggleDarkMode() {
  var darkModeToggle = document.getElementById("darkModeToggle");
  var container = document.querySelector(".container");

  if (darkModeToggle.checked) {
    container.classList.add("dark-mode");
  } else {
    container.classList.remove("dark-mode");
  }
}
