class Ball{
    constructor(x,y,r){
        var options = {
            restitutuion:0.4
        }
        this.r=r;

        this.body = Bodies.circles(x,y,this.r,options);
        this.color=color(random(0,255)),random(0,255),random(0,255);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStorke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0.0.this.r,this.r);
        pop();
    }
}