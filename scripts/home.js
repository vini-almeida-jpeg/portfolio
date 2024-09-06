//LP/Email Swiperr//
    var swiper = new Swiper(".lp-swiper", {
        slidesPerView: 2,
        spaceBetween: 15, 
        freeMode:true,
        grabCursor: 'true',

        breakpoints:{
            0: {
                slidesPerView: 1, freeMode:'true', loop: true,
            },

            780: {spaceBetween:15, slidesPerView: 2, freeMode:'true', loop: false,
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
            slidesPerView: 1, freeMode:'true', loop: true,
        },

        780: {slidesPerView: 2, freeMode:'true', loop: false,
        },

        1080: {slidesPerView:3, freeMode:'true', loop: false,
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
            slidesPerView: 1, slidesPerGroup: 1, freeMode:'true', loop: true,
        },

        580: {spaceBetween:15, slidesPerView: 2, freeMode:'true', loop: false,
        },

        960: {slidesPerView:3, slidesPerGroup: 2, loop: false,
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
            slidesPerView: 1, freeMode:'true', loop: true, 
        },

        580: {spaceBetween:15, slidesPerView: 2, freeMode:'true', loop: true,
        },

        960: {slidesPerView:4, freeMode:'true', loop: false,
        },
    },

});