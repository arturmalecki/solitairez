define(["game/board"], function(Board) {
  var Core = function(gameManager) {
    this.gameManager = gameManager;
    this.board = new Board(this.gameManager.game);
  };

  Core.prototype = {
    init: function() {
      var self = this;
      this.board.cards.forEach(function(card) {
        self.gameManager.ui.display(card);
        //events.add(card, "onInputDown", card.click);
      });
      //ui.display(card);
      //events.add(card, "onInputDown", callbackFunction);
    }
  };
  Core.prototype.constructor = {};

  return Core;
});
