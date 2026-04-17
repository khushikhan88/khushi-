// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Alert
function showMessage() {
  alert("Thanks for visiting my portfolio!");
}

// Typing effect
const roles = ["C Programmer", "C++ Developer", "JavaScript Learner", "Tableau User", "Leader"];
let i = 0, j = 0, text = "", deleting = false;

function type() {
  let current = roles[i];

  if (!deleting) {
    text = current.substring(0, j++);
  } else {
    text = current.substring(0, j--);
  }

  document.getElementById("typing").innerHTML = text;

  if (j === current.length) {
    deleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (j === 0 && deleting) {
    deleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(type, deleting ? 50 : 100);
}
type();

// Fade animation on scroll
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});