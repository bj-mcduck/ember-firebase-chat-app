import Ember from 'ember';
const {Component, computed} = Ember;

export default Component.extend({
  classNames: ['userdisplay'],
  classNameBindings: ['loggedIn'],

  loggedIn: computed('user.online', function(){
    if (this.get('user.online') === "true") {
      return 'is-online';
    }
  })
});
