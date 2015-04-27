# SC-Snippets
Collection of common/useful snippets for Spacecraft projects

1. [filtered Image Gallery](#filtered)

## Modals

The Modal takes a blockWrap and appends it to the body of the html document, then displays it when a specified item is clicked. Depending on the task, the modals may have to work differently. 

### Current methods:

1. Modal that houses video
2. Modal that houses an image gallery

#### Steps 

1. copy and paste the css and js into their respective places.
2. in the JS: specify the page this modal is for, change out the triggers and targets. trigger refers to the block that contains the item to be clicked. the target refers to the block that contains the modal content.

#### Troubleshooting

1. make sure you are using the correct css files. the image gallery modal has to work differently than other modals, because the block can't be hidden before Flexslider loads.

#### Live Examples

1. Video Modal
	- http://narrativeedge.com/work
2. Image Gallery Modal
	- http://levelokc.spacecrafted.com/the-space/level (click on floorplan items, will update once site is on their actual domain)

---

## Filtered Image Gallery<a name="filtered"></a>

An image gallery that allows user to filter which images they see based on a list of filter links.

#### Steps

1. Include css and js files in their respective places, replace example blockWrap classes with correct ones
```javascript
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
```
```css
/***********
ITEM FILTER - list of filter links
***********/
.item-filter {
  text-align: center; }
  .item-filter li {
    display: inline-block;
    font-family: "Salsa", Helvetica, sans-serif;
    text-transform: uppercase;
    color: #fff;
    padding: 0 2%;
    color: #efe9db;
    cursor: pointer;
    -webkit-transition: all .3s ease;
            transition: all .3s ease;
    font-size: 32px; }
    @media only screen and (max-width: 767px) {
      .item-filter li {
        display: block;
        font-size: 28px; } }
    .item-filter li:hover, .item-filter li.active {
      color: #ffa320; }

/***********
FULL WIDTH IMAGE GALLERY WITH CUSTOM CAPTION OVERLAYS
***********/
/* switch out .blockWrap class with correct one */
/* image gallery container */
.blockWrap_aba5e8c74bcf46bf9da8fda9e041921c {
  padding-left: 0;
  padding-right: 0;
}
/* target blockContent and remove container styles */
.fullBleed .noSecondaryContent .primaryAndSecondaryContent .blockWrap_aba5e8c74bcf46bf9da8fda9e041921c .blockContent {
  min-width: 100%;
  padding-left: 0;
  padding-right: 0; }
    .blockWrap_aba5e8c74bcf46bf9da8fda9e041921c .imgGridItem {
    position: relative; }
    /* custom caption hover effect */
    .blockWrap_aba5e8c74bcf46bf9da8fda9e041921c .imgGridItem:hover .customCaption  {
      opacity: 1;
      padding-top: 40%; }
    /* full width images*/
    .blockWrap_aba5e8c74bcf46bf9da8fda9e041921c .imgGridItem img {
      width: 100%; }
      /* custom caption styles */
    .blockWrap_aba5e8c74bcf46bf9da8fda9e041921c .imgGridItem .customCaption {
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      text-align: center;
      background: rgba(0, 0, 0, 0.55);
      opacity: 0;
      -webkit-transition: all .3s ease;
              transition: all .3s ease; }
      .blockWrap_aba5e8c74bcf46bf9da8fda9e041921c .imgGridItem .customCaption h2 {
        font-size: 28px;
        color: #efe9db;
        line-height: 1em;
        padding-bottom: 0; }
      .blockWrap_aba5e8c74bcf46bf9da8fda9e041921c .imgGridItem .customCaption p {
        color: #efe9db; }

```
2. Within Spacecraft tool, find the correct page and create a custom html block and include the filter-links.html inside
```
	<!-- change data-target to the block with the image gallery -->
	<ul class="item-filter" data-target="block_f9716438a8374925a93a61200bd62a38">
	    <li data-filter="Naan">Naan</li>
	    <li data-filter="Pizza">Pizza</li>
	    <li data-filter="Appetizers">Appetizers</li>
	    <li data-filter="Dessert">Dessert</li>
	    <li data-filter="Naan Crisp">Naan Crisp</li>
	    <li data-filter="All">All</li>
	</ul>
```
3. Create an image gallery block, and include the images for the gallery.
4. Add tags to your images that correspond to the "data-filter" attributes on the filter links, this is how the correct images will be displayed when one of the list items is clicked

#### Troubleshooting

- using an items list: this snippet could possibly be used on an items list as well as an image gallery. However, if the design uses a full-width layout, has the images touching, and needs smooth animated transitions, then it is better to just use an image gallery. The default packery settings on items lists are harder to work with than image galleries
- the css included here creates a full width container with the images flush against each other, remove styles as necessary if this isn't desired for your layout
- style the block as much as you can with the design tool before trying out more complicated solutions

#### Live Examples

1. http://loganandjohnson.com/projects
2. http://tribezaguides.com/dining (with dropdown)
3. http://stonefire.spacecrafted.com/recipes (will update once site is completely live)

---

## Full Page Rotating Background Images

Description

### Method 1 - Backstretch

#### Steps

1. step 1
2. step 2

### Method 2 - Backstretch

#### Steps

1. step 1
2. step 2

#### Troubleshooting

#### Live Examples

---

## Title

Description

#### Steps

1. step 1
2. step 2

#### Troubleshooting

#### Live Examples

