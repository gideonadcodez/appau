// Opening the dropdown menu in mobile view
const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  document.getElementById("links").style.transform = "translateY(0)";
});
// Closing the dropdown menu in mobile view
const close = document.querySelector(".close");
close.addEventListener("click", () => {
  document.getElementById("links").style.transform = "translateY(-100%)";
});
let index = 0;
// Container of images to be displayed in the slider
const images = ["silhoutte.jpeg", "me5.jpeg", "me4.jpeg", "gdsc.jpeg"];
const slider = document.querySelector(".img-container");

// If element exists on page, run the slider
if (slider) {
  // Function to change slider every 10 seconds
  function startSlider() {
    setInterval(changeBackground, 10000);
  }

  // Slider function
  function changeBackground() {
    slider.style.backgroundImage = `url('../img/${images[index]}')`;
    index = (index + 1) % images.length;
  }

  startSlider();
  changeBackground();
}
