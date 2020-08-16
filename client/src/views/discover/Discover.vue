<template>
  <div class="discover">
    <Card/>
    <div class="discover__buttons">
      <Button v-on:click.native="swipeLeft" :type="'left'"/>
      <Button v-on:click.native="swipeRight" :type="'right'"/>
    </div>
  </div>
</template>

<script>
import Card from '@/components/discover/Card';
import Button from '@/components/discover/Button';
export default {
  components: {
    Card,
    Button
  },
  methods: {
    swipeLeft() {
      console.log('Swiped left...');
    },
    swipeRight() {
      console.log('Swiped right!');
    }
  }
}
</script>

<style lang="scss">
.discover {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 125px);

    &__buttons {
      width: 160px;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
}

h1 {
    display: block;
}
</style>
