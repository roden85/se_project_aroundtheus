export default class UserInfo {
  constructor({ nameSelector, bioSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userBio = document.querySelector(bioSelector);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      description: this._userBio.textContent,
    };
  }

  setUserInfo({ name, description }) {
    this._userName.textContent = name;
    this._userBio.textContent = description;
  }
}
