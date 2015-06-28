$(document).ready(function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var blockId = 1;
  var zombieId = 1;
  var blockHW = (canvas.width / 10);
  var blockArr = [];
  var dx = 0;
  var dy = 0;

  function Block(x, y) {
    this.x = x;
    this.y = y;
    this.id = blockId;
    blockId++;
  }

  function drawCanvas(block){
    ctx.strokeRect(block.x, block.y, blockHW,blockHW);
  }

  for(i = 0; i < (canvas.width/(canvas.width/100)); i++){

    if( dx === canvas.width){
      dx = 0;
      dy+= blockHW;
    }

    blockArr[i] = new Block(dx,dy);
    drawCanvas(blockArr[i]);
    dx+= blockHW;
  }

  function Zombie(name, hp, blockId, image){
    this.name = name;
    this.hp = hp;
    this.blockId = blockId;
    this.image = image;
    this.id = zombieId;
    zombieId ++;
    ctx.drawImage(image,blockArr[blockId].x, blockArr[blockId].y, blockHW, blockHW);

    this.move = function(){

    }.bind('this');
  }

  var zombie = document.getElementById('zombie');
  carl = new Zombie("Carl", 10, Math.floor(Math.random()*blockArr.length), zombie);


});

// 200 * 200 = 50, 400 * 400 = 100
