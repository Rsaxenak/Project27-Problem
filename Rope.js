class Rope {
    constructor(bodyA, pointB) 
    {
        //this.offsetX = offsetX;
        //this.offsetY = offsetY;

        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
//            stiffness:0.04,
//          length: 10
//            pointB = {x : this.offsetX, y : this.offsetY}
        }
        this.rope = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.rope);
    }

    display() 
    {
        push();
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("white");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
}