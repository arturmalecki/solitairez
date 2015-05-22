define(function() {
  var state = {
    preload: function() {
      this.load.image('ace', 'images/ace.jpg');
    },
    create: function() {
      this.state.start("Game");
    }
  }

  return state;
});
