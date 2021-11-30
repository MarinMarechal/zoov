<template>
    <div class="bikeInfos">
        <div class="serial">
            <Bike />
            <h2>{{bike.serial_number}}</h2>
        </div>
        <div class="infos">
            <ul>
                <li>
                    <p>Status :</p>
                    <p v-if="bike.in_order" style="color:green"> En Service</p>
                    <p v-else style="color:red"> En panne</p>
                </li>
                <li>
                    <p>Service status : </p>
                    <p :class="`cl-${bike.service_status}`">{{statut}}</p>  
                </li>
                <li>
                    <Battery :level="bike.battery_level" />
                </li>
            </ul>
        <Btn @click.prevent.native="deleteBike(bike.id)" class="btnAdd" style="margin-top: 2rem">
            Supprimer vélo
        </Btn>
        </div>
    </div>
</template>

<script>
import Bike from '@/assets/Bike'
import Battery from '@/assets/Battery'
import Btn from '@/components/Btn.vue'

export default {
    props: ["bike"],
    components: {
        Bike,
        Battery,
        Btn
    },
    computed: {
        statut() {
            let statut = "" 
            switch (this.bike.service_status) {
                case 1:
                    return statut= "Libre"
                case 2: 
                    return statut= "Occupé"
                case 3: 
                    return statut= "En usage"
                default:
                    break;
            }
            return statut
        }
    },
    methods: {
        closePopIn() {
            this.$emit("closePopIn");
        },
        deleteBike(id) {
            this.$emit('deleteBike', id)
        }
    },
}
</script>

<style lang="scss" scoped>
.bikeInfos {
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
    .serial {
        display: flex;
        svg {
            fill: #4cadff;
            margin-right: 1rem;
        }
        h2 {
            font-size: 3rem;
            color: #4cadff;
            text-align: left;
            margin: 0;
        }
    }
    .infos {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            li {
                display: flex;
                font-size: 2rem;
                font-weight: 900;
                margin: 2rem 0;
                text-align: center;
                justify-content: center;
                p {
                    margin: 0;
                    margin-right: 0.5rem;
                }
                svg {
                    height: 4rem;
                }
                .cl-1 {
                    color: green;
                }
                .cl-2 {
                    color: red;
                }
                .cl-3 {
                    color: #4cadff;
                }
            }
        }
    }
}
</style>