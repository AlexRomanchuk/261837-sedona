"use strict";

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var openButton = document.querySelector(".main-nav__open");
var closeButton = document.querySelector(".main-nav__close");
var menu = document.querySelector(".main-nav");

menu.classList.remove("main-nav--noscript");
closeButton.classList.remove("main-nav__close--hidden");

function openMenu() {
  menu.classList.remove("main-nav--closed");
  openButton.classList.add("main-nav__open--opened");
}

function closeMenu() {
  menu.classList.add("main-nav--closed");
  openButton.classList.remove("main-nav__open--opened");
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

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.preventDefault();
    closeMenu();
  }
});
