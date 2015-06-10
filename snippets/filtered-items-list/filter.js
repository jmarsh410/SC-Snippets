// --------------------------------------------
// PRODUCTS/SHU SUGI/PROJECTS FILTER - INCLUDES SELECT DROPDOWN 
// --------------------------------------------
// THIS ONE IS SPECIFICALLY FOR ITEM LISTS
// packery is already loaded with plugins.js

$('.item-filter').each(function(index, elem) {
  var $elem = $(elem),
      targetClass = $elem.data('target'),
      $target,
      $container,
      $items;
  if (targetClass) {
    $target = $('.' + targetClass);
    if ($target.hasClass('itemsCollectionContent')) {
      $container = $target;
    } else {
      $container = $target.find('.itemsCollectionContent');
    }
    $items = $container.find('.item');
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
        $filtered.show(); // filtered is now a new array that contains all the items that passed the test, and we'd like to show
      } else {
        $items.show();
      }
      $container.data('packery').layout();
    });
  }
});

// JS FOR THE SELECT DROPDOWN
$('.item-select').each(function(index, elem){
    var $elem = $(elem),
        targetClass = $elem.data('target'),
        $target,
        $container,
        $items;
  if (targetClass) {
    $target = $('.' + targetClass);
    if ($target.hasClass('itemsCollectionContent')) {
      $container = $target;
    } else {
      $container = $target.find('.itemsCollectionContent');
    }
    $items = $container.find('.item');
  }
  $elem.change(function(e){
    var filter = e.target.value; // the value that the select just changed to
    if (filter !== 'All') { // checks whether the option has a value, otherwise it is "all" and should display all items
      var $filtered = $items.map(function(index, elem){
        var tags = $(elem).find('img').data('tags'); // array of tags on the image
        //  tags array exists, --- -----------------------and specific tag is in the array
        if (tags && typeof tags.indexOf === 'function' && tags.indexOf(filter) > -1) { 
          return elem;
        }
      });
      $items.hide(); // hide all items
      $filtered.show(); // filtered is now a new array that contains all the items that passed the test, and we'd like to show
    } else {
      $items.show();
    }
    $container.data('packery').layout();
  });
});