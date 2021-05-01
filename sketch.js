var sword, sword1;
var FruitGroup, MonsterGroup;
var PLAY = 1;
var END = 0;
var GameState = 1;
var fruit,fruit1, fruit2, fruit3, fruit4;
var monster,alien1, alien2;
var Score;
var gameOver, gameOver1;
var r;


function preload(){
  sword = loadImage("sword.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  alien1 = loadImage("alien1.png");
  gameOver = loadImage("gameover.png");
  KnifeSwooshSound = loadSound("knifeSwooshSound.mp3");
  GameOverSound = loadSound("gameover.mp3")
}

function setup() {
 createCanvas(400, 400);
 
sword1 = createSprite(200,200,10,10);
sword1.addImage("sword",sword);
sword1.scale=0.5;
sword1.addImage("over",gameOver);
  
  FruitGroup=new Group();
  MonsterGroup=new Group();
 
  Score=0;
}

function draw(){
  background("lightblue");
  text("Score:"+Score,20,40);
  
  
  if(GameState===PLAY){
  fruits();
  enemy();
    
  sword1.y = World.mouseY;
  sword1.x = World.mouseX;
  
    
  if(FruitGroup.isTouching(sword1)){
    Score=Score+1
    FruitGroup.destroyEach();
    KnifeSwooshSound.play();
  }
  if(MonsterGroup.isTouching(sword1)){
    GameState=END;
    FruitGroup.destroyEach();
    sword1.changeImage("over",gameOver)
    sword1.x=200;
    sword1.y=200;
    GameOverSound.play();
  }
  }
  drawSprites();    
  }

function fruits() {
 if(World.frameCount%80===0){
  
   fruit=createSprite(400,Math.round(100,340),20,20);
   position=Math.round(random(1,2));
   if(position==1){
     fruit.x=400;
     fruit.velocityX=-(7+(Score/4))
   }
   else{
     (position==2)
      fruit.x=0;
      fruit.velocityX=(7+(Score/4));
     
   }
   
   r=Math.round(random(1,4));
  if(r===1){
    fruit.addImage(fruit1);
 }
   else if(r===2){
     fruit.addImage(fruit2);
 } 
  else if(r===3){
    fruit.addImage(fruit3);
  }
  else{
    fruit.addImage(fruit4);
  }
  fruit.setLifetime=100;
   fruit.scale=0.2;
  
  FruitGroup.add(fruit);
}
}

function enemy() {
  if(World.frameCount%160===0){
    monster=createSprite(400,200,20,20);
    monster.addImage(alien1);
    monster.y=Math.round(random(100,300));
    monster.velocityX=-(9+(Score/10));
    monster.setLifetime=100;
     
    MonsterGroup.add(monster);
  } 
}

