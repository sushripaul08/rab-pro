var garden,rabbit;
var gardenImg,rabbitImg;
var apple, orl , rl , grass, leaf;
var appleIMG, orlIMG , rlIMG , grassIMG, leafIMG;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleIMG = loadImage("apple.png");
   orlIMG= loadImage("orangeLeaf.png"); 
    rlIMG = loadImage("redImage.png");
     grassIMG= loadImage("grass.png");
      leafIMG= loadImage("leaf.png");


}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
apple.scale=0.05;
rabbit.addImage("running",rabbitImg );
orl.scale =0.05;
rl.scale=0.05;
grass.scale =0.09;
leaf.scale=0.05;

apple = addImage(appleIMG);
   orl= addImage(orlIMG); 
    rl = addImage(rlIMG);
     grass=addImage(grassIMG);
      leaf= addImage(leafIMG);

apple= createSprite(150,140,20,20) ;
orl = createSprite(180,250,20,20);
rl= createSprite(10,300,20,20) ;
orl = createSprite(180,200,20,20);
grass = createSprite(180,300,20,20);
leaf= createSprite(600,300,20,20) ;

}

function draw() {
  background(180);
  if (keyDown("enter")&& rabbit.y >= 200) {
   rabbit.velocityY = -5;
  }
 rabbit.velocityY = rabbit.velocityY + 0.8;
 if (garden.y < 0){
  garden.y = garden.height/2;
}
  edges= createEdgeSprites();
  rabbit.collide(edges);
createApples();
createLeaves();
drawSprites();
}
function createApples() {
if (frameCount % 80===0) {
  apple = createSprite(400,200,40,40);
apple.addImage(appleIMG);
apple.velocityY = 4;
apple.scale = 0.05;
apple.y = Math.round(random(10,80))
apple.lifetime =100 

}

}
 
function createLeaves() {
  if (frameCount % 80===0) {
    leaf = createSprite(600,300,40,40);
 leaf.addImage(leafIMG);
  leaf.velocityY = 4;
  leaf.scale = 0.05;
leaf.y = Math.round(random(10,80))
 leaf.lifetime =150
  
  }
}

