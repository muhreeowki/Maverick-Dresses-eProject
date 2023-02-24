// Declare some variables
hamburger = document.querySelector(".humburger");
navList = document.querySelector(".nav-list");
// Function to show and hide the nav bar when the hamburger is clicked
hamburger.onclick = function () {
  navList.classList.toggle("active");
};

// Some code for the visitors count. I am using count api with a get request to get the number of visitors. Every time the page loads, this script is ran once, updating the visitor count.

const visitors = document.getElementById("visitors");
// Call the function defined bellow
updateVisitCount();

// Create a function to fetch the value of the visitor count from the count api.
function updateVisitCount() {
  fetch("https://api.countapi.xyz/update/maverick-dresses/visitors/?amount=1")
    .then((res) => res.json())
    .then((res) => {
      visitors.innerHTML = res.value;
    });
}
