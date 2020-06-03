<template>
    <div class="login">
       <h1 class="login__title">Career Launch</h1>
       <input v-model="email" class="login__input login__email" type="text" placeholder="Email"/>
       <input v-model="password" class="login__input login__password" type="password" placeholder="Password"/>
       <p class="login__error">{{ error }}</p>
       <button class="login__button" @click="login">Login</button>
       <router-link to="/register" class="login__registerlink">
        <p class="login__registertext">Don't have an account yet?<br/>Click here to register.</p>
       </router-link>
    </div>
</template>

<script>
export default {
    data: () => ({
        email: null,
        password: null,
        error: null
    }),
    methods: {
        login() {
            console.log(this.email, this.password);
            this.$socket.emit('login', {email: this.email, password: this.password}, this.checkIfLoggedIn)
        },
        checkIfLoggedIn(token) {
            if (token.hasOwnProperty('error')) {
                this.error = token.error
            } else {
                this.error = null;
                this.$router.push({path: '/info'});
            }
        }
    }
}
</script>

<style lang="scss">
.login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    &__title {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 40px;
    }

    &__input {
        margin-top: 20px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 0.5px solid $navigation-inactive;
        font-size: 18px;
        width: 60%;
        padding: 10px 0;
        outline: none;

        &:focus {
            border-bottom: 0.5px solid $navigation-active;

            &::placeholder {
                color: $navigation-active;
            }
        }
    }

    &__error {
        font-size: 13px;
        color: $color-error;
        margin-top: 30px;

    }

    &__button {
        outline: none;
        border: 1px solid $navigation-active;
        background-color: $navigation-active;
        margin-top: 30px;
        width: 60%;
        color: #fff;
        border-radius: 3px;
        font-size: 18px;
        padding: 10px 0;
    }

    &__register {
        &link {
            margin-top: 40px;
            max-width: 50%;
            text-decoration: none !important;
        }

        &text {
            color: $navigation-active;
            font-size: 13px;
        }
    }
}
</style>