<template>
  <router-link class="listitem" to="/conversation">
    <ProfilePicture class="listitem__pic"></ProfilePicture>
    <div class="listitem__data">
      <p class="listitem__name">{{ name }}</p>
      <p class="listitem__preview">{{ message }}</p>
    </div>
  </router-link>
</template>

<script>
import ProfilePicture from '@/components/profile/ProfilePicture'
export default {
  components: {
    ProfilePicture
  },
  props: {
    name: String,
    message: String
  }
}
</script>

<style lang="scss">
.listitem {
  text-decoration: none !important;
  color: $color-text;
  width: 100%;
  padding: 15px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $navigation-inactive;

  &__pic {
    width: 50px;
  }

  &__data {
    margin-left: 20px;
    width: calc(100% - 90px);
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__name {
    font-weight: bold;
    margin-bottom: 5px;
  }

  &__preview {
    width: 100%;
    font-size: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 16px;
  }
}
</style>