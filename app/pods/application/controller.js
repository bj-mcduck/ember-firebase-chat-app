import Ember from 'ember';
var Controller = Ember.Controller;
var computed = Ember.computed;

export default Controller.extend({
  currentUser: computed('session.secure.uid', function(){
    var uid = this.get('session.secure.uid');
    return this.store.findRecord('user', uid);
  }),

  actions: {
    login(){
      this.transitionToRoute('login');
    },

    signup(){
      this.transitionToRoute('signup');
    }
  }
});
