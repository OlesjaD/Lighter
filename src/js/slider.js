$('.slideshow').slick({
    touchMove: true,
    arrows: false, // не показувати стрілки
dots: true, // показувати точки індикатори
dotsClass: 'slick-dots', // назва класу для точок
});

$('.gallery__slider').slick({
    touchMove: true,
autoplay: true,
  autoplaySpeed: 3000,
    arrows: false, // не показувати стрілки
dots: false, // показувати точки індикатори
    dotsClass: 'slick-dots', // назва класу для точок
ade: true,
cssEase: 'linear',
});