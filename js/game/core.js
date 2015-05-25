define(["game/board"], function(Board) {
  var Core = function(gameManager) {
    this.gameManager = gameManager;
    this.game = this.gameManager.game;
    this.board = new Board(this.gameManager.game);
  };

  Core.prototype = {
    init: function() {
      this.board.cards.forEach(this.setupCard, this);
    },
    setupCard: function(card) {
      var self = this;
      this.gameManager.ui.display(card);

      card.events.onDragStart.add(function(){
        self.gameManager.changeStateTo('processActionState');
        card.savePosition();
      }, this);

      card.events.onDragStop.add(function(){
        var tween = self.game.add.tween(card);

        if(true) {
          tween.to({x: card.oldX, y: card.oldY}, 800, Phaser.Easing.Bounce.Out, true);
          tween.onComplete.add(function() {
            self.gameManager.changeStateTo('checkWinState');
          });
        } else {
        }

        card.processAction();
      });
    }
  };
  Core.prototype.constructor = {};

  return Core;
});
