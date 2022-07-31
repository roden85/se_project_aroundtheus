// constants
const container = document.querySelector(".main");

// forms
const profileFormContainer = document.querySelector("#edit-popup");
const profileEditForm = document.querySelector("#modal-profile-form");
const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(".profile__bio");
const formNameElement = document.querySelector("#profile-name");
const formDescriptionElement = document.querySelector("#profile-bio");
const cardFormContainer = document.querySelector("#add-popup");
const cardAddForm = document.querySelector("#modal-photo-form");

//buttons
const formCloseButton = profileFormContainer.querySelector(
  ".modal__close-button"
);
const profileEditButton = container.querySelector(".profile__button-edit");
const cardAddButton = document.querySelector("#add-button");
const cardAddCloseButton = cardFormContainer.querySelector(
  ".modal__close-button"
);
const imageCloseButton = document.querySelector(
  ".modal__close-button_type_preview"
);
const formSubmitButton = document.querySelector(".modal__form-submit");
const modalCloseButton = document.querySelectorAll(".modal__close-button");

//cards
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];
const cardsList = document.querySelector(".cards__list");

//image modal
const imageModal = document.querySelector("#modal__preview");
const modalImageEl = imageModal.querySelector(".modal__preview-image");
const modalCaption = imageModal.querySelector(".modal__caption");

//open/close popup

cardAddButton.addEventListener("click", () => {
  openPopup(cardFormContainer);
});

const handleCloseByEsc = (evt) => {
  if (evt.key === "Escape") {
    const activeModal = document.querySelector(".modal_opened");
    closePopup(activeModal);
  }
};

const handleOutsideClick = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
};

function openPopup(popup) {
  popup.classList.add("modal_opened");
  document.addEventListener("keydown", handleCloseByEsc);
  popup.addEventListener("mousedown", handleOutsideClick);
}

function closePopup(popup) {
  popup.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleCloseByEsc);
  popup.removeEventListener("mousedown", handleOutsideClick);
}

modalCloseButton.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => {
    closePopup(popup);
  });
});

//render cards

function renderCard(cardEl, container) {
  container.prepend(cardEl);
}

function getCardElement(data) {
  const cardElement = document.querySelector("#cards-template").content;
  const card = cardElement.querySelector(".cards__list-item").cloneNode(true);
  const cardImage = card.querySelector(".cards__list-image");
  const cardTitle = card.querySelector(".cards__list-content-title");

  const cardLikeButton = card.querySelector(".cards__like-button");
  cardLikeButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("cards__like-button_active");
  });

  const trashButton = card.querySelector(".cards__trash-button");
  trashButton.addEventListener("click", () => {
    card.remove();
  });

  cardImage.addEventListener("click", function () {
    modalImageEl.setAttribute("src", data.link);
    modalImageEl.setAttribute("alt", data.name);
    modalCaption.textContent = data.name;
    openPopup(imageModal);
  });

  cardTitle.textContent = data.name;
  cardImage.setAttribute("src", data.link);
  cardImage.setAttribute("alt", `${data.name}`);
  return card;
}

initialCards.forEach(function (data) {
  const cardView = getCardElement(data);
  cardsList.appendChild(cardView);
});

// set form values

profileEditButton.addEventListener("click", () => {
  formNameElement.value = profileNameElement.textContent;
  formDescriptionElement.value = profileDescriptionElement.textContent;

  openPopup(profileFormContainer);
});

profileEditForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const nameValue = evt.target.name.value;
  const descriptionValue = evt.target.description.value;
  profileNameElement.textContent = nameValue;
  profileDescriptionElement.textContent = descriptionValue;

  closePopup(profileFormContainer);
});

cardAddForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.title.value;
  const link = evt.target.link.value;
  const cardView = {
    name: name,
    link: link,
  };
  const card = getCardElement(cardView);
  renderCard(card, cardsList);
  evt.target.reset();
  formSubmitButton.disabled = true;
  formSubmitButton.classList.add("modal__form-submit_disabled");
  closePopup(cardFormContainer);
});
