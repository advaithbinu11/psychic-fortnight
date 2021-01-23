var gameState=0;
var database;
var canvas,playerCount,form,player,game;

function setup(){
  canvas=createCanvas(500,500);
  database = firebase.database();
  console.log(database);
  game=new Game()
  game.getState()
  game.start();
}

function draw(){
  
}

