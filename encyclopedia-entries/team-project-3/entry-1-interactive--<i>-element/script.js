$(document).ready(function () {

  $('.clear-formatting').on('click', function() {
    clearFormatting();
  });

  function clearFormatting() {
    var example = $('.example-selection p')[0],
        exampleHTML = example.innerHTML;
    // strip "<i>" tags from example paragraph
    example.innerHTML = exampleHTML.split('<i>').join('').split('</i>').join('');
  }

  $('.example-selection p').on('mouseup', function() {
    var selection = window.getSelection(), // selection object
        selected = selection.toString(), // text that user selects
        anchorNode = selection.anchorNode, // node where the selection starts
        focusNode = selection.focusNode, // node where selection ends
        parentNode = anchorNode.parentNode, // parent node for selection nodes
        childNodes = parentNode.childNodes, // child nodes of parent node
        open = Math.min(selection.anchorOffset, selection.focusOffset), // index where selection starts
        close = Math.max(selection.anchorOffset, selection.focusOffset), // index where selection ends
        nodeContent = anchorNode.textContent; // text content of the node where selection is located

    if ( anchorNode === focusNode && parentNode.nodeName !== 'I' ) {
    // if the selection is inside one node and node is not <i> element
      if ( selected !== '' ) {
        // if the selection is not empty

        $(document).on('keydown', function(e) {
          if (e.which === 17) {
          // if pressed "Ctrl"
            $(document).on('keydown', function(e) {
            // in firefox, 'Ctrl + i' opens page info window
            // we want it prevented in this case
              e.preventDefault();
              if (e.which === 73) {
              // if pressed "i" while holding "Ctrl"
                var before = nodeContent.substr(0, open), // content before selection
                    between = nodeContent.substr(open, close - open), // selected content
                    after = nodeContent.substr(close), // content after selection
                    newHTML = '', // new HTML for parent element
                    numChild = childNodes.length; // number of child nodes

                for (var i = 0; i < numChild; i++) {
                // cycle through child nodes
                  if ( childNodes[i] === anchorNode ) {
                  // when we get to the node containing the selection
                  // modify the content to enclose the selection with "<i>" tags
                    newHTML = newHTML + before + '<i>' +  between + '</i>' + after;
                  } else if ( childNodes[i].nodeName === 'I' ) {
                  // if a node is already an "<i>" tag, just leave it
                  // the text content still must be wrapped with "<i>" tags
                    newHTML = newHTML + '<i>' + childNodes[i].textContent + '</i>';
                  } else {
                  // if none of the above, just append content of the node to newHTML
                    newHTML = newHTML + childNodes[i].textContent;
                  }
                }
                // finally, replace HTML content of the parent node
                parentNode.innerHTML = newHTML;
              }
            }); // End "keydown" for "i"

            // When "Ctrl" is released remove keydown handlers
            $(document).on('keyup', function(e) {
              if ( e.which === 17 ) {
              // remove all "keydown" events
              // we want "Ctrl + i" to work only when user holds "Ctrl" pressed
                $(document).off('keydown');
              }
            }); // End "keyup" for "Ctrl"
          }
        }); // End "keydown" event for "Ctrl"

      } // End if ( selected !== '' )
    } // End "( anchorNode === focusNode && parentNode.nodeName !== 'I' )"

  }); // End "mouseup" event

});
