 var tom1; 
 var jerry;
 var dog;
 var path,pathImg;        
 var bg;
 var PLAY = 1;
 var END  = 0;
 var gameState = PLAY;
 
 function preload(){
 tomImg = loadImage("tom.png");
 jerryImage = loadImage("jerry.png");
 dogImage = loadImage("dog.png");
 //path = loadImage("path.jpg");
 bgImg = loadImage("path.jpg");
}

function setup() {
 createCanvas(600,300)

 bg = createSprite(1200,70);
 bg.addImage(bgImg);
 bg.scale=1;
 bg.velocityX = -10;

 //create tomSprites
 tom1 = createSprite(150,150,20,50);
 tom1.addImage(tomImg);
 tom1.scale = 0.2;
 jerrysgroup = new Group();
 dogsgroup = new Group();
}


function draw() {
 background("black");
 
   if(gameState===PLAY){
    
    path = path + Math.round(getFrameRate()/50);
    path.velocityX = -(6 + 2*path/150);
    if (bg.x < 200){
      bg.x = bg.width/2;
     }
    tom1.y = World.mouseY;
     
    spawnJerry();

    spawnDogs();
    if(tom1.isTouching(jerrysgroup)){
      jerrysgroup.destroyEach();
     }
     if(dogsgroup.isTouching(tom1)){
      gameState = END;
      }
   }

    else if(gameState === END){
      tom1.destroy();
      dogsgroup.destroyEach();
      jerrysgroup.destroyEach();
      path.velocityX = 0;
      fill("red")
      textSize(30);
      text("game Over",300,150);
    }
    
  

  
  
   

 drawSprites();



 }



function spawnJerry(){
  if(frameCount % 60 === 0){
   jerry = createSprite(300,100,40,10);
   jerry.addImage(jerryImage);
   jerry.y = Math.round(random(15,100));
   jerry.scale = 0.05;
   jerry.velocityX = -3;
   jerry.lifetime = 200;
   jerry.depth = tom1.depth
   jerry.depth = tom1.depth + 1
   jerrysgroup.add(jerry);
  }
}

function spawnDogs(){
  if(frameCount % 150 === 0){
   dogs = createSprite(300,100,40,10);
   dogs.addImage(dogImage);
   dogs.y = Math.round(random(15,100));
   dogs.scale = 0.05;
   dogs.velocityX = -3;
   dogs.lifetime = 200;
   dogs.depth = tom1.depth
   dogs.depth = tom1.depth + 1
   dogsgroup.add(dogs);
  }
}