<template>
    <div>
        <div class="navigation">
            <ul class="navigation__list">
                <li class="navigation__item">
                    <router-link class="navigation__link" to="/info">
                        <svg class="navigation__icon  navigation__icon--larger" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                            <path d="M248,64C146.39,64,64,146.39,64,248s82.39,184,184,184,184-82.39,184-184S349.61,64,248,64Z" style="fill:none;stroke-miterlimit:10;stroke-width:32px" />
                            <polyline points="220 220 252 220 252 336" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
                            <line x1="208" y1="340" x2="296" y2="340" style="fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
                            <path d="M248,130a26,26,0,1,0,26,26A26,26,0,0,0,248,130Z" />
                        </svg>
                        <p class="navigation__title">Info</p>
                    </router-link>
                </li>
                <li class="navigation__item">
                    <router-link class="navigation__link" to="/scan">
                    <svg class="navigation__icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                        <path d="M336,448h56a56,56,0,0,0,56-56V336" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
                        <path d="M448,176V120a56,56,0,0,0-56-56H336" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
                        <path d="M176,448H120a56,56,0,0,1-56-56V336" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
                        <path d="M64,176V120a56,56,0,0,1,56-56h56" style="fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
                    </svg>
                    <p class="navigation__title">Scan</p>
                    </router-link>
                </li>
                <li class="navigation__item">
                    <router-link class="navigation__link" to="/discover">
                        <svg class="navigation__icon navigation__icon--larger" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                            <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke-miterlimit:10;stroke-width:32px" />
                            <path d="M350.67,150.93l-117.2,46.88a64,64,0,0,0-35.66,35.66l-46.88,117.2a8,8,0,0,0,10.4,10.4l117.2-46.88a64,64,0,0,0,35.66-35.66l46.88-117.2A8,8,0,0,0,350.67,150.93ZM256,280a24,24,0,1,1,24-24A24,24,0,0,1,256,280Z" />
                        </svg>
                        <p class="navigation__title">Discover</p>
                    </router-link>
                </li>
                <li class="navigation__item">
                    <router-link class="navigation__link" to="/chat">
                        <svg class="navigation__icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                            <path d="M87.49,380c1.19-4.38-1.44-10.47-3.95-14.86A44.86,44.86,0,0,0,81,361.34a199.81,199.81,0,0,1-33-110C47.65,139.09,140.73,48,255.83,48,356.21,48,440,117.54,459.58,209.85A199,199,0,0,1,464,251.49c0,112.41-89.49,204.93-204.59,204.93-18.3,0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09,31.09,0,0,0-11.12-2.07,30.71,30.71,0,0,0-12.09,2.43L81.51,462.78A16,16,0,0,1,76.84,464a9.6,9.6,0,0,1-9.57-9.74,15.85,15.85,0,0,1,.6-3.29Z" style="fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
                        </svg>
                        <p class="navigation__title">Chat</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="navigation__clear"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.navigation {
    width: 100%;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid $navigation-inactive;

    &__list {
        list-style-type: none;
        text-align: center;
        display: flex;
    }

    &__item {
        width: 25%;

        .router-link-active {
            svg {
                fill: $navigation-active;
                stroke: $navigation-active;
            }
            p {
                color: $navigation-active;
            }
        }
    }

    &__link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 69px;
        width: 100%;

        &:link {
            text-decoration: none;
        }
    }

    &__icon {
        height: 25px;
        width: 25px;
        margin-bottom: 10px;
        fill: $navigation-inactive;
        stroke: $navigation-inactive;

        &--larger {
            height: 30px !important;
            width: 30px !important;
            margin-bottom: 5px !important;
        }
    }

    &__title {
        color: $navigation-inactive;
        font-size: 12px;
        font-weight: bold;
    }

    &__clear {
        width: 100%;
        height: 70px;
    }
}
</style>