document.addEventListener('DOMContentLoaded', function () {

  /* NAVBARBURGUER*/
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }




}); //ENDDOM


$(document).ready(function(){

  $(window).hashchange();

/* MENUSCROLL */
  $('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
      $('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
			var target = this.hash;
			var $target = $(target);

			$('html, body').animate({
				'scrollTop': $target.offset().top-60
			}, 400, 'swing');
		});



    $('[data-modal]').click(function(){
      var open = $(this).attr('data-modal');
      $(open).addClass('is-active');
      $('.carousel').slick();
    });
    $('.modal-close').click(function(){
      $(this).closest('.modal').removeClass('is-active');
      $('.carousel').slick('unslick');
    });




});


$(window).hashchange( function(){
  var hash = location.hash;
  if(hash.includes("#proyecto-")){
    $('.proyectosmap').hide();
    $(location.hash).show();
    $('.slick-slider').slick();
  }
})
