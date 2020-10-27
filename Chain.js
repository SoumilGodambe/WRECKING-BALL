class Chain{
    constructor(BodyA,PointB){
        var options = {
            bodyA : BodyA,
            pointB : PointB,
            stiffness : 0.8 ,
            length : 300,
        }
        this.chain = Constraint.create(options)
        World.add(world,this.chain)
        
    }
    display(){
    var pointA = this.chain.bodyA.position
    var pointB = this.chain.pointB
    stroke("blue")
    strokeWeight(10)   
    line(pointA.x,pointA.y,pointB.x,pointB.y)

    }
}