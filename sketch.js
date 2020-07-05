const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//var play;
var gameState = "start";
var particle = null;
var world,bodies,engine;
var ground;
var particles = [];
var plinko = [];
var divisions = [];
var score = 0;
var turn = 0;
var point = 0;
var count = 0;
var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  //gameState = play;
  ground = new Ground(width/2,height,width,20);
 
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
           plinko.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
           plinko.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
           plinko.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
           plinko.push(new Plinko(j,375));
    }
    
    Engine.run(engine);
}
 
function draw() {
  background("brown");
  Engine.update(engine);
  textSize(30);
  text("score : "+score,30,50);
  text("500",15,550);
  text("500",95,550);
  text("500",175,550);
  text("500",255,550);
  text("100",335,550);
  text("100",415,550);
  text("100",495,550);
  text("200",575,550);
  text("200",655,550);
  text("200",735,550);
  fill("white");
  
 Engine.update(engine);
  
  ground.display();
  mousePressed();
 // game();
  //turn();
   for (var i = 0; i < plinko.length; i++) {
    plinko[i].display();
    }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score ++;
   }
 
  for (var j = 0; j < particles.length; j++) {
        particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
      divisions[k].display();
   }
   
 }
 function turn(){
  if(mousePressed){
    particle.display();
    
  }
 }
function mousePressed(){
  if(particle != null)
  {
    particle.display();
    if(particle.body.position.y > 600)
    {
      if(particle.body.position.x < 255)
      {
        score = score + 500;
        particle = null;
        if(turn =>5) gameState = 'end';
      }
    }
    if(particle.body.position.x > 335){
      score = score + 100;
      particle = null;
    }
    if(particle.body.position.x >575){
      score = score + 200;
      particle = null;
    }
    if(particle.body.position > 600){
        score = score + 500;
    }
    if(gameState!== "end"){
      textSize(50);
      text("GAME OVER",400,400);
      fill("white");
    }
   
  }
}