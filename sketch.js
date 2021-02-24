const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Body;

var engine,world;
var division=[];
var particle=[];
var plinko=[];
var ground;
var devisionHeight=200;

function setup() {
  createCanvas(400,600);
  engine = Engine.create();
  world = World.create();
  ground = new Ground(200,590,400,20);

  for(var d = 0; d<=Width; d=d+80){
    division.push(new Sticks(d,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j=15; j<=width; j=j+50){
    plinko.push(new Plinko(j,75));
  }

  for(var j=30; j<=width; j=j+50){
    plinko.push(new Plinko(j,175));
  }

  for(var j=10; j<=width; j=j+50){
    plinko.push(new Plinko(j,275));
  }

  for(var j=40; j<=width-10; j=j+50){
    plinko.push(new Plinko(j,350));
  }
  
}

function draw() {
  background("cyan");  
  Engine.update(engine);

  ground.display();

  for(var d=0; d<division.length; d++){
    division[d].display();
  }

  if(frameCount%60===0){
    particle.push(new Ball(random(30,300),10,10));
  }

  for(var p=0; p<particle.length; p++){
    particle[p].display();
  }

  for(var i=0; i<plinko.length; i++){
    plinko[i].display();
  }
  drawSprites();
}