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
import { mapGetters } from 'vuex';

export default {
  components: {
    ChatBubble,
    ChatInput
  },
  created() {
    this.getAllMessages();
  },
  computed: {
    ...mapGetters({
      messages: 'chat/getMessages'
    })
  },
  data: () => ({
    error: null
  }),
  methods: {
    getAllMessages() {
      this.$socket.emit('getMessages', this.handleMessages);
    },
    handleMessages(response) {
      if (response.hasOwnProperty('error')) {
        this.error = response.error;
      } else {
        this.$store.commit('chat/initMessages', response);
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