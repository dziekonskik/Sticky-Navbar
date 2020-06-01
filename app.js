const nav = document.querySelector('.navbar');
const ul = document.querySelector('ul');
const hamburgerMenu = document.querySelector('.hamburger');
const navOffsetTop = nav.offsetTop;
const navOffsetHeight = nav.offsetHeight;
let menuOpen = false;

function classToggler() {
  hamburgerMenu.classList.toggle('open');
  ul.classList.toggle('open');
  ul.classList.toggle('fadeIn');
}

function moveNavbar() {
  document.body.style.paddingTop = `${navOffsetHeight}px`;
  nav.style.position = 'fixed';
  nav.style.top = 0;
  nav.style.left = 0;
  nav.style.right = 0;
}

function embedNavbar() {
  document.body.style.paddingTop = 0;
  nav.style.position = 'relative';
  nav.offsetTop = navOffsetTop;
}

window.addEventListener('scroll', () => {
  if (window.scrollY >= navOffsetTop) {
    moveNavbar();
  } else {
    embedNavbar();
  }
});

hamburgerMenu.addEventListener('click', () => {
  if (!menuOpen) {
    classToggler();
    menuOpen = true;
  } else {
    classToggler();
    menuOpen = false;
  }
});
