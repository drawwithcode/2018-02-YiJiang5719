
function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  smooth();
  background(23, 37, 248);
  frameRate(60);
  angleMode(DEGREES);

  //noCursor();

}

function draw()
 {

  var x=200 * cos(frameCount * 4);
  var y=200 * sin(frameCount * 4);
  stroke(122, 23, 248);
  fill(248, 166, 23,30);

  //Texture background
  ellipse(random(0,windowWidth),random(0,windowHeight),x*sin(frameCount/10));
  noFill();
  ellipse(random(0,windowWidth),random(0,windowHeight),y*cos(frameCount/10)+10);


  //Up Circles
  push();
  translate(width/2,height/2);
  rotate(frameCount/60);
  var col=lerpColor(color(248, 23, 149),color(122, 23, 248),frameCount/40);
  stroke(col);
  line(-200,0,x,y);
  pop();

  //Down Circles
  push();
  translate(width/2,height/2);
  rotate(frameCount/60);
  var col=lerpColor(color(187, 23, 248),color(248, 23, 149),frameCount/10);
  stroke(col);
  line(x,y,x+60,y+60);
  pop();

  //LoopEnd
  if(frameCount > 1080)
  {
    noLoop();
  }



}
