// --------------------------------------------
// faux slideshow effect for blog posts
// --------------------------------------------
var startingPoint = 0;
var visiblePosts = 3;
var blogPosts = $('.block_c6395e68d5024bf1aebef2ea3dce4040 .item');

// show only 3 posts
function showThree(direction) {
  // pass in the jquery object for all the items. finds the next items and shows them
  function nextThree(blockItems) {
    var newBlockItems = blockItems.slice(startingPoint, startingPoint + visiblePosts);
    startingPoint += visiblePosts;
    return newBlockItems;  // returns jquery object of the next items that should be visible
  }
  // pass in the jquery object for all the items. finds the previous items and shows them
  function prevThree(blockItems) {
    var newBlockItems = blockItems.slice(startingPoint - visiblePosts*2, startingPoint - visiblePosts);
    startingPoint -= visiblePosts;
    return newBlockItems; // returns jquery object of the next items that should be visible
  }
  function showPagination(){
    if (startingPoint === visiblePosts) {
      $('.paginationButtons .prev').hide();
    } else {
      $('.paginationButtons .prev').show();
    }
    if (startingPoint >= blogPosts.length) {
      $('.paginationButtons .next').hide();
    } else {
      $('.paginationButtons .next').show();
    }
  }
  if (direction === 'next' && startingPoint < blogPosts.length) {
    $('.block_c6395e68d5024bf1aebef2ea3dce4040 .item').removeClass('showPost');
    nextThree(blogPosts).addClass('showPost');
    showPagination();
  } else if (direction === 'prev' && startingPoint > visiblePosts) {
    $('.block_c6395e68d5024bf1aebef2ea3dce4040 .item').removeClass('showPost');
    prevThree(blogPosts).addClass('showPost');
    showPagination();
  }
}

// create pagination buttons 
$('.blockWrap_c6395e68d5024bf1aebef2ea3dce4040').append('<div class="paginationButtons"><button class="prev">Previous</button><button class="next">More</button></div>');
//event listeners for the buttons
$('.paginationButtons .prev').click(function(e){
  e.preventDefault();
  showThree('prev');
});
$('.paginationButtons .next').click(function(e){
  e.preventDefault();
  showThree('next');
});

$(window).load(showThree('next'));