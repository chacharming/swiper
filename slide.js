window.onload = function(){
    const swiper_mbanner = new Swiper('#banner.swiper', {
        // Optional parameters
        loop: true,

        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
          },
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });
}