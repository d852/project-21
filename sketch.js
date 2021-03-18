var canvas;
var music;
var slab1,slab2,slab3,slab4;
var ball;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    slab1=createSprite(100,590,200,20);
    slab1.shapeColor="red";

    slab2=createSprite(300,590,200,20);
    slab2.shapeColor="blue";

    slab3=createSprite(500,590,200,20);
    slab3.shapeColor="yellow";

    slab4=createSprite(700,590,200,20);
    slab4.shapeColor="green";

    ball=createSprite(random(50,750),100,20,20);
    ball.shapeColor="pink";

    
    


    //create box sprite and give velocity
    ball.velocityX=3;
    ball.velocityY=7;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();

    ball.bounceOff(edges);
   

    



    //add condition to check if box touching surface and make it box
    if(ball.isTouching(slab1)){
        
        ball.shapeColor="red";
        ball.bounceOff(slab1);
    }

    if(ball.isTouching(slab2)){
        
        ball.shapeColor="blue";
        ball.bounceOff(slab2);
    }

    if(ball.isTouching(slab3)){
        
        ball.shapeColor="yellow";
        ball.bounceOff(slab3);
    }

    if(ball.isTouching(slab4)){
        
        ball.shapeColor="green";
        ball.bounceOff(slab4);
    }

   
    
    
   


    drawSprites();
}
