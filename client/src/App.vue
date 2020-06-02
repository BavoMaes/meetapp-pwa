<template>
  <div id="app">
    <TopBar v-if="this.$route.name !== 'Login' && this.$route.name !== 'Scan'"/>
    <div class="content">
      <router-view/>
    </div>
    <NavigationBar v-if="this.$route.name !== 'Register' && this.$route.name !== 'Login'"/>
  </div>
</template>

<script>
import NavigationBar from './components/navigation/NavigationBar';
import TopBar from './components/navigation/TopBar';

export default {
  components: {
    NavigationBar,
    TopBar
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
  min-height: calc(100vh - 125px);
  max-height: 100vh;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
