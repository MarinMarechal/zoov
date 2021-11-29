<template>
    <div class="battery">
        <div class="cl-1"></div>
        <div class="cl-2">
            <div class="cl-3">
                <div class="cl-4" :style="`transform: translateX(${100 - level}%)`">
                </div>
                <div class="level">{{level}}%</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["level"]
}
</script>

<style lang="scss" scoped>
.battery {
    padding-left: 1rem;
    position: relative;
    .cl-1 {
        position: absolute;
        background-color: black;
        height: 2rem;
        width: 1rem;
        top: 1rem;
        left: 0;
        border-top-left-radius: .6rem;
        border-bottom-left-radius: .6rem;
    }
    .cl-2 {
        display: block;
        height: 4rem;
        width: 10rem;
        border: .4rem solid black;
        border-radius: 1rem;
    }
    .cl-3 {
        position: relative;
        width: 100%;
        height: 100%;
        border: 0.3rem solid #fff;
        border-radius: .8rem;
        overflow: hidden;
        .cl-4 {
            background-color: green;
            width: 100%;
            height: 100%;
        }
        .level {
            position: absolute;
            z-index: 1;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 2rem;
            font-weight: 700;
        }
    }
}
</style>