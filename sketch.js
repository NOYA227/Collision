var fixedrect,movingrect
function setup() {
  createCanvas(800,800);
  fixedrect = createSprite(600, 400, 75, 50);
  movingrect = createSprite(400,200,80,30)
}

function draw() {
  background(255,255,255);  
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY
  if(collision()){
    //console.log(fixedrect.x)
    //console.log(movingrect.x)
    movingrect.shapeColor = "red"
    fixedrect.shapeColor = "red"
    text("isTouching",400,400)
  }
  else{
    movingrect.shapeColor = "blue"
    fixedrect.shapeColor = "blue"
    text("isNotTouching",400,400)
  }
  drawSprites();
}
function collision()    {
  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 
    && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 
    && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2 
    && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2) {
      return true
    }
else{
  return false
}
}