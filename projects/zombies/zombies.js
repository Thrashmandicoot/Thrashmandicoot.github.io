$(document).ready(function() {

  //Game Variables
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var blockId = 1;
  var zombieId = 1;
  var blockHW = (canvas.height / 10);
  var blockArr = [];
  var col = 1;
  var row = 1;
  var dx = 0;
  var dy = 0;
  var zombieHP = 1;
  var playerHP = 3;
  var zombie = document.getElementById('zombie');
  var block = document.getElementById('block');
  var player = document.getElementById('player');
  var gamestate = true;

  function Main() {
    initialCanvas();
  }

  // function Update(){
  //   var update = function (modifier) {
  // 	if (38 in keysDown) { // Player holding up
  // 		hero.row -= 1;
  // 	}
  // 	// if (40 in keysDown) { // Player holding down
  // 	// 	hero.y += ;
  // 	// }
  // 	// if (37 in keysDown) { // Player holding left
  // 	// 	hero.x -= hero.speed * modifier;
  // 	// }
  // 	// if (39 in keysDown) { // Player holding right
  // 	// 	hero.x += hero.speed * modifier;
  // 	// }
  // };

  function Block(x, y, col_x, row_y) {
    this.x = x;
    this.y = y;
    this.col = col_x;
    this.row = row_y;
    this.id = blockId;
    this.image = block;
    this.type = "block";
    this.passable = 1;
    blockId++;
  }

  function drawBlock(block) {
    ctx.drawImage(block.image, block.x, block.y, blockHW, blockHW);
  }

  function Zombie(name, blockId) {
    this.name = name;
    this.hp = zombieHP;
    this.blockId = blockArr[blockId].id;
    blockArr[blockId].type = "zombie";
    blockArr[blockId].passable = 0;
    this.id = zombieId;
    zombieId++;
  }

  function Player(name,blockId){
    this.name = name;
    this.hp = playerHP;
    this.blockId = blockArr[blockId].id;
    blockArr[blockId].type = "player";
    blockArr[blockId].passable = 0;
  }

  function initialCanvas() {
    for (i = 0; i < (canvas.width / (canvas.width / 100)); i++) {

      if (dx === canvas.width) {
        dx = 0;
        dy += blockHW;
        col = 1;
        row ++;
      }

      blockArr[i] = new Block(dx, dy, col, row);
      drawBlock(blockArr[i]);
      dx += blockHW;
      col ++;
    }
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

      drawBlock(blockArr[i]);
      dx += blockHW;
    }
  }

  function randomLoc(){
    var inUse = 0;
    var placement;
    while(inUse !== 1){
      placement = Math.floor(Math.random() * blockArr.length);
      if (blockArr[placement].passable === 1){
        inUse = 1;
      }
    }
    return placement;
  }

  //run game
  Main();

  var carl = new Zombie("Carl", randomLoc());
  var gamer = new Player("Player", randomLoc());
  render();
});
