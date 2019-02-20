var AM = new AssetManager();



AM.queueDownload("./img/slime_sprite.png");
AM.queueDownload("./img/background2.jpg");

AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();


    

    gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./img/background2.jpg")));





    
    console.log("All Done!");
});
