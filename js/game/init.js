define(['../states', 'phaser'], function(States) {
  var GameInit = {
    init: function() {
      var game = new Phaser.Game(800, 600, Phaser.CANVAS, "sGame");
      States.init(game);
    }
  }
  return GameInit;
});
