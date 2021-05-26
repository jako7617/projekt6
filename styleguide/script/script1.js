console.log("script.js is running..");

//COLLAPSIBLE BOX (Logo) - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible //
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//COLLAPSIBLE BOX (Typografi) - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible //
var coll = document.getElementsByClassName("collapsible-typografi");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//COLLAPSIBLE BOX (Knapper1) - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible //
let collButton = document.querySelectorAll("[class*=collapsible]");

console.log(collButton);

for (let i = 0; i < collButton.length; i++) {
  collButton[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    console.log(content);
    content.classList.toggle("invisible");
  });
}

//COLLAPSIBLE BOX (Layout) - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible //
var coll = document.getElementsByClassName("collapsible-layout");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
