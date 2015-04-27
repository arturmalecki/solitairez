define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/select_game_menu',
  'views/game'
], function($, _, Backbone, template, GameView) {
  var view = Backbone.View.extend({
    el: "#sMenu",
    template: _.template(template),
    events: {
      "click .sSelectGameMenuGame1": "lunchGame"
    },
    render: function() {
      this.$el.html(this.template);
    },
    lunchGame: function() {
      (new GameView).render();
    }
  });

  return view;
});
