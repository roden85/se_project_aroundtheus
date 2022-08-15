import { openPopup } from "./utils.js";

const imageModal = document.querySelector("#modal__preview");
const modalImageEl = imageModal.querySelector(".modal__preview-image");
const modalCaption = imageModal.querySelector(".modal__caption");

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;

    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".cards__list-item")
      .cloneNode(true);

    return cardTemplate;
  }

  _setEventListeners() {
    const likeButton = this._element.querySelector(".cards__like-button");
    likeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._element
      .querySelector(".cards__trash-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });

    this._element
      .querySelector(".cards__list-image")
      .addEventListener("click", () => {
        this._handlePreviewImage();
      });
  }

  _handleLikeButton() {
    const likeButton = this._element.querySelector(".cards__like-button");
    likeButton.classList.toggle("cards__like-button_active");
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _handlePreviewImage() {
    modalImageEl.setAttribute("src", this._link);
    modalImageEl.setAttribute("alt", this._name);
    modalCaption.textContent = this._name;
    openPopup(imageModal);
  }

  getView() {
    this._element = this._getTemplate();

    this._element.querySelector(
      ".cards__list-content-title"
    ).textContent = `${this._name}`;
    this._element
      .querySelector(".cards__list-image")
      .setAttribute("src", this._link);
    this._element
      .querySelector(".cards__list-content-title")
      .setAttribute("alt", `${this._name}`);

    this._setEventListeners();
    return this._element;
  }
}

// export default Card;
