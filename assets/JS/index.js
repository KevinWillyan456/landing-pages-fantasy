const hamburger = document.querySelector(".cabecalho .wrap .hamburger");
const navbarMobile = document.querySelector(".cabecalho .wrap .navbar-mobile");
let navbarMobileState = false;

hamburger.addEventListener("click", () => {
  if (!navbarMobileState) {
    navbarMobile.style.display = "block";
    navbarMobileState = true;
  } else {
    navbarMobile.style.display = "none";
    navbarMobileState = false;
  }
});
