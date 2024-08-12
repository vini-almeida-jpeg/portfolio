//LP/Email Swiperr//
var swiper = new Swiper(".lp-swiper", {
    slidesPerView: 2,
    spaceBetween: 15, 
    freeMode:true,
    grabCursor: 'true',

    breakpoints:{
        0: {
            slidesPerView: 1, freeMode:'true', 
        },

        780: {spaceBetween:15, slidesPerView: 2, freeMode:'true', 
        },

    },

});

//Ebook Swiper//

var swiper = new Swiper(".ebooks-swiper", {
    slidesPerView: 3,
    spaceBetween: 15, 
    freeMode:true,
    grabCursor: 'true',

    breakpoints:{
        0: {
            slidesPerView: 1, freeMode:'true', 
        },

        780: {slidesPerView: 2, freeMode:'true', 
        },

        1080: {slidesPerView:3, freeMode:'true',
        },
    },

});




//KV Ads Swiperr//

var swiper = new Swiper(".kv-ads-swiper", {
    slidesPerView: 3,
    spaceBetween: 15, 
    freeMode:true,
    grabCursor: 'true',

    breakpoints:{
        0: {
            slidesPerView: 1, freeMode:'true', 
        },

        580: {spaceBetween:15, slidesPerView: 2, freeMode:'true', 
        },

        960: {slidesPerView:3, slidesPerGroup: 2, 
        },
    },

});

//KV Social Media Swiper//

var swiper = new Swiper(".kv-sm-swiper", {
    slidesPerView: 3,
    spaceBetween: 15, 
    freeMode:true,
    grabCursor: 'true',

    breakpoints:{
        0: {
            slidesPerView: 1, freeMode:'true', 
        },

        580: {spaceBetween:15, slidesPerView: 2, freeMode:'true', 
        },

        960: {slidesPerView:4, freeMode:'true',
        },
    },

});