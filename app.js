const nav = document.querySelector('.navbar');
const ul = document.querySelector('ul');
const hamburgerMenu = document.querySelector('.hamburger');
const navOffsetTop = nav.offsetTop;
const navOffsetHeight = nav.offsetHeight;
let menuOpen = false;

window.addEventListener('scroll', () => {
  if (window.scrollY >= navOffsetTop) {
    document.body.style.paddingTop = `${navOffsetHeight}px`;
    nav.style.position = 'fixed';
    nav.style.top = 0;
    nav.style.left = 0;
    nav.style.right = 0;
  } else {
    document.body.style.paddingTop = 0;
    nav.style.position = 'relative';
    nav.offsetTop = navOffsetTop;
  }
});

hamburgerMenu.addEventListener('click', () => {
  if (!menuOpen) {
    hamburgerMenu.classList.add('open');
    ul.classList.add('fadeIn');
    ul.style.display = 'flex';
    menuOpen = true;
  } else {
    hamburgerMenu.classList.remove('open');
    ul.classList.remove('fadeIn');
    ul.style.display = 'none';
    menuOpen = false;
  }
});
