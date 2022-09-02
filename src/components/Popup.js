export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleCloseByEsc = this._handleCloseByEsc.bind(this);
    this._handleOutsideClick = this._handleOutsideClick.bind(this);
  }

  _handleOutsideClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  };

  _handleCloseByEsc = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("modal__close-button")) {
        this.close();
      }
    });
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleCloseByEsc);
    this._popupElement.removeEventListener(
      "mousedown",
      this._handleOutsideClick
    );
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleCloseByEsc);
    this._popupElement.addEventListener("mousedown", this._handleOutsideClick);
  }
}
