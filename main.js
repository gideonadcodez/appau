(function () {
  let theme = localStorage.getItem("data-theme");
  const toggle = document.getElementById("toggle");
  const changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
  };

  const changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
  };

  if (theme === "dark") {
    changeThemeToDark();
  }

  toggle.addEventListener("click", () => {
    let theme = localStorage.getItem("data-theme");
    if (theme === "dark") {
      changeThemeToLight();
    } else {
      changeThemeToDark();
    }
  });
})();
// When the user scrolls the page, execute myFunction
window.onscroll = myFunction;
// Get the navbar
var navbar = document.getElementById("topnav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  const toggle = document.getElementById("toggle");

  if (window.pageYOffset >= sticky) {
    toggle.style.marginRight = "-2000px";
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    toggle.style.marginRight = "10px";
  }
}
