export class RegisterController {
  constructor ($timeout, webDevTec, toastr, $log, $window) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1461009428090;
    this.toastr = toastr;
    this.$log = $log;
    this.$window = $window;
    this.activate($timeout, webDevTec);

  }

  activate($timeout, webDevTec) {
    this.getWebDevTec(webDevTec);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  onFBLoginClick() {
    let FB = this.$window.FB || {};
    FB.getLoginStatus((function(response) {
      this.$log.debug(response);
    }).bind(this));
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }
}
