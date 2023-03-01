<div class="grid">
    <div class="row">


<div class="main_wipe col l-12 m-12 c-6 grid">
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="componant/main_banner/assets/images/banner/1.svg" alt="banner 1">
                    </div>
                    <div class="swiper-slide">
                        <img src="componant/main_banner/assets/images/banner/2.svg" alt="banner 2">
                    </div>
                    <div class="swiper-slide">
                        <img src="componant/main_banner/assets/images/banner/3.svg" alt="banner 3">
                    </div>
                    <div class="swiper-slide">
                        <img src="componant/main_banner/assets/images/banner/4.svg" alt="banner 4">
                    </div>
                    <div class="swiper-slide">
                        <img src="componant/main_banner/assets/images/banner/5.svg" alt="banner 5">
                    </div>
                    <div class="swiper-slide">
                        <img src="componant/main_banner/assets/images/banner/6.svg" alt="banner 6">
                    </div>
                    
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
                <div class="autoplay-progress">
                    <svg viewBox="0 0 48 48">
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span></span>
                </div>
            </div>
</div>

</div>
</div>
<!-- ///////////////////////////// -->


<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
    <!-- Initialize Swiper -->
    <script>
        const progressCircle = document.querySelector(".autoplay-progress svg");
        const progressContent = document.querySelector(".autoplay-progress span");
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            on: {
                autoplayTimeLeft(s, time, progress) {
                    progressCircle.style.setProperty("--progress", 1 - progress);
                    progressContent.textContent = `${Math.ceil(time / 1000)}s`;
                }
            }
        });
    </script>