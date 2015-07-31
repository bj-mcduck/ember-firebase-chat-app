import Ember from 'ember';
const {Component, computed} = Ember;
const {alias} = computed;

export default Component.extend({
  classNames: ['chatmessage'],
  classNameBindings: ['isCurrentUser'],

  avatar: alias('message.user.avatar'),
  delete: null,
  message: null,
  user: alias('message.user'),

  isCurrentUser: computed('currentUser', function(){
    if (this.get('currentUser.id') === this.get('user.id')) {
      return 'is-user';
    }
  }),

  actions: {
    delete(){
      this.sendAction('delete', this.get('message'));
    }
  }
});
