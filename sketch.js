
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
  aper = new paper(200,450,40)  	
  aper1 = new paper(200,450,40)
  aper2= new paper(200,450,40)
  aper3 = new paper(200,450,40)
  aper4 = new paper(200,450,40)
  aper5 = new paper(200,450,40) 	
  aper6 = new paper(200,450,40)
  aper7 =new paper(200,450,40)
  aper8= new paper(200,450,40)
  aper9 = new paper(200,450,40)
  aper10 = new paper(200,450,40)
  aper11 = new paper(200,450,40)
  aper12= new paper(200,450,40)
  aper13 = new paper(200,450,40)
  aper14 = new paper(200,450,40)
  aper15 = new paper(200,450,40)


  bin= new dustbin(1200,650)

    ground = new ground(width/2,670,width,20)

    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 1200,
        height: 700,
        wireframes: false
      }
    });
  Engine.run(engine);
  //Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  aper.display();
  aper1.display();
  aper2.display();
  aper3.display();
  aper4.display();
  aper5.display();
  aper6.display();
  aper7.display();
  aper8.display();
  aper9.display();
  aper10.display();
  aper11.display();
  aper12.display();
  aper13.display();
  aper14.display();
  aper15.display();
  
  bin.display();
  ground.display();
  drawSprites();

}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(aper.body,aper.body.position,{x:85,y:-85});
    Matter.Body.applyForce(aper1.body,aper1.body.position,{x:85,y:-85});
    Matter.Body.applyForce(aper2.body,aper2.body.position,{x:85,y:-85});
    Matter.Body.applyForce(aper3.body,aper3.body.position,{x:85,y:-85});
    Matter.Body.applyForce(aper4.body,aper4.body.position,{x:85,y:-85});
    Matter.Body.applyForce(aper5.body,aper5.body.position,{x:85,y:-85});
    Matter.Body.applyForce(aper6.body,aper6.body.position,{x:85,y:-85});
    Matter.Body.applyForce(aper7.body,aper7.body.position,{x:85,y:-85});
    Matter.Body.applyForce(aper8.body,aper8.body.position,{x:85,y:-85});
    Matter.Body.applyForce(aper9.body,aper9.body.position,{x:85,y:-85});
    Matter.Body.applyForce(aper10.body,aper10.body.position,{x:85,y:-85});
    Matter.Body.applyForce(aper11.body,aper11.body.position,{x:85,y:-85});
    Matter.Body.applyForce(aper12.body,aper12.body.position,{x:85,y:-85});
    Matter.Body.applyForce(aper13.body,aper13.body.position,{x:85,y:-85});
    Matter.Body.applyForce(aper14.body,aper14.body.position,{x:85,y:-85});
    Matter.Body.applyForce(aper15.body,aper15.body.position,{x:85,y:-85});

  
  }
}
