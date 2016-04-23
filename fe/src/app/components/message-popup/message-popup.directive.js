export function MessagePopupDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/message-popup/message-popup.html',
    scope: {
        creationDate: '='
    },
    controller: MessagePopupController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

export class MessagePopupController {
  constructor (messagePopupService) {
    'ngInject';
    this.messagePopupService = messagePopupService;

    this.data = function() {
      var data = messagePopupService.getData();
      data.show = data.type !== 'none';
      return data;
    };
  }

  popupClose() {
    this.messagePopupService.setData({type: 'none'});
  }
}
