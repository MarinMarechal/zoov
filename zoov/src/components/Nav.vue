<template>
    <nav>
        <div class="logo">
            <Logo />
        </div>
    </nav>
</template>

<script>
import Logo from '@/assets/Logo.vue'

export default {
    components: {
        Logo
    }
}
</script>

<style lang="scss" scoped>
nav {
    position: absolute;
    width: 100%;
    height: 7rem;
    top: 0;
    left: 0;
    background-image: linear-gradient(90deg, #1ee3cf, #4cadff);

    .logo {
        width: fit-content;
        padding: 1.8rem;
        svg {
            height: 3rem;
            transform: rotate(-17deg);
            fill: #fff;
        }
    }
}
</style>