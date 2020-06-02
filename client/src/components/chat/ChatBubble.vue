<template>
    <div class="chatbubble__container" v-bind:class="{'chatbubble__container--current': currentUser}">
        <div class="chatbubble" v-bind:class="{'chatbubble--current': currentUser}">
            <p class="chatbubble__text" v-bind:class="{'chatbubble__text--current': currentUser}">{{ message }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        message: String,
        currentUser: Boolean
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