const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,box1,box2;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    box2 = new Box(500,550,50,50);
    box1 = new Box(700,550,50,50);
    rubber = new Rubber(600,550,80);

  


}

function draw(){
    background("azure");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    box2.display();
    box1.display();

    
 
}