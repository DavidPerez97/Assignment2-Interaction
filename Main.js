var AM = new AssetManager();



AM.queueDownload("./img/background2.jpg");
AM.queueDownload("./img/PlayerPing.png");
AM.queueDownload("./img/PongBG.png");
AM.queueDownload("./img/AgentPing.png")
AM.queueDownload("./img/pingBallOnYourSide.png");
AM.queueDownload("./img/pingBallOnEnemySide.png");




window.onload = function () {
  var socket = io.connect("http://24.16.255.56:8888");

  socket.on("load", function (data) {
      console.log(data)
      setPongBoard_One(data.board_1)
      setPongBoard_Two(data.board_2)
      set_all_existing_ball_stats(data.pingballs)
    });

  var text = document.getElementById("text");
  var saveButton = document.getElementById("save");
  var loadButton = document.getElementById("load");

  saveButton.onclick = function () {
    console.log("save");
    text.innerHTML = "Saved."
    socket.emit("save", { studentname: "David Perez", statename: "Ping_Pong", 
                board_1: getPongBoard_One(), board_2: getPongBoard_Two(),
                pingballs: get_all_existing_ball_stats()});
  };

  loadButton.onclick = function () {
    console.log("load");
    text.innerHTML = "Loaded."
    socket.emit("load", { studentname: "David Perez", statename: "Ping_Pong" });
  };
};






function change_saved_val(num) {
  this.saved_val = num;
}
function getGameEngine() {
    return this.gameEngine;
}    

function getSavedVal() {
  return this.saved_val
}

function getPongBoard_One() {
  return this.playerPongBoard.get_all_pong_stats();
}

function getPongBoard_Two() {
  return this.playerPongBoard2.get_all_pong_stats();
}
function setPongBoard_One(list) {
  return this.playerPongBoard.set_all_pong_stats(list);
}

function setPongBoard_Two(list) {
  return this.playerPongBoard2.set_all_pong_stats(list);
}



function get_all_existing_ball_stats () {
  list_of_list = [];
  for (let i = 0; i < this.pong_balls.length; i++) {
    newlist = this.pong_balls[i].get_ball_stats()
    list_of_list.push(newlist)
  }
  return list_of_list
}

function set_all_existing_ball_stats(list_of_lists) {
  for (let i = 0; i < this.pong_balls.length; i++) {
    
    this.pong_balls[i].set_ball_stats(list_of_lists[i])
  }
}













AM.downloadAll(function () {

    var canvas = document.getElementById("gameWorld");
    this.saved_val = 1000;
    var ctx = canvas.getContext("2d");

    this.gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();
    this.gameEngine.x = 10;

    gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./img/PongBG.png")));
    var pingPongBall = new PingBall(gameEngine, AM.getAsset("./img/pingBallOnYourSide.png"),
                                                AM.getAsset("./img/pingBallOnEnemySide.png"));

    var pingPongBall2 = new PingBall(gameEngine, AM.getAsset("./img/pingBallOnYourSide.png"),
                                                AM.getAsset("./img/pingBallOnEnemySide.png"));
    var pingPongBall3 = new PingBall(gameEngine, AM.getAsset("./img/pingBallOnYourSide.png"),
                                                AM.getAsset("./img/pingBallOnEnemySide.png"));
    var pingPongBall4 = new PingBall(gameEngine, AM.getAsset("./img/pingBallOnYourSide.png"),
                                                AM.getAsset("./img/pingBallOnEnemySide.png"));
    var pingPongBall5 = new PingBall(gameEngine, AM.getAsset("./img/pingBallOnYourSide.png"),
                                                AM.getAsset("./img/pingBallOnEnemySide.png"));
    
    gameEngine.pongBall = pingPongBall;
    
    
    this.playerPongBoard = new AgentPingBlock(gameEngine, AM.getAsset("./img/PlayerPing.png"), 'left'); //agent stuffAutomata(gameEngine);
    playerPongBoard.x = 100;
    playerPongBoard.y = 410;
    this.playerPongBoard2 = new AgentPingBlock(gameEngine, AM.getAsset("./img/AgentPing.png"), 'right'); //agent stuffAutomata(gameEngine);
    var pong_boxes = [];
    pong_boxes.push(playerPongBoard);
    pong_boxes.push(playerPongBoard2);
    gameEngine.pong_boxes = pong_boxes;
    var pong_balls = [];
    pong_balls[0] = (pingPongBall);
    pong_balls[1] = (pingPongBall2);
    pong_balls[2] = (pingPongBall3);
    pong_balls[3] = (pingPongBall4);
    pong_balls[4] = (pingPongBall5);
    gameEngine.pong_balls = pong_balls;
    this.pong_balls = pong_balls;


    gameEngine.addEntity(playerPongBoard);
    gameEngine.addEntity(playerPongBoard2);
    gameEngine.addEntity(pingPongBall);
    gameEngine.addEntity(pingPongBall2);
    gameEngine.addEntity(pingPongBall3);
    gameEngine.addEntity(pingPongBall4);
    gameEngine.addEntity(pingPongBall5);


    console.log(getPongBoard_One())



    
    console.log("All Done!");
});
//get_ball_stats