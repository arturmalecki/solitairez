define(['./states/boot', './states/preload', './states/game'], function(bootState, preloadState, gameState) {
  return {
    init: function(game) {
      game.state.add("Boot", bootState);
      game.state.add("Preload", preloadState);
      game.state.add("Game", gameState);
      game.state.start("Boot");
    }
  }
});
