const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world
var particles = []
var plinkos = []
var divisions = []

var divisionHeight = 300
function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(200, 800, 800, 25)

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height+divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <= width; j=j+50) {

    plinkos.push(new Plinkos(j,75));

  }

  for (var j = 15; j <=width-10; j=j+50) {

    plinkos.push(new Plinkos(j,175));
  }

  if(frameCount%60===0) {
    particles.push(new Particles(random(width/2-10, width/2+10), 10,10));
  }

  Engine.run(engine);
}

function draw() {

  background("black"); 

  Engine.update(engine)

for (var k = 0; k < divisions.length; k++) {

  divisions[k].display();
  console.log(k)
}

ground.display();

}
