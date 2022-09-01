export default class UserInfo {
  constructor({ nameSelector, bioSelector }) {
    this._userName = document.querySelector(nameSelector);
    this._userBio = document.querySelector(bioSelector);

    console.log(this._userBio.textContent);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      description: this._userBio.textContent,
    };
  }

  // setUserInfo(data) {
  //   this._userName.textContent = data.name;
  //   this._userBio.textContent = data.bio;
  // }

  setUserInfo({ name, description }) {
    this._userName.textContent = name;
    this._userBio.textContent = description;
  }
}
