(function($){
    'use strict';

$('.menu_icon i.bx-menu').on('click', function(){
    $('.header_menu').animate({left:0});
    $(this).hide();
    $('.menu_icon i.fa-xmark').show();
});

$('.menu_icon i.fa-xmark').on('click', function(){
    $('.header_menu').animate({left:-250});
    $(this).hide();
    $('.menu_icon i.bx-menu').show();
});


$('.header_menu a').on('click', function(){
    $('.header_menu a').removeClass('active');
    $(this).addClass('active');
});

$(window).scroll(function(){
    var distance = $(window).scrollTop();

    if( distance > 300 ){
        $('header').addClass('header');
    }
    else{
        $('header').removeClass('header');
    }
});


$('.about_button button').on('click', function(){
    $('span.hidden_content').toggle();
});

})(jQuery);

function validation(){
	var userName = document.getElementById('username'),
	 	userEmail = document.getElementById('usermail');

	// Name
	if ( userName.value == '' ) {
		document.getElementById('user-error').innerHTML = 'Please Enter Your Name';
		return false;
	}
	else{
		document.getElementById('user-error').innerHTML = '';
	}
	//email
	if ( userEmail.value == '' ) {
		document.getElementById('email-error').innerHTML = 'Please Enter Your Name';
		return false;
	}
	else{
		document.getElementById('email-error').innerHTML = '';
	}
}