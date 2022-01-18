var dino,dino_run,dino_die;
var terra,terraImage;
var terra_invisivel;
var cloud,cloudImage,familia_das_cloud;
var cacto1,cacto2,cacto3,cacto4,cacto5,cacto6;
var familia_dos_cactos;
var PLAY;
var END;
var modoDeJogo = PLAY;
var score = 0;

function preload(){
 dino_run =loadAnimation("trex1.png", "trex3.png" , "trex4.png");
dino_die =loadImage("trex_collided.png");
terraImage=loadImage("ground2.png");
cloudImage=loadImage("download-removebg-preview.png");
cacto1=loadImage("obstacle1.png");
cacto2=loadImage("obstacle2.png");
cacto3=loadImage("obstacle3.png");
cacto4=loadImage("obstacle4.png");
cacto5=loadImage("obstacle5.png");
cacto6=loadImage("obstacle6.png");

}

function setup() {
  createCanvas(600, 200);
  dino=createSprite(50,180,20,50);
 dino.addAnimation("running", dino_run);
dino.scale =0.5;
terra=createSprite(200,180,400,20);

terra_invisivel=createSprite(200,190,400,10);
terra_invisivel.visible=false;
terra.addAnimation("terra",terraImage);


familia_dos_cactos = createGroup()

familia_das_cloud = createGroup()

}

function draw() {
  background(192,192,192);
  drawSprites();

  textSize(15)
  text("score:" + score,480,25)

if(modoDeJogo==PLAY){

terra.velocityX=-5

if (terra.x < 0 ) {
  terra.x = terra.width / 2;
 }

  if(keyDown("space") && dino.y >= 150) {
    dino.velocityY = -12;

  }

  dino.velocityY = dino.velocityY  + 0.8;

  

   criar_cloud()
criar_obstacle()

if (familia_dos_cactos.isTouching(dino)){
  modoDeJogo = END;

}
}




if(modoDeJogo==END){

  terra.velocityX=0;

  
}

 


 dino.collide(terra_invisivel);


}

function criar_obstacle() 
{
  if (frameCount % 60 === 0) {

 var obstaculo
 obstaculo=createSprite(400,165,10,40);   

 obstaculo.velocityX=-5



var aleatorio = Math.round(random(1,6));

switch(aleatorio) {

case 1:obstaculo.addImage(cacto1);
break;

case 2:obstaculo.addImage(cacto2);
break;

case 3:obstaculo.addImage(cacto3);
break;

case 4:obstaculo.addImage(cacto4);
break;

case 5:obstaculo.addImage(cacto5);
break;

case 6:obstaculo.addImage(cacto6);
break;

default: break;

}

obstaculo.scale=0.6

obstaculo.lifetime=90

familia_dos_cactos.add(obstaculo);
  }


}

function criar_cloud()

{
if (frameCount % 60 === 0) { //aparecer uma nuvem somente quando o frameCount ao ser dividido por 60 der resto 0
cloud=createSprite(600,100,40,10);
cloud.velocityX=-7

cloud.addAnimation("cloud",cloudImage);
cloud.y = Math.round(random(10,60))
cloud.scale=0.3
cloud.depth = dino.depth
dino.depth = dino.depth +1;

cloud.lifetime=90

familia_das_cloud.add(cloud);
}





}








