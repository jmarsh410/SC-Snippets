// custom design parameters
var FEATURES_CONFIG = [
  { // HOME PAGE
    pageId: '#page_cdaee0dddcc24af7b28ae04fcdbb10b0',
    customLayout: [
      { // text slider
        block: '.block_ab50f1bdd6d04f2b9db9b53d1e6a7ba9', classes: 'doubleBorderTop'
      },
      { // twitter items wrap
        block: '.items_c20430ce1e0842ca84fe3937587309e6', classes: 'doubleBorderBottom'
      }
    ]
  },
  { // LINE UP
    pageId: '#page_d818d455ad4c4959acf080841d5a259a',
    customLayout: [
      { // text slider
        block: '.block_e1fbd32ffa584b0ca28541ab402253ed .blockText', classes: 'doubleBorderBottom'
      },
      { // "announcing soon" artists
        block: '.blockWrap_b90224b92db64692882208dd737d36b2 li:contains("Announcing")', classes: 'announcing'
      },
      { // ticket button blockWrap
        block: '.blockWrap_b0434a00c3914d16987c642c17b5836a', classes: 'doubleBorderTop'
      }
    ]
  }
];
$.each(FEATURES_CONFIG, function(index, pageObj){
  if($(pageObj.pageId).length){
    // Content Titles
    if(pageObj.customLayout){
      $.each(pageObj.customLayout, function(index, title){
        $(title.block).addClass(title.classes);
      });
    }
    // break the loop, no need to check the rest
    return false;
  }
});