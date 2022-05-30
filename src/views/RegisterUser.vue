<template>
    <main>
        <aside class="photos">
            <SliderLoginRegister />
        </aside>
        <section>
            <header>
                <a id="goBackLanding" href="https://pitayapp.com">
                    <p>Volver al Inicio</p>
                </a>
            </header>
            <article>
                <img src="../assets/img/pitayappLogoPink.svg" alt="logo" class="logo">
                <div class="title">
                    <h2>Pitayapp</h2>
                </div>
                <form @submit.prevent="sendForm()">
                    <div class="alterMethods">
                        <RouterLink id="login" to="/login">Iniciar Sesión</RouterLink>
                        <RouterLink id="register" to="/register">Regístrate</RouterLink>
                    </div>
                    <input type="email" placeholder="Correo" v-model="email">
                    <div class="dataUser">
                        <!-- <input type="text" placeholder="Nombre" v-model="name">
                        <input type="text" placeholder="Apellido" v-model="surname"> -->
                    </div>
                    <input type="password" placeholder="Contraseña" v-model="password">
                    <input type="password" placeholder="Repetir contraseña" v-model="repeatPassword">
                    <a @click="forgot">¿Olvidaste tu contraseña?</a>
                    <div class="accessMethods">
                        <button id="access">
                            <p>Acceder</p>
                        </button>
                    </div>
                </form>
                <button id="accessGoogle" @click="registerWithgoogle">
                    <p>Registrarse con Google</p>
                    <Icon icon="ant-design:google-outlined" />
                </button>
                <RouterView></RouterView>
            </article>
            <FooterLoginRegister />
        </section>
    </main>
</template>

<script setup>

import { createUser } from "../services/crudUser";
import { ref } from "vue";
import { useRouter } from "vue-router";
import FooterLoginRegister from "../components/FooterLoginRegister.vue";
import SliderLoginRegister from "../components/SliderLoginRegister.vue";
import { Icon } from '@iconify/vue';
/* import { FooterLoginRegister } from "@components/FooterLoginRegister";
import { SliderLoginRegister } from "@components/SliderLoginRegister"; */

const email = ref('');
const password = ref('');
const repeatPassword = ref('');
const router = useRouter();

const sendForm = () => {
    if (password.value === repeatPassword.value) {
        createUser(email.value, password.value);
        router.push("/home");
    } else {
        alert("No son iguales.")
    }
}

</script>

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

main {
    background: white;
    width: 100vw;
    height: 100vh;
    display: flex;

    aside {
        width: 50%;
        height: 100%;
    }

    section {
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 100%;

        header {
            width: 100%;
            height: 7%;
            display: flex;
            justify-content: end;
            align-items: center;

            a {
                margin-right: 1rem;
                @include fonts('Nunito', normal, 700, 1.2rem, center);
                text-decoration: none;
                color: rgb(249, 69, 142);
                padding: 0.3rem 0.5rem;
                border: 2px solid rgb(249, 69, 142);
                border-radius: 1rem;
            }
        }

        article {
            width: 100%;
            height: 83%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .logo {
                width: 8rem;
                height: 8rem;
            }

            .title {
                h2 {
                    font-size: 2rem;
                    color: rgb(249, 69, 142);
                }
            }

            form {
                width: 25rem;
                height: 23rem;
                margin-top: 1.2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                .alterMethods {
                    margin-bottom: 0.5rem;
                    width: 100%;
                    height: 5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    #login {
                        width: 11rem;
                        height: 3rem;
                        font-size: 1.5rem;
                        text-decoration: none;
                        color: white;
                        padding: 1rem;
                        background-color: rgb(151, 151, 151);
                        border-radius: 1rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 0rem 0.4rem;
                    }

                    #register {
                        width: 11rem;
                        height: 3rem;
                        font-size: 1.5rem;
                        text-decoration: none;
                        color: white;
                        padding: 1rem;
                        background-color: rgb(249, 69, 142);
                        border-radius: 1rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 0rem 0.4rem;
                    }
                }

                input {
                    background-color: #f7f7f7;
                    border: none;
                    border-radius: 1rem;
                    width: 22.85rem;
                    height: 2.3rem;
                    padding: 1rem;
                    margin-bottom: 1.2rem;
                }

                .dataUser {
                    display: flex;
                    flex-direction: row;

                    input {
                        width: 11rem;
                        margin: 0rem 0.4rem 1.2rem 0.4rem;
                    }
                }

                .accessMethods {
                    margin-bottom: 0.5rem;
                    width: 100%;
                    height: 5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    #access {
                        border: none;
                        cursor: pointer;
                        width: 22.85rem;
                        height: 2.5rem;
                        font-size: 1.2rem;
                        text-decoration: none;
                        color: white;
                        padding: 1rem;
                        background-color: rgb(249, 69, 142);
                        border-radius: 1rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 0rem 0.4rem;
                    }
                }
            }

            #accessGoogle {
                cursor: pointer;
                width: 22.85rem;
                height: 2.5rem;
                font-size: 1rem;
                text-decoration: none;
                color: black;
                padding: 1rem;
                border-radius: 1rem;
                border: 2px #979797 solid;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0rem 0.4rem 2rem 0.4rem;

                p {
                    width: 11rem;
                }

                svg {
                    width: 1.8rem;
                    height: 1.8rem;
                    color: rgb(249, 69, 142)
                }
            }
        }
    }
}

@media (max-width: 1000px) {

    .router-view {
        justify-content: center;
        padding: 2rem;
        box-sizing: border-box;

        & .photos {
            display: none;
        }

        #register {
            filter: none !important;
        }
    }
}
</style>