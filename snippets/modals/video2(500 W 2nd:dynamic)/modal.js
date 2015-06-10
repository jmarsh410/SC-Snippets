/**********
HOME VIDEO PLAYER
**********/
// creates video dynamically
// modals with vimeo vids tend not to work unless implemented this way

var VIMEO_IFRAME_TEMPLATE = '<iframe frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';

// BUILD VIDEO
var hpVideoPlayer = {};
function buildVideo(){
    $('.blockWrap_fee2514c0b8b4d518ca4830901639824').addClass('hasFixedChild');
    $vidTrigger = $('<a class="playButton" href="https://player.vimeo.com/video/129608017"><img src="$b50335676ae54f88b1bf3aea7f6b7ce2$"></a>').insertAfter($('.blockWrap_fee2514c0b8b4d518ca4830901639824 .blockContent .blockImg img'));
    $vidTrigger.on('click', showVideo);
    var $hpVid = $('<div id="hpVid" class="modal"><div id="hpVidWrap" class="fluid-width-video-wrapper"></div><a href="#0" class="closeModalBtn icon-plus-circled"></a></div>').prependTo('.siteInnerWrapper').hide();
    $hpVid.find('.closeModalBtn').on('click', hideVideo);
    var $hpVidFrame = $(VIMEO_IFRAME_TEMPLATE).attr('id','hpVidFrame').prependTo($hpVid.find('#hpVidWrap'));
    $('body').on('keyup.vidClose', function(e){ // bind esc too
        var keyCode = e.which || e.keyCode;
        if(keyCode===27){
            hideVideo(e);
        }
    });    
}

function videoLoaded(e){
    console.log('video loaded');
    var frame = e.currentTarget;
    if(Froogaloop) {
        hpVideoPlayer = $f(frame);
        hpVideoPlayer.addEvent('ready',function(){
            hpVideoPlayer.api('play');
        });
    }
}

function showVideo(e){
    e.preventDefault();
    var href = e.currentTarget.href + '?api=1&player_id=hpVidFrame',
        $hpVid = $('#hpVid'),
        vidFrame = $hpVid.find('iframe')[0];
    if(vidFrame.src === href) { // same video, resume playback
        if(Froogaloop && hpVideoPlayer.api) hpVideoPlayer.api('play');
    } else { // tee up the next one
        $(vidFrame).on('load', videoLoaded);
        vidFrame.src = href;
    }
    $hpVid.show();
    // $('.pageContainer').hide();
}

function hideVideo(e){
    e.preventDefault();
    if(Froogaloop && hpVideoPlayer.api) hpVideoPlayer.api('pause');
    $('#hpVid').hide().find('iframe').off('load');
    // $('.pageContainer').show();
}

// INITIALIZATIONS
$(function(){
    // If home page, load Vimeo Script and execute video functions
    if($('#page_caae1acbfa2945bb861ba0e8b94c795c').length){
        $.getScript('http://a.vimeocdn.com/js/froogaloop2.min.js');
        buildVideo();
    } 
}); 