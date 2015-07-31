import Ember from 'ember';
const Component = Ember.Component;
const computed = Ember.computed;
const alias = computed.alias;

export default Component.extend({
  classNames: ['chatform'],

  avatar: alias('currentUser.avatar'),
  currentUser: null,
  message: '',

  avatarClass: computed('avatar', function(){
    let className = 'chatform-avatar';
    if (!this.get('avatar')) {
      className += ' chatform-avatar_placeholder';
    }
    return className;
  }),

  didInsertElement(){
    this.$('input').on('keypress', function(e){
      if (e.which === 13) {
        this.submitMessage();
      }
    }.bind(this));
  },

  willDestroyElement(){
    this.$('input').off();
  },

  submitMessage(){
    let message = this.get('message');
    this.set('message', '');
    this.sendAction('submit', message);
  },

  actions: {
    submit(){
      this.submitMessage();
    },

    goTo(route){
      this.sendAction('goTo', route);
    }
  }
});
