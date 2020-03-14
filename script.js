let tries = 1;
let guess = 500;
let modif = [500, 250, 125, 63, 32, 16, 8, 4, 2, 1];

function newGame(){
	tries = 1;
	guess = 500;

	document.getElementById('nb-tries').innerHTML = tries;
	document.getElementById('try').innerHTML = 'Is your number <span id="try-nb" class="colored-txt">500</span>?'
	document.getElementById('choose').hidden = true;
	document.getElementById('new-game-btn').hidden = true;
	document.getElementById('try').hidden = false;
	document.getElementById('yes-btn').hidden = false;
	document.getElementById('higher-btn').hidden = false;
	document.getElementById('lower-btn').hidden = false;
	document.getElementById('tries').hidden = false;
}

function higher(){
	guess += modif[tries];
	tries++;
	document.getElementById('nb-tries').innerHTML = tries;

	if(guess == 1000) document.getElementById('higher-btn').hidden = true;

	if(tries == 10) found();
	else document.getElementById('try-nb').innerHTML = guess;
}

function lower(){
	guess -= modif[tries];
	tries++;

	document.getElementById('nb-tries').innerHTML = tries;

	if(guess == 0) document.getElementById('lower-btn').hidden = true;

	if(tries == 10) found();
	else document.getElementById('try-nb').innerHTML = guess;
}

function found(){
	let good_game = "AND I WON!"
	document.getElementById('yes-btn').hidden = true;
	document.getElementById('higher-btn').hidden = true;
	document.getElementById('lower-btn').hidden = true;
	document.getElementById('new-game-btn').hidden = false;
	
	document.getElementById('try').innerHTML = "It's <span class='colored-txt'>" + guess + "</span> "+good_game;
}