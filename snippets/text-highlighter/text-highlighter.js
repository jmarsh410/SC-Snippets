// --------------------------------------------
// TEXT HIGHLIGHTER
// --------------------------------------------

// for a single use
var needHighlighted = /artificial/gi; // a regexp or myString
var targetBlock = $('.blockWrap_Dvr72GNi9HqyETvb'); // specify block with contents you'd like replaced
var htmlString = targetBlock.html(); // returns string of your block's html content
var newString = htmlString.replace(needHighlighted, '<b>$&</b>' ); // returns new string with all matches replaced
targetBlock.html(newString); // replace targetBlock's html with your new html

// for multiple uses throughout site
var replacers = [
  {
    hightlightPage: $('.page_ff30d7bfac494744bd1f93b5dd9fc17e_items'),
    needHighlighted: 'No Artificial Preservatives or Artificial Flavors', // your regexp or string you want to replace
    targets: $('.blockWrap_Dvr72GNi9HqyETvb'), // block that contains string(s) you'd like replaced
    replaceWith: '<b>$&</b>' // replace matched text with this text. this example wraps the whole match (signified by $&) in <b> tags
  },
  {
    hightlightPage: $('.page_b40ba280ebf241008ad6dcf3a78ffece_items'),
    needHighlighted: /^[\S]+\s/i, // your regexp or string you want to replace
    targets: $('.blockWrap_9rzJa7hXsEUp0EYT .blockText > ul li'), // block that contains string(s) you'd like replaced
    replaceWith: '<b>$&</b>' // replace matched text with this text. this example wraps the whole match (signified by $&) in <b> tags
  },
];
$(replacers).each(function(i, el){
  if (el.hightlightPage.length) {
    el.targets.each(function(x, xel){
      var $xel = $(xel); // make xel a jquery object
      var newString = $xel.html().replace(el.needHighlighted, el.replaceWith); // take the block's html, replace the matches
      $xel.html(newString); // replace the current html, with your new html with matches replaced
    });
  }
});

