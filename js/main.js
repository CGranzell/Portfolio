// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-menu li");
console.log(links);
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

for (let link of links) {
  console.log(link);
  link.addEventListener("click", function (e) {
    const theClickedLink = e.target;
    console.log(theClickedLink);
    if (theClickedLink) {
      navMenu.classList.toggle("active");
    }
  });
}
