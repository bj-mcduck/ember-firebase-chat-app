import DS from 'ember-data';
const {attr, belongsTo, Model} = DS;

export default Model.extend({
  content: attr('string'),

  user: belongsTo('user', {
    inverse: 'messages',
    async: true
  })
});
