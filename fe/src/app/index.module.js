/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { RegisterController } from './register/register.controller';
import { LoginController } from './login/login.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { UserService } from '../app/components/user/user.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { MessagePopupService } from '../app/components/message-popup/message-popup-service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { MessagePopupDirective } from '../app/components/message-popup/message-popup.directive';

angular.module('carhelperYeoman', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('userService', UserService)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('messagePopupService', MessagePopupService)
  .controller('MainController', MainController)
  .controller('RegisterController', RegisterController)
  .controller('LoginController', LoginController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .directive('messagePopup', MessagePopupDirective);
