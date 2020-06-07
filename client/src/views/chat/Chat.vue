<template>
  <div>
    <ChatListItem name="Peter McMannon" message="Hi! How are you? I wanted to contact you"></ChatListItem>
    <ChatListItem name="Javier Portino" message="Hey man, what's up? I'm new to this app."></ChatListItem>
    <ChatListItem name="Tyler Durden" message="Please add me on LinkedIn for more information"></ChatListItem>
  </div>
</template>

<script>
import ChatListItem from '@/components/chat/ChatListItem';

export default {
  components: {
    ChatListItem
  }
}
</script>

<style lang="scss">

</style>