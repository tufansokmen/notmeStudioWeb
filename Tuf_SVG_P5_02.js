


let div1;
let div1color;
const num = 10;
const range = 1000;

var x = new float();
var y = new float();

var record = new boolean(true);

function setup() {

  createCanvas(displayWidth, displayHeight, SVG);
  strokeWeight(0.1);
  stroke(random(255),random(255),random(255),random(255));
  noFill();

  div1 = createDiv(' Hello..');
  div1.style('padding', '5px');
  div1.style('font-size','20px');
  div1.style('color','#ff0000');
  div1color = (10);
  div1.style('background-color', div1color);
  div1.position(0,0);
  div1.size(displayWidth,100);


  frameRate(random(0.9,5));

}

function draw() {

  desingLine();
  //mainWindow();

  }




  function mainWindow(){
    strokeWeight(2);
    noStroke();
    fill(230);
    rect(400,250,width - 800,height - 400);
  }

  function headerLine(){
    strokeWeight(25 + random(-5,5));
    stroke(150 , 125);
    fill(0);
    rect(100,-50,100,100);
  }

  function desingLine(){
  for (x = 0; x < 10; x++) {
    for (y = 0; y < 10; y++) {


      strokeWeight(random(50));
      stroke(random(255),random(255));
      fill(random(255),random(255),random(255),random(05,55));
      rect(x + random(-100000,100000), y + random(-100,100), width + random(-1,1), height+ random(-1000,1));

    }

  }
  function divOne(){
  div1 = createDiv('this is some text');
  div.style('font-size', '20px');
  div.position(10, 0);
  }
  }
