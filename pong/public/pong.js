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

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 3; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    changeColor(){
      //Create a random color
     this.setColor(this.getRandomColor());
    }

    setColor(color){
        this.color = color;
    }

    getColor(){
        return this.color;
    }
}

class Ball extends Rect {

    constructor(){
        super(10,10)
        this.vel = new Vec
    }
}

class Dude extends Rect {

    constructor(startx, starty){
        super(startx,starty)
        this.vel = new Vec
    }
}

class Pong{
    constructor(canvas){
        this._canvas = canvas;
        this._context = canvas.getContext('2d');
 
        this.ball=new Ball;
        this.ball.pos.x=100;
        this.ball.pos.y=50;
        this.ball.vel.x = 100;
        this.ball.vel.y = 100;
        this.ball.setColor("#F00");
        let lastTime;

        this.p1 = new Dude(10,50);
        this.p1.pos.x=100;
        this.p1.pos.y=50;
        this.p1.vel.x = 0;
        this.p1.vel.y = 0;
        this.p1.setColor("#FF0");

        
        this.p2 = new Dude(10,50);
        this.p2.pos.x=500;
        this.p2.pos.y=50;
        this.p2.vel.x = 0;
        this.p2.vel.y = 0;
        this.p2.setColor("#0F0");

        const callback = (millis) => {
            if(lastTime){
                this.update((millis - lastTime)/1000)
            }
            lastTime = millis;
            window.requestAnimationFrame(callback);
        }
        callback()
    }

    drawRect(rect){
        this._context.fillStyle = rect.getColor();
        this._context.fillRect(rect.pos.x,rect.pos.y, 
                               rect.size.x,rect.size.y);   
    }
    
    drawBoard(){
        this._context.fillStyle="#0FF";
        this._context.fillRect(0,0, this._canvas.width, this._canvas.height);
        this.drawRect(this.ball);
        this.drawRect(this.p1);
        this.drawRect(this.p2);
        
    }

    update(dt){
        this.ball.pos.x += this.ball.vel.x*dt;
        this.ball.pos.y += this.ball.vel.y*dt;
    
         //check if the ball is hitting the wall, and if so , 
         //reverse the direction
    
         if ( this.ball.left < 0 || this.ball.right > this._canvas.width ){
             this.ball.vel.x = -this.ball.vel.x;
         }
         if ( this.ball.top < 0 || this.ball.bottom > this._canvas.height ){
            this.ball.vel.y = -this.ball.vel.y;   
        }
        this.ball.changeColor();
        this.drawBoard();
    }
}

const canvas = document.getElementById("pong");
const pong = new Pong(canvas);


























