(function() {
  var questionnaire = document.querySelector('#questionnaire');

  function trimSpaces(string) {
    return string.replace(/^\s+/, '').replace(/\s+$/, '');
  }

  // add checkValidation function
  function checkValidation(aForm) {
    var fullNames = aForm.getElementsByClassName("full-name"),
        emails = aForm.getElementsByClassName("email"),
        validation = true;

    // check full-name validation:

    //Modified check email validation:
    for (var i = 0; i < emails.length; i++) {
      
      var currentEmail = emails[i].value,
          stringsOfEmail = currentEmail.split("@"),
          beforeAt = stringsOfEmail[0],
          afterAt = stringsOfEmail[1],
          splitBeforeAt = beforeAt.split("."),
          splitAfterAt = afterAt.split(".");

      // whether email is an empty string
      if (currentEmail === "") validation = false;
      // whether has one and only one @ symbol;
      if (currentEmail.indexOf("@") === -1 || 
        currentEmail.indexOf("@") !== currentEmail.lastIndexOf("@")) 
        validation = false;
      // whether the string before @ is empty, or contains spaces
      if (beforeAt === "" || beforeAt.indexOf(" ") >= 0) validation = false;
      // check location(s) of dot(s) the string before @ 
      for (var j = 0; j < splitBeforeAt.length; j++) {
        if (splitBeforeAt[j] === "" || splitBeforeAt[j] === " ") {
          validation = false;
          break;
        }
      }
      // whether the string after @ is valid
      if (afterAt === "" || afterAt.indexOf(" ") >= 0) validation = false;
      if (splitAfterAt.length < 2) validation = false;
      for (var k = 0; k < splitAfterAt.length; k++) {
        if (splitAfterAt[k] === "" || splitAfterAt[k] === " ") 
          validation = false;
        if (splitAfterAt[splitAfterAt.length - 1].length < 2) 
          validation = false;
      }

      // add "invalid" class to invalid input area
      if (!validation) {
        emails[i].classList.add("invalid");
      } else {
        emails[i].classList.remove("invalid");
      }
    }

    return validation;
  }

  function getInfo(e) {
    e.preventDefault();
    if (!checkValidation(this)){
      return;
    }

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
