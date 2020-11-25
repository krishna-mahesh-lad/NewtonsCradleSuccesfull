const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1, b2, b3, b4, b5;
var r1, r2, r3, r4, r5
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1 = new Bob (302,500,30);
	b2 = new Bob (364,500,30);
	b3 = new Bob (426,500,30);
	b4 = new Bob (488,500,30);
  b5 = new Bob (550,500,30);
  r1 = new Roof (302,200,30,30);
	r2 = new Roof (364,200,30,30);
	r3 = new Roof (426,200,30,30);
	r4 = new Roof (488,200,30,30);
	r5 = new Roof (550,200,30,30);
	roof = new Roof (426,200,325,50);
	rope1 = new Rope (b1.body,r1.body);
	rope2 = new Rope (b2.body,r2.body);
	rope3 = new Rope (b3.body,r3.body);
	rope4 = new Rope (b4.body,r4.body);
	rope5 = new Rope (b5.body,r5.body);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("lightgreen");

  r1.display();
  r2.display();
  b3.display();
  r4.display();
  r5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  roof.display();
};

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(b1.body,b1.body.position,{x:-250,y:0});
    }
}


