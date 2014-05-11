(function ($) {
    'use strict';

    $('a').tooltip();

    $(".fitname").fitText(1.2, { minFontSize: '18px', maxFontSize: '36px' });

	
	/*
	var container = document.querySelector('#container');
	var msnry = new Masonry( container, {
	  itemSelector: '.item',
	  columnWidth: container.querySelector('.grid-sizer')
	});
	*/


	$(window).load(function(){

		$('.masonry').masonry({
			columnWidth: '.grid-sizer',
			gutter: '.gutter-sizer',
			itemSelector: '.item'
		});

	});

    
}(jQuery));