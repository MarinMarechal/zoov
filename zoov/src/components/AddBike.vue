<template>
    <div class="addBike">
        <h2>Ajouter vélo</h2>
        <form action="">
            <div class="formItem">
                <label for="">Numéro de série</label>
                <input type="text" v-model="form.serial" placeholder="Numéro de série">
            </div>
            <div class="formItem">
                <label for="">Statut</label>
                <select type="text" v-model="form.in_order" placeholder="Statut">
                                <option disabled value="">Choisissez</option>
                                <option v-for="option in form.optionsStatus" v-bind:value="option.value" :key="option.text">
                                    {{ option.text }}
                                </option>
                            </select>
            </div>
            <div class="formItem">
                <label for="">Statut de service</label>
                <select type="text" v-model="form.service_status" placeholder="Statut de service">
                                <option disabled value="">Choisissez</option>
                                <option v-for="option in form.optionsService" v-bind:value="option.value" :key="option.text">
                                    {{ option.text }}
                                </option>
                            </select>
            </div>
            <!-- <div class="formItem">
                <label for="">Statut de service</label>
                <input type="text" v-model="form.service_status" placeholder="Statut de service">
            </div> -->
            <div class="formItem">
                <label for="">Location</label>
                <input type="text" v-model="form.long" placeholder="Longitude">
                <input type="text" v-model="form.lat" placeholder="Latitude">
            </div>
            <Btn @click.prevent.native="addBike" class="btnAdd">
                Ajouter vélo
            </Btn>
        </form>
    </div>
</template>

<script>
import Btn from '@/components/Btn.vue'

export default {
    components: {
        Btn
    },
    data() {
        return {
            form: {
                serial: null,
                in_order: "Vacant",
                optionsStatus: [{ text: 'En Service', value: true },
                    { text: 'En Panne', value: false },
                ],
                optionsService: [{ text: 'Libre', value: 1 },
                    { text: 'Occupé', value: 2 }, { text: 'En Service', value: 3}
                ],
                service_status: null,
                lat: null,
                long: null
            }
        }
    },
    methods: {
        addBike() {
            this.$emit('addBike', this.form);
        }
    },
}
</script>

<style lang="scss" scoped>
.addBike {
    h2 {
        color: #4cadff;
        font-size: 3rem;
        font-weight: 600;
    }
    form {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .formItem {
            margin-bottom: 1rem;
            label {
                font-size: 1.4rem;
                font-weight: 600;
                margin-right: 1rem;
            }
            input, select {
                border: 2px solid #4cadff;
                border-radius: .5rem;
                margin-right: 1rem;
            }
        }
        .btnAdd {
            margin-top: 2rem;
        }
    }
}
</style>