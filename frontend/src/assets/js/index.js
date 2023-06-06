

const displayPopup = document.querySelector('.popup-show');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.popup-close');
const toggler = document.querySelector('#toggler');
const mobileNav = document.querySelector('.mobile-nav');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.scrollTo');
const txtUpdatingSpeed = 55;
const blinkAnimDuration = 2400;
const myText = document.querySelector('.text-larger');
const typeCursor = document.querySelector('.cursor');
let currentTextIndex = -1;
let currentYear = document.querySelector('.year');
let d = new Date();

// Popup
const openModal = function () {
  overlay.classList.toggle('popup-hidden');
};
const closeModal = function () {
  overlay.classList.toggle('popup-hidden');
};
displayPopup.addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);

// Image sliders
const swiperHero = new Swiper('.showcase-hero--slider', {
  effect: 'fade',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

const swiperCarousel = new Swiper('.carousel', {
  spaceBetween: 15,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
    },
    641: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    },
    1025: {
      slidesPerView: 4,
    },
  },
});

const swiperTestimonials = new Swiper('.testimonials', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

// Scrolled header
const onScroll = event => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  header.classList.toggle('scrolled-down', scrollPosition > 80);
};
document.addEventListener('scroll', onScroll, { passive: true });

// Smooth scroll
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    if (toggler.checked) {
      toggler.checked = false;
      mobileNav.classList.toggle('mobile-nav-hidden');
    }
    const section = document.querySelector(this.getAttribute('href'));
    const sectionTop = section.offsetTop;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth',
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});

window.addEventListener('scroll', function () {
  const windowTop = window.scrollY;
  document.querySelectorAll('.section').forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (windowTop >= sectionTop && windowTop < sectionTop + sectionHeight) {
      const correspondingLink = document.querySelector(
        `.main-nav a[href="#${section.id}"]`
      );
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      correspondingLink.classList.add('active');
    }
  });
});

// Reveal on scroll
const reveals = function () {
  const reveal = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveal.length; i++) {
    let windowHeight = window.innerHeight;
    const elementTop = reveal[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveal[i].classList.add('active');
    } else {
      reveal[i].classList.remove('active');
    }
  }
};

window.addEventListener('scroll', reveals);

// Typing effect
const addLetter = letterIndex => {
  if (letterIndex >= textArr[currentTextIndex].length) {
    blinkTypeCursor();
    return;
  }
  setTimeout(() => {
    myText.textContent += textArr[currentTextIndex][letterIndex];
    addLetter(letterIndex + 1);
  }, txtUpdatingSpeed);
};

const removeLetter = letterIndex => {
  if (letterIndex < 0) {
    updateText();
    return;
  }
  setTimeout(() => {
    myText.textContent = textArr[currentTextIndex].slice(0, letterIndex);
    removeLetter(letterIndex - 1);
  }, txtUpdatingSpeed);
};

const blinkTypeCursor = () => {
  typeCursor.classList.add('blinking');
  setTimeout(() => {
    typeCursor.classList.remove('blinking');
    removeLetter(textArr[currentTextIndex].length);
  }, blinkAnimDuration);
};

const updateText = () => {
  currentTextIndex++;
  if (currentTextIndex === textArr.length) {
    currentTextIndex = 0;
  }
  addLetter(0);
};

setTimeout(() => updateText(), 1000);

// Mobile nav
toggler.addEventListener('click', function () {
  if (toggler.checked) {
    mobileNav.classList.add('mobile-nav-hidden');
  } else {
    mobileNav.classList.remove('mobile-nav-hidden');
  }
});

// Copyright year
currentYear.textContent = d.getFullYear();
new Date().getFullYear();
