<template>
    <div>
        <div class="topbar">
            <div class="topbar__back" v-if="this.$route.name !== 'Info'"></div>
            <div class="topbar__blank" v-else></div>
            <h1 class="topbar__title">{{ $route.name }}</h1>
            <div class="topbar__profile" v-if="this.$route.name !== 'Info' && this.$route.name !== 'My profile'">
                <router-link to="/profile">
                    <img class="topbar__picture" src="../assets/profile.png"/>
                </router-link>
            </div>
            <div class="topbar__blank" v-else></div>
        </div>
        <div class="topbar__clear"></div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="scss">
.topbar {
    width: 100%;
    height: 54px;
    border-bottom: 0.5px solid $navigation-inactive;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    background-color: #fff;

    &__back {
        margin-left: 20px;
        width: 30px;
    }

    &__title {
        font-size: 22px;
        font-weight: bold;
    }

    &__profile {
        margin-right: 20px;
        width: 30px;
    }

    &__picture {
        width: 30px;
        height: 30px;
        border-radius: 15px;
    }

    &__blank {
        width: 50px;
    }

    &__clear {
        height: 55px;
        width: 100%;
    }

}
</style>