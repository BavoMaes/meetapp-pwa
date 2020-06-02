<template>
  <div class="register">
    <div class="register__picture">
      <img class="register__icon" src="../../assets/no_profile_picture.svg"/>
    </div>
    <input class="textinput" type="text" placeholder="Email"/>
    <input class="textinput" type="text" placeholder="Password"/>
    <input class="textinput" type="text" placeholder="First name"/>
    <input class="textinput" type="text" placeholder="Last name"/>
    <input class="textinput" type="text" placeholder="Job title"/>
    <input class="textinput" type="text" placeholder="Employer"/>
    <router-link class="button" to="/scan" tag="button">Register</router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 55px);

  &__picture {
    width: 100px;
    height: 100px;
    background-color: $navigation-inactive;
    border-radius: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 10px;
  }

  &__icon {
    width: 40px;
    height: 40px;
  }
}
</style>