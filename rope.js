class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x:this.offsetX, y:this.offsetY},
            stiffness: 0.04,
            length: 200
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(3);
        var pntBx = pointB.x + this.offsetX;
        var pntBy = pointB.y + this.offsetY;
        line(pointA.x, pointA.y, pntBx, pntBy);
    }
    
    }