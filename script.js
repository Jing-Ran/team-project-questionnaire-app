(function() {
  var questionnaire = document.querySelector('#questionnaire'),
      validator = {},
      fullName = document.getElementsByClassName("full-name")[0],
      emailAddress = document.getElementsByClassName("email")[0];

  function trimSpaces(string) {
    return string.replace(/^\s+/, '').replace(/\s+$/, '');
  }

  // update validation functions
  // check full-name validation:
  validator.isFullName = function(name) {
    var trimmedName = trimSpaces(name),
        nameArr = name.split(" ");
    if (nameArr.length >= 2) {
        for (var i = 0; i < nameArr.length; i++) {
            if (nameArr[i].length >= 2) {
                for (var j = 0; j < nameArr[i].length; j++){
                    if (nameArr[i].charCodeAt(j) >= 48 &&
                        nameArr[i].charCodeAt(j) <= 57)
                        return false;
                }
            } else {
                return false;
            }
        }
        return true;
    }
    return false;
  };

  //modify check email validation:
  validator.isEmail = function(email) {
    var beforeAt,
        afterAt,
        splitBeforeAt,
        splitAfterAt;

    if (!email) return false;

    if (email.indexOf("@") === -1 ||
        email.indexOf("@") !== email.lastIndexOf("@")) return false;

    beforeAt = email.split("@")[0];
    afterAt = email.split("@")[1];
    splitBeforeAt = beforeAt.split(".");
    splitAfterAt = afterAt.split(".");

    if (beforeAt === "" || beforeAt.indexOf(" ") >= 0) return false;
    for (var i = 0; i < splitBeforeAt.length; i++) {
        if (splitBeforeAt[i] === "" || splitBeforeAt[i] === " ")
            return false;
    }
    if (afterAt === "" || afterAt.indexOf(" ") >=0) return false;
    if (splitAfterAt.length < 2) return false;
    for (var j = 0; j < splitAfterAt.length; j++) {
        if (splitAfterAt[j] === "" || splitAfterAt[j] === " ")
            return false;
        if (splitAfterAt[splitAfterAt.length - 1].length < 2) return false;
    }

    return true;
  };

  function getInfo(e) {
    e.preventDefault();
    //Update: call validation check functions
    if (!validator.isFullName(fullName.value) || 
      !validator.isEmail(emailAddress.value)) {
      if (!validator.isFullName(fullName.value)){
        fullName.classList.add("invalid");
      } else {
        fullName.classList.remove("invalid");
      }
      if (!validator.isEmail(emailAddress.value)){
        emailAddress.classList.add("invalid");
      } else {
        emailAddress.classList.remove("invalid");
      }
      return;
    } else {
      fullName.classList.remove("invalid");
      emailAddress.classList.remove("invalid");
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
