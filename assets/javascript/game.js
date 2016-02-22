//Global VARIABLES
//======================================================

window.onload = function(){

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


//FUNCTIONS
//========================================================

$(document).ready(function(){
	var moves = 0
	
	
	$('#tyson').click(function(){
		if (moves == 0){
		$('#choosenOne').append(this);
		moves += 1
		alert(moves)
		}else{
		 $('#fighter2').append(this);
		}
	});


	$('#ali').click(function(){
		if (moves == 0){
			$('#choosenOne').append(this);
			moves += 1
			alert(moves)
		}else{
			$('#fighter2').append(this);
		}
	

	});

	$('#george').click(function(){
		if (moves == 0){
			$('#choosenOne').append(this);
			moves += 1
		}else{
			$('#fighter2').append(this);
		}
	});
	
	$('#frazier').click(function(){
		if (moves ==0){
			$('#choosenOne').append(this);
			moves += 1
		}else {
			$('#fighter2').append(this);
		}
	});
	
	


});

















// MAIN PROCESS
//=======================================================



}