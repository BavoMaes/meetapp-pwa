<template>
<div>
  <div class="conversation">
    <div class="conversation__messages">
      <ChatBubble message="Hey!" v-bind:currentUser='true'/>
      <ChatBubble message="How's it been?" v-bind:currentUser='true'/>
      <ChatBubble message="Good, and you?" v-bind:currentUser='false'/>
      <ChatBubble message="How are you?" v-bind:currentUser='false'/>
      <ChatBubble message="It has been a while. What are you doing in your life right now?" v-bind:currentUser='false'/>
      <ChatBubble message="I have started a new startup called MeetApp. It's an PWA to network on live events." v-bind:currentUser='true'/>
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