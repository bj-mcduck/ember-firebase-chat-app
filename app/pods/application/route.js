import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
const {
  Route,
  RSVP
} = Ember;

export default Route.extend(
  ApplicationRouteMixin, {
    model(){
      return RSVP.hash({
        messages: this.store.findAll('message'),
        users: this.store.findAll('user')
      });
    }
  }
);
