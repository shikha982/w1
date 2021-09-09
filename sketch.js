const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint


var engine , world;
var background_img , background1;
var Ghost_img;
var gameState = 0;
var ghostGrp;
function preload(){
  background_img = loadImage('starNight.png');
  Ghost_img=loadImage('catapult.png');
}
function setup() {
  createCanvas(windowWidth , windowHeight);
  engine = Engine.create();
  world = engine.world
 background1 = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  background1.addImage(background_img);

  
  background1.scale = 1.5
  arrow = new Arrow(110,245);
  //alert(arrow+" arrow")
  sling = new SlingShot(arrow.body , {x:95 , y:265});
  ghost = new Ghost(random(200,370),random(5,100),20);
//alert(ghost)
  ghostGrp= new Group();
}

function draw() {
  background(255);
 
  Engine.update(engine);
   background1.velocityX = -2;
   if(background1.x<100){
       background1.x = background1.width/2;
   }
 
  drawSprites();
 // ghost.display();
  arrow.display();
  sling.display();
  obstacle();
  // for (var i=0;i<ghostGrp.length;i++){
  //   if(ghostGrp.get(i).isTouching(arrow)){
  //     ghostGrp.get(i).destroy();

  //   }
  // }

if(collide(arrow,ghostGrp)==true){
  //ghost=null;
}


 

}


 //we can use group 
 //ok
 //but right nw it is nt removed
 //yes because everytime the new ghost object is creating and when we try to remove the plder object it is not there
 //as the new object has been created
 //then hw to resolve it??
 //you can use the group and then it will be easy to remove the objects.
 //ok....grp inside collide 
// yes create a group and add the ghost object in it and then you can remove those objects later
//




function obstacle(){
  if( frameCount%50==0){
    Ghost = createSprite(random(500,1100),random(100,200),20,20)
    Ghost.addImage(Ghost_img);
    Ghost.velocityY = 3
    Ghost.scale = 0.3;
    Ghost.lifetime = 400;
    ghostGrp.add(Ghost);
  }
  
}

function mouseDragged(){
  Matter.Body.setPosition(arrow.body , {x:mouseX,y:mouseY})
}

function mouseReleased(){
  gameState = 1
  sling.fly(Ghost);
  

}


function collide(body,sprite){
  if(body!=null){
   
    var dist=(body.x,body.y,sprite.body.position.x,sprite.body.position.y);
    if(dist<=80){
      Matter.World.remove(world,ghostGrp);
      ghostGrp=null;
      return true;

    }
    else {
      return false;
    }
  }
}

