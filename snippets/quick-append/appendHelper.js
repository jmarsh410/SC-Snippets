// --------------------------------------------
// QUICK APPEND - quickly appends/prepends items to different containers
// --------------------------------------------
var movers = [
	{ // footer
		destination: '.footerContainer',
		prepend: true, // if prepending, make sure your items are in reverse order
		items: [
			'.blockWrap_a77cc701aaf444db919c15fab94767be',
			'.blockWrap_d6743d69b10143678f2a1f7e55431f90'
		] 
	}
]
function moveItems(mover){
	$.each(mover.items, function(i, item){
		item = $(item);
		if (mover.prepend) {
			$(mover.destination).prepend(item);
		} else {
			$(mover.destination).append(item);
		}
	});
}
$.each(movers, function(i, mover){
	moveItems(mover);
});