<template>
  <div class="discover">
    <Card/>
  </div>
</template>

<script>
import Card from '@/components/discover/Card'
export default {
  components: {
    Card
  }
}
</script>

<style lang="scss">
.discover {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 125px);
}

h1 {
    display: block;
}
</style>
