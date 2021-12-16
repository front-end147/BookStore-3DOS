const body = document.querySelector("body"),
      navMenu = document.querySelector("#navMenu"),
      menu = document.querySelector("#menu"),
      toggleMenu = document.querySelector("#toggleMenu"),
      allLinks = document.querySelectorAll("#navMenu #menu li a"),
      userForm = document.querySelector(".user__form"),
      registerForm = userForm.querySelector(".register"),
      loginForm = userForm.querySelector(".login"),
      next = document.querySelector("#next"),
      prev = document.querySelector("#prev"),
      slides = document.querySelectorAll(".slide");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
  menu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (e.target.id !== "toggleMenu" && e.target.id !== "menu") {
    toggleMenu.classList.remove("active");
    menu.classList.remove("active");
  }
  if (e.target.id === "userForm") {
    body.classList.remove("formActive");
    userForm.classList.remove("active");
    registerForm.classList.remove("registerActive");
    loginForm.classList.remove("loginActive");
  }
});

window.addEventListener("scroll", () => {
  toggleMenu.classList.remove("active");
  menu.classList.remove("active");
  if (window.scrollY > 70) {
    navMenu.classList.add("down");
  }
  else {
    navMenu.classList.remove("down");
  }
});

allLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    if (link.classList == "register__btn") {
      userForm.classList.add("active");
      body.classList.add("formActive");
      registerForm.classList.add("registerActive");
      loginForm.classList.remove("loginActive");
      document.querySelector("#loginChange span").onclick = () => {
        registerForm.classList.remove("registerActive");
        loginForm.classList.add("loginActive");
      };
      document.querySelector("#registerChange span").onclick = () => {
        registerForm.classList.add("registerActive");
        loginForm.classList.remove("loginActive");
      };
    }
    else {
      if (e.target.dataset.nav) {
        document.getElementById(e.target.dataset.nav).scrollIntoView({behavior: "smooth"});
      }
    }
  });
});

// slideshow
let index = 1;
showSlide(index);

next.onclick = () => {
  showSlide(index += 1);
}
prev.onclick = () => {
  showSlide(index -= 1);
}

function showSlide(n) {
  if (n > slides.length) {
    index = 1;
  }
  if (n < 1) {
    index = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index - 1].style.display = "block";
}
// slideshow auto change after 7s
setInterval(() => {
  showSlide(index += 1);
}, 7000);