// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Button alert
function showMessage() {
  alert("Thanks for visiting my portfolio!");
}

// Typing effect
const roles = ["C Developer", "C++ Programmer", "JavaScript Learner", "Tableau Enthusiast", "Leader"];
let i = 0, j = 0;
let current = "";
let deleting = false;

function typeEffect() {
  if (!deleting && j <= roles[i].length) {
    current = roles[i].substring(0, j++);
  } else if (deleting && j >= 0) {
    current = roles[i].substring(0, j--);
  }

  document.getElementById("typing").innerHTML = current;

  if (j === roles[i].length) {
    deleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (j === 0 && deleting) {
    deleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();