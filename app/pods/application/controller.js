import Ember from 'ember';
const {Controller, computed} = Ember;

export default Controller.extend({
  currentUser: computed('session.secure.uid', function(){
    var uid = this.get('session.secure.uid');
    if (uid !== undefined) {
      return this.store.findRecord('user', uid);
    } else {
      return null;
    }
  }),

  actions: {
    goTo(route){
      this.transitionToRoute(route);
    }
  }
});
