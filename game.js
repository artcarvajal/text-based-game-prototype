/* 
keycode checker
document.addEventListener("keydown", function(e){console.log(e.keyCode)}, false);

console logger - function results
console.log();
*/

function GameController(p1, p2) {
  this.objects = []; // this will be an array of all non-player game objects

  this.maps = [[     // maps is an array that will hold all the level maps; maps are comma-separated arrays of strings
  "#########################################################################################################################################################################",
  "#                                                                                                                                                                       #",
  "#  X                                                                                                                                                                    #",
  "#                                                       T                                                                                                               #",
  "#                                  ####                                T         TT                                           wwwwww wwwwww wwwwww wwwwww               #",
  "#                                  ####                T                                   T                                  wwwwww wwwwww wwwwww wwwwww               #",
  "#                   ######         ####              T         T                          TTT T                               wwwwww wwwwww wwwwww wwwwww               #",
  "#                   ######         ####                               TTTTTTT         T    T                                  wwwwww wwwwww wwwwww wwwwww               #",
  "#                   ######         ####                              TTTTTTTTTT           T   TT                                                                        #",
  "#                   ############   ##############                     TTTTTTTTTTTT    T  T   TTTT                             wwwwww wwwwww wwwwww wwwwww               #",
  "#                   ############   ##############            T          TTTTTTTT            TTTTT                             wwwwww wwwwww wwwwww wwwwww               #",
  "#       #################                   #####       T       T         TTT       T   T     TTT                             wwwwww wwwwww wwwwww wwwwww               #",
  "#       #################                   #####                            TT      T      TTTT                              wwwwww wwwwww wwwwww wwwwww               #",
  "#                                                               TTTTTTTTTTT                TTT                                                                          #",
  "#            ####                                      T       TTTTTTTTT          T      TT                                   wwwwww wwwwww wwwwww wwwwww               #",
  "#            ####           ###########                         TTTTTT              T   T                                     wwwwww wwwwww wwwwww wwwwww               #",
  "#            ####           ###########                                  T      T                                             wwwwww wwwwww wwwwww wwwwww               #",
  "#            ####           ###########                    T          T                                          RRRRRR       wwwwww wwwwww wwwwww wwwwww               #",
  "#            ####           ###########                           T                                            RRRRRRRRRR                                               #",
  "#                           ###########                                                                      RRRRRRRRRRRRR                                              #",
  "#                                                                                                          RRRRRRRRRRRRRRRR                                             #",
  "#                                                                                                         RRRRRRRRRRRRRRRRR                                             #",
  "#                                                                                                       RRRRRRRRRRRRRRRRRRRRRRR                                         #",
  "#                                                                                                    RRRRRRRRRRRRRRRRRRRRRRRRRRR                                        #",
  "#                                                                                               RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR                                       #",
  "#                                                                                            RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR                                       #",
  "#                       wwwwwwwwwwwwwwwwwwwww                                              RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR                                    #",
  "#                    wwwwwwwwwwwwwwwwwwwwwwwwwww                                          RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR                                   #",
  "#                   wwwwwwwwwwwwwwwwwwwwwwwwwwwww                                        RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR                                  #",
  "#                  wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww                                      RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR                                 #",
  "#                 wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww                                     RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR                                #",
  "#               wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww                                    RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR                               #",
  "#           wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww                                   RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR                              #",
  "#         wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww                                  RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR                             #",
  "#        wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww                                 RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR                            #",
  "#        wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww                                                                                                                       #",
  "#          wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww                                                                                                                       #",
  "#               wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww                                                                                                                        #",
  "#                    wwwwwwwwwwwwwwwwwwwwwwwwww                            TTT                                                                                          #",
  "#                           wwwwwwwwwwwwwwwww                            TTTTTT                             #####                                                       #",
  "#                                                                 TTT      TTTTT                            #####                                                       #",
  "#                                                                TTTTTT                                     #####                                                       #",
  "#                                                           TTTTTTTTT      TTT                              #####                              ###########              #",
  "#                                                    TTTTTTTTTTTTTT     TTTTTT                              #####                              ###########              #",
  "#                                                  TTTTTTTTTTTTTTT     TTTTTT                               #####                              ##                       #",
  "#                                                  TTTTTTTTTTTTT     TTTTTTTT                         ##################   ######################                       #",
  "#                                                     TTTTTTTTT     TTTTTTTTTT                        ##################   ######################                       #",
  "#                                                        TTTTT     TTTTTTTTTTTT                                                                ##                       #",
  "#                                                                    TTTTTTTT                                                                  ##                       #",
  "#                                                           TTTTT      TTTT                                                                                             #",
  "#                                                            TTT                                                                                                    O   #",
  "#                                                                                                                                                                       #",
  "#########################################################################################################################################################################"]
  ];

  this.activeMap = [];    // activeMap will be the actively updated map during the game. stays behind the scenes.
  this.p1Display = [];    // p1Display and p2Display will hold each player's heads-up displays
  this.p2Display = [];
  this.hud = document.createElement("div");
  this.hud.className = "hud";

  this.display = document.createElement("div");   // the HTML element that will actually display the map

  this.keysPressed = {    // keysPressed keeps continuous track of which keys have been pressed and not yet let go
    "65": false,  // A
    "87": false,  // W
    "83": false,  // D
    "68": false,  // S
    "37": false,  // left
    "38": false,  // up
    "39": false,  // right
    "40": false   // down
  };
};
GameController.prototype.start = function(startingLvl){
  document.body.appendChild(this.display);
  this.activeMap = this.maps[startingLvl];
  this.setListeners();    // attaches key listeners to the document, and binds them to the keysUp and keysDown prototype functions
  this.swapCharObj("X", p1);
  this.swapCharObj("O", p2);
  this.tick();            // starts the game as soon as a GameController object is instantiated
  document.body.appendChild(this.hud);
};
GameController.prototype.randomEmptyCoord = function(obj, dist){   // chooses a random set of coordinates on the map, optionally a minumum dist from an obj, that is not occupied
  var coords = {x: undefined, y: undefined};

  while (!coords.x || !coords.y) {
    coords.x = Math.floor(Math.random() * this.activeMap[0].length);
    coords.y = Math.floor(Math.random() * this.activeMap.length);

    if (this.charAtPos(coords.x, coords.y) !== " ") {
      coords.x = undefined;
      coords.y = undefined;
      continue;
    }
    else if (obj && dist) {
      if ((Math.abs(obj.x - coords.x) < dist) || (Math.abs(obj.y - coords.y) < dist)) {
        coords.x = undefined;
        coords.y = undefined;
        continue;
      }
    }
  }
  return coords;
};
GameController.prototype.objAtPos = function(x,y) {   // return the object at a position
  var obj;
  if (p1.x === x && p1.y === y) { obj = p1; }
  if (p2.x === x && p2.y === y) { obj = p2; }
  for (var i = 0; i < this.objects.length; i++) {
    if (this.objects[i].x === x && this.objects[i].y === y) {
      obj = this.objects[i];
      i = this.objects.length;
    }
  }
  return obj;
};
GameController.prototype.charAtPos = function(x,y) {   // return the character at a position
  return this.activeMap[y].charAt(x);
};
GameController.prototype.objPos = function(o){         // return the position of an object as an anonymous coordinate pair object {x,y}
  return {x:o.x, y:o.y};
};
GameController.prototype.charPos = function(c){        // return the position of a character as an anonymous coordinate pair object {x,y}
  for (var i = 0; i < this.activeMap.length; i++) {
    if (this.activeMap[i].indexOf(c) > -1) {
      return {x:this.activeMap[i].indexOf(c), y:i};
    }
  }
};
GameController.prototype.getMapChunk = function(x,y,d){   // return a chunk of the map d units from point x,y
  var maxX = this.activeMap[0].length - d;
  var maxY = this.activeMap.length - d;
  if (x-d < 0) { x = d; }
  else if (x >= maxX) { x = maxX; }
  if (y-d < 0) { y = d; }
  else if (y >= maxY) { y = maxY; }
  var disp = [];    // disp is an array of strings, same structure as the activeMap, only smaller
  for (var c = y-d; c < y+d; c++) {
    var row = "";
    for (var i = x-d; i < x+d; i++) {
      row += this.activeMap[c].charAt(i);
    }
    disp.push(row);
  }
  return disp;
};
GameController.prototype.createObjAt = function(o,x,y) {  // place a new object o at position x,y and add it to the objects queue
  this.objects.push(o);
  this.placeObj(o,x,y);
}
GameController.prototype.placeObj = function(o,x,y) {   // place an object o at position x,y but don't add it to the objects queue
  var r = "";
  for (var i = 0; i < this.activeMap[y].length; i++) {
    r += i === x ? o.spr : this.activeMap[y].charAt(i);
  }
  o.x = x;
  o.y = y;
  this.activeMap[y] = r;
  return true;
}
GameController.prototype.moveObj = function(o,x,y) {    // find an object and move it to a new position
  this.removeObj(o.x, o.y);
  this.placeObj(o, x, y);
  o.move();
}
GameController.prototype.removeObj = function(x,y){     // remove an object at position x,y from the map
  var r = "";
    for (var i = 0; i < this.activeMap[y].length; i++) {
      r += i === x ? " " : this.activeMap[y].charAt(i);
    }
    this.activeMap[y] = r;
    return true;
};
GameController.prototype.replaceObj = function(o,n){    // replace object o with object n, creating object n if it doesn't exist
  this.removeObj(o.x, o.y);
  this.placeObj(n, c.x, c.y);
  return true;
};
GameController.prototype.swapCharObj = function(c,n){    // replace object o with object n, creating object n if it doesn't exist
  var cPos = this.charPos(c);
  this.removeObj(cPos.x, cPos.y);
  this.placeObj(n, cPos.x, cPos.y);
  return true;
};
GameController.prototype.collision = function(o,x,y){   // return the type of collision for an object o at position x,y
  var c = this.charAtPos(x,y);
  if (c !== " ") {
    if (o.coll) {
      for (var t = 0; t < o.coll.solid.length; t++) {
        if (c === o.coll.solid[t]) { 
          return "solid";
      }
      }
      for (var t = 0; t < o.coll.destructible.length; t++) {
        if (c === o.coll.destructible[t]) {
          return "destructible";
        }
      }
      for (var t = 0; t < o.coll.moveable.length; t++) {
        if (c === o.coll.moveable[t]) {
          return "moveable";
        }
      }
      for (var t = 0; t < o.coll.collect.length; t++) {
        if (c === o.coll.collect[t]) {
          if (o[c] !== undefined) { 
            o.collect();
            o[c]++; 
          }
          return "collect";
        }
      }
    }
  }
  return c;
};
GameController.prototype.keysDown = function(e) {
  //e.preventDefault();
  // if (e.keyCode === 32) {
  //   var coords = this.randomEmptyCoord();
  //   var tester = new GameObject("tester", "l", coords.x, coords.y, "", 0, 0);
  //   this.createObjAt(tester, coords.x, coords.y);
  // }
  this.keysPressed[e.keyCode + ""] = true;
};
GameController.prototype.keysUp = function(e) {
  //e.preventDefault();
  this.keysPressed[e.keyCode + ""] = false;
};
GameController.prototype.updateDisplay = function(){
  this.display.innerHTML = "";
  this.hud.innerHTML = p1.hud + p2.hud;
  var d1 = this.getMapChunk(p1.x,p1.y,16);
  var d2 = this.getMapChunk(p2.x,p2.y,16);
  var finalDisp = [];
  for (var i = 0; i < d1.length; i++) {
    finalDisp.push(d1[i] + " | " + d2[i]);
  }
  this.display.innerHTML += this.hud;
  this.display.innerHTML = finalDisp.join("<br/>");
  // this.display.innerHTML += this.activeMap.join("<br/>");
};
GameController.prototype.tick = function(){
  // x player movement
  if (p1.moveTimer < 1) {
    if (this.keysPressed["65"] && this.collision(p1, p1.x-1, p1.y) !== "solid") { this.moveObj(p1, p1.x-1, p1.y); }
    if (this.keysPressed["87"] && this.collision(p1, p1.x, p1.y-1) !== "solid") { this.moveObj(p1, p1.x,   p1.y-1); }
    if (this.keysPressed["68"] && this.collision(p1, p1.x+1, p1.y) !== "solid") { this.moveObj(p1, p1.x+1, p1.y); }
    if (this.keysPressed["83"] && this.collision(p1, p1.x, p1.y+1) !== "solid") { this.moveObj(p1, p1.x,   p1.y+1); }
  }
  // o player movement
  if (p2.moveTimer < 1) {
    if (this.keysPressed["37"] && this.collision(p2, p2.x-1, p2.y) !== "solid") { this.moveObj(p2, p2.x-1, p2.y); }
    if (this.keysPressed["38"] && this.collision(p2, p2.x, p2.y-1) !== "solid") { this.moveObj(p2, p2.x,   p2.y-1); }
    if (this.keysPressed["39"] && this.collision(p2, p2.x+1, p2.y) !== "solid") { this.moveObj(p2, p2.x+1, p2.y); }
    if (this.keysPressed["40"] && this.collision(p2, p2.x, p2.y+1) !== "solid") { this.moveObj(p2, p2.x,   p2.y+1); }
  }

  p1.update();
  p2.update();
  this.updateDisplay();

  window.requestAnimationFrame(this.tick.bind(this));
};
GameController.prototype.setListeners = function(){
  document.addEventListener("keydown", this.keysDown.bind(this), false);
  document.addEventListener("keyup", this.keysUp.bind(this), false);
};

