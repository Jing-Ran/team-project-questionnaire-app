$(document).ready(function () {

  var variableMix = [3, true, 9, 2, "howdy!", 8, 1, "true", "A", 8, 2, 9, true, 8, 3, "3"];

  $('.button#reset').click(function() {
    resetExample();
  });

  function resetExample() {
    var collection = $('.array-item').parent();

    collection.each(function() {
      $(this).removeClass('match').removeClass('no-match');
    });

    $('.result p').css('visibility', 'hidden');
    $('.controls .parameters').val('');
  }

  // gets value from the input fields and detects if they are strings or not
  function normalizeValue(value) {
    var end = value.length - 1;

    if ( (value.charAt(0) === '"' && value.charAt(end) === '"')
        || (value.charAt(0) === "'" && value.charAt(end) === "'") ) {
    // Explicitly entered string, i.e. by using quotes in the input field.
    // This is important if the numbers or booleans are entered as strings,
    // we want them to remain strings, but we do not want to duplicate quotes
    // since by pushing into array the quotes will be automatically wrapped
    // around them, therefore we will strip the quotes
      console.log('Explicit string detected!');
      value = value.substring(1, value.length - 1);
      console.log('Value: ', value);
    } else if ( value === "true" || value === "false" ) {
    // If true or false are entered without quotes then treat them as booleans
    // We must explicitly set the value to the boolean value
      value = ( value === "true" ) ? true : false;
      console.log('Boolean detected!');
      console.log('Value: ', value);
    } else if ( !isNaN(value) ) {
    // If the number is entered without quotes then convert it from string to number
      value = value * 1;
      console.log('Number detected!');
      console.log('Value: ', value);
    } else {
    // If none of the above, then it is a string, but without quotes,
    // By default they will be wrapped in quotes when pushed into array
    // Do nothing for this case
      console.log('Implicit string detected!');
      console.log('Value: ', value);
    }

    return value;
  }

  function getArray(selector) {
    var collection = $(selector),
        array = [];

    collection.each(function () {
      var content = $(this)[0].innerHTML,
          value = normalizeValue(content);
      array.push(value);
    });

    return array;
  }

  function displayResult(element, startIndex, foundOnIndex) {
    var collection = $('.array-item');

    if ( typeof element === 'string' ) {
      element = '"' + element + '"';
    }

    collection.each(function() {
      $(this).parent().addClass('no-match');
      $(this).parent().removeClass('match');
    });

    if ( foundOnIndex === -1 ) {
      $('#found').css('visibility', 'hidden');
      $('#not-found .element')[0].innerText = element;
      $('#not-found .index-start')[0].innerText = startIndex;
      $('#not-found').css('visibility', 'visible');
    } else {
      $('#not-found').css('visibility', 'hidden');
      $('#found .element')[0].innerText = element;
      $('#found .index-start')[0].innerText = startIndex;
      $('#found .index-found')[0].innerText = foundOnIndex;
      $('#found').css('visibility', 'visible');
      $(collection[foundOnIndex]).parent().removeClass('no-match').addClass('match');
    }
    
  }

  function initExample() {
    $('#search').on('click', function() {
      var variableMix = getArray('.array-item'),
          element = normalizeValue($('#array-element').val()),
          startIndex = normalizeValue($('#index-from').val()),
          foundOnIndex = variableMix.lastIndexOf(element, startIndex);

      displayResult(element, startIndex, foundOnIndex);
    });

  }

  initExample();
});
