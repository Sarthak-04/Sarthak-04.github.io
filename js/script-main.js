// Skills progressbar animation

$(function() {
  	function loadProgressBars() {
        $('.progress-bar').each(function() {
            var bar_value = $(this).attr('aria-valuenow') + '%';                
    		$(this).animate({ width: bar_value }, { duration: 1000, easing: 'easeOutCirc' });
        });
    }

	$(document).bind('scroll', function(ev) {
	    var scrollOffset = $(document).scrollTop();
	    var containerOffset = $('#skills').offset().top - window.innerHeight;
	    if (scrollOffset > containerOffset) {
        	loadProgressBars();
        	// unbind event not to load scrolsl again
        	$(document).unbind('scroll');
    	}
    });

    $(".nav-list-item").on("click", function () {
        $('.navbar-toggle').click()
        //$('.navbar-collapse').collapse('hide');
    });

});

function hoverAbtImage(element) {
	element.setAttribute('src', 'static/card_cart.jpg')
}

function unhoverAbtImage(element) {
	element.setAttribute('src', 'static/card_img1.jpg')
}

 $('.flip').click(function(){
        $(this).find('.card').toggleClass('flipped');
 });