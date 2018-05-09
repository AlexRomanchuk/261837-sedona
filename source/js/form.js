"use strict";

var message = document.querySelector(".message");
var modalSuccess = document.querySelector(".modal--success");
var modalError = document.querySelector(".modal--failure");
var username = document.querySelector("#name");
var surname = document.querySelector("#surname");
var email = document.querySelector("#email");
var phone = document.querySelector("#phone");
var modalButton = document.querySelector(".button--modal");

function closeModal(modal) {
  modal.classList.add("modal__closed");
}

function openModal(modal) {
  modal.classList.remove("modal__closed");
  modalButton.addEventListener("click", function() {
    closeModal(modal);
  });
}

message.addEventListener("submit", function(evt) {
  if (!username.value || !email.value || !phone.value || !surname.value) {
    evt.preventDefault();
    openModal(modalError);
  } else {
    openModal(modalSuccess);
  }
});
