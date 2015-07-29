import DS from 'ember-data';
const {attr, hasMany, Model} = DS;

export default Model.extend({
  name: attr('string'),
  avatar:   attr('string'),

  messages: hasMany('message', {
    inverse: 'user',
    async: true
  })
});
