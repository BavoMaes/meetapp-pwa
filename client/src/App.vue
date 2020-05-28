<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
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

.content {
  min-height: calc(100vh - 70px);
  min-width: 100%;
}
</style>
