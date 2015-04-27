define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/main_menu',
  'views/select_game_menu'
], function($, _, Backbone, template, SelectGameMenuView) {
  var view = Backbone.View.extend({
    el: "#sMenu",
    template: _.template(template),
    events: {
      "click .sMainMenuSelectGame": "goToSelectGame"
    },
    render: function() {
      this.$el.html(this.template);
    },
    goToSelectGame: function() {
      var view = new SelectGameMenuView();
      view.render();
    }
  });

  return view;
});
