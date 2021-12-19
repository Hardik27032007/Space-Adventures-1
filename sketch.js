var bg_img,bg,player;
var enemy,enemy_img,player_img;
var score,score1;

function preload(){
  bg_img = loadImage("images/background.jpg");
  player_img = loadImage("images/player.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(width/2-60,height/2-60);
  bg.addImage("background",bg_img);
  bg.scale = 0.25;

  player = createSprite(width/2-250,height/2-100);
  player.addImage("spaceship",player_img);
  player.scale = 0.6;

  edges = createEdgeSprites();
  console.log(width/2);
}

function draw() {
  
 if (keyDown(UP_ARROW)) {
   player.y = player.y-7;
 }
 if (keyDown(DOWN_ARROW)) {
   player.y = player.y+7;
 }
 if (keyDown(RIGHT_ARROW)) {
   player.x = player.x+7;
 }
 if (keyDown(LEFT_ARROW)) {
   player.x =player.x-7;
 }
 player.bounceOff(edges[0]);
 player.bounceOff(edges[1]);
 player.bounceOff(edges[2]);
 player.bounceOff(edges[3]);

  drawSprites();
}