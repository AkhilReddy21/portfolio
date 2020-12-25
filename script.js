

$(document).ready(function () {
    'use strict';

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);
    var element = $(".text-affect");
    $(function () {
        element.typed({
            strings: ["Student", "Designer", "Developer"],
            loop: true,
            typeSpeed: 90
        });
    });
    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });

    $('.view').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function (element) {
                return element.find('img');
            }
        }
    });

    
    
    $("#collapsibleNavbar").click(function(){
    $("#collapsibleNavbar").hide();
  });
    $("#colnav").click(function(){
    $("#collapsibleNavbar").toggle();
  });

});