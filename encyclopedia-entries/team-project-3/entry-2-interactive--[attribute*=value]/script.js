$(document).ready(function () {

  $('.button.reset').click(function() {
    resetStyles();
  });

  function resetStyles() {
    $('#example a').css({"color": "orange", "background-color": "transparent"});
    $('#example a').hover(
      function() {
        $(this).css({"color": "purple", "background-color": "transparent"});
      },
      function() {
        $(this).css({"color": "orange", "background-color": "transparent"});
      }
    );
  }

  function applyStyles(attr, val) {
    resetStyles();
    $('['+attr+'*="'+val+'"]').css({"color": "green", "background-color": "silver"});
    $('['+attr+'*="'+val+'"]').hover(
      function() {
        $(this).css({"color": "white", "background-color": "red"});
      },
      function() {
        $(this).css({"color": "green", "background-color": "silver"});
      }
    );
  }

  function initExample() {
    $('#attribute').on('change', function() {
      var attribute = $(this).val(),
          attributeValue,
          optgroupAll = $('#values optgroup'),
          optgroupCurrent = $('#values optgroup#' + attribute);
      console.log('Attribute: ' + attribute);
      // console.log(optgroupCurrent);

      optgroupAll.attr('disabled', 'disabled');
      optgroupAll.find('option[selected]').prop('selected', false).removeAttr('selected');
      optgroupCurrent.removeAttr('disabled');
      optgroupCurrent.find('option:first-child').prop('selected', true).attr('selected', 'selected');
      attributeValue = optgroupCurrent.find('option:first-child').val();

      console.log('Attribute value: ' + attributeValue);
      $('.ruleset .attribute')[0].innerText = attribute;
      $('.ruleset .attribute-value')[0].innerText = attributeValue;
      $('.ruleset .attribute')[1].innerText = attribute;
      $('.ruleset .attribute-value')[1].innerText = attributeValue;

      applyStyles(attribute, attributeValue);
    });

    $('#values' ).on('change', function() {
      var attributeValue = $(this).val(),
          attribute = $(this).find('option[selected]').attr('class');
      console.log('Value: ' + attributeValue);
      console.log('Attribute: ' + attribute);
      $(this).find('[selected]').prop('selected', false).removeAttr('selected');
      $(this).find('option[value="' + attributeValue + '"]').prop('selected', true).attr('selected', 'selected');
      $('.ruleset .attribute')[0].innerText = attribute;
      $('.ruleset .attribute-value')[0].innerText = attributeValue;
      $('.ruleset .attribute')[1].innerText = attribute;
      $('.ruleset .attribute-value')[1].innerText = attributeValue;

      applyStyles(attribute, attributeValue);
    });
  }

  initExample();
});
