//Este codigo abre el formulario de usuario//
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

//Guarda los nuevos datos
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const placeInput = document.getElementById('place');

  //Titulo y subtitulo
  profileTitle.innerText = nameInput.value;
  profileSubtitle.innerText = placeInput.value;

  //Cierra popup
  overlay.classList.remove('active');
  popup.classList.remove('active');
});

//cartas nuevas
  const elementsData = [
    {
        imageSrc: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
        title: "Valle de Yosemite"
    },
    {
        imageSrc: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
        title: "Lago Louise"
    },
    {
        imageSrc: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
        title: "Montañas Calvas"
    },
    {
        imageSrc: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
        title: "Latemar"
    },
    {
        imageSrc: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
        title: "Vanois National Park"
    },
    {
        imageSrc: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
        title: "Lago di Braies"
    }
];

  const elementTemplate = document.getElementById('element-template').content;
  const elementsContainer = document.querySelector('.elements');

  elementsData.forEach(data => {
      const element = document.importNode(elementTemplate, true);

      element.querySelector('.element__image').src = data.imageSrc;
      element.querySelector('.element__title').textContent = data.title;

      elementsContainer.appendChild(element);
  });

//codigo del modal//
  const imagesToOpen = document.querySelectorAll('.element__image');
  const closeModalBtn = document.querySelector('.modal__close');
  const modal = document.querySelector('.modal');
  const modalImg = document.querySelector('.modal__image');
  const modalText = document.querySelector('.modal__text');

  imagesToOpen.forEach(function(image, index) {
    image.addEventListener('click', function() {
      modal.style.display = 'block';
      const dataIndex = index;
      const imageSrc = elementsData[dataIndex].imageSrc;
      const imageTitle = elementsData[dataIndex].title;
      modalImg.src = imageSrc;
      modalText.textContent = imageTitle;
    });
  });

  closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
  });

// codigo para abrir el formulario add
const openAdd = document.querySelector('.profile__button');
const add = document.querySelector('.add');
const popupAdd = document.querySelector('.add__popup');
const closeAdd = document.querySelector('.add__close');
const formAdd = document.querySelector('.add__form');
const agregarButton = document.getElementById('agregar');

openAdd.addEventListener('click', function () {
  add.classList.add('active');
  popupAdd.classList.add('active');
});

closeAdd.addEventListener('click', function () {
  add.classList.remove('active');
  popupAdd.classList.remove('active');
});

//campos predeterminados
const titleInput = document.getElementById('title');
const urlInput = document.getElementById('url');
titleInput.value = 'Título';
urlInput.value = 'URL de la imagen';

//Guarda los nuevos datos
  agregarButton.addEventListener("click", function (event) {
    event.preventDefault();
    const newTitle = titleInput.value;
    const newImageUrl = urlInput.value;

    const elementTemplate = document.getElementById("element-template").content;
    const newElement = document.importNode(elementTemplate, true);
    newElement.querySelector(".element__image").src = newImageUrl;
    newElement.querySelector(".element__title").textContent = newTitle;

    elementsContainer.appendChild(newElement);
    titleInput.value = "";
    urlInput.value = "";

    add.classList.remove('active');
    popupAdd.classList.remove('active');
  });

//Cdigo para like
const likeElements = document.querySelectorAll('.element__like');

likeElements.forEach((likeElement, index) => {
  likeElement.addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__like_active");
  });
});

//Codigo para eliminar imagenes
  const trashElements = document.querySelectorAll('.element__trash');
  const cardElements = document.querySelectorAll('.element');

  trashElements.forEach((trashElement, index) =>
    trashElement.addEventListener('click', () => {
      cardElements[index].style.display = 'none';
    })
  );