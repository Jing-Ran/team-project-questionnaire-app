$(document).ready(function () {

  //$('[title*="reset"]').css({"background-color": "red", "color": "#000"});
  function initExample() {
    $('#attribute').on('change', function() {
      var attribute = $(this).val(),
          attributeValue,
          optgroupAll = $('#values optgroup'),
          optgroupCurrent = $('#values optgroup#' + attribute);
      console.log('Attribute: ' + attribute);

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
    });
  }

  initExample();
});
