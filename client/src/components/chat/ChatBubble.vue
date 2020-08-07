<template>
    <div class="chatbubble__container" v-bind:class="{'chatbubble__container--current': message.userId === user._id}">
        <div class="chatbubble" v-bind:class="{'chatbubble--current': message.userId === user._id}">
            <p class="chatbubble__text" v-bind:class="{'chatbubble__text--current': message.userId === user._id}">{{ message.content }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: {
        message: String
    },
    computed: {
        ...mapGetters({
            user: 'auth/getUser'
        })
    }
}
</script>

<style lang="scss">
.chatbubble {
    padding: 10px;
    box-sizing: border-box;
    margin-top: 10px;
    overflow: visible;
    max-width: 60%;
    background-color: #e0e0e0;
    text-align: left;
    border-radius: 6px 6px 6px 0;

    &--current {
        border-radius: 6px 6px 0 6px;
        background-color: $navigation-active;
        text-align: right;
    }

    &__container {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        &--current {
            justify-content: flex-end;
        }
    }

    &__text {
        width: 100%;
        word-wrap: break-word;
        color: #000;

        &--current {
            color: #fff;
        }
    }
}
</style>