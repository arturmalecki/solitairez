define(["phaser"], function() {
  var Card = function(game, x, y) {
    Phaser.Image.call(this, game, x, y, 'ace', 1)
  };

  Card.prototype = Object.create(Phaser.Image.prototype, {
  });
  Card.prototype.constructor = Card;

  return Card;
});
