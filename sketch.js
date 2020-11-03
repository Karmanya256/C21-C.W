var fixedRect, movingRect,thirdRect,fourthRect,fifthRect,sixthRect;

function setup() {
  createCanvas(1200,800);
  thirdRect = createSprite(200,200,50,80);
  thirdRect.shapeColor = "green";
 fourthRect = createSprite(300,200,50,80);
 fourthRect.shapeColor = "green";
 fifthRect = createSprite(400,200,50,80);
 fifthRect.shapeColor = "green";
 sixthRect = createSprite(100,200,50,80);
 sixthRect.shapeColor = "green";
  
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fifthRect)){
    movingRect.shapeColor = "red";
    fifthRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fifthRect.shapeColor = "green";
  }
  if(isTouching(movingRect,fourthRect)){
    movingRect.shapeColor = "red";
    fourthRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fourthRect.shapeColor = "green";
  }
  if(isTouching(movingRect,thirdRect)){
    movingRect.shapeColor = "red";
    thirdRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    thirdRect.shapeColor = "green";
  }
  if(isTouching(movingRect,sixthRect)){
    movingRect.shapeColor = "red";
    sixthRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    sixthRect.shapeColor = "green";
  }
  
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true;
}
else{
  return false;
}

}