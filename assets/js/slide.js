 document.addEventListener('DOMContentLoaded', () =>{
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        loop: true, 
        autoplay: {
          delay: 3000,
        }, 
        breakpoints: {
          1024: {
            slidesPerView: 2,
          }
        },
        navigation: {
          nextEl: '.proximo-slide',
          prevEl: '.anterior-slide',
        }
      });
 });

  