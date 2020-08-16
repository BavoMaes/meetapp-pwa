<template>
    <div class="card">
        <div class="card__banner"></div>
        <ProfilePicture class="card__picture"/>
        <p class="card__name">{{ firstname }} {{ lastname }}</p>
        <p class="card__profession">{{ profession }}</p>
        <p class="card__employer">{{ employer }}</p>
        <p class="card__info">{{ info }}</p>
    </div>
</template>

<script>
import ProfilePicture from '@/components/profile/ProfilePicture'
export default {
    components: {
        ProfilePicture
    },
    props: {
        firstname: String,
        lastname: String,
        profession: String,
        employer: String,
        info: String
    }
}
</script>

<style lang="scss">
.card {
    width: calc(100% - 50px);
    height: calc(100% - 160px);
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 25px;
    margin-top: 25px;
    // border: 1px solid $navigation-inactive;
    
    &__banner {
        background-image: url('../../assets/banner.jpeg');
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100px;
        border-radius: 10px 10px 0 0;
    }

    &__picture {
        margin-top: -75px;
        width: 150px;
    }

    &__name {
        font-size: 20px;
        margin-top: 25px;
        color: #000;
        font-weight: bold;
    }

    &__profession {
        margin-top: 25px;
        font-size: 16px;
        color: #999;
    }

    &__employer {
        margin-top: 10px;
        color: #000;
        font-size: 14px;
        color: #999;
    }

    &__info {
        font-size: 16px;
        color: #000;
        margin-top: 50px;
        padding: 0 20px;
    }
}
</style>