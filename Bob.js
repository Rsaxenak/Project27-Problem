class BOB
{
    constructor(x,y,radius) 
    {
        var options = {
            'isStatic': false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
        }
        this.body = Bodies.circle(x,y,radius,options);
        
        World.add( world, this.body);
    }
    display() {
        var pos = this.body.position;
//        var angle = this.body.angle;
        push();
        ellipseMode(CENTER);
        strokeWeight(2);
        stroke("lightblue");
        fill("red");
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}