<script>
    import { Swiper, SwiperSlide } from "swiper/vue";

    import "swiper/css";

    import "swiper/css/pagination";

    // import required modules
    import { Autoplay, Pagination} from "swiper";

    export default {
        components: {
    Swiper,
    SwiperSlide,
},
        setup() {
            return {
            modules: [Autoplay, Pagination],
            };
        },
    };

</script>

<template>
    <swiper
        :slides-per-view="1"
        :allow-touch-move="false"
        :speed="3000"
        :autoplay="{
        delay: 4500,
        disableOnInteraction: false,
        }"
        :pagination="{
        clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide class="slide1"><h1>Crea tus recetas</h1></swiper-slide>
        <swiper-slide class="slide2"><h1>Comparte con quien quieras</h1></swiper-slide>
        <swiper-slide class="slide3"><h1>Disfruta y saborea</h1></swiper-slide>
    </swiper>
</template>

<style lang="scss" scoped>

    @mixin backgrounds($image, $bgSize, $bgPosition, $bgRepeat) {
        background-image: $image;
        background-size: $bgSize;
        background-position: $bgPosition;
        background-repeat: $bgRepeat;
    }

    @mixin fonts($fontFamily, $fontStyle, $fontWeight, $fontSize, $textAlign) {
        font-family: $fontFamily;
        font-style: $fontStyle;
        font-weight: $fontWeight;
        font-size: $fontSize;
        text-align: $textAlign;
    }
    .swiper-pointer-events{
        height:100%;
    }

    .swiper-horizontal{
        .swiper-wrapper{
            .swiper-slide{

                h1{
                    color: white;
                    @include fonts('lora', italic, none, 5.5rem, center);
                    //text-shadow: 4px 4px 1px rgba(249, 69, 142), 4px 4px 1px rgba(249, 69, 142);
                    text-shadow: 0px 4px 4px rgb(0 0 0 / 25%), 0px 4px 4px rgb(0 0 0 / 25%);
                }
            }

            .slide1{
                display: flex;
                justify-content: center;
                align-items: flex-start;
                @include backgrounds(url(../assets/img/sliderLogin1.jpg), cover, top, no-repeat);
                h1{
                    margin-top: 3rem;
                }
            }

            .slide2{
                display: flex;
                justify-content: center;
                align-items: center;
                @include backgrounds(url(../assets/img/sliderLogin2.jpg), cover, center, no-repeat);
                h1{
                    width: 40rem;
                }
            }

            .slide3{
                display: flex;
                justify-content: center;
                align-items: flex-end;
                @include backgrounds(url(../assets/img/sliderLogin4.jpg), cover, bottom, no-repeat);
                h1{
                    margin-bottom: 7.5rem;
                }
            }
        }
        .swiper-pagination-bullets{
            .swiper-pagination-bullet{
                background-color: #fff;
                width: 1.2rem;
                height: 1.2rem;
                border-radius: 50%;
                border: 2px solid #979797;
                opacity: 1;
                margin: 0 10px;
                padding: 0;
            }
            .swiper-pagination-bullet-active{
                border-color: #fff;
                background-color: rgb(249, 69, 142);
            }
        }
    }
</style>