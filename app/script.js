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
});
