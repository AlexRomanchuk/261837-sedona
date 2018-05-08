"use scrict";

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var openButton = document.querySelector(".main-nav__toggle");
var closeButton = document.querySelector(".main-nav__close");
var menu = document.querySelector(".main-nav");

menu.classList.remove("main-nav--noscript");

function openMenu() {
  menu.classList.remove("main-nav--closed");
}

function closeMenu() {
  menu.classList.add("main-nav--closed");
}

openButton.addEventListener("click", openMenu);

openButton.addEventListener("keydown", function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openMenu();
  }
});

closeButton.addEventListener("click", closeMenu);

closeButton.addEventListener("keydown", function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeMenu();
  }
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeMenu();
  }
});
