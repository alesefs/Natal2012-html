// JavaScript Document

var progresso = new Number();
var maximo = new Number();
var progresso = 0;
var maximo = 101;



function start(){
	if ((progresso = progresso +1) < maximo){
		progresso = progresso +1;
		document.getElementById("pg").value = progresso;
		setTimeout("start();", 175);
	}
	
	
}
	
var count =10
var redirect="game.html"

function countDown(){
 if (count <=0){
  window.location = redirect;
 }else{
  count--;
//  document.getElementById("timer").innerHTML = "This page will redirect in "+count+" seconds."
  setTimeout("countDown()", 1000)
 }
}