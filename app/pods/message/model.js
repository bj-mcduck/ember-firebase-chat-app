import DS from 'ember-data';
var Model = DS.Model;
var attr = DS.attr;
var belongsTo = DS.belongsTo;

export default Model.extend({
  content: attr('string'),

  user: belongsTo('user', {
    inverse: 'messages'
  })
});
