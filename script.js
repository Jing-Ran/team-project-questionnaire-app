window.addEventListener('load', function() {
  var questionnaire = document.querySelector('#questionnaire'),
      fullName = document.getElementById("user-name"),
      emailAddress = document.getElementById("user-email"),
      engCharacterSet = {
        interpunction: [' ', '-', '\''],
        alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
      };

  function trimSpaces(string) {
    return string.replace(/^\s+/, '').replace(/\s+$/, '');
  }

  function checkFullName(element, charSet) {
    var value = trimSpaces(element.value);
    if ( validator.isEmpty(value) ) {
      // console.log("is empty");
      element.setCustomValidity("Required field!");
    } else if (!validator.isCharacterSet(value, charSet)) {
      element.setCustomValidity("Invalid character set! Only english letters, spaces and hyphens are allowed.");
    } else if ( !validator.isFullName(value) ) {
      element.setCustomValidity("Invalid full name format! There must be at least two words of length greater than one letter.");
    } else {
      element.setCustomValidity("");
    }
  }

  function checkEmail(element) {
    var value = element.value;
    if ( validator.isEmailAddress(value) ) {
      element.setCustomValidity('');
      element.classList.remove('invalid');
    } else {
      element.setCustomValidity('Invalid email format!');
      element.classList.add('invalid');
    }
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
      if ( !cardElements[i].getAttribute('disabled') ) {
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
          cardObj.questions.push(questionObj);
        }
        this.data.cards.push(cardObj);
      }
    }

    console.log(JSON.stringify(questionnaire.data, null, 2));
  }


  fullName.addEventListener("keyup", function() {
    checkFullName(this, engCharacterSet);
  });

  emailAddress.addEventListener("keyup", function() {
    checkEmail(this);
  });

  questionnaire.addEventListener('submit', getInfo);

});
