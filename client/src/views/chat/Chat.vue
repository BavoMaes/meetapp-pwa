<template>
  <div>
    <ChatListItem v-for="match in matches" :key="match._id" :firstname="match.user.firstname" :lastname="match.user.lastname" :conversationId="match._id"/>
  </div>
</template>

<script>
import ChatListItem from '@/components/chat/ChatListItem';
import { mapGetters } from 'vuex';

export default {
  components: {
    ChatListItem
  },
  computed: {
    ...mapGetters({
      user: 'auth/getUser',
      matches: 'matches/getMatches'
    })
  }
}
</script>

<style lang="scss">

</style>