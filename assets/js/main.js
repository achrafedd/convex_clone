const curveLogo = document.querySelector(".curve-logo");
const dropDown = document.querySelector(".down");

const btn = document.querySelector(".dd-btn");
const dropDownMenu = document.querySelector("ul.dropdown-menu");

const btn2 = document.querySelector(".right .btn");
const dropDownMenu2 = document.querySelector(".right .dropdown-menu");

curveLogo.addEventListener("click", () => {
    dropDown.classList.toggle("active");
});

btn.addEventListener("click", () => {
    dropDownMenu.classList.toggle("active");
});

btn2.addEventListener("click", () => {
    dropDownMenu2.classList.toggle("active");
});
