const curveLogo = document.querySelector(".curve-logo");
const dropDown = document.querySelector(".down");

const btn = document.querySelector(".dd-btn");
const dropDownMenu = document.querySelector("ul.dropdown-menu");

const btn2 = document.querySelector(".right .btn");
const dropDownMenu2 = document.querySelector(".right .dropdown-menu");

const mobileBtn = document.querySelector(".mobile-icon i");
const mobileClose = document.querySelector(".nav-close");
const mobileMenu = document.querySelector(".navigation");

const mobileSubClose = document.querySelector(".sub-nav-close");

curveLogo.addEventListener("click", () => {
    dropDown.classList.toggle("active");
});

btn.addEventListener("click", () => {
    dropDownMenu.classList.toggle("active");
});

btn2.addEventListener("click", () => {
    dropDownMenu2.classList.toggle("active");
});

mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

mobileClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

mobileSubClose.addEventListener("click", () => {
    dropDownMenu.classList.remove("active");
});
