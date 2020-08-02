<template>
<div>
  <div class="conversation">
    <div class="conversation__messages">
      <ChatBubble v-for="message in messages" :key="message._id" :message="message.content" :currentUser='true'/>
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
  created() {
    this.getAllMessages();
  },
  data: () => ({
    error: null,
    messages: []
  }),
  methods: {
    getAllMessages() {
      this.$socket.emit('getMessages', this.checkMessages);
    },
    checkMessages(response) {
      if (response.hasOwnProperty('error')) {
        this.error = response.error;
      } else {
        this.messages = response;
      }
    }
  }
}
</script>

<style lang="scss">
.conversation {
  height: calc(100vh - 165px);
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column-reverse;
}
</style>