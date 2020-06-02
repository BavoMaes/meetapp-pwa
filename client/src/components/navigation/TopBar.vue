<template>
  <div>
    <div class="topbar">
      <div
        class="topbar__back"
        @click="$router.go(-1)"
        v-if="this.$route.name !== 'Info' && this.$route.name !== 'Discover' && this.$route.name !== 'Chat'"
      >
        <svg
          class="topbar__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="0 0 512 512"
        >
          <polyline
            points="244 400 100 256 244 112"
            style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
          />
          <line
            x1="120"
            y1="256"
            x2="412"
            y2="256"
            style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
          />
        </svg>
      </div>
      <div class="topbar__blank" v-else></div>
      <h1 class="topbar__title">{{ $route.name }}</h1>
      <div class="topbar__profile" v-if="this.$route.name !== 'Info' && this.$route.name !== 'My profile'">
        <router-link to="/profile">
          <img class="topbar__picture" src="../../assets/profile.png" />
        </router-link>
      </div>
      <div v-else-if="this.$route.name === 'My profile'" class="topbar__logout">
        <router-link to="/login">
            <svg class="topbar__icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                <path
                d="M192,176V136a40,40,0,0,1,40-40H392a40,40,0,0,1,40,40V376a40,40,0,0,1-40,40H240c-22.09,0-48-17.91-48-40V336"
                style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
                />
                <polyline
                points="288 336 368 256 288 176"
                style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
                />
                <line
                x1="80"
                y1="256"
                x2="352"
                y2="256"
                style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
                />
            </svg>
        </router-link>
      </div>
      <div class="topbar__blank" v-else></div>
    </div>
    <div class="topbar__clear"></div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="scss">
.topbar {
  width: 100%;
  height: 54px;
  border-bottom: 0.5px solid $navigation-inactive;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: #fff;

  &__back {
    margin-left: 20px;
    width: 30px;
  }

  &__icon {
    width: 30px;
    height: 30px;
    stroke: $navigation-active;
  }

  &__title {
    font-size: 22px;
    font-weight: bold;
  }

  &__profile {
    margin-right: 20px;
    width: 30px;
  }

  &__picture {
    width: 30px;
    height: 30px;
    border-radius: 15px;
  }

  &__logout {
    width: 30px;
    margin-right: 20px;
  }

  &__blank {
    width: 50px;
  }

  &__clear {
    height: 55px;
    width: 100%;
  }
}
</style>