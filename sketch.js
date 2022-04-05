
var ball;

function setup() {
  createCanvas(400,400);

  ball = createSprite(200,200, 50,50);

  
}

function draw() {
  background("Pink");

  drawSprites();
  
  if(keyIsDown(RIGHT_ARROW)){
  background("SkyBlue");
  }

  if(keyIsDown(LEFT_ARROW)){
    background("Yellow");
  }

  if(keyIsDown(DOWN_ARROW)){
    background("Pink");
    }

}




