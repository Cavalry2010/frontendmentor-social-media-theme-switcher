"use strict";

class Dashboard {
  themeSwitch = document.querySelector(".theme-switch");
  body = document.querySelector("body");

  constructor() {
    this.themeSwitch.addEventListener("click", this.toggleDarkMode.bind(this));
  }

  toggleDarkMode() {
    this.body.classList.toggle("dark-mode");
  }
}

const app = new Dashboard();
