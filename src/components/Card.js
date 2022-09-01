class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.title;
    this._link = data.link;

    this._cardSelector = cardSelector;
    this._likeButton = null;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".cards__list-item")
      .cloneNode(true);

    return cardTemplate;
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector(".cards__like-button");

    this._likeButton.addEventListener("click", () => {
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
        this._handleCardClick({ link: this._link, name: this._name });
      });
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle("cards__like-button_active");
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  getView() {
    this._element = this._getTemplate();
    this._element.querySelector(".cards__list-content-title").textContent =
      this._name;
    this._element.querySelector(".cards__list-image").src = this._link;
    this._element.querySelector(
      ".cards__list-image"
    ).alt = `Photo of ${this._name}`;
    this._setEventListeners();
    return this._element;
  }
}

export default Card;
