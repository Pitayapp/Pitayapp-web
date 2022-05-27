<script setup>
/* import { RouterLink } from 'vue-router' */
    import { Icon } from '@iconify/vue'
</script>

<template>
    <footer>
        <div class="socialMedia">
            <a class="insta" href="https://www.instagram.com/" target="_blank"><Icon icon="akar-icons:instagram-fill" /></a>
            <a class="facebk" href="https://www.facebook.com/" target="_blank"><Icon icon="entypo-social:facebook" /></a>
            <a class="twitter" href="https://twitter.com/?lang=es" target="_blank"><Icon icon="fa6-brands:twitter-square" /></a>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    footer{
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;

        .socialMedia{
            width: 30%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .insta svg{
                margin: 0rem 1rem;
                width: 3.1rem;
                height: 3.1rem;
                color: rgb(249, 69, 142)
            }

            .facebk svg{
                margin: 0rem 1rem;
                width: 2.945rem;
                height: 2.945rem;
                color: rgb(249, 69, 142)
            }

            .twitter svg{
                margin: 0rem 1rem;
                width: 3rem;
                height: 3rem;
                color: rgb(249, 69, 142)
            }
        }
    }
</style>