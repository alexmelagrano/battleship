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

// Global variables
var curCell = '0-0';
var state = 'wait';
var random = Math.floor((Math.random() * 10) + 1);

// Position helpers
var getX = function(p) {
    return p.pop();
}
var getY = function(p) {
    return p.split('-').pop();
}
var getID = function(cell) {
    curCell = cell.id;
    return cell.id;
}


// Location validators
var onBoard = function(newP) {
    newP.getX() < 10 && newP.getX() >= 0 && newP.getY() < 10 && newP.getY() > 0; 
}
var isDupHelper = function(newP, list) {
    var p = list[i];
    for(var i = 0; i < list.length; i += 1){
        if (newP.x == p.getX() || newP.y == p.getY()){
            return true;
        }
    }
    return false;
}      
var isDup = function(cellID) {  
    var newP = { x: cellID.getX(),
                 y: cellID.getY() };
    for (var i = 0; i < krakenLoc.length; i += 1){
        var p = list[i];
        if (newP.x == p.getX() || newP.y == p.getY()){
            return true;
        }
    }
    for(var j = 0; j < ships.length; j += 1){
        isDupHelper(newP, ships[j]);
    }
    return false;
}  
    



// Input handling
// ======================================

var mouseHandler = function(Element) {
    cellID = getID(Element);
    
    // initialization stages
    if(state.includes("initShip"){
        var x = state.split("initShip").pop();
        if(onBoard(cellID) && !isDup(cellID) && //%^(&*)*&^(!isAdjacent(cellID)&^%^&^))
    }
}



// Initialization functions
// ======================================

// Creating the board
var grid = [];

var initBoard = function() {
    var cells = document.getElementsByClassName('cell');
    
    for(var i = 0; i < cells.length; i += 1){
        cells[i].addEventListener('click', mouseHandler(cells[i]));
    }
    
}

// Setting up player's ship locations
var ship2 = [];
var ship3 = [];
var ship4 = [];
var ship5 = [];
    
var ships = []:

var initShips = function() {
    
    var curShip = 0
    // hey you - pick your ships
        
    // yeah, you! choose your ships, bitch!
    for(var i = 2; i <= 5; i += 1) {
        window.alert("Place your " + i + "-cell ship!");
        curShip = i;
        state = ("initShip" + i);
        var numPlaces = 0;
        while(state == "initShip") {
            if(numPlaces = curShip){
                state = "wait";
            }
        }
        
    }    
    
    
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
    krakenLoc.push((center.x + "-" + center.y));
    
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
    for(var i = 0; i < ships.length; i += 1){
        var curShip = ships[i];
        for(var j = 0; j < curShip.length; j += 1){
            var gridPoint = curShip[j].x + "-" + curShip[j].y;
            document.getElementById(gridPoint).classList.add("ship");
        }
    }
    
    // kraken
    for(var i = 0; i < krakenLoc; i += 1){
        var gridPoint = krakenLoc[i].x + "-" + krakenLoc[i].y;
        document.getElementById(gridPoint).classList.add("kraken");
    }
    
}











