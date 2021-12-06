
const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var world;
var engine;
var ground;
var box1;
var box2;
var ground;

function setup() {
  createCanvas(800,4000);
  engine=Engine.create();
  world=engine.world;
  box1=new Box(400,2000,20,20);
  box2=new Box(200,400,30,40);
  ground=new Ground(300,height,3000,10)  
}

function draw() {
  background("black");  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();

}