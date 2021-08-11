var garden,rabbit,apple,orange;
var gardenImg,rabbitImg,appleImg,orangeleafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
orangeleafImg=loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
function createApples(){
  if(frameCount%50==0){

  apple=createSprite(random(50,350),40,10,10);
  apple.scale=0.05;
  apple.addImage(appleImg);
  apple.velocityY=5
  apple.lifetime
}
}
function orangeLeaves(){
  if(frameCount%40==0){
  orange=createSprite(random(50,350),40,10,10);
  orange.scale=0.03
  orange.addImage(orangeleafImg)
  orange.velocityY=5
  orange.lifetime
}
}
function draw() {
  background(0);
  
  rabbit.x=World.mouseX
createApples()
orangeLeaves()
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}