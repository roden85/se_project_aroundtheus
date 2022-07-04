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

const container = document.querySelector(".main");
const editButton = container.querySelector(".profile__button-edit");
const closeButtonContainer = document.querySelector(".modal");
const closeButton = closeButtonContainer.querySelector(".modal__close-button");
const profileEditForm = document.querySelector("#modal-profile-form");
const profileNameEl = document.querySelector(".profile__name");
const profileBioEl = document.querySelector(".profile__bio");

function editProfile() {
  closeButtonContainer.classList.remove("modal__opened");
}

editButton.addEventListener("click", editProfile);

function exitEditor() {
  closeButtonContainer.classList.add("modal__opened");
}

closeButton.addEventListener("click", exitEditor);

profileEditForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const nameValue = evt.target.name.value;
  const bioValue = evt.target.description.value;

  profileNameEl.textContent = nameValue;
  profileBioEl.textContent = bioValue;

  exitEditor();
});
