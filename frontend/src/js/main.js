const displayPopup = document.querySelectorAll('.popup');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-gallery');

// Page loader
const loaderContainer = document.querySelector('.loader-container');
window.addEventListener('load', () => {
  loaderContainer.classList.add('hidden');
});

// Popup gallery
const openModal = function () {
  overlay.classList.remove('gallery-hidden');
};
const closeModal = function () {
  overlay.classList.add('gallery-hidden');
};
for (let i = 0; i < displayPopup.length; i++) {
  displayPopup[i].addEventListener('click', openModal);
}
// closeBtn.addEventListener('click', closeModal);
