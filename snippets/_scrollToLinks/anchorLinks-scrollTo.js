/*****************
ANCHOR LINKS
*****************/
function createAnchor(link, container) {
	link.click(function(e){
		var offset = container.offset().top,
			navHeight = $('.headerAndNavContentInner').height();
		$('html, body').animate({scrollTop: offset - navHeight}, 1000);
	});
}

var anchorLinks = [
	{ link: '.blockWrap_e1dab238845a4571a05b2bec2a531763 em:nth-child(1)', container: '.items_dddefb5368744e408a7cb98ffa7dbd38 .item:nth-child(1)' },
	{ link: '.blockWrap_e1dab238845a4571a05b2bec2a531763 em:nth-child(2)', container: '.items_dddefb5368744e408a7cb98ffa7dbd38 .item:nth-child(2)' },
	{ link: '.blockWrap_e1dab238845a4571a05b2bec2a531763 em:nth-child(3)', container: '.items_dddefb5368744e408a7cb98ffa7dbd38 .item:nth-child(6)' },
	{ link: '.blockWrap_e1dab238845a4571a05b2bec2a531763 em:nth-child(4)', container: '.items_dddefb5368744e408a7cb98ffa7dbd38 .item:nth-child(7)' },
	{ link: '.blockWrap_e1dab238845a4571a05b2bec2a531763 em:nth-child(5)', container: '.items_dddefb5368744e408a7cb98ffa7dbd38 .item:nth-child(8)' },
	{ link: '.blockWrap_e1dab238845a4571a05b2bec2a531763 em:nth-child(6)', container: '.items_dddefb5368744e408a7cb98ffa7dbd38 .item:nth-child(9)' }
];

$.each(anchorLinks, function(i, el){
	var $link = $(el.link),
		$container = $(el.container);
	createAnchor($link, $container);
});