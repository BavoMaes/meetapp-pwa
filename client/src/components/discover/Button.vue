<template>
  <div class="swipe">
    <svg v-if="type == 'left'" class="swipe__icon swipe__icon--left" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"
    >
      <path
        d="M289.94,256l95-95A24,24,0,0,0,351,127l-95,95-95-95A24,24,0,0,0,127,161l95,95-95,95A24,24,0,1,0,161,385l95-95,95,95A24,24,0,0,0,385,351Z"
      />
    </svg>
    <svg v-else-if="type == 'right'" class="swipe__icon swipe__icon--right" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <path
        d="M256,448a32,32,0,0,1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63,114.52,98.46,64,159.08,64c44.08,0,74.61,24.83,92.39,45.51a6,6,0,0,0,9.06,0C278.31,88.81,308.84,64,352.92,64,413.54,64,463.37,114.52,464,176.64c.54,54.21-18.63,104.26-58.61,153-18.77,22.87-52.8,59.45-131.39,112.8A32,32,0,0,1,256,448Z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
  },
};
</script>

<style lang="scss">
.swipe {
  width: 70px;
  height: 70px;
  border-radius: 35px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  &__icon {
    width: 50px;
    height: 50px;

    &--left {
        fill: rgb(238, 90, 70);
    }

    &--right {
        padding: 5px;
        box-sizing: border-box;
        fill: rgb(100, 218, 150);
    }
  }
}
</style>