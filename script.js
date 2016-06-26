(function() {
  var questionnaire = document.querySelector('#questionnaire');

  function trimSpaces(string) {
    return string.replace(/^\s+/, '').replace(/\s+$/, '');
  }

  function getInfo(e) {
    e.preventDefault();
    this.data = {};
    var appTitle = this.querySelector('h1.title').textContent,
        cardElements = this.querySelectorAll('.questionnaire-card'),
        cardsNum = cardElements.length;

    this.data.appTitle = trimSpaces(appTitle);
    this.data.appDescription = trimSpaces(appTitle);
    this.data.cards = [];

    for ( var i = 0; i < cardsNum; i++ ) {
      if ( cardElements[i].getAttribute('disabled') ) continue;
      var questionElements = cardElements[i].querySelectorAll('.question');
      var cardObj = {};

      cardObj.title = trimSpaces(cardElements[i].querySelector('.title').textContent);
      cardObj.description = (cardElements[i].querySelector('.card-description')) ? trimSpaces(cardElements[i].querySelector('.card-description').textContent) : '';
      cardObj.questions = [];

      for ( var j = 0; j < questionElements.length; j++ ) {
        var questionObj = {},
            answers = questionElements[j].querySelectorAll('[class*="answer"]'),
            answerNum = answers.length;

        questionObj.qText = trimSpaces(questionElements[j].querySelector('.question-text').textContent);
        questionObj.qAnswer = [];

        if (answerNum === 1) {
          questionObj.qAnswer.push(answers[0].value);
        } else {
          for ( var k = 0; k < answerNum; k++ ) {
            if ( answers[k].selected || answers[k].checked ) {
              questionObj.qAnswer.push(answers[k].value);
            }
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
