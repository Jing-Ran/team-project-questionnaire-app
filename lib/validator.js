(function(object) {
  object.validator = {};

  validator.isEmpty = function(input) {
    return input.trim() === "";
  };

  validator.isEmailAddress = function(email) {
    var local,
        domain,
        localSplit,
        domainSplit;

    if ( this.isEmpty(email) ) return false;
    if ( email.indexOf(" ") !== -1 ) return false;

    if ( email.indexOf("@") === -1 || email.indexOf("@") !== email.lastIndexOf("@") ) return false;

    local = email.split("@")[0];
    domain = email.split("@")[1];

    if ( this.isEmpty(local) || this.isEmpty(domain) ) return false;

    localSplit = local.split(".");
    domainSplit = domain.split(".");

    for ( var i = 0; i < localSplit.length; i++ ) {
      if ( this.isEmpty(localSplit[i]) ) return false;
    }

    if ( domainSplit.length < 2 ) return false;

    for ( var j = 0; j < domainSplit.length; j++ ) {
      if ( this.isEmpty(domainSplit[j]) ) return false;
      if ( domainSplit[domainSplit.length - 1].length < 2 ) return false;
    }

    if ( domain.indexOf("_") !== -1 ) return false;

    if ( domain.indexOf("-") === 0 || domain.lastIndexOf("-") === domain.length - 1 ) return false;

    return true;
  };

  validator.isOfLength = function (input, n) {
    return input.length >= n;
  }

  validator.isCharacterSet = function(input, charSets) {
    var input = input.trim(),
        i,
        inputLen = input.length,
        found,
        char;

    for ( i = 0; i < inputLen; i++ ) {
      char = input.charAt(i).toLowerCase();
      found = false;
      for ( key in charSets ) {
        if ( charSets[key].indexOf(char) !== -1 && !found ) {
          found = true;
        }
      }
      if ( !found ) return false;
    }
    return true;
  }

  validator.getWords = function(input) {
    var i, j, wordsArray = [],
        spaceDelimited = input.split(' '),
        len = spaceDelimited.length,
        hyphenDelimited;

    for ( i = 0; i < len; i++ ) {

      if ( spaceDelimited[i].indexOf('-') !== -1 ) {
        hyphenDelimited = spaceDelimited[i].split('-');
        for ( j = 0; j < hyphenDelimited.length; j++ ) {
          wordsArray.push(hyphenDelimited[j]);
        }
      } else {
        wordsArray.push(spaceDelimited[i]);
      }

    }
    // console.log('wordsArray: ', wordsArray);
    return wordsArray;
  }

  validator.isFullName = function(fullname) {
    var words,
        i, len,
        isWord;

    if ( this.isOfLength(fullname, 5) && fullname.indexOf(' ') !== -1 ) {
      isWord = true;
      words = this.getWords(fullname);
      len = words.length;

      if ( words.length >= 2 ) {

        for ( i = 0; i < len; i++ ) {
          if ( words[i].length >=2 && isWord ) {
            isWord = true;
          } else isWord = false;
        }

      } else isWord = false;

    }

    return isWord;
  };

})(window);
