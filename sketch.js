
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var roof, savingRoof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof= new Roof(400,200,250,40);
	bob1 = new BOB(300, 400, 25);
	bob2 = new BOB(350, 400, 25);
	bob3 = new BOB(400, 400, 25);
	bob4 = new BOB(450, 400, 25);
	bob5 = new BOB(500, 400, 25);
//	savingRoof = new Roof(400,580,500,30);

	rope1 = new Rope(bob1.body, {x : 300, y : 200})
	rope2 = new Rope(bob2.body, {x : 350, y : 200})
	rope3 = new Rope(bob3.body, {x : 400, y : 200})
	rope4 = new Rope(bob4.body, {x : 450, y : 200})
	rope5 = new Rope(bob5.body, {x : 500, y : 200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

//  savingRoof.display();
  fill("white");
  text(mouseX + "," + mouseY, 10, 10);
  drawSprites();
 
}

function keyPressed() 
{
	if (keyCode === UP_ARROW) 
	{
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-100, y:-100});
	}
}

