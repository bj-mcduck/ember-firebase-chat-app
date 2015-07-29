import Ember from 'ember';
const Component = Ember.Component;
const computed = Ember.computed;
const alias = computed.alias;

export default Component.extend({
  classNames: ['chatform'],

  avatar: alias('currentUser.avatar'),
  currentUser: null,
  message: null,

  avatarClass: computed('avatar', function(){
    let className = 'chatform-avatar';
    if (!this.get('avatar')) {
      className += ' chatform-avatar_placeholder';
    }
    return className;
  }),

  actions: {
    submit(){
      this.sendAction('submit', this.get('message'));
      this.set('message', null);
    },

    goTo(route){
      this.sendAction('goTo', route);
    }
  }
});
