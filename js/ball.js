class Ball{
    constructor(){
        this.ball = createSprite(500,350,20,20);
    }
    getBallInfo(){
        database.ref("ball/position").on("value",(data)=>{
            ballPosition = data.val();
            this.ball.x = ballPosition.x ;
            this.ball.y = ballPosition.y ;
        })
    }
    updateBallInfo(){
        database.ref("ball/position").update({
            x : this.ball.x ,
            y : this.ball.y ,
        })
    }
}