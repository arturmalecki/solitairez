define([], function() {
  var Idle = function(gameManager) {
    this.gameManager = gameManager;
  }

  Idle.prototype = {
    entryAction: function() {
    },
    exitAction: function() {
      return this.gameManager.idleState;
    },
    update: function() {
      console.log("IDLE STATE - update");
    }
  }
  Idle.prototype.constructor = Idle;

  return Idle
});
