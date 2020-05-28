<template>
  <div id="app">
    <router-view/>
    <NavigationBar/>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar';

export default {
  components: {
    NavigationBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
