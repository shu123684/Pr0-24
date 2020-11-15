
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Box(400, 650, 800, 10);

	box2 = new Box(480, 590, 20, 100);
	box3 = new Box(620, 590, 20, 100);
	box1 = new Box(550, 630, 150 ,20);

	paperObject = new paper(200, 600);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
	ground.display1();
	
	box1.display();
	box2.display();
	box3.display();

	paperObject.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85, y:-85});
	}
}


