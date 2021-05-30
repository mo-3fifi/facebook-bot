//header

$(document).ready(function () {
    $('.menu-switcher').click(function () {

        $('nav').toggleClass('active')

    })

});

// slider

var swiper = new Swiper('.header--slider', {
    pagination: {
        el: '.swiper-pagination',
    },
});

//
var swiper = new Swiper('.testimonials--slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

