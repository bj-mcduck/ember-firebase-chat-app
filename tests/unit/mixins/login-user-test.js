import Ember from 'ember';
import LoginUserMixin from '../../../mixins/login-user';
import { module, test } from 'qunit';

module('Unit | Mixin | login user');

// Replace this with your real tests.
test('it works', function(assert) {
  var LoginUserObject = Ember.Object.extend(LoginUserMixin);
  var subject = LoginUserObject.create();
  assert.ok(subject);
});
