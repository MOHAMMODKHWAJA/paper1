
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1,wall2,wall3;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 600);
	line1 = createSprite(1000,590,200,20);
	line1.shapeColor=color("white");
	line2= createSprite(900,550,20,150);
	line2.shapeColor=color("white");
	line3= createSprite(1100,550,20,150);
	line3.shapeColor=color("white");
	
	  
	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(600,height,1600,20);
paper1 = new paper(150,580,80);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
paper1.display();








  drawSprites();
 
}



