
function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  smooth();
  background(0);

  angleMode(DEGREES);

  //noCursor();

}

function draw()
 {

  var x= sin(frameCount );
  var y= cos(frameCount );
  /*stroke(122, 23, 248);
  noFill();

  //Texture background
  ellipse(random(0,windowWidth),random(0,windowHeight),x*sin(frameCount/10));
  noFill();
  ellipse(random(0,windowWidth),random(0,windowHeight),y*cos(frameCount/10)+10);
  */

  //Up Circles
  push();
  translate(width/2,height/2);
  rotate(frameCount/60);
  var col=lerpColor(color(187, 23, 248),color(23, 248, 187),frameCount/2000);
  stroke(col);
  scale(0.5);
  line(x*200,y*400,x*200,y*200);
  ellipse(0,0,x*200);
  ellipse(0,0,y*400)

  pop();


  //Down Circles
  push();
  translate(width/2,height/2);
  rotate(frameCount/20);
  var col=lerpColor(color(187, 23, 248),color(23, 248, 187),frameCount/2000);
  stroke(col);
  scale(0.5);
  line(x*400,y*200,x*200,y*200);
  pop();

  //LoopEnd
  /*if(frameCount > 720)
  {
    noLoop();
  }*/




}
