
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player_main;
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10;
var back;
var bulletGroup;

function preload(){
	backgroundImage = loadImage("images/space.jpg");
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	/*back = createSprite(400,400,800,800);
	back.velocityX = -2;*/

	player_main = new player(200,200,200,200);
	enemy1 = new enemy(150,350,50,50);
	enemy2 = new enemy(250,350,50,50);
	enemy3 = new enemy(400,350,50,50);
	enemy4 = new enemy(200,330,50,50);
	enemy5 = new enemy(380,300,50,50);
	enemy6 = new enemy(240,250,50,50);
	enemy7 = new enemy(500,350,50,50);
	enemy8 = new enemy(650,150,50,50);
	enemy9 = new enemy(700,250,50,50);
	enemy10 = new enemy(600,350,50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);

  /*if(back.x < 0  ){
	  back.x = back.width/2;
	// back.addImage(backgroundImage);
  }*/

  player_main.display();
  enemy1.display();
  enemy2.display();
  enemy3.display();
  enemy4.display();
  enemy5.display();
  enemy6.display();
  enemy7.display();
  enemy8.display();
  enemy9.display();
  enemy10.display();

  if(keyDown(UP_ARROW)){
	player_main.velocityX = 0;
	player_main.velocityY = -5; 
 }

 if(keyDown(DOWN_ARROW)){
	 player_main.velocityX = 0;
	 player_main.velocityY = 5;
 }

 if(keyDown(LEFT_ARROW)){
	 player_main.velocityX = -2;
	 player_main.velocityY = 0;
 }

 if(keyDown(RIGHT_ARROW)){
	 player_main.velocityX = 2;
	 player_main.velocityY = 0;

	if(bulletGroup.isTouching(enemy1)){
		enemy1.hide();
	}

	if(bulletGroup.isTouching(enemy2)){
		enemy2.hide();
	}

	if(bulletGroup.isTouching(enemy3)){
		enemy3.hide();
	}

	if(bulletGroup.isTouching(enemy4)){
		enemy4.hide();
	}

	if(bulletGroup.isTouching(enemy5)){
		enemy5.hide();
	}

	if(bulletGroup.isTouching(enemy6)){
		enemy6.hide();
	}

	if(bulletGroup.isTouching(enemy7)){
		enemy7.hide();
	}

	if(bulletGroup.isTouching(enemy8)){
		enemy8.hide();
	}

	if(bulletGroup.isTouching(enemy9)){
		enemy9.hide();
	}

	if(bulletGroup.isTouching(enemy10)){
		enemy10.hide();
	}
 }

 

  
  drawSprites();
}

function keyPressed(){
	if(keyCode === 32){
		var bullet = createSprite(player_main.x,player_main.y,10,10);
		bullet.x = mouseX;
		bullet.y = mouseY
		bullet.velocityX = 2;
		bullet.shapeColor = "red";
		bulletGroup.add(bullet);
	}
}



	




