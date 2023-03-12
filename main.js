// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector(".dropdown-menu");
const nav = document.querySelector(".navigation");

// Select nav links
const navLink = document.querySelectorAll(".dropdown-menu li");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

const dropDowns = document.querySelectorAll(".dropdown");

dropDowns.forEach((dropdown) => {
  const arrowDown = dropdown.querySelector(".arrow-down");
  const arrowUp = dropdown.querySelector(".arrow-up");
  const dropDownContent = dropdown.querySelector(".dropdown-content");

  dropdown.addEventListener("click", () => {
    dropDownContent.classList.toggle("visible");
    arrowDown.classList.toggle("hidden");
    arrowDown.classList.toggle("swirl");

    arrowUp.classList.toggle("show_one");
    arrowUp.classList.toggle("swirl");
  });
});

const heroImage = document.getElementById("hero-image");
const mobileWidth = 768;

function setHeroImage() {
  if (window.innerWidth < mobileWidth) {
    heroImage.src = "./images/image-hero-mobile.png";
  } else {
    heroImage.src = "./images/image-hero-desktop.png";
  }
}

setHeroImage();

window.addEventListener("resize", setHeroImage);
