define([], function() {
  var CheckWin = function(gameManager) {
    this.gameManager = gameManager;
  }

  CheckWin.prototype = {
    entryAction: function() {
      this.gameManager.core.init();
    },
    exitAction: function() {
      return this.gameManager.upkeepState;
    },
    update: function() {
      console.log("CHECK WIN STATE - update");
      return this.exitAction();
    }
  }
  CheckWin.prototype.constructor = CheckWin;

  return CheckWin;
});
