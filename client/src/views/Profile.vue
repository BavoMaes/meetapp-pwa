<template>
  <div class="profile">
    <img class="profile__picture" src="../assets/profile.png" />
    <p class="profile__name">Mock User</p>
  </div>
</template>

<style lang="scss">
.profile {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;

  &__picture {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-bottom: 20px;
  }

  &__name {
    font-size: 22px;
    font-weight: bold;
  }
}
</style>
