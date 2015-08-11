import Ember from 'ember';
import config from 'ember-firebase-chat-app/config/environment';
import LoginUser from 'ember-firebase-chat-app/mixins/signin-user';
const { Controller } = Ember;

export default Controller.extend(
  LoginUser, {
    avatars: [
      'buster.jpg',
      'buster2.jpg',
      'franklyn.jpg',
      'gangie.jpg',
      'george-michael.jpg',
      'george-michael2.jpg',
      'george.jpg',
      'gob1.jpg',
      'gob3.jpg',
      'lindsay.jpg',
      'lucille.jpg',
      'maeby.png',
      'michael.jpg',
      'michael2.png',
      'tobias.jpg',
      'tobias2.jpg',
      'tobias3.jpg',
      'tobias4.jpg'
    ],

    userValues(){
      return {
        email: this.get('email'),
        password: this.get('password'),
        passwordConfirmation: this.get('passwordConfirmation')
      };
    },

    getRandomAvatar(){
      let avatars = this.get('avatars');
      let randomNumber = Math.round( Math.random() * (avatars.length - 1) );
      return avatars[randomNumber];
    },

    actions: {
      signup(){
        if (this.get('name') === undefined) { return; }
        const firebase = new Firebase(config.firebase);
        firebase.createUser(this.userValues(), (error, userData) => {
          if (error) {
            //Handle Errors here.
          } else {
            this.store.createRecord('user', {
              id: userData.uid,
              name: this.get('name'),
              avatar: this.getRandomAvatar()
            }).save();
            this.authenticateUser(this.get('email'), this.get('password'));
          }
        });
      }
    }
  }
);
