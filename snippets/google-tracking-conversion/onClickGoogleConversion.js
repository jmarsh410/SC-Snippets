// add onclick attribute to ticket images for google conversion
// this is specifically for images

if ($('.page_f6339aaaf0c044b1b4d4086a8f7df3a5').length) {
	// go over every one of the images you want
  $('.imgGridItem a img').each(function(i, el){
    var $el = $(el);
    // find the correct href - in this case, from it's parent anchor tag
    var conversionUrl = $el.parent().attr('href');
    // give the image the onClick attribute, and feed it the script given by google.
    // goog_report_conversion's argument should be the href the user is going to visit
    $el.attr('onClick', 'goog_report_conversion(' + conversionUrl + ')');
  });
}