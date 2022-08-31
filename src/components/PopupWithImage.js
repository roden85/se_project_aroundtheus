import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({ link, name }) {
    const imageEl = this._popupElement.querySelector(".modal__preview-image");
    this._popupElement.querySelector(".modal__caption").textContent = name;
    imageEl.src = link;
    imageEl.alt = `Photo of ${name}`;
    super.open();
  }
}