function Player(name, spr) {
  this.name = name;
  this.spr = spr;
  this.x;
  this.y;
  this.coll = {
    "solid": ["#","E","x","o"],
    "destructible": ["H",")","("],
    "moveable": [],
    "collect": ["w","T"]
  };
  this.moveFrames = 3;
  this.moveTimer = this.moveFrames;
  this.score = -1;
  this.display = [];
  this.collectSpeed = 6;
  this.w = 0;   // wheat
  this.T = 0;   // trees
  this.collectibles = {
    "Wheat": this.w,
    "Trees": this.T
  };
  this.hud = "";
}
Player.prototype.move = function(){
  if (this.moveTimer <= this.moveFrames) { this.moveTimer = this.moveFrames; }
};
Player.prototype.collect = function(){
  this.moveTimer += this.collectSpeed;
};
Player.prototype.update = function(){
  this.collectibles = {
    "Wheat": this.w,
    "Trees": this.T
  };
  this.hud = "<div class='" + this.name + "hud'>"
  for (var item in this.collectibles) {
    if (this.collectibles.hasOwnProperty(item)) {
      this.hud += "<p>" + item + ": " + this.collectibles[item] + "</p>";
    }
  }
  this.hud += "</div>";
  this.moveTimer = this.moveTimer = 0 ? this.moveFrames : this.moveTimer - 1;
}

var p1 = new Player("p1", "x");
var p2 = new Player("p2", "o");
var game = new GameController(p1, p2);

game.start(0);