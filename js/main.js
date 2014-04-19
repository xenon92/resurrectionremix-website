jQuery(document).ready(function() {

	/* How to Handle Hashtags */
	jQuery(window).hashchange(function(){
		var hash = location.hash;
		jQuery('a[href='+hash+']').trigger('click');
	});

	/* Main Navigation Clicks */
	jQuery('.main-nav ul li a').click(function() {
		var link = jQuery(this).attr('href').substr(1);
		
		if ( !jQuery('section.content.show, section#' + link).is(':animated') ) {
			jQuery('.main-nav ul li a').removeClass('active'); //remove active
			jQuery('section').addClass('hide');
			jQuery('section').css('display','none');
			jQuery('section').removeClass('show').animate({'opacity' : 0}, {queue: false, duration: 1000,
				complete: function() {
					jQuery('a[href="#'+link+'"]').addClass('active'); // add active
					jQuery('section#' + link).removeClass('hide');
					jQuery('section#' + link).addClass('show').animate({'opacity' : 1}, {queue: false, duration: 1000});	
					jQuery('section#' + link).css('display','block');
				}
			});
		}
	});

});