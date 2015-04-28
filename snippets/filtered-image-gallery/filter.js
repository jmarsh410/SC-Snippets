// --------------------------------------------
// RECIPES FILTER
// --------------------------------------------
// ONLY WORKS ON IMAGE GALLERY
// IMAGE GALLERY HAS DEFAULT PACKERY OPTIONS/SETTINGS THAT WORK BEST FOR THIS
// packery is already loaded with plugins.js

$('.block_f9716438a8374925a93a61200bd62a38').scCaptions(); // turns on captions, if needed

$('.item-filter').each(function(index, elem) {
  var $elem = $(elem),
      targetClass = $elem.data('target'),
      $target,
      $container,
      $items;
  if (targetClass) {
    $target = $('.' + targetClass);
    if ($target.hasClass('galleryWrapper')) {
      $container = $target;
    } else {
      $container = $target.find('.galleryWrapper');
    }
    $items = $container.find('.imgGridItem');
  }
  if ($items && $items.length) {
    var $filters = $elem.find('li').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var $filter = $(this),
          filter;
      if (!$filter.hasClass('active')) {
        $filters.removeClass('active');
        $filter.addClass('active');
      }
      filter = $filter.data('filter');
      if (filter) {
        var $filtered = $items.map(function(index, elem) {          
          var tags = $(elem).find('img').data('tags'); // array of tags on the image
          //  tags array exists, --- -----------------------and specific tag is in the array
          if (tags && typeof tags.indexOf === 'function' && tags.indexOf(filter) > -1) { 
            return elem;
          }
        });
        $items.hide(); // hide all items
        $filtered.show(); // filtered is now a new array that contains all the images that passed the test, and we'd like to show
      } else {
        $items.show();
      }
      $container.data('packery').layout();
    });
  }
});