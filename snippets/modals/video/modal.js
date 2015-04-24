// --------------------------------------------
// VIDEO MODAL
// --------------------------------------------
if ($('#page_e50f89b2d4124690b7c6f96547abdde6').length) {
    // when you click a specific image, show the correlating video (by block ID)
    var triggers = [
        { trigger: 'a017a84043dd456abe925515eaf27fbe', target: 'ba64cfca9c2449c5b9a4128f1f2402ce' }, // Build a Sign
        { trigger: 'aac6116e38634e889243fed69caeb22d', target: 'b62a2a4105c04ca3bfbcf7f539704e5a' }, // Industry Insight
        { trigger: 'ee1f693f90bb4f259876905b8aaa98e2', target: 'b7f5aeba7fc3414e9a7f629b86b977eb' }, // Pflugerville 130
        { trigger: 'a3fccde0684e49a896ff342b0d683e95', target: 'f4e8cd203eaa407fb5793d1778d013ab' }, // CEO Insight
        
    ];
    $.each(triggers, function( k, v ) {
        
        // set up trigger and target blocks
        var triggerLink = $('.blockWrap_'+v.trigger).find('.imgGridItem a'),
        targetBox = $('.blockWrap_'+v.target);
        
        // add class for play button 
        triggerLink.append('<img class="triggerButton" src="$d7e04800ff7f490abe5731063708058c$" />'); // adds a play button image onto link
        
        // build modal
        targetBox.addClass('modal').hide();
        targetBox.appendTo('body');
        targetBox.find('iframe').wrap('<div class="fluid-width-video-wrapper"></div>');
        targetBox.find('.blockContent').prepend('<span class="closeModalBtn"></div>');
        
        // display modal when trigger is clicked
        triggerLink.click(function(e) {
            e.preventDefault();
            targetBox.fadeIn();
        });
        
        // Listen for document click to close non-modal dialog
        $('.modal').on('click', function(e) {
            var clicked = $(e.target); // get the element clicked
            if (clicked.is('.modal .blockImg')) {
                if (clicked.is('.closeModalBtn')) {
                    targetBox.fadeOut();    
                }
                return; // click happended within the dialog, do nothing
            } 
            else { // click was outside the dialog, so close it.
                targetBox.fadeOut();
            }
        });
    });
}

