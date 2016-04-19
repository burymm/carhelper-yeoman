const Location = new WeakMap();
const UserService = new WeakMap();

export class LoginController {
  constructor (toastr, $log, $window, $location, userService) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1461009428090;
    this.toastr = toastr;
    this.$log = $log;
    this.$window = $window;
    Location.set(this, $location);
    UserService.set(this, userService);
    if (userService.isLogged()) {
      $location.path('/main');
    }
  }

  onLoginClick() {
    this.$log.debug('Logged. Login is', this.userEmail);
    localStorage.setItem('userEmail', this.userEmail);
    UserService.get(this).update();
    Location.get(this).path('/main');
  }
}
