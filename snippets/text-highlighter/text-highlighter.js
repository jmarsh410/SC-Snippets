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
    needHighlighted: /(artificial)/gi, // your regexp or string you want to replace
    targetBlock: $('.blockWrap_Dvr72GNi9HqyETvb'), // block that contains string(s) you'd like replaced
    replaceWith: '<b>$&</b>' // replace matched text with this text. this example wraps the whole match (signified by $&) in <b> tags
  },
  {
    needHighlighted: 'Preservatives', // your regexp or string you want to replace
    targetBlock: $('.blockWrap_Dvr72GNi9HqyETvb'), // block that contains string(s) you'd like replaced
    replaceWith: '<i>$&</i>' // replace matched text with this text. this example wraps the whole match (signified by $&) in <i> tags
  },
];
$(replacers).each(function(i, el){
  var newString = el.targetBlock.html().replace(el.needHighlighted, el.replaceWith);// take the block's html, replace the matches
  el.targetBlock.html(newString); // replace the current html, with your new html with matches replaced
});