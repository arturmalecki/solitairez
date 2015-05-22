define(["game/game_manager", "game/ui", "phaser"], function(GameManager, UI) {
  var state = {
    preload: function() {
    },
    create: function() {
      var ui = new UI(this);
      this.gameManager = new GameManager(this, ui);
      this.gameManager.start();
    },
    update: function() {
      this.gameManager.update();
    }
  }

  return state;
});
