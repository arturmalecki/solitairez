define([], function() {
  var Upkeep = function(gameManager) {
    this.gameManager = gameManager;
  }

  Upkeep.prototype = {
    entryAction: function() {
      this.gameManager.core.init();
    },
    exitAction: function() {
      return this.gameManager.idleState;
    },
    update: function() {
      console.log("UPKEEP STATE - update");
      return this.exitAction();
    }
  }
  Upkeep.prototype.constructor = Upkeep;

  return Upkeep;
});
