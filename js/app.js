// Main file for the battleship code

'use strict';

var main = function() {
    initBoard = new board();
    initGame = new game();
    
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