class Vec
{
    constructor(x=0,y=0){
        this.x=x;
        this.y=y;
    }
}

class Rect{
    constructor(w,h){
        this.pos=new Vec(0,0);
        this.size=new Vec(w,h)
    }
    get left()
    {
        return this.pos.x - this.size.x /2;
    }

    get right()
    {
        return this.pos.x + this.size.x /2;
    }
    get top()
    {
        return this.pos.y - this.size.y /2;
    }

    get bottom()
    {
        return this.pos.y + this.size.y /2;
    }
}

class Ball extends Rect {

    constructor(){
        super(10,10)
        this.vel = new Vec
    }
}


class Pong{
    constructor(canvas){
        this._canvas = canvas;
        this._context = canvas.getContext('2d');
 
        this.ball=new Ball;
        this.ball.pos.x=100
        this.ball.pos.y=50
        this.ball.vel.x = 100
        this.ball.vel.y = 100
        let lastTime;
        const callback(millis)=>{
            if(lastTime){
                update((millis - lastTime)/1000)
            }
            lastTime = millis;
            window.requestAnimationFrame(callback);
        }
        callback()
    }

    update(dt){
        this.ball.pos.x += ball.vel.x*dt;
        this.ball.pos.y += ball.vel.y*dt;
    
         //check if the ball is hitting the wall, and if so , 
         //reverse the direction
    
         if ( this.ball.left < 0 || ball.right > this._canvas.width ){
             this.ball.vel.x = -this.ball.vel.x;
         }
         if ( this.ball.top < 0 || this.ball.bottom > this._canvas.height ){
            this.ball.vel.y = -this.ball.vel.y;
        }
    
        this._context.fillStyle="#0FF";
        this._context.fillRect(0,0, this._canvas.width, this._canvas.height);
        this._context.fillStyle="#F00";
        this._context.fillRect(this.ball.pos.x,ball.pos.y, 
                               this.ball.size.x,this.ball.size.y);
    }
}

const canvas = document.getElementById("pong");
const pong = new Pong(canvas);

