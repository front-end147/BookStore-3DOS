const body = document.querySelector("body"),
      navMenu = document.querySelector("#navMenu"),
      menu = document.querySelector("#menu"),
      toggleMenu = document.querySelector("#toggleMenu"),
      allLinks = document.querySelectorAll("#navMenu #menu li a"),
      userForm = document.querySelector(".user__form"),
      registerForm = userForm.querySelector(".register"),
      loginForm = userForm.querySelector(".login");

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