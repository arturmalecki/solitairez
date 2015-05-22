define([], function() {
  var Init = function(gameManager) {
    this.gameManager = gameManager;
  }

  Init.prototype = {
    entryAction: function() {
      this.gameManager.core.init();
    },
    exitAction: function() {
      return this.gameManager.checkWinState;
    },
    update: function() {
      console.log("INIT STATE - update");
      return this.exitAction();
    }
  }
  Init.prototype.constructor = Init;

  return Init;
});
