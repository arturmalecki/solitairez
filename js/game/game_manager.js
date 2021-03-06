define(["game/card",
        "game/states/init",
        "game/states/check_win",
        "game/states/upkeep",
        "game/states/idle",
        "game/states/process_action",
        "game/core"],
       function(Card, InitState, CheckWinState, UpkeepState, IdleState, ProcessActionState, Core) {
  var GameManager = function(game, ui) {
    this.game = game;
    this.ui = ui;

    this.core = new Core(this);

    this.initState = new InitState(this);
    this.checkWinState = new CheckWinState(this);
    this.upkeepState = new UpkeepState(this);
    this.idleState = new IdleState(this);
    this.processActionState = new ProcessActionState(this);
    this.state;
  }

  GameManager.prototype = {
    start: function() {
      this.state = this.initState;
      this.state.entryAction();
    },

    update: function() {
      var state = this.state.update();
      if(state !== undefined) {
        this.state = state;
      }
    },

    changeStateTo: function(stateName) {
      this.state = this[stateName];
    }
  }
  GameManager.prototype.constructor = GameManager;
  return GameManager;
});
