import Controller from '@ember/controller';
//import { ENV } from './config/environment';

export default Controller.extend({
  init () {
    this._super(...arguments);
    //this.set('temp', ENV.APP.test)
  }
});
