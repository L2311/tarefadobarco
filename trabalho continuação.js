var ship,sea;
var shipImg,seaImg;
function preload(){
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg = loadImage ("sea.png");
}

function setup(){
  createCanvas(400,400);
  var sea=createSprite(400,200);
var ship = createSprite(130,200,30,30);
  ship.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea.addAnimation("sea.png");
}
if (sea.x < 0) {
sea.x = sea.width/2;
}





function draw() {
  background("blue");
    drawSprites();

 
}
