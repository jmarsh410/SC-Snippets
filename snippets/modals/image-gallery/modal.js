// --------------------------------------------
// IMAGE GALLERY MODAL
// --------------------------------------------
//specify a page
if ($('#page_a4625bab8fe4441baf35765de7939db0').length) {
    
    // when you click a specific image, show the correlating video (by block ID)
    var triggers = [
        { triggerSlide: '.blockWrap_ed55836f9f5b448f95821f5a36796563 .item:nth-child(2)', target: 'c185e06d06a344d1812a38e31c746317' }, // 1 BR
        { triggerSlide: '.blockWrap_ed55836f9f5b448f95821f5a36796563 .item:nth-child(3)', target: 'db17fac863a0452c988be7ba3c9dcb52' }, // 2 BR
        { triggerSlide: '.blockWrap_ed55836f9f5b448f95821f5a36796563 .item:nth-child(4)', target: 'd1c63555884a4bcdb41ef8da2e5ba50c' }  // ALL OPTIONS
    ];
    $.each(triggers, function( k, v ) {
        
        // set up trigger and target blocks
        var triggerLink = $(v.triggerSlide);
        targetBox = $('.blockWrap_'+v.target);
        
        // build modal
        targetBox.addClass('modal modalOffset'); // this method does not initially hide the block - flexslider doesn't like it
        targetBox.appendTo('body');
        targetBox.find('.blockContent').prepend('<span class="closeModalBtn">X</div>');
        
        // display modal when trigger is clicked
        // wrapped in closure to save correct instance of the v.target
	    (function(v) {
	    	triggerLink.click(function(e) {
	            e.preventDefault();
	            // replaced targetBox with its actual value
	            $('.blockWrap_'+v.target).removeClass('modalOffset').fadeIn();
	        });
	    })(v);
        
        // Listen for document click to close non-modal dialog
        // also wrapped in closure, similar to above, in order to save the v.target correctly
	    (function(v) {
	    	$('.modal').on('click', function(e) {
	            var clicked = $(e.target); // get the element clicked
	            console.log(clicked.parents().is('.modal .blockContent'));
	            if (clicked.parents().is('.modal .blockContent')) {
	                if (clicked.is('.closeModalBtn')) {
	                	// replaced targetBox with its actual value
	                    $('.blockWrap_'+v.target).fadeOut();    
	                }
	                return; // click happended within the dialog, do nothing
	            } 
	            else { // click was outside the dialog, so close it.
	            	// replaced targetBox with its actual value
	                $('.blockWrap_'+v.target).fadeOut();
	            }
	        });
	    })(v);
    });
}