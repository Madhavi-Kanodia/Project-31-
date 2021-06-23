const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var divisions = [];
divisionsHeight = 300;
var particles = [];
var plinkos = [];
function setup() {
  createCanvas(490,800)
  
    engine = Engine.create();
    world = engine.world;
   
    ground1 = new Ground(100,790,1000,20);

    for(var k = 0; k<=width; k=k + 80){
      divisions.push(new Divisions(k, height-divisionsHeight/2, 10,divisionsHeight ))
    }
    for(var j = 75; j <=width; j=j + 50){
      particles.push(new Particle(j, 75))
    }
}

function draw() {
  background("black"); 
  ground1.display();
  
  for(var n = 0; n<divisions.length; n++){
    divisions[n].display();
  }
  for(var l = 1; j<particles.length; l++){
    particles[l].display();
  }
  drawSprites();
}