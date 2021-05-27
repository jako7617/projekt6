// Tharshika
// ------- Splash screen
const textContainer = document.querySelector(".fade-in");
const splash = document.querySelector(".splash");
const body = document.querySelector("body");

// DOMcontentLoaded -- affyrer funktionen når DOMmen er færdig med at loade
window.addEventListener("DOMContentLoaded", function () {
  body.style.overflow = "hidden";
  setTimeout(function () {
    splash.classList.add("display-none");
    body.style.overflow = "auto";
  }, 1500);
});