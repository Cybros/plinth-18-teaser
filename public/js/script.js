

			$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var homeHeight = $('#home').height() -22;
    console.log(homeHeight,scroll);
    if(scroll > homeHeight){
        $('.nav-item a').css('color','black');
        $('.nav-link').css('color','black');
        $('.nav').addClass("hidden");
    }
    else {
			$('.nav-item a').css('color','white');
			$('.nav-link').css('color','white');
      $('.nav').removeClass("hidden");
    } 

    // for logo    
    
});

// Smooth page scrooling

$(".page_scroll").click(function(){

  if (this.hash !== "") {

    event.preventDefault();

   
    var hash = this.hash;

  
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
 
   
      window.location.hash = hash;
    });
  }
    })


// Carouel script

           
