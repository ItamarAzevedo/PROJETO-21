
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var quadrado, bola, retanglo
var engine, world
var ball
var ground;
var left;
var rigth;
var top_wall;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	



	

	//Crie os Corpos Aqui.
	
	
	var options={
		isStatic: true
	}

	ground=Bodies.rectangle(400,690,800,20, options)
	World.add(world,ground)
	
  	ball=Bodies.circle(30,40,10,20,options)
  	
	World.add(world,ball)
}


function draw() {
  rectMode(CENTER);
  background("green");
  ground.show();
  top_wall.show();
  left.show();
  rigth.show();
  Engine.run(engine);
  rect(ground.position.x,ground.position.y,800,20)
  ellipse(ball.position.x,ball.position.y,20)

  drawSprites();
 
}


