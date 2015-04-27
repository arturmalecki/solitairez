define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/main',
  'views/main_menu'
], function($, _, Backbone, mainTemplate, mainMenuView) {
  return Backbone.View.extend({
    el: "#solitairez",
    template: _.template(mainTemplate),
    initialize: function() {
      this.$el.html(this.template);
      (new mainMenuView()).render();
    }
  });
});
