// Declare some variables
hamburger = document.querySelector(".humburger");
navList = document.querySelector(".nav-list");
// Function to show and hide the nav bar when the hamburger is clicked
hamburger.onclick = function () {
  navList.classList.toggle("active");
};
