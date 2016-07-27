(function(object) {
  object.validator = {};

  // Add empty check function
  validator.isEmpty = function(input) {
    return input.trim() === "";
  };

  validator.isEmailAddress = function(email) {
    var local,
        domain,
        localSplit,
        domainSplit;

    // 'this' is the validator object
    if ( this.isEmpty(email) ) return false;
    // Move space check from back to the front: no space is allowed in an email
    console.log("Email:" + email);
    if ( email.indexOf(" ") !== -1 ) return false;

    if ( email.indexOf("@") === -1 || email.indexOf("@") !== email.lastIndexOf("@") ) return false;

    local = email.split("@")[0];
    domain = email.split("@")[1];

    // Add: if either is empty, return false
    if ( this.isEmpty(local) || this.isEmpty(domain) ) return false;

    localSplit = local.split(".");
    domainSplit = domain.split(".");

    for ( var i = 0; i < localSplit.length; i++ ) {
      if ( this.isEmpty(localSplit[i]) ) return false;
    }

    // Moved: it's better to check the length first and then the other stuff
    if ( domainSplit.length < 2 ) return false;

    // Moved: the same reason as previous
    for ( var j = 0; j < domainSplit.length; j++ ) {
      if ( this.isEmpty(domainSplit[j]) ) return false;
      if ( domainSplit[domainSplit.length - 1].length < 2 ) return false;
    }

    // Add: no underscore is allowed after @ sign
    if ( domain.indexOf("_") !== -1 ) return false;

    // Add: hyphen can't be the first or the last character
    if ( domain.indexOf("-") === 0 || domain.lastIndexOf("-") === domain.length - 1 ) return false;

    return true;
  };

  validator.isOfLength = function (input, n) {
    return input.length >= n;
  }

  validator.isCharacterSet = function(input, charSets) {
    // this function accepts a input string, and an object with character sets defined
    // every item from character sets object has a key whose name is the name of the character set
    // and the value that is an array of characters in that set
    // This function will check if the input string characters are in the specified character sets
    // I created it because I wanted to check for the name input in the forms, and I wanted to allow
    // other characters than the english alphabet character to be valid
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
          //console.log('Found ' + char + ' in the ' + key + ' character set.');
          found = true;
        }
      //console.log(key + ': ' + charSets[key]);
      }
      if ( !found ) return false;
    }
    return true;
  }

  validator.getWords = function(input) {
    var i, j, wordsArray = [],
        spaceDelimited = input.split(' '), // get space delimited parts of the name
        len = spaceDelimited.length,
        hyphenDelimited; // if there are hyphen delimited parts we must also split that name parts

    for ( i = 0; i < len; i++ ) {

      if ( spaceDelimited[i].indexOf('-') !== -1 ) {
        // the hyphen exists in this part of the name, so we split it on hypen
        // and push the resulting array items into final array
        hyphenDelimited = spaceDelimited[i].split('-');
        for ( j = 0; j < hyphenDelimited.length; j++ ) {
          wordsArray.push(hyphenDelimited[j]);
        }
      } else {
        // parts of the word that are not hyphen delimited are pushed as they are
        wordsArray.push(spaceDelimited[i]);
      }

    }
console.log('wordsArray: ', wordsArray);
    return wordsArray;
  }

  validator.isFullName = function(fullname) {
    var words,
        i, len,
        isWord;

    // there must be at least 5 characters in the full name, 4 for the first and last name and one space
    // and there must be at least one space
    if ( this.isOfLength(fullname, 5) && fullname.indexOf(' ') !== -1 ) {
      console.log('Length ok!');

      // initialize variable isWord
      isWord = true;
      // split the input into words
      words = this.getWords(fullname);
      // get the number of words
      len = words.length;

      console.log(words);

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
