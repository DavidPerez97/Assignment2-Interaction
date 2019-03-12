var AM = new AssetManager();



AM.queueDownload("./img/background2.jpg");
AM.queueDownload("./img/PlayerPing.png");
AM.queueDownload("./img/PongBG.png");
AM.queueDownload("./img/AgentPing.png")
AM.queueDownload("./img/pingBallOnYourSide.png");
AM.queueDownload("./img/pingBallOnEnemySide.png");



AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

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
    
    
    var playerPongBoard = new AgentPingBlock(gameEngine, AM.getAsset("./img/PlayerPing.png"), 'left'); //agent stuffAutomata(gameEngine);
    playerPongBoard.x = 100;
    playerPongBoard.y = 410;
    var playerPongBoard2 = new AgentPingBlock(gameEngine, AM.getAsset("./img/AgentPing.png"), 'right'); //agent stuffAutomata(gameEngine);
    var pong_boxes = [];
    pong_boxes.push(playerPongBoard);
    pong_boxes.push(playerPongBoard2);
    gameEngine.pong_boxes = pong_boxes;
    var pong_balls = [];
    pong_balls.push(pingPongBall);
    pong_balls.push(pingPongBall2);
    pong_balls.push(pingPongBall3);
    pong_balls.push(pingPongBall4);
    pong_balls.push(pingPongBall5);
    gameEngine.pong_balls = pong_balls;


    gameEngine.addEntity(playerPongBoard);
    gameEngine.addEntity(playerPongBoard2);
    gameEngine.addEntity(pingPongBall);
    gameEngine.addEntity(pingPongBall2);
    gameEngine.addEntity(pingPongBall3);
    gameEngine.addEntity(pingPongBall4);
    gameEngine.addEntity(pingPongBall5);



    //var agentPongBoard = new;//
    //var bouncingBall = new;
    //gameEngine.addEntity(automata);
    //gameEngine.board = automata;

    //gameEngine.addEntity(playerPongBoard);
    //gameEngine.addEntity(agentPongBoard);
    //gameEngine.addEntity(bouncingBall);

    
    console.log("All Done!");
});
