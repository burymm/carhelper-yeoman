export class UserService {
  constructor () {
    'ngInject';
    this.loadDataFromStorage();
  }

  loadDataFromStorage() {
    this.userEmail = localStorage.getItem('userEmail') || null;
  }

  isLogged() {
    return !(angular.isUndefined(this.userEmail) || this.userEmail === null);
  }
  
  getName() {
    return this.userEmail;
  }
  
  update() {
    this.loadDataFromStorage();
  }
}
