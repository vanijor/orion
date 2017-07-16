$('.owl-carousel').owlCarousel({
	singleItem: true,
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        }
    }
});
$("ul.navbar-nav > li > a").on('click', function(event){
	event.preventDefault();
	$("html, body").animate({scrollTop:$(this.hash).offset().top}, 1200);
});

