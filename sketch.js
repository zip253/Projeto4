//Var's
var jardim
  var coelho
var maca
  var folhaL
var folhaV
  var imgjardim 
var imgcoelho
  var imgmaca
var imgL
  var imgV

//Preload
function preload(){
  imgjardim = loadImage("garden.png");
    imgcoelho = loadImage("rabbit.png");
  imgmaca = loadImage("apple.png");
    imgL = loadImage("orangeLeaf.png");
  imgV = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);

//Fundo Jardim
jardim=createSprite(200,200);
  jardim.addImage(imgjardim);

//Coelho
coelho = createSprite(160,340,20,20);
  coelho.scale =0.09;
coelho.addImage(imgcoelho);
}

function draw() {
  background(0);
  
//Coelho movendo mousw
  coelho.x = World.mouseX;
  
  edges= createEdgeSprites();
  coelho.collide(edges);
  
   drawSprites();
   
  
var rndN = Math.round(random(1,3));

 if (frameCount % 50 == 0) {
  if (rndN == 1) {
macas();
  } else if (rndN == 2) {
    folhalaranja();
   }else {
folhavermelha();
     }
  }
}

function macas() {

  maca = createSprite(random(50, 350),40, 10, 10);
maca.addImage(imgmaca);
  maca.scale=0.07;
maca.velocityY = 3;
  maca.lifetime = 150;
  
}

function folhalaranja() {

  folhaL = createSprite(random(50, 350),40, 10, 10);
folhaL.addImage(imgL);
  folhaL.scale=0.08;
folhaL.velocityY = 3;
  folhaL.lifetime = 150;
}

function folhavermelha() {

  folhaV = createSprite(random(50, 350),40, 10, 10);
folhaV.addImage(imgV);
  folhaV.scale=0.06;
folhaV.velocityY = 3;
  folhaV.lifetime = 150;
}
