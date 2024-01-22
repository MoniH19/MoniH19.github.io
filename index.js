const abrir = document.querySelector('.profile__edit');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.overlay__popup');
const cerrar = document.querySelector('.overlay__close');
const form = document.querySelector('.overlay__form');
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

//Guarda los nuevos datos
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const placeInput = document.getElementById('place');
  profileTitle.innerText = nameInput.value;//Titulo y subtitulo
  profileSubtitle.innerText = placeInput.value;

  //Cierra popup
  overlay.classList.remove('active');
  popup.classList.remove('active');
});

//cartas nuevas
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];

const template = document.querySelector(".template").content;
  console.log(template);

const createCards = function (name, link) {
  const card = template.cloneNode(true);

  const cardPicture = card.querySelector(".element__image");
  cardPicture.src = link;

  const cardText = card.querySelector(".element__title");
  cardText.textContent = name;

  const likeButton = card.querySelector(".element__like");

 likeButton.addEventListener ("click", function(){
  likeButton.classList.toggle("element__like_active");
 });

 const deleteButton = card.querySelector(".element__trash");

 deleteButton.addEventListener("click", function(evt){
  const elementCards = deleteButton.closest(".element__cards").remove();
  elementCards.remove();
 });

 const modal = document.querySelector(".modal");
 const modalImage = document.querySelector(".modal__image");
 const modalText = document.querySelector(".modal__text");
 const closeModalButton = document.querySelector(".modal__close");

 cardPicture.addEventListener("click", function(evt){
  modal.classList.add("modal__active");
  modalImage.src = evt.target.src;
  modalText.textContent = name;
 });

closeModalButton.addEventListener("click", function (){
  modal.classList.remove("modal__active");
});


  return card;
}

const cardsContainer = document.querySelector(".element");

initialCards.forEach(function(card){

  const openCards = createCards(card.name, card.link);
  cardsContainer.appendChild(openCards);

});

const addCardButton = document.querySelector(".profile__button");
const addCardForm = document.querySelector(".add");
const addPopup = document.querySelector(".add__popup");
const closeAddButton = document.querySelector(".add__close");

addCardButton.addEventListener("click", function(){
  addCardForm.classList.add("add__active");
  addPopup.classList.add("add__popup_active");
});

closeAddButton.addEventListener("click", function (){
  addCardForm.classList.remove("add__active");
  addPopup.classList.remove("add__popup_active");
});

const addTitle = document.querySelector("#title");
const addUrl = document.querySelector("#url");
const submitButton = document.querySelector(".add__button");

const addNewCard = function(evt){
  evt.preventDefault();
  const cardName = addTitle.value;
  const cardLink = addUrl.value;
  const addingCard = createCards(cardName, cardLink);

  cardsContainer.appendChild(addingCard);
  addCardForm.classList.remove("add__active");
  addPopup.classList.remove("add__popup_active");
  addTitle.value= "";
  addUrl.value="";
};

submitButton.addEventListener("click", addNewCard);