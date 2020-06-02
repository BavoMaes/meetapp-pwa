<template>
    <div class="login">
       <h1 class="login__title">Career Launch</h1>
       <input class="login__input login__email" type="text" placeholder="Email"/>
       <input class="login__input login__password" type="password" placeholder="Password"/>
       <router-link to="/info" tag="button" class="login__button">Login</router-link>
    </div>
</template>

<script>
export default {
    
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

        &::placeholder {

        }
    }

    &__button {
        outline: none;
        border: 1px solid $navigation-active;
        background-color: $navigation-active;
        margin-top: 60px;
        width: 60%;
        color: #fff;
        border-radius: 3px;
        font-size: 18px;
        padding: 10px 0;
    }
}
</style>