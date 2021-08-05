 const Engine=Matter.Engine;
 const World=Matter.World;
 const Bodies=Matter.Bodies;

 var particles=[];
 var plinko=[];
 var divisions=[];
 var score=0;
 var divisionsHeight=300;
 var engine,world;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(width/2,height,width,20);
  World.add(world,ground);

  for(var k=0; k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionsHeight/2,10,divisionsHeight ));
  }

  for(var j=75;j<=width;j=j+50){
    plinko.push(new Plinko(j,75));
  }
  
  for(var j=50;j<=width-10;j=j+50){
    plinko.push(new Plinko(j,175));
  }
  
  for(var j=75;j<=width;j=j+50){
    plinko.push(new Plinko(j,275));
  }

  for(var j=50;j<=width-10;j=j+50){
    plinko.push(new Plinko(j,375));
  }
}
  
var groundHeight=300
  

function draw() {
  background(255,255,255);  
   Engine.update(engine);
   ground.display();
   for(var i=0;i<plinko.length;i++){
     plinko[i].display();

   }
   
   for(var j=0;j<particles.length;j++){
    particles[j].display();

  }
 
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();

  }

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  score++
}



  drawSprites();
}