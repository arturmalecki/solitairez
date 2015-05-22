define(function() {
  var UI = function(game) {
    this.game = game;
  }

  UI.prototype = {
    display: function(obj) {
      this.game.add.existing(obj); 
    }
  }
  UI.prototype.constructor = UI;

  return UI;
});
