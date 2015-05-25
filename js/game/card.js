define(["phaser"], function() {
  var Card = function(game, x, y) {
    this.game = game;
    Phaser.Sprite.call(this, game, x, y, 'ace', 1)
    this.inputEnabled = true;
    this.input.enableDrag();
  };

  Card.prototype = Object.create(Phaser.Sprite.prototype);
  Card.prototype.savePosition = function() {
    this.oldX = this.x;
    this.oldY = this.y;
  };
  Card.prototype.processAction = function(successCallback) {
    this.oldX = undefined;
    this.oldY = undefined;
  }
  Card.prototype.constructor = Card;

  return Card;
});
