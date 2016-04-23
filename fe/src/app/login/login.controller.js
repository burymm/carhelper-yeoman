const Location = new WeakMap();
const UserService = new WeakMap();
const allowEmails = ['burymm@gmail.com, belylis@gmail.com'];

export class LoginController {
  constructor ($log, $location, userService, messagePopupService) {
    'ngInject';

    this.$log = $log;
    this.messagePopupService = messagePopupService;
    Location.set(this, $location);
    UserService.set(this, userService);
    if (userService.isLogged()) {
      $location.path('/main');
    }
  }

  onLoginClick() {
    this.$log.debug('Logged. Login is', this.userEmail);
    if (allowEmails.join(',').indexOf(this.userEmail) > -1) {
      localStorage.setItem('userEmail', this.userEmail);
      UserService.get(this).update();
      Location.get(this).path('/main');
    } else {
      this.$log.debug('Loging error');
      this.messagePopupService.setData({
        title: 'Login error',
        text: 'Login or password wrong',
        type: 'error'
      });

    }
  }
}
