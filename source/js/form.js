"use strict";

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var message = document.querySelector(".message");
var modalSuccess = document.querySelector(".modal--success");
var modalError = document.querySelector(".modal--failure");
var username = document.querySelector("#name");
var surname = document.querySelector("#surname");
var email = document.querySelector("#email");
var phone = document.querySelector("#phone");

function closeModal(modal) {
  modal.classList.add("modal--closed");
}

function openModal(modal) {
  var modalButton = modal.querySelector(".button--modal");
  modal.classList.remove("modal--closed");

  modalButton.addEventListener("click", function () {
    closeModal(modal);
  });

  modalButton.addEventListener("keydown", function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closeModal(modal);
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      closeModal(modal);
    }
  });
}

message.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !phone.value || !surname.value) {
    evt.preventDefault();
    openModal(modalError);
  } else {
    openModal(modalSuccess);
    message.reset();
  }
});
