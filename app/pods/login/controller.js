import Ember from 'ember';
import LoginUser from 'ember-firebase-chat-app/mixins/login-user';

export default Ember.Controller.extend(
  LoginUser, {
  actions: {
    login() {
      this.authenticateUser(this.get('email'), this.get('password'));
    }
  }
});
