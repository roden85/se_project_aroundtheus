import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageEl = this._popupElement.querySelector(".modal__preview-image");
    this._imageCaption = this._popupElement.querySelector(".modal__caption");
  }

  open({ title, link }) {
    this._imageCaption.textContent = title;
    this._imageEl.src = link;
    this._imageEl.alt = `Photo of ${title}`;
    super.open();
  }
}
