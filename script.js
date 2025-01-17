const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[close-button]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < triggerOpen.length; i++) {
    let currentId = triggerOpen[i].dataset.target,
    targetEL = document.querySelector(`#${currentId}`)

    const openData = function() {
        targetEL.classList.remove('active');
        overlay.classList.remove('active');
    };
    triggerOpen[i].addEventListener('click', function() {
        targetEL.classList.add('active');
        overlay.classList.add('active');
    });

    targetEL.querySelector('[close-button]').addEventListener('click', openData)
    overlay.addEventListener('click', openData);
} 



//slider

const swiper = new Swiper('.sliderbox', {

    loop: true,
    effect: 'fade',
    autoHeight: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
});

//carousel
const carousel = new Swiper('.carouselbox', {

    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: true,

    // If we need pagination
    navigation: {
        nextEl: '.swiper-button-next',
        prevtEl: '.swiper-button-prev',
    },
    breakpoints: {
        481: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            centeredSlides: false,
        },
        640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            centeredSlides: false,
        },
        992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            centeredSlides: false,
        },
    }
  
});

//product image > page-single

const thumbImage = new Swiper ('.thumbnail-image', {
    // loop: true,
    direction: 'vertical',
    spaceBetween: 15,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
});


const mainImage = new Swiper('.main-imgaga', {

    loop: true,
    autoHeight: true,

    pagination: {
        el: 'swiper-pagination',
        clickable: true,
    },
    thumbs: {
        swiper: thumbImage,
    },
});

