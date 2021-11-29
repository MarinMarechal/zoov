<template>
    <div class="popIn">
        <button class="closePopIn" @click="closePopIn"></button>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ["bike"],
    methods: {
        closePopIn() {
            this.$emit("closePopIn");
        },
    },
}
</script>

<style lang="scss" scoped>
.popIn {
    width: 60%;
    height: 60%;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4rem;
    z-index: 10;
    padding: 4rem;
    @media (max-width: 767px) {
        width: 80%;
        height: 80%;
    }
    .closePopIn {
        position: absolute;
        width: 4rem;
        height: 4rem;
        background-image: linear-gradient(90deg, #1ee3cf, #4cadff);
        border: none;
        top: 2rem;
        right: 2rem;
        border-radius: 100%;
        transition: 300ms;
        cursor: pointer;
        &::before,
        &::after {
            content: "";
            display: block;
            width: 2.5rem;
            height: .3rem;
            background-color: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
        }
        &::after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
        &:hover {
            transform: rotate(90deg);
            transition: 300ms;
        }
    }
}
</style>