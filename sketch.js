var player,player_run,Enemy,enemy_run;
var Ground,ground,Cloud,Cloud2,cloud,cloud2;
var Wall,wall,Box,box;

function preload(){
  player_run = loadAnimation("player1.png", "player2.png");
  enemy_run = loadAnimation("ene1.png", "ene2.png");
  ground = loadImage("ground.png");
  cloud = loadImage("cloud1.png");
  cloud2 = loadImage("cloud2.png");
  wall = loadImage("wall.png");
  box = loadImage("mystry.png")
}

function setup() {
  createCanvas(600,400)

  player = createSprite(40, 320, 20, 20);
  player.addAnimation("running", player_run);
  player.scale = 0.08
  
  Ground = createSprite(600,370,1000,10)
  Ground.addImage(ground)
  Ground.x = ground.width/2;

  
}

function draw() {
  background(94,146,253);  
  player.collide(Ground);

  if (Ground.x < 0){
    Ground.x = Ground.width/2;
  }

  if(keyDown("space") && player.y >= 259) {
    player.velocityY = -10;
  }

  player.velocityY = player.velocityY + 0.8
  player.velocityX = 0;
  Ground.velocityX = 0;

  if(keyDown("d")){
   player.velocityX = 3;
   Ground.velocityX = -1;
  }
  if(keyDown("a")){
    player.velocityX = -3
   }
   spawnEnemy()
  drawSprites();
}


function spawnEnemy() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -5
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: Enemy.addAnimation(enemy_run);
            //  break;
     // case 2: obstacle.addImage(obstacle2);
         //     break;
     // case 3: obstacle.addImage(obstacle3);
         //     break;
    //  case 4: obstacle.addImage(obstacle4);
            //  break;
    //  case 5: obstacle.addImage(obstacle5);
           //   break;
     // case// 6: obstacle.addImage(obstacle6);
//break;
      default: break;
    }
              
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    
  }
}

 