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

export { openPopup, closePopup };
