
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var dustbin
function preload()
{
	dustbin=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

paper=new Paper(200,450,40);
ground=new Ground(600,height,2500,20)

boxPosition=width-250
 	boxY=530;


 	boxleftSprite=createSprite(boxPosition-12, boxY, 20,260);
 	boxleftSprite.shapeColor=color("white");

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	 World.add(world, boxLeftBody);
	 
	 boxrightSprite=createSprite(boxPosition+210 , boxY, 20,260);
 	boxrightSprite.shapeColor=color("white");

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	 World.add(world, boxRightBody);

	 boxBase=createSprite(boxPosition+100, boxY+45, 200,20);
	 boxBase.shapeColor=color("white");
	 boxBase.addImage(dustbin)
	 boxBase.scale=0.7
 	

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	
	 

	 
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  ellipseMode(CENTER);
  background("white");
  paper.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode ===UP_ARROW){
		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:83,y:-90})
		
	}
}

