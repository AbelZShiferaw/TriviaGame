
//document ready here

$(document).ready(function() {

	//$('.app').hide();
  //$('.result').hide();

var questions =  [{
		"question": "1. How many countries are there in Africa?",
		"option1": "One",
		"option2": "Fifteen",
		"option3": "Fifty Four",
		"option4": "Twenty Five",
		"answer": "3"
	 }, {
	  	"question": "2. What is the most common language in Africa?",
		"option1": "Arabic",
		"option2": "English",
		"option3": "French",
		"option4": "Swahili",
		"answer": "1"
		
  	}, {
  		"question": "3. Approximately, how many languages are spoken in Africa?",
		"option1": "Between 10 and 15",
		"option2": "Around 100",
		"option3": "Around 60",
		"option4": "Between 1,500 and 2,000",
		"answer": "4"
		
 	}, {
 		"question": "4. Which African country is the World's youngest country?",
		"option1": "South Sudan",
		"option2": "Eritrea",
		"option3": "Somalia",
		"option4": "Libya",
		"answer": "1"
  	}, {
  		"question": "4. All of Africa was colonized by European powers, except which countries??",
		"option1": "Ethiopia and Liberia",
		"option2": "Eritrea and Egypt",
		"option3": "Sudan and Egypt",
		"option4": "Morocco and Ethiopia",
		"answer": "1"
	}]; 

var currentQuestion = 0;
var correct = 0;
var incorrect =0;
var counter;
var count;
var timer;
var score = 0;
var totQuestions = questions.length;

var container = $('.quizContainer');
var questionEl = $('.question');
var opt1 = $('#opt1');
var opt2 = $('#opt2');
var opt3 = $('#opt3');
var opt4 = $('#opt4');
var nextButton = $('.nextButton');
var resultCont = $('.result');


function loadQuestion (questionIndex) {
	
	questionEl.html(questions[questionIndex].question);
	opt1.html(questions[questionIndex].option1);
	opt2.html(questions[questionIndex].option2);
	opt3.html(questions[questionIndex].option3);
	opt4.html(questions[questionIndex].option4);

}


$( "#nextButton" ).click(function() {
  loadNextQuestion();
});

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert ('please select your answer');
		return;
	}

	var answer = selectedOption.value;
	if (questions[currentQuestion].answer == answer){
		score++;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions-1){
		nextButton.html('Finish');
	}
	if (currentQuestion == totQuestions){
		container.style.display = 'none';
		result.style.display = '';
		resultCont.html('Your Score:') + score;
		return;
	}
	loadQuestion(currentQuestion);
}


loadQuestion(currentQuestion);


});



