define([], function() {
  var ProcessAction = function(gameManager) {
    this.gameManager = gameManager;
  }

  ProcessAction.prototype = {
    entryAction: function() {
    },
    exitAction: function() {
      return this.gameManager.checkWinState;
    },
    update: function() {
      console.log("PROCESS ACTION STATE - update");
    }
  }
  ProcessAction.prototype.constructor = ProcessAction;

  return ProcessAction
});
