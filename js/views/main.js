define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  var view = Backbone.View.extend({
    initialize: function() {
      console.log('initialized')
    }
  })

  return view;
});
