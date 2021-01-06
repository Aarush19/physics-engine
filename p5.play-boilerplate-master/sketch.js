const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var object;

function setup() {
  createCanvas(800,400);
  myengine = Engine.create();
  myworld = myengine.world;
  var options = {
    isStatic:true
  }
  object = Bodies.rectangle(400,380,800,20,options);
  World.add(myworld,object);
  //console.log(object);
  var opt = {
    'restitution':1.0
  };
  A = Bodies.circle(200,100,50,opt);
  World.add(myworld,A);
}

function draw() {
  background(0); 
  Engine.update(myengine);
  rectMode(CENTER); 
  rect(object.position.x,object.position.y,800,20);
  circle(A.position.x,A.position.y,50);
}