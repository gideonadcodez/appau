let modeToggle = document.querySelector(".toggle");
let blogBtn = document.getElementById("blog");
let menuToggle = document.querySelector(".menu");
let close = document.querySelector(".close");

menuToggle.addEventListener("click", () =>{
 document.querySelector(".sidebar").style.margin = "0";
})

close.addEventListener("click", () =>{
  document.querySelector(".sidebar").style.marginBottom = "-400px";
 })

blogBtn.addEventListener("click", () => {
  let toast = document.querySelector(".blog-toast");
  toast.classList.toggle("appear");
})

modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
})
