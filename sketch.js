const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,ground,box,ball,chain;
function setup(){
createCanvas(1000,600)
engine = Engine.create()
world = engine.world;
ground = new Ground(500,580,1000,30)
box = new Box(800,100,50,50)
box2 = new Box(800,100,50,50)
box3 = new Box(800,100,50,50)
box4 = new Box(800,100,50,50)
box5 = new Box(800,100,50,50)
box6 = new Box(800,100,50,50)
box7 = new Box(800,100,50,50)
box8 = new Box(800,100,50,50)
ball = new Ball(600,50,50,50)
chain = new Chain(ball.body,{x:600,y:40})

}

function draw(){
    background("black")
  Engine.update(engine)  

  ground.display()
  box.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  ball.display()
  chain.display()
}
function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}