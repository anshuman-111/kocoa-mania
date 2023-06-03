var displayPopup = document.querySelectorAll('.popup');
var overlay = document.querySelector('.overlay');
var closeBtn = document.querySelector('.close-gallery');

// Page loader
var loaderContainer = document.querySelector('.loader-container');
window.addEventListener('load', () => {
  //loaderContainer.classList.add('hidden');
});

// Popup gallery
var openModal = function () {
  overlay.classList.remove('gallery-hidden');
};
var closeModal = function () {
  overlay.classList.add('gallery-hidden');
};
for (let i = 0; i < displayPopup.length; i++) {
  displayPopup[i].addEventListener('click', openModal);
}
// closeBtn.addEventListener('click', closeModal);
