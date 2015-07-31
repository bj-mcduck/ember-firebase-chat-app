import Ember from 'ember';
import config from 'ember-firebase-chat-app/config/environment';
const {Controller, computed} = Ember;

export default Controller.extend({
  currentUser: computed('session.secure.uid', function(){
    const uid = this.get('session.secure.uid');
    if (uid !== undefined) {
      this.setUpPresenceCheck(uid);
      this.toast("You've logged in.");
      return this.store.find('profile', uid);
    } else {
      return null;
    }
  }),

  setUpPresenceCheck(uid){
    const isConnected = new Firebase(config.firebase + '/.info/connected');
    isConnected.on('value', function(snapshot){
      if (snapshot.val()){
        let userRef = new Firebase(config.firebase + '/profiles/' + uid + '/online');
        userRef.onDisconnect(function(){
          this.toast("You've logged out.");
          userRef.set(Firebase.ServerValue.TIMESTAMP);
        }.bind(this));
        userRef.set(true);
      }
    });
  },

  toast(message){
    this.set('toastMessage', message);
    this.set('showToast', true);
  },

  actions: {
    goTo(route){
      this.transitionToRoute(route);
    },

    toast(message){
      this.toast(message);
    },

    closeToast(){
      this.set('showToast', false);
    }
  }
});
