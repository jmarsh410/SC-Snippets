// --------------------------------------------
// QUICK APPEND - quickly appends/prepends items to different containers
// --------------------------------------------
var moverArray = [
	{ // footer
		destination: '.footerContainer',
		prepend: false, // if prepending, put items in reverse order
		items: [
			'.blockWrap_a77cc701aaf444db919c15fab94767be',
			'.blockWrap_d6743d69b10143678f2a1f7e55431f90'
		] 
	}
]
function moveItems(moverObj){
	$.each(moverObj.items, function(i, item){
		item = $(item);
		if (moverObj.prepend) {
			$(moverObj.destination).prepend(item);
		} else {
			$(moverObj.destination).append(item);
		}
	});
}
$.each(moverArray, function(i, moverObj){
	moveItems(moverObj);
});