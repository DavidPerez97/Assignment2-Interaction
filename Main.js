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
    gameEngine.pongBall = pingPongBall;
    
    var playerPongBoard = new PlayerPingBlock(gameEngine, AM.getAsset("./img/PlayerPing.png")); //agent stuffAutomata(gameEngine);
    var playerPongBoard2 = new AgentPingBlock(gameEngine, AM.getAsset("./img/AgentPing.png")); //agent stuffAutomata(gameEngine);
    var pong_boxes = [];
    pong_boxes.push(playerPongBoard);
    pong_boxes.push(playerPongBoard2);
    gameEngine.pong_boxes = pong_boxes;
    



    gameEngine.addEntity(playerPongBoard);
    gameEngine.addEntity(playerPongBoard2);
    gameEngine.addEntity(pingPongBall);


    //var agentPongBoard = new;//
    //var bouncingBall = new;
    //gameEngine.addEntity(automata);
    //gameEngine.board = automata;

    //gameEngine.addEntity(playerPongBoard);
    //gameEngine.addEntity(agentPongBoard);
    //gameEngine.addEntity(bouncingBall);

    
    console.log("All Done!");
});
