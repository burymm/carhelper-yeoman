export class MessagePopupService {

  constructor () {
    'ngInject';
    this.popup = {
      type: 'none',
      title: '',
      text: ''
    };
  }

  setData(options) {
    this.popup = {
      title: options.title || this.popup.title,
      text: options.text || this.popup.text,
      type: options.type || this.popup.type
    };
  }

  getData() {
    return this.popup;
  }
}
