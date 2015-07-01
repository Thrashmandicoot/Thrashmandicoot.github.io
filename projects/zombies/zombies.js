$(document).ready(function() {

  //Game Variables
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var zombieId = 1;
  //Player/Monster Stats
  var zombieHP = 1;
  var monsterStorage = {};
  var playerHP = 3;
  //Images
  var zombie = document.getElementById('zombie');
  var block = document.getElementById('block');
  var player = document.getElementById('player');
  var gamestate = true;
  //Block values
  var blockId = 1;
  var blockHW = (canvas.height / 10);
  var blockArr = [];
  var col = 1;
  var row = 1;
  var dx = 0;
  var dy = 0;
  var frame = 0;

  window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
      case 37: // Left
        updateBlock(gamer, 0, -1);
        break;

      case 38: // Up
        updateBlock(gamer, -1, 0);
        break;

      case 39: // Right
        updateBlock(gamer, 0, 1);
        break;

      case 40: // Down goes left
        updateBlock(gamer, 1, 0);
        break;
    }
  }, false);

  var updateBlock = function(character, rowAdj, colAdj) {
    var currentIndex = character.blockId;
    var currentRow = blockArr[currentIndex].row;
    var currentCol = blockArr[currentIndex].col;
    var newBlockRow = currentRow + rowAdj;
    var newBlockCol = currentCol + colAdj;
    var newBlockIndex = -1;
    for (var i = 0; i < blockArr.length; i++) {
      var checkBlock = blockArr[i];
      if (checkBlock.row === newBlockRow && checkBlock.col === newBlockCol) {
        newBlockIndex = i;
        break;
      }
    }

    if (newBlockIndex !== -1 && blockArr[newBlockIndex].type === "block") {
      blockArr[newBlockIndex].type = blockArr[currentIndex].type;
      blockArr[currentIndex].type = "block";
      character.blockId = newBlockIndex;
    }
  };

  function Block(x, y, col_x, row_y) {
    this.x = x;
    this.y = y;
    this.col = col_x;
    this.row = row_y;
    this.id = blockId;
    this.type = "block";
    this.passable = 1;
    this.drawn = 0;
    blockId++;
  }

  function drawBlock(block) {
    ctx.drawImage(block.image, block.x, block.y, blockHW, blockHW);
  }

  function Zombie(block_Id) {
    this.hp = zombieHP;
    this.blockId = block_Id;
    this.speed = 1;
    this.row = blockArr[block_Id].row;
    this.col = blockArr[block_Id].col;
    blockArr[block_Id].type = "zombie";
    blockArr[block_Id].passable = 0;
    this.id = zombieId;
    zombieId++;
  }

  function Player(name, block_Id) {
    this.name = name;
    this.hp = playerHP;
    this.blockId = block_Id;
    blockArr[block_Id].type = "player";
    blockArr[block_Id].passable = 0;
  }

  function initialCanvas() {
    for (i = 0; i < (canvas.width / (canvas.width / 100)); i++) {

      if (dx === canvas.width) {
        dx = 0;
        dy += blockHW;
        col = 1;
        row++;
      }

      blockArr[i] = new Block(dx, dy, col, row);
      dx += blockHW;
      col++;
    }
    console.log(blockArr.length);
  }

  function render() {
    for (i = 0; i < blockArr.length; i++) {

      if (dx === canvas.width) {
        dx = 0;
        dy += blockHW;
      }
      if (blockArr[i].type === "zombie") {
        blockArr[i].image = zombie;
      }
      if (blockArr[i].type === "player") {
        blockArr[i].image = player;
      }
      if (blockArr[i].type === "block") {
        blockArr[i].image = block;
      }
      if (blockArr[i].drawn === 0) {
        drawBlock(blockArr[i]);
      }

      dx += blockHW;
    }
  }

  function randomLoc() {
    var inUse = 0;
    var placement;
    while (inUse !== 1) {
      placement = Math.floor(Math.random() * blockArr.length);
      if (blockArr[placement].passable === 1) {
        inUse = 1;
      }
    }
    return placement;
  }

  //generate zombies
  var genZombies = function(amount) {
    for (var i = 0; i < amount; i++) {
      monsterStorage[Math.floor(Math.random() * 100)] = new Zombie(randomLoc());
    }
  };

  //Instantiate new zombies/players
  initialCanvas();
  genZombies(1);
  var gamer = new Player("Player", randomLoc());
  render();

  //randomspeed
  var randomSpeed = function(speed) {
    var chance = Math.floor(Math.random() * 100 + 1);
    if (chance > 50) {
      return Math.floor(Math.random() + 1);
    } else {
      return -(Math.floor(Math.random() + 1));
    }
  };


  //Run the Game
  var mainloop = function() {
    if (frame % 20 === 0) {
      for (var monster in monsterStorage) {
        var id = monsterStorage[monster];
        updateBlock(id, randomSpeed(id.speed), randomSpeed(id.speed));
      }
    }
    if (frame % 150 === 0) {
      genZombies(1);
    }
    if (frame % 200 === 0) {
      frame = 0;
    }
    console.log(frame);
    frame++;
    render();
  };

  function gameloop() {
    var animFrame = window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      null;

    if (animFrame !== null) {

      var recursiveAnim = function() {
        mainloop();
        animFrame(recursiveAnim, canvas);
      };

      // start the mainloop
      animFrame(recursiveAnim, canvas);
    } else {
      var ONE_FRAME_TIME = 1000.0 / 60.0;
      setInterval(mainloop, ONE_FRAME_TIME);
    }
  }
  gameloop();
});
