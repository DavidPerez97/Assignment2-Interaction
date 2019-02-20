var AM = new AssetManager();



AM.queueDownload("./img/background2.jpg");

AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./img/background2.jpg")));

    //var playerPongBoard = new; //agent stuffAutomata(gameEngine);
    //var agentPongBoard = new;//
    //var bouncingBall = new;
    //gameEngine.addEntity(automata);
    //gameEngine.board = automata;

    //gameEngine.addEntity(playerPongBoard);
    //gameEngine.addEntity(agentPongBoard);
    //gameEngine.addEntity(bouncingBall);

    
    console.log("All Done!");
});
