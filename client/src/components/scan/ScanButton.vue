<template>
    <div class="scanbutton">
        <div class="scanbutton__outer">
            <div class="scanbutton__inner"></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.scanbutton {
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: 100px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;


    &__outer {
        width: 100%;
        height: 100%;
        background-color: none;
        border-radius: 50%;
        border: 5px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__inner {
        width: 85%;
        height: 85%;
        background-color: #fff;
        border-radius: 50%;
    }
}
</style>