define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/game',
  'game/init'
], function($, _, Backbone, template, game) {
  var view = Backbone.View.extend({
    el: "#solitairez",
    template: _.template(template),
    render: function() {
      this.$el.html(this.template);
      game.init();
    }
  });

  return view;
});
