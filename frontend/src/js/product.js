'use strict';

var sideNav = document.querySelector('.side-nav');
var navArrow = document.querySelector('.fa-arrow-right');
var tabLinks = document.querySelectorAll('.tab-links a');
var tabItems = document.querySelectorAll('.tab-item');
var navOpenBtn = document.querySelector('.nav-open');

// Product tabs
tabLinks.forEach(link => {
  link.addEventListener('click', () => {
    const tab = link.dataset.tab;

    tabLinks.forEach(link => {
      link.classList.remove('active');
    });

    link.classList.add('active');

    tabItems.forEach(item => {
      item.classList.remove('active');
    });
    document
      .querySelector(`.tab-item[data-tab="${tab}"]`)
      .classList.add('active');

    if (sideNav.classList.contains('nav-hidden')) {
      console.log(sideNav)
      sideNav.classList.remove('nav-hidden');
      navArrow.classList.toggle('rotate');
    }
  });
});

// Mobile nav
navOpenBtn.addEventListener('click', function () {
  sideNav.classList.toggle('nav-hidden');
  navArrow.classList.toggle('rotate');
});
