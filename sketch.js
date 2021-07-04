var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

function createApple(){
   apple=createSprite(random(50,350),40,10,10)
   apple.addAnimation("apple.png")
   apple.scale=0.9
   apple.VelocityY=-4
   

}




//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  drawSprites();
}
     
    Apple.setVelocityXEach(0);
    Apple.setLifetimeEach(-1)
    function spawnApple(){
  if (frameCount % 30 === 0){
    var apple = createSprite(400,165,10,40);
    apple.velocityY= -6;
   }
  }
var select_sprites=Math.round(random(1,2));
  if(frameCount%80==0){
    if(select_sprites==0){
      createApple()
    }
       else{
         createleaf()
       }

 }
