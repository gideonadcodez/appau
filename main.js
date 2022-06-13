// (generateKey = () => {
//   let str = prompt("Enter Text");
//   str = str.toLowerCase().split("");
//   let chars = `qwertyuiopasdfghjklzxcvbnm1234567890~!@#$%^&*()_+-={}|":[]/.${" "}`;
//   chars = chars.split("");
//   console.log(str)
//   for (let i = 0; i < str.length; i++) {
//     character = str[i];
//     console.log(chars.indexOf(character))
//   }
// })();

(function () {
  let blogBtn = document.getElementById("blog");
  blogBtn.addEventListener("click", () => {
    let blogToast = document.querySelector(".blog-toast");
    blogToast.classList.toggle("appear");
  });
})();

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
