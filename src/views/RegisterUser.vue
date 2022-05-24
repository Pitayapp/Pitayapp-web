<template>
    <main>
        <aside class="photos">
            <SliderLoginRegister/>
        </aside>
        <section>
            <header>
                <a id="goBackLanding" href="https://pitayapp.com"><p>Volver al Inicio</p></a>
            </header>
            <article>
                <img src="../assets/img/pitayappLogoPink.svg" alt="logo" class="logo">
                <div class="title">
                    <h2>Pitayapp</h2>
                </div>
                <nav class="form">
                    <div class="alterMethods">
                        <RouterLink id="login" to="/login">Iniciar Sesión</RouterLink>
                        <RouterLink id="register" to="/register">Regístrate</RouterLink>
                    </div>
                    <input type="text" placeholder="Correo" v-model="email">
                    <div class="dataUser">
                        <!-- <input type="text" placeholder="Nombre" v-model="name">
                        <input type="text" placeholder="Apellido" v-model="surname"> -->
                    </div>
                    <input type="text" placeholder="Contraseña" v-model="password">
                    <input type="text" placeholder="Repetir contraseña" v-model="repeatPassword">
                    <a @click="forgot">¿Olvidaste tu contraseña?</a>
                    <div class="accessMethods">
                        <button id="access" @click="login"><p>Acceder</p></button>
                        <button id="accessGoogle" @click="registerWithgoogle"><p>Registrarse con Google</p><Icon icon="ant-design:google-outlined" /></button>
                    </div>
                </nav>
                <RouterView></RouterView>
            </article>
            <FooterLoginRegister/>
        </section>
    </main>
</template>

<script setup>
    import { ref } from "vue";
    import { createUserWithEmailAndPassword } from "firebase/auth";
    import { auth } from "../firebase";
    import { useRouter } from "vue-router";
    import FooterLoginRegister from "../components/FooterLoginRegister.vue";
    import SliderLoginRegister from "../components/SliderLoginRegister.vue";
    import { Icon } from '@iconify/vue';
    /* import { FooterLoginRegister } from "@components/FooterLoginRegister";
    import { SliderLoginRegister } from "@components/SliderLoginRegister"; */

    const email = ref("");
    const password = ref("");
    const router = useRouter();


    const register = () => {
        
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userData) => {
                /* return bbdd.collection('users').add(); */
                console.log("Successfully registered");
                router.push('/home');
            })
            .catch((error) => {
                console.log(error.code);
                alert(error.message);
            })
    }

    /* export default {
        components: {
            Icon,
            FooterLoginRegister,
            SliderLoginRegister
        },
    }; */

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

    main{
        background: white;
        width: 100vw;
        height: 100vh;
        display: flex;

        aside{
            width: 50%;
            height: 100%;
        }
        section{
            display: flex;
            flex-direction: column;
            width: 50%;
            height: 100%;
            header{
                width: 100%;
                height: 7%;
                display: flex;
                justify-content: end;
                align-items: center;
                a{
                    margin-right: 1rem;
                    @include fonts('Nunito', normal, 700, 1.2rem, center);
                    text-decoration: none;
                    color: rgb(249, 69, 142);
                    padding: 0.3rem 0.5rem;
                    border: 2px solid rgb(249, 69, 142);
                    border-radius: 0.2rem;
                }
            }
            article{
                width: 100%;
                height: 83%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .logo{
                    width: 8rem;
                    height: 8rem;
                }

                .title{
                    h2{
                        font-size: 2rem;
                        color: rgb(249, 69, 142);
                    }
                }

                nav{
                    width: 25rem;
                    height: 27rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    
                    .alterMethods{
                        margin-bottom: 0.5rem;
                        width: 100%;
                        height: 5rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        #login{
                            width: 11rem;
                            height: 3rem;
                            font-size: 1.5rem;
                            text-decoration: none;
                            color: white;
                            padding: 1rem;
                            background-color: rgb(151, 151, 151);
                            border-radius: 0.2rem;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin: 0rem 0.4rem;
                        }

                        #register{
                            width: 11rem;
                            height: 3rem;
                            font-size: 1.5rem;
                            text-decoration: none;
                            color: white;
                            padding: 1rem;
                            background-color:rgb(249, 69, 142);
                            border-radius: 0.2rem;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin: 0rem 0.4rem;
                        }
                    }

                    input{
                        background-color: #f7f7f7;
                        border: none;
                        border-radius: 0.2rem;
                        width:22.85rem;
                        height: 2.3rem;
                        padding: 1rem;
                        margin-bottom: 1.2rem;
                    }

                    .dataUser{
                        display: flex;
                        flex-direction: row;

                        input{
                            width: 11rem;
                            margin: 0rem 0.4rem 1.2rem 0.4rem;
                        }
                    }

                    .accessMethods{
                        margin-bottom: 0.5rem;
                        width: 100%;
                        height: 5rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        #access{
                            border: none;
                            cursor: pointer;
                            width: 7rem;
                            height: 2.5rem;
                            font-size: 1.2rem;
                            text-decoration: none;
                            color: white;
                            padding: 1rem;
                            background-color: rgb(249, 69, 142);
                            border-radius: 0.2rem;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin: 0rem 0.4rem;
                        }

                        #accessGoogle{
                            cursor: pointer;
                            width: 15rem;
                            height: 2.5rem;
                            font-size: 1rem;
                            text-decoration: none;
                            color: black;
                            padding: 1rem;
                            border-radius: 0.2rem;
                            border: 2px #979797 solid;                            
                            display: flex;
                            justify-content: space-evenly;
                            align-items: center;
                            margin: 0rem 0.4rem;

                            p{
                                width: 15rem;
                            }

                            svg{
                                width: 2rem;
                                height: 2rem;
                                color: rgb(249, 69, 142)
                            }
                        }
                    }
                }
            }
        }
    }
    
</style>