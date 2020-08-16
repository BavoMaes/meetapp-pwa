<template>
  <div class="chatinput">
    <input v-model="message" type="text" class="chatinput__input" placeholder="Type your message here..." />
    <svg @click="sendMessage" class="chatinput__icon" xmlns="http://www.w3.org/2000/svg" width="512px" height="512px" viewBox="0 0 512 512">
      <path
        d="M476.59,227.05l-.16-.07L49.35,49.84A23.56,23.56,0,0,0,27.14,52,24.65,24.65,0,0,0,16,72.59V185.88a24,24,0,0,0,19.52,23.57l232.93,43.07a4,4,0,0,1,0,7.86L35.53,303.45A24,24,0,0,0,16,327V440.31A23.57,23.57,0,0,0,26.59,460a23.94,23.94,0,0,0,13.22,4,24.55,24.55,0,0,0,9.52-1.93L476.4,285.94l.19-.09a32,32,0,0,0,0-58.8Z"
      />
    </svg>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      user: 'auth/getUser'
    })
  },
  data: () => ({
    error: null,
    message: ""
  }),
  methods: {
    sendMessage() {
      if (this.message) {
        this.$socket.emit('sendMessage', {matchId: this.$route.params.conversationId, userId: this.user._id, content: this.message}, this.handleSentMessage)
      }
    },
    handleSentMessage(response) {
      if (response.hasOwnProperty('error')) {
        this.error = response.error;
      } else {
        this.$store.commit('chat/addMessage', response.message);
        this.message = "";
      }
    }
  }
};
</script>

<style lang="scss">
.chatinput {
  height: 40px;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  border-top: 1px solid $navigation-inactive;
  display: flex;
  align-items: center;

  &__input {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    height: 40px;
    padding: 10px;
    box-sizing: border-box;
    outline: none;
    border: none;
    background-color: #fff;
    width: calc(100% - 32px);
    font-size: 16px;
    resize: none;

    &::placeholder {
      color: $navigation-inactive;
    }
  }

  &__icon {
    fill: $navigation-active;
    width: 22px;
    height: 22px;
  }
}
</style>