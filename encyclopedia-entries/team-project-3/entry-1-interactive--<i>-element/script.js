$(document).ready(function () {

  $('.clear-formatting').on('click', function() {
    var example = $(this).parent().find('.example p')[0],
        exampleHTML = example.innerHTML;
    //console.log('Example HTML: ' + exampleHTML);

    exampleHTML  = exampleHTML.split('<i>').join('').split('</i>').join('');
    //console.log('Cleared HTML: ' + exampleHTML);
    example.innerHTML = exampleHTML;
  });

  $('.example-selection p').on('mouseup', function() {
    var selection = window.getSelection(),
        selected = selection.toString(),
        open = Math.min(selection.anchorOffset, selection.focusOffset),
        close = Math.max(selection.anchorOffset, selection.focusOffset),
        releaseTargetHTML = selection.focusNode.parentElement.innerHTML,
        parent = $(this),
        parentHTML = parent[0].innerHTML,
        replacedHTML;

    if (releaseTargetHTML === parentHTML && selected !== '') {
      // the selection can be italicized

      $(document).on('keydown', function(e) {
        if (e.which === 17) {
          $(document).on('keydown', function(e) {
            // in firefox, 'Ctrl + i' opens page info window
            // we want it prevented in this case
            e.preventDefault();
            if (e.which === 73) {
              var before = releaseTargetHTML.substr(0, open),
                  between = releaseTargetHTML.substr(open, close - open),
                  after = releaseTargetHTML.substr(close);

              replacedHTML = before + '<i>' + between + '</i>' + after;
              parent[0].innerHTML = replacedHTML;
            }
          });
        }
      });

    } else {
      // we ended up in the italicized part of the text
      // if we are completely in the part of the text enclosed with <i>
      // we can remove the <i> from that section, if we are not completel
      // within <i> element, then do nothing or rather inform user what to do


    }

  });

  $(document).on('mousedown', function() {
    $(document).off('keydown');
  });
});
