class Game{
    constructor(){
        
    }
    async getState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val();
        })
      }
    update(state){
        database.ref("/").update({
            gameState : state
        })
    }
    async start(){    // async means not related to others but you call it with name of variable i.e game.start() not Game.start();
        if(gameState == 0){
            console.log("player_declare");
        // await can only be used in async functions
        player = new Player();
        ballObj = new Ball();
        var playerCountRef = await database.ref("playerCount").once("value");
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
        }
        form = new Form();
        form.display();
        console.log("Working");
        }
    }
    play(){
        form.hide();
        ballObj.ball.velocityX = 1 ;
        ballObj.updateBallInfo();
        ballObj.getBallInfo();
        
        drawSprites();
    }
}