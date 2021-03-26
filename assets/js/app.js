function menuToggle() {
  document.getElementById("nav-toggle").classList.toggle("open");
  document.getElementById("menu-left").classList.toggle("collapse");
  return false;
}

function runOnScroll() {
  var logo = document.getElementById("logo");
  var navbar = document.getElementById("header");

  if (document.documentElement.scrollTop >= 100) {
    logo.classList.add('logoScroll');
    navbar.classList.add('shadow-lg');
  } else {
    logo.classList.remove('logoScroll');
    navbar.classList.remove('shadow-lg');
  }
  
};
window.addEventListener("scroll", runOnScroll);
