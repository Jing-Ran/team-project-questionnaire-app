$(document).ready(function () {

  // $('.button.reset').click(function() {
  //   resetExample();
  // });

  // function resetExample() {
  //   
  // }

  // function applyMethod(attr, val) {
  //   resetExample();
  //   
  // }

  function getArray(selector) {
    var collection = $(selector),
        array = [];

    collection.each(function () {
      var content = $(this)[0].innerHTML.split("'");
      // when split on quotation mark, values that are not strings will not
      // have items other that items on index 0
      if (content[1] !== undefined) {
        // this is a string
        array.push(content[1]);
      } else {
        // these are not strings, they are either numbers or booleans
        // this operations are performed to prevent pushing them as strings
        if (content[0] === 'true') {
          array.push(true);
        } else if (content[0] === 'false') {
          array.push(false);
        } else {
          array.push(content * 1);
        }
      }
    });

    return array;
  }

  function getParameters() {
    var element = $('#array-element').val(),
        index = $('#index-from').val();

    return {
      element: element,
      index: index
    }
  }

  function initExample() {
    $('#search').on('click', function() {
      var variableMix = getArray('.array-item'),
          element = getParameters().element, // type problem, numbers, strings and booleans
          index = getParameters().index,
          lastIndex = variableMix.lastIndexOf(element, index);

      // console.log(variableMix);

      console.log(element);
      console.log(index);

      console.log('Last found on: ' + lastIndex);
    });

  }

  initExample();
});
