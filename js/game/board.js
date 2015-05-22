define(["game/card"], function(Card) {
  var Board = function(game) {
    this.game = game;
    this.cards = [new Card(this.game, 10, 10)];
  };

  Board.prototype = {
  };
  Board.prototype.constructor = {};

  return Board;
});
