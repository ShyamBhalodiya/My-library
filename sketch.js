var fixedRect, movingRect, rect1, rect2, rect3;

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "green";
  rect1 = createSprite(600, 400, 80, 30);
  rect2 = createSprite(800, 400, 80, 30);
  rect3 = createSprite(1000, 400, 80, 30);
  rect1.shapeColor = "red";
  rect2.shapeColor = "red";
  rect3.shapeColor = "red";
  rect2.velocityX = 2;
  rect3.velocityX = -2;
}

function draw() {
  background(0, 0, 0);
  movingRect.y = mouseY;
  movingRect.x = mouseX;

  if (istouching(movingRect, rect2)) {
    movingRect.shapeColor = "red";
    rect2.shapeColor = "green";
  }
  else {
    movingRect.shapeColor = "green";
    rect2.shapeColor = "red";
  }
  bounceoff(rect2, rect3);
  drawSprites();
}