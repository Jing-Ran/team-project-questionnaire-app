(function() {
var questionnaire = document.getElementById('questionnaire');

function trimSpaces(string) {
  return string.replace(/^\s+/, '').replace(/\s+$/, '');
}

function getInfo(e) {
	e.preventDefault();
  this.data = {};
  var appTitle = this.querySelector('h1.title').textContent,
  		cardElements = this.getElementsByClassName("questionnaire-card"),
      cardsNum = cardElements.length;
      
  this.data.appTitle = trimSpaces(appTitle);
  this.data.appDescription = trimSpaces(appTitle);
  this.data.cards = [];

	for ( var i = 0; i < cardsNum; i++ ) {
  	if ( cardElements[i].getAttribute('disabled') ) continue;
  	var questionElements = cardElements[i].getElementsByClassName('question');
    var cardObj = {};
		cardObj.title = trimSpaces(cardElements[i].getElementsByClassName('title')[0].textContent);
    cardObj.description = (cardElements[i].getElementsByClassName('.card-description')[0]) ? trimSpaces(cardElements[i].getElementsByClassName('.card-description')[0].textContent) : '';
    cardObj.questions = [];
    for (var j = 0; j < questionElements.length; j++) {
    	var questionObj = {},
          answers,
          answerNum;

			questionObj.qText = trimSpaces(questionElements[j].getElementsByClassName('question-text')[0].textContent);
      questionObj.qAnswer = [];
      answers = questionElements[j].querySelectorAll('[class*="answer"]');
      answerNum = answers.length;
      for ( var k = 0; k < answerNum; k++ ) {
        if ( answers[k].selected || answers[k].checked ) {
          questionObj.qAnswer.push(answers[k].value);
        }
      }
      console.log(questionObj);
      cardObj.questions.push(questionObj);
  	}
    this.data.cards.push(cardObj);
	}
  
  
  console.log(JSON.stringify(questionnaire.data, null, 2));
}

questionnaire.addEventListener('submit', getInfo);

})();