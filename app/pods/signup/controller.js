import Ember from 'ember';
import config from 'ember-firebase-chat-app/config/environment';
import LoginUser from 'ember-firebase-chat-app/mixins/login-user';

export default Ember.Controller.extend(
  LoginUser, {

  userValues(){
    return {
      email: this.get('email'),
      password: this.get('password'),
      passwordConfirmation: this.get('passwordConfirmation')
    };
  },

  actions: {
    signup(){
      var firebase = new Firebase(config.firebase);
      firebase.createUser(this.userValues(), function(error, userData){
        if (error) {
          //Handle Errors here.
          console.log(error);
        } else {
          var user = this.store.createRecord('user', {
            id: userData.uid,
            name: this.get('name')
          });
          this.authenticateUser(this.get('email'), this.get('password'));
        }
      }.bind(this));
    }
  }
});
