import Ember from 'ember';
const Component = Ember.Component;
const computed = Ember.computed;
const alias = computed.alias;

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
      console.log('delete');
      console.log(this.get('message'));
      this.sendAction('delete', this.get('message'));
    }
  }
});
