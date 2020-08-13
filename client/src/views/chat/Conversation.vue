<template>
<div>
  <div class="conversation">
    <div class="conversation__messages">
      <ChatBubble v-for="message in messages" :key="message._id" :message="message" :currentUser='true'/>
    </div>
  </div>
  <ChatInput/>
</div>
</template>

<script>
import ChatBubble from '@/components/chat/ChatBubble';
import ChatInput from '@/components/chat/ChatInput';

export default {
  components: {
    ChatBubble,
    ChatInput
  },
  computed: {
    messages () {
      return this.$store.getters['chat/getConversation'](this.$route.params.conversationId);
    }
  },
  data: () => ({
    error: null
  })
}
</script>

<style lang="scss">
.conversation {
  height: calc(100vh - 166px);
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column-reverse;
}
</style>