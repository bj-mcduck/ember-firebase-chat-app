import Ember from 'ember';
const {Controller, inject, computed} = Ember;
const {alias} = computed;

export default Controller.extend({
  application: inject.controller(),
  currentUser: alias('application.currentUser'),

  onlineUsers: computed('model.@each.online', function(){
    console.log('re-ran onlineUsers');
    let onlineUsers = this.get('model').filter(function(user){
      return user.get('online') === 'true';
    }.bind(this));
    return onlineUsers.sortBy('name');
  }),

  offlineUsers: computed('model.@each.online', function(){
    let offlineUsers = this.get('model').filter(function(user){
      return user.get('online') !== 'true';
    }.bind(this));
    return offlineUsers.sortBy('name');
  })
});
