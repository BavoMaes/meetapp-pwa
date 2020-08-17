<template>
  <div class="discover">
    <Card v-if="this.users" :firstname="this.users[0].firstname" :lastname="this.users[0].lastname" :profession="this.users[0].jobTitle" :employer="this.users[0].employer"/>
    <div class="discover__buttons">
      <Button v-on:click.native="swipeLeft" :type="'left'"/>
      <Button v-on:click.native="swipeRight" :type="'right'"/>
    </div>
  </div>
</template>

<script>
import Card from '@/components/discover/Card';
import Button from '@/components/discover/Button';
import { mapGetters } from 'vuex';
export default {
  components: {
    Card,
    Button
  },
  computed: {
    ...mapGetters({
      user: 'auth/getUser',
      users: 'users/getUsers'
    })
  },
  methods: {
    swipeLeft() {
      this.$store.commit('users/removeUser', this.users[0]);
    },
    swipeRight() {
      console.log('Swiped right!');
      this.$socket.emit('addMatch', {users: [this.user, this.users[0]]}, this.handleMatchRepsonse)
    },
    handleMatchRepsonse(response) {
      if (response.hasOwnProperty('error')) {
        console.error = response
      } else {
        console.log(response);
        let matchedUser = this.users[0]
        this.$store.commit('users/removeUser', matchedUser);
        this.$store.commit('matches/addMatch', {_id: response._id, user: this.checkUserIds(response.users)});
        this.$router.push('/chat/' + String(response._id));
      }
    },
    checkUserIds(users) {
      let otherUser;
      users.map(matchUser => {
        if (matchUser._id != this.user._id) {
          otherUser = matchUser;
        }
      });
      return otherUser;
    }
  }
}
</script>

<style lang="scss">
.discover {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 125px);

    &__buttons {
      width: 160px;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
}

h1 {
    display: block;
}
</style>
