! function () {
    const e = document.querySelector(".price-slider");
    let i;

    function s() {
        window.innerWidth <= 991 && "false" == e.dataset.mobile && (i = new Swiper(e, {
            slideClass: "swiper-slide",
            pagination: {
                el: ".swiper-pagination",
                clickable: !0
            },
            effect: "coverflow",
            loop: !0,
            centeredSlides: !0,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 0,
                stretch: 48.7,
                depth: 200,
                modifier: 1,
                slideShadows: !1
            },
            keyboard: {
                enabled: !0,
                onlyInViewport: !0
            },
            freeMode: !1,
            keyboard: {
                enabled: !0
            },
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                575: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                },
                991: {
                    slidesPerView: 4
                }
            }
        }), e.dataset.mobile = "true"), window.innerWidth > 991 && (e.dataset.mobile = "false", e.classList.contains("swiper-container-initialized") && i.destroy())
    }
    s(), window.addEventListener("resize", (() => {
        s()
    }))
}();
