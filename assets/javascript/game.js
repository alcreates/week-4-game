//Global VARIABLES
//======================================================




var tyson = {

	healthPoints: 100,
	attackPower: 6,
	counterAttackPower: 6
}

var ali = {

	healthPoints : 100,
	attackPower: 6,
	counterAttackPower: 6
}

var george = {

	healthPoints: 100,
	attackPower: 6,
	counterAttackPower: 6
}

var frazier = {
	healthPoints: 100,
	attackPower: 6,
	counterAttackPower: 6
}
var moves = 0
var wins = 0
var player1 = []
var player2 = []
//FUNCTIONS
//========================================================
function winLose (){

	if (player1.healthPoints <= 0){
		alert(" YOU GOT KNOCKED OUT! ")
		newGame()
	}else if (player2.healthPoints <= 0 && wins < 2){
		alert("NEXT OPPONENT!")
		player2 = []
		$('#fighter2').empty()
		wins += 1
	}else if(player2.healthPoints <=0 && wins == 2){
		alert("You are the Champion!")
		newGame()
	}
};






function fightStatus(){


	$("#fightStatus").empty()
	$("#opponentStatus").empty()

	player1.healthPoints
	$("#fightStatus").append("<p>" + "health : " + player1.healthPoints + "</p>")

	player2.healthPoints
	$("#opponentStatus").append("<p>" + "health : " + player2.healthPoints + "</p>")
}

function fight(){
	player1Attack = Math.floor(Math.random() * player1.attackPower )
	player1.attackPower += 6

	player2Attack = player2.counterAttackPower

	player1.healthPoints -= player2Attack
	player2.healthPoints -= player1Attack

}

function newGame() {
	wins = 0
	moves = 0 
	player1 = []
	player2 = []
 $('#start').append('<div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2 fighter\" id=\"tyson\"> <img src=\"assets/images/tyson.jpg\"></div>')
 $('#start').append('<div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2 fighter\" id=\"ali\"><img src=\"assets/images/ali.jpg\"</div>')
 $('#start').append('<div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2 fighter\" id=\"george\"><img src=\"assets/images/GeorgeForeman.jpg\"></div>')
 $('#start').append('<div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2 fighter\" id=\"frazier\"><img src=\"assets/images/frazier.jpg\"></div>')
 $('#fightStatus').empty()
 $('#opponentStatus').empty()
 $('#choosenOne').empty()
 $('#fighter2').empty()

  tyson = {

	healthPoints: 100,
	attackPower: 6,
	counterAttackPower: 6
		}

 ali = {

	healthPoints : 100,
	attackPower: 6,
	counterAttackPower: 6
}

george = {

	healthPoints: 100,
	attackPower: 6,
	counterAttackPower: 6
}

frazier = {
	healthPoints: 100,
	attackPower: 6,
	counterAttackPower: 6
}



};












window.onload =function(){

	
$(document).ready(function(){	
	
	$('#tyson').click(function(){
		if (moves == 0){
		$('#choosenOne').append(this);
		player1 = tyson
		
		
		
		}else if (moves > 0 && player2.length == 0  && player1 != tyson){
		 $('#fighter2').append(this);
		 player2 = tyson 
		 
		}else{
			alert("illegal move 1")
		}
		moves += 1
	});


	$('#ali').click(function(){
		if (moves == 0){
			$('#choosenOne').append(this);
			
			player1 = ali
		}else if(moves > 0 && player2.length == 0 && player1 != ali ){
			$('#fighter2').append(this);
			player2 = ali
		}else{
			alert("illegal move 2")
		}
	
		moves += 1
	});

	$('#george').click(function(){
		if (moves == 0){
			$('#choosenOne').append(this);
			
			player1 = george
		}else if(moves > 0 && player2.length == 0 && player1 != george){
			$('#fighter2').append(this);
			player2 = george
		}else{
			alert("illegal move")
		}
		moves += 1
	});
	
	$('#frazier').click(function(){
		if (moves ==0){
			$('#choosenOne').append(this);
			player1 = frazier
			
		}else if( moves > 0 && player2.length == 0 && player1 != frazier){
			$('#fighter2').append(this);
			player2	= frazier
		}else{
			alert('illegal move')
		}
		moves += 1
	});

	$('#button').click(function(){
		
		
		fightStatus()
		fight()
		winLose()
	    
	

	});
	


});

}

