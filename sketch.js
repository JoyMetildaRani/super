/*var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;*/


var name_myra,super_myra,superb_Image,superb_spri;




function preload(){
 
  superb_Image = loadImage("superb.png");
  
 name_myra = loadAnimation("humshika.png","humshika1.png","humshika2.png","humshika3.png","humshika2.png","humshika1.png","humshika.png");
  
}

function setup() {
  super_myra = createSprite(200,200,20,50);
  super_myra.addAnimation("Myra", name_myra);
  super_myra.scale = 0.5;


  
 /* createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 */
}

function draw() {
  //set background color
  background("yellow");
  
  /*
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
*/
  
  drawSprites();
  
}



