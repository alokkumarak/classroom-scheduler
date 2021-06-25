$(document).ready(function(){
	$('.menu-toggler').on('click',function(){
	    $(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});
	$('.top-nav .nav-link').on('click',function(){
	    $('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});


	function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"..":str;
    }
	
	
});

