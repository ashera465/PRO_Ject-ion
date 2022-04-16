var gameState,player,score,player_image, coin_image, block_image, spike_image,bg_img;
var border,spike1, coin1;
var normalBlocks = [];
var spikeBlocks = [];
var coinBlocks = [];
gameState = 0;

function setup(){
  
  createCanvas(500,500);
  bg_img = loadImage("images/start_image.png");
  //player_image = loadImage("");
  coin_image = loadImage("images/tiles/coin.png");
  spike_image = loadImage("images/tiles/spike.png");
  block_image = loadImage("images/tiles/block1.png");
  
}

function draw(){
  background(bg_img);
   spike1 = new killB(200,200);
  spike1.display();
  coin1 = new coinB(300, 200);
  coin1.display();
  if(gameState ==0){
    start(); level_1();
  }
 
  

  
}
//end of draw
function level_1(){
 
    for(var i = 0;i < 19; i++){
     var border = new normaB(10,10);
      border.display();
      normalBlocks.push(border);
    }
  
}



function start(){
    
    
    //image(bg_img,400,400,window.width,window.height);
    if(gameState ==0){
      this.input = createInput("").attribute("placeholder", "Enter your name");
    }
    
  
}
