(function(){

	console.log('Js start!');

	$('.btn').on('click', function(event) {
		var CenterDiv =$('.center');
		maskLayer.show(CenterDiv);
	});

	$('.widget-mask-layer').on('click',function(event){
		var CenterDiv =$('.center');
		maskLayer.hide(CenterDiv);
		
	});
	// $('.center').on('click', function(event) {
	// 	var CenterDiv =$('.center');

	// 	maskLayer.hide(CenterDiv);
	// });

})();
