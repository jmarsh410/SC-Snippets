if ($('.no-touch').length) {
  // ------------- Background image rotator (run on every page) -------------- //
  var CDN = document.location.protocol === 'https:' ? '//920512eef22eaab18eb0-5aef44fe247db5d2b3ddb5887a1f4f98.ssl.cf2.rackcdn.com' : '//2590e8c38e458d776581-5aef44fe247db5d2b3ddb5887a1f4f98.r44.cf2.rackcdn.com';
  var bgImgs = [
    '/703b0762487e4244b1bc62a0e1bd0ad9.jpg', // home
    '/c75a0adf944443aab5cda08e6fde0d03.jpg', // food & drink
    '/e7d31d32bf4448e29fd82c1fc23bf880.jpg', // reservation 
    '/68b2d5655eff4d9f864ee3e712607a03.jpg', // hours
    '/3fa5504b9edc4c109cd062c135be8157.jpg', // story
    '/5af3307a9d764aac88a4201363d70fcd.jpg', //dessert
    '/5ad455727ed840358ab9757bd3c11109.jpg', // team
    '/aa75ce7a51c74618b1ebf00019306176.jpg', // local
    '/9a9a3c832ba444b885a038100522b5b7.jpg', // gift cards 
    '/cfbcb4bf9eea4728b665671bc46a9ad8.jpg', // contact
    '/d390921ccedc4c3cbb0f4f980be9b5d5.jpg', //tacos 
    '/f60081844cd447c7a36f3c83f334c98f.jpg', //fish
    '/28c8a670549747fcb28d9358ba34cb48.jpg', //bread
    '/9d5cc4f4aa394ac2849ed5e226048e0d.jpg', //sandwich
    '/a7fa2865deca483db963c92c59977458.jpg' //plated food
  ];
  
  function bgSlideshow(){
    var killBgEnd = /\)$/i,
        startImg = $('html').css('background-image').replace(killBgEnd, ''),
        lastSlash = startImg.lastIndexOf('/'),
        fileName = startImg.substring(lastSlash),
        bgImgPos = 0,
        imgIndex = $.inArray(fileName, bgImgs);
    
    if(imgIndex > -1){
      bgImgPos = imgIndex;
    }
  
    var advance = function(){
      bgImgPos ++;
      if(bgImgPos > bgImgs.length - 1){
        bgImgPos = 0
      }
      $('html').css('background-image', 'url('+CDN+bgImgs[bgImgPos]+')');
    };
  
    var bgSlideshow = setInterval(advance, 8000);
  }
  function preloadBgSlideshowImages(){
    var count = bgImgs.length;
    $.each(bgImgs, function(index, imgPath){
  
      // correct way:
      var image = new Image();
      image.onload = function(){
        count--;
        if(count === 0){
          bgSlideshow();
        }
      };
      image.src = CDN + imgPath;      
    });
  }
  preloadBgSlideshowImages();
}