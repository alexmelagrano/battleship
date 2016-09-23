// Main file for the battleship code
// ======================================

'use strict';

// Main function
var main = function() {
    initBoard = new board();
    initGame = new game();
    
}








// Various Helper Functions 
// =====================================

var random = Math.floor((Math.random() * 10) + 1);

var onBoard = function(newP) {
    newP.x < 10 && newP.x >= 0 && newP.y < 10 && newP.y > 0; 
}

var isDupHelper = function(newP, list) {
    for(count i = 0, i < list.length, i ++){
        var p = list[i];
        if (newP.x == p.x || newP.y == p.y){
            return true;
        }
    }
    return false;
}
        
var isDup = function(newP) {    
    for(count i = 0, i < krakenLoc.length, i ++){
        var p = list[i];
        if (newP.x == p.x || newP.y == p.y){
            return true;
        }
    }
    for(count j = 0, j < ships.length, j ++){
        isDupHelper(newP, ships[j]);
    }
    return false;
}        

// Initialization functions
// ======================================

// Creating the board
var grid = [];

var initBoard = function() {
    canvas : document.createElement("canvas");
    start : function() {
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
    
}

// Setting up player's ship locations
var ship2 = [];
var ship3 = [];
var ship4 = [];
var ship5 = [];
    
var ships = []:

var initShips = function() {
    
    
    
    // DO SOME WIZARDY SHIT HERE LATER ON
    
    ships.push(ship2);
    ships.push(ship3);
    ships.push(ship4);
    ships.push(ship5);
}

// Setting up Kraken's location
var krakenLoc = [];

// Adding some tentacle-y goodness
var initKraken = function() {
    var center = { x: new random,
                   y: new random };
    krakenLoc.push(center);
    
    while(krakenLoc.length < 7){
        var newPoint = { x: center.x,
                         y: center.y };
        var a = new random;
        var b = new random;
        
        if (a < 4){
            newPoint.x += 1;
        } 
        if (a > 7){
            newPoint.x -= 1;
        }
        if (b < 4){
            newPoint.y += 1;
        }
        if (b > 7){
            newPoint.y -= 1;
        }
        
        if(onBoard(newPoint) && !isDup(newPoint)){
            krakenLoc.push(newPoint);
        }
    }
}



// The Bob Ross Stage
// ======================================

// Drawing the board
var drawBoard = function() {
    // ships
    for(count i = 0, i < ships.length, i ++){
        var curShip = ships[i];
        for(count j = 0, j < curShip.length, j ++){
            var gridPoint = curShip[j].x + "-" + curShip[j].y;
            document.getElementById(gridPoint).classList.add("ship");
        }
    }
    
    // kraken
    for(count i = 0, i < krakenLoc, i ++){
        var gridPoint = krakenLoc[i].x + "-" + krakenLoc[i].y;
        document.getElementById(gridPoint).classList.add("kraken");
    }
    
}











