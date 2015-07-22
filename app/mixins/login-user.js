import Ember from 'ember';

export default Ember.Mixin.create({
  authenticateUser(email, password){
    this.get('session').authenticate('authenticator:firebase', {
      'email': email,
      'password': password
    }).then(function() {
      this.transitionToRoute('index');
    }.bind(this));
  }
});
