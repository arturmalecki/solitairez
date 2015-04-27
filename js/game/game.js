define(['phaser'], function(Phaser) {
  var game = function() {
    new Phaser.Game(800, 600, Phaser.AUTO, "sGame");
  }
  return {
    run: game
  };
});
