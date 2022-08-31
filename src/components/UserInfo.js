export default class UserInfo {
  constructor({ nameSelector, bioSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userBio = document.querySelector(bioSelector);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      bio: this._userBio.textContent,
    };
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userBio.textContent = data.bio;
  }
}
