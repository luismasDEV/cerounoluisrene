'use strict';
var menu_mobile = $('.js_menu_desktop_mobile'),
    menu_height = $('.js_caja___menu ').height();
var cerounoluisrene = (function ($) {

var  displayMenu = function(){
    $("#js_icono_menu, #js_icono_cerrar").on("click", function(e){
      e.preventDefault();
      $("body").toggleClass("nav-abierto nav-cerrado");
    });
  },
  margenTop = function(){
    $('.front').css('marginTop', menu_height);
    $('.cover-top').css('marginTop', menu_height);
  },
  politicaCookies = function(){

    if(localStorage.getItem('pc') == '01luisrene') {
      $('#js_barra_aceptacion_cookie').css('display', 'none');
    }else{
      $('#js_barra_aceptacion_cookie').css('display', 'block');
    }

    $('#js_btn_cookie').on('click', function(e) {
      e.preventDefault();
      localStorage.setItem('pc', '01luisrene');
      $('#js_barra_aceptacion_cookie').addClass('zoomOutDown')
      setTimeout(function(){
        $('#js_barra_aceptacion_cookie').css('display', 'none');
        console.log('Haz aceptado el uso de cookies en nuestra web 01luisrene.com ❤');
      }, 500);
    });

  },
  botonUp = function(){
    $(window).scroll(function(){
      if($(this).scrollTop() > 300){
        $("#js_up").slideDown(300);
      }else{
        $("#js_up").slideUp(300);
      }
    });
    $("#js_up").on('click', function (e) {
      e.preventDefault();
        $("body,html").animate({
        scrollTop: 0
      },1000);
      return false;
    });
  },
  scroll_abajo = function(){
    $('#scroll_top').arctic_scroll({
      speed: 800
    });
  },
 // 01luisrene javascripts initialization
  init = function () {
    displayMenu();
    margenTop();
    politicaCookies();
    botonUp();
    scroll_abajo();
  };

  return {
      init: init
  };

})(jQuery);

(function () {
    cerounoluisrene.init();
})();