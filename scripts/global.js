const CONTACT_LIST_FADE_TIME = 300;

$(document).ready (function() {

	$(window).scroll( function(){
            
            var bottom_of_object = $('#contact-list').offset().top + $('#contact-list').outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if(bottom_of_window > bottom_of_object && $('li','#contact-list').first().css('visibility') === 'hidden'){
				$('li','#contact-list').each(function(index){
					//in a queue because delay with css requires a queue
					$(this).delay(index*CONTACT_LIST_FADE_TIME).queue(function(next){
						$(this).css('visibility','visible').hide().fadeIn(CONTACT_LIST_FADE_TIME);
						next();
					});
				});     
			}
    
    });
    
});