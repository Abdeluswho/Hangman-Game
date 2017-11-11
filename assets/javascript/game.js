
// Creat an array of Words
var word = ['colorful', 'festival', 
			    'leaves', 'november', 
				'season', 'cake', 'treat', 
				'turkey', 'fall'];
// choose word randomly
var choosenword = word[Math.floor(Math.random() * word.length)];
console.log(choosenword);

var count = 0;
var wins = 0;
var wrongGuess = 0;
var rightWord = [];
var wrongWord = [];
var underScore = [];
var RemGuesses = 15;

var htmlUnderScore = document.getElementById("underscore");

document.getElementById('Wrong').innerHTML = '<h3>Wrong Guesses</h3><br>' +wrongGuess;
document.getElementById('Guesses').innerHTML = "<h3>Remaining Guesses</h3><br>" +RemGuesses;
document.getElementById('Wins').innerHTML = '<h3>Wins</h3><br>' + wins;

// Creat underscore based on length

for (var i = 0; i < choosenword.length; i++) {
	underScore.push('_');
	htmlUnderScore.innerHTML = underScore.join(' ');
}


// Get users guess
document.onkeyup = function(event) {
	RemGuesses--;
	var keyword = event.key.toLowerCase();
	console.log(keyword);


// Check if guess is right
   
if(choosenword.indexOf(keyword) > -1) {
//then add it to the rightWord array
    rightWord.push(keyword);
    underScore[choosenword.indexOf(keyword)] = keyword;
    htmlUnderScore.innerHTML = underScore.join(' ');
   
    
    
//replacing the underscore with a right letter
	for (var i = 0; i < choosenword.length; i++) {
        if (keyword === choosenword[i]){
//replacing a duplicate letter in the word
            for (var i = 0; i < choosenword.length; i++) {
                if (choosenword.charAt(i)===keyword){
                    underScore[i] = keyword;
                    htmlUnderScore.innerHTML = underScore.join(' ');  
                         
                } 
            }

            underScore[choosenword.indexOf(keyword)] = keyword;
            htmlUnderScore.innerHTML = underScore.join(' '); 
                 
        }


        
        document.getElementById('Guesses').innerHTML = "<h3>Remaining Guesses</h3><br>" +RemGuesses;
        document.getElementById('Wrong').innerHTML = '<h3>Wrong Guesses</h3><br>' +wrongGuess;
    }
    


 } else {
 	wrongWord.push(keyword);
 	wrongGuess ++;
 	document.getElementById('Guesses').innerHTML = "<h3>Remaining Guesses</h3><br>" +RemGuesses;
 	document.getElementById('Wrong').innerHTML = '<h3>Wrong Guesses</h3><br>' +wrongGuess;

 }
 if (choosenword===underScore.join('') && RemGuesses > 0) {
 	alert('Bravo!!! You WIN!');
 	wins ++;
 	document.getElementById('Wins').innerHTML = '<h3>Wins</h3><br>' + wins;

 	}else if (RemGuesses < 0) {
 		alert('Sorry! try again');

 	}


};

