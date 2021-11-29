<template>
    <div class="main">
        <div class="addBikeButton" @click="addBikePopIn"></div>
        <Map :bikes="bikes" @openBikeCard="openBikeCard" />
        <PopIn v-if="isPopIn" @closePopIn="closePopIn">
            <component :is='popInComponent' @deleteBike="deleteBike" :bike="bikeMap" @addBike="addBike"></component>
            <!-- <BikeCard :bike="bikeMap"  @closePopIn="closePopIn" @deleteBike="deleteBike"/> -->
        </PopIn>
    
    </div>
</template>

<script>
import Api from '../../api/api'

import Map from './Map.vue'
import PopIn from '@/components/PopIn.vue'
import BikeCard from '@/components/BikeCard.vue'
import AddBike from '@/components/AddBike.vue'

export default {
    components: {
        Map,
        PopIn,
        BikeCard,
        AddBike
    },
    data() {
        return {
            bikes: [],
            bikeMap: null,
            isPopIn: false,
            popInComponent: null
        }
    },
    methods: {
        openBikeCard(bike) {
            this.bikeMap = bike;
            this.popInComponent = "BikeCard";
            this.isPopIn = true;
        },
        closePopIn() {
            this.bikeMap = null;
            this.isPopIn = false;
        },
        deleteBike(id) {
            let newBikes = this.bikes.filter(e => {
                return e.id != id;
            });
            this.closePopIn();
            this.bikes = newBikes;
            Api.deleteBike(id);
        },
        addBikePopIn() {
            this.popInComponent = "AddBike";
            this.isPopIn = true;
        },
        addBike(form) {
            let newBike = {
                serial_number: form.serial,
                battery_level: 100,
                in_order: form.in_order,
                location: {
                    type: "Point",
                    coordinates: [form.lat, form.long]
                },
                service_status: form.service_status
            }
            // Api.addBike(newBike);

            let id = parseInt(this.bikes[this.bikes.length - 1].id);
            newBike.id = id++;
            this.bikes.push(newBike);
            this.closePopIn();
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
    height: 100%;
    position: relative;
    .addBikeButton {
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
        z-index: 10;
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
            transform: translate(-50%, -50%);
        }
        &::after {
            transform: translate(-50%, -50%) rotate(-90deg);
        }
        &:hover {
            transform: rotate(90deg);
            transition: 300ms;
        }
    }
}
</style>