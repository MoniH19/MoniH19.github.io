//este codigo abre el formulario de usuario//

const abrir = document.querySelector('.profile__edit');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const cerrar = document.querySelector('.popup__close-icon');
const form = document.querySelector('.form');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

abrir.addEventListener('click', function () {
  overlay.classList.add('active');
  popup.classList.add('active');

  // Establecer los valores predeterminados al abrir el popup
  const nameInput = document.getElementById('name');
  const placeInput = document.getElementById('place');
  nameInput.value = profileTitle.innerText;
  placeInput.value = profileSubtitle.innerText;
});

cerrar.addEventListener('click', function () {
  overlay.classList.remove('active');
  popup.classList.remove('active');
});

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevents the default form submission behavior
  const nameInput = document.getElementById('name');
  const placeInput = document.getElementById('place');

  // Set the profile title and subtitle based on the form inputs
  profileTitle.innerText = nameInput.value;
  profileSubtitle.innerText = placeInput.value;

  // Close the popup
  overlay.classList.remove('active');
  popup.classList.remove('active');
});



//este codigo abre el modal//

const imagesToOpen = document.querySelectorAll('.element__image');
const closeModalBtn = document.querySelector('.close');
const modal = document.querySelector('.popup__modal');
const modalImg = document.querySelector('.popup__image');

imagesToOpen.forEach(function(image) {
  image.addEventListener('click', function() {
    modal.style.display = 'block';
    modalImg.src = image.src;
  });
});

closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

