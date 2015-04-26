define(['jquery', 'underscore', 'backbone', 'views/main'], function($, _, Backbone, MainView) {
  var initialize = function() {
    new MainView();
  }

  return {
    initialize: initialize
  }
});
