var backgroundImg,snow;
var snow1,snow2;

function preload(){
backgroundImg=loadImage("snow3.jpg")
snow1=loadImage("snow4.webp")
snow2=loadImage("snow5.webp")

}
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
  drawSprites();
  snow();
}
function snow(){
  if(frameCount % 10 === 0) {
        
    var snow = createSprite(width + 200, height - 400, 40, 10);
    snow.x = Math.round(random(25, 790));
    //var snowtypes = snowtypes[snow1,snow2];
    //snow.addImage(random(snowtypes));
    snow.addImage(snow1);
    snow.velocityY = 10;
    snow.scale=0.15;
  }
}