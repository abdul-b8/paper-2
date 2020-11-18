
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbin

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground (400,350,width,height)
  paper= new Paper(100,670,70);
  paper.scale = 0.5

	dustbin = new Dustbin(400,675);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  dustbin.display();

  if (keyDown(UP_ARROW)){

  Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85,y:-85})
  	
  }
  
  drawSprites();
 
}



