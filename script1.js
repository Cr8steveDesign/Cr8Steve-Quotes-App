"use strict";

let closeBtn = document.querySelector("#close-list");
let navMenu = document.querySelector("#navigation");
let openMenu = document.querySelector("#openMenu");
let lists = document.querySelectorAll("li");

//BUTTON TRIGGERS

//Hiding the Open Menu - Mobile
openMenu.addEventListener("click", function (e) {
  navMenu.classList.remove("hidden");
  navMenu.classList.add("navigation");
  openMenu.style.display = "none";
});

closeBtn.addEventListener("click", closer);

function closer() {
  navMenu.classList.remove("navigation");
  navMenu.classList.add("hidden");

  openMenu.style.display = "block";
}
