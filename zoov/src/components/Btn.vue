<template>
    <button>
            <slot />
        </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
button {
    padding: .5rem 1.5rem;
    border: 2px solid #4cadff;
    color: #fff;
    background: #4cadff;
    border-radius: .5rem;
    font-weight: 800;
    font-size: 1.6rem;
    transition: 300ms;
    cursor: pointer;
    &:hover {
        background: transparent;
        color: #4cadff;
        transition: 300ms;
    }
}
</style>