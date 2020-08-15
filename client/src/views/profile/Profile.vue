<template>
  <div class="profile">
    <Card :firstname="user.firstname" :lastname="user.lastname" :profession="user.jobTitle" :employer="user.employer" :info="info"/>
  </div>
</template>

<script>
import Card from '@/components/discover/Card'
import { mapGetters } from 'vuex'

export default {
  components: {
    Card
  },
  computed: {
    ...mapGetters({
        user: 'auth/getUser'
    })
  },
  data: () => ({
    info: "Hi, I'm a 2nd year student looking for an internship postion in Java development."
  })
}
</script>

<style lang="scss">
.profile {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
