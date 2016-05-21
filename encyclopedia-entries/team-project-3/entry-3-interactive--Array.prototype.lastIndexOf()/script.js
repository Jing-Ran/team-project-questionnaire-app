$(document).ready(function () {

  // Store the array in a variable, this is not used atm, but in the future
  // I might make the example editable, that is, make the array editable
  var variableMix = [3, true, 9, 2, "howdy!", 8, 1, "true", "A", 8, 2, 9, true, 8, 3, "3"];

  $('.button#reset').click(function() {
    resetExample();
  });

  // Resets the array presentation and result display
  function resetExample() {
    var collection = $('.array-item').parent();

    collection.each(function() {
      $(this).removeClass('match').removeClass('no-match');
    });

    $('.result div').css('visibility', 'hidden');
    $('.controls .parameters').val('');
  }

  // Gets value from the input fields and detects if they are strings,
  // booleans or numbers, and return the appropriate value type
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

  // Get the values from the HTML list elements and return normal array
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

  // Displays the result at the end of the page and on the array presentation
  function displayResult(element, startIndex, foundOnIndex) {
    var collection = $('.array-item'),
        length = collection.length;

    $('.result div').css('visibility', 'hidden');

    // If no element value is provided, no search will be performed
    if (element === '') {
      $('#empty-element').css('visibility', 'visible');
      return;
    }

    // Adjust the startIndex for display:
    // if it is greater than the length of the array, set it to the length of the array
    // if it is negative, calculate the starting index
    if ( startIndex < 0 ) {
      startIndex = length + ' - ' + Math.abs(startIndex) + ' ' + ' = ' + (length - Math.abs(startIndex));
      // If absolute value of startIndex is greater than length of the array
      // no search will be performed
      if ( Math.abs(startIndex) > length ) {
        $('#bad-start-index .index-start')[0].innerText = startIndex;
        $('#bad-start-index').css('visibility', 'visible');
        return;
      }
    } else if ( startIndex > length - 1 ) {
      startIndex = length - 1;
    }

    // Enclose strings in quotes for display purposes
    if ( typeof element === 'string' ) {
      element = '"' + element + '"';
    }

    // On every search blur array items
    collection.each(function() {
      $(this).parent().removeClass('match').addClass('no-match');
    });

    // Add element value for result display
    $('.element').each(function () {
      $(this)[0].innerText = element;
    });

    // Add startIndex value for result display
    $('.index-start').each(function () {
      $(this)[0].innerText = startIndex;
    });

    // Add foundOnIndex value for result display
    $('.index-found').each(function () {
      $(this)[0].innerText = foundOnIndex;
    });

    // Set visibility for appropriate search results
    if ( foundOnIndex === -1 ) {
      $('#not-found').css('visibility', 'visible');
    } else {
      $('#found').css('visibility', 'visible');
      // Mark the found element in the array presentation and blur the rest
      $(collection[foundOnIndex]).parent().removeClass('no-match').addClass('match');
    }
  }

  // Assign event handler for search button
  function initExample() {
    $('#search').on('click', function() {
      var variableMix = getArray('.array-item'),
          length = variableMix.length,
          element = $('#array-element').val().trim(), // Get value for the element
          startIndex = parseInt($('#index-from').val()), // Get value for the starting index
          foundOnIndex;

      console.log('startIndex: ', startIndex);

      // Detect if the element is string, boolean or number and assign appropriate type
      element = ( element ) ? normalizeValue(element) : '';
      // If empty or a string, start from the end of the array
      startIndex = ( startIndex ) ? startIndex : ( !startIndex && startIndex !== 0 ) ? variableMix.length - 1 : 0;
      // Finally, use the ".lastIndexOf()" method to find the element
      foundOnIndex = variableMix.lastIndexOf(element, startIndex);

      // Use the found values to display the result
      displayResult(element, startIndex, foundOnIndex);
    });
  }

  initExample();
});
