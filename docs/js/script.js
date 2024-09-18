const toggle = document.getElementById("toggle");
const logos = document.querySelectorAll(".logo");
const moons = document.querySelectorAll(".moon-img");
let theme = window.localStorage.getItem("theme");

if (theme === "dark") {
  document.body.classList.add("dark");
  switchLogo("dark");
} else {
  switchLogo("light");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
    theme = "light"; 
    switchLogo("light");
    switchMoon("light");
  } else {
    window.localStorage.setItem("theme", "dark");
    theme = "dark"; 
    switchLogo("dark");
    switchMoon("dark");
  }
});

function switchMoon(theme) {
  moons.forEach((moon) => {
      if (theme === "dark") {
        moon.src = "/FreelaFlex/assets/image/moonDark.svg";
      } else {
        moon.src = "/FreelaFlex/assets/image/moonLight.svg";
      }
    });
}

function switchLogo(theme) {
  logos.forEach((logo) => {
    if (theme === "dark") {
      logo.src = "/FreelaFlex/assets/image/logoDark.svg";
    } else {
      logo.src = "/FreelaFlex/assets/image/logoLight.svg";
    }
  });
}

