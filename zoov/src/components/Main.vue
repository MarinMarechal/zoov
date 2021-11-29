<template>
    <div class="main">
        <Map :bikes="bikes" @openBikeCard="openBikeCard" />
        <BikeCard :bike="bikeMap" v-if="isBikeMap" @closePopIn="closePopIn"/>
    </div>
</template>

<script>
import Api from '../../api/api'

import Map from './Map.vue'
import BikeCard from '@/components/BikeCard.vue'

export default {
    components: {
        Map,
        BikeCard
    },
    data() {
        return {
            bikes: [],
            bikeMap: null,
            isBikeMap: false
        }
    },
    methods: {
        openBikeCard(bike) {
            this.bikeMap = bike;
            this.isBikeMap = true;
        },
        closePopIn() {
            this.bikeMap = null;
            this.isBikeMap = false;
        }
    },
    async created() {
        this.bikes = await Api.getBikes();
        console.log(this.bikes);
    },
}
</script>

<style lang="scss" scoped>
.main {
    padding-top: 7rem;
    height: 100%;
}
</style>