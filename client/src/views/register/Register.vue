<template>
  <div class="register">
    <div class="register__picture">
      <img class="register__icon" src="../../assets/no_profile_picture.svg"/>
    </div>
    <input v-model="user.email" class="textinput" type="text" name="email" placeholder="Email"/>
    <input v-model="user.password" class="textinput" type="password" name="password" placeholder="Password"/>
    <input v-model="user.firstname" class="textinput" type="text" name="firstname" placeholder="First name"/>
    <input v-model="user.lastname" class="textinput" type="text" name="lastname" placeholder="Last name"/>
    <input v-model="user.jobTitle" class="textinput" type="text" name="jobtitle" placeholder="Job title"/>
    <input v-model="user.employer" class="textinput" type="text" name="employer" placeholder="Employer"/>
    <button class="button" @click="register">Register</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      email: null,
      password: null,
      firstname: null,
      lastname: null,
      jobTitle: null,
      employer: null
    }
  }),
  methods: {
    register() {
      this.$socket.emit('register', this.user, this.checkIfCreated);
    },
    checkIfCreated(user) {
      if (user !== null) {
        this.$router.push({path: '/scan'});
      }
    }
  }
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