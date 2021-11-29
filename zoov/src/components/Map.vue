<template>
    <div id="map">
        <MglMap :accessToken="accessToken" :mapStyle="'mapbox://styles/m-marechal/ckwkzgwp14pby14p4ufroj40f'" :center="coordinates" :zoom="12" :showZoom="true" :showUserLocation="true" :scrollZoom="false">
            <MglNavigationControl position="top-left" />
            <MglMarker ref="marker" v-for="(bike, index) in bikes" :key="bike.serial_number" :coordinates="[bike.location.coordinates[1], bike.location.coordinates[0]]" :color="'#1D1D1B'" @click="openItemCard(bike, index)">
                <Bike slot="marker" class="icon-geo" data-color="primary"></Bike>
                <!-- <div slot="marker" class="icon-geo">{{item.fields.prix}} €</div> -->
            </MglMarker>
        </MglMap>
    </div>
</template>

<script>
// import Mapbox from "mapbox-gl";
import { MglMap, MglNavigationControl, MglMarker } from "vue-mapbox";
import Bike from '@/assets/Bike'

export default {
    components: {
        MglMap,
        MglNavigationControl,
        MglMarker,
        Bike
    },
    props: ["bikes"],
    data() {
        return {
            accessToken: "pk.eyJ1IjoibS1tYXJlY2hhbCIsImEiOiJja240cXN0eGwxczg3Mm9wY25peHQ5YXFsIn0.u9PFHyFSR4H33P2Widq1XQ",
            map: {},
            coordinates: [2.3494311001305292, 48.86],
        }
    },
    methods: {
        openItemCard(bike, index) {
            this.$emit('openBikeCard', bike);
            let markers = document.querySelectorAll('.icon-geo');
            markers.forEach(e => {
                e.setAttribute('color', 'primary')
            });
            markers[index].setAttribute('color', 'secondary')
        }
    }
}
</script>

<style lang="scss">
#map {
    height: 100%;
    width: 100%;
    overflow: hidden;
    .mapboxgl-ctrl-bottom-right {
        .mapboxgl-ctrl {
            background-color: transparent;
            .mapboxgl-ctrl-attrib-inner {
                a {
                    color: #fff;
                }
                .mapbox-improve-map {
                    display: none;
                }
            }
        }
    }
    .mapboxgl-marker {
        z-index: 10;
        cursor: pointer;
    }
    .icon-geo {
        color: #fff;
        background-image: linear-gradient(90deg, #1ee3cf, #4cadff);
        padding: .2rem .7rem;
        font-weight: 700;
        border-radius: 100%;
        path {
            fill: #fff;
        }
        &[color='secondary'] {
            background-image: none;
            background-color: #fff;
            path {
                fill: #4cadff;
            }
        }
    }
    .mapboxgl-canvas:focus {
        outline: none;
    }
    .mapboxgl-ctrl-attrib-button {
        display: none;
    }
    .mapboxgl-ctrl-group {
        background-image: linear-gradient(90deg, #1ee3cf, #4cadff);
        box-shadow: none;
        .mapboxgl-ctrl-attrib-inner {
            .mapbox-improve-map {
                display: none;
            }
        }
        .mapboxgl-ctrl-icon {
            display: none;
        }
        .mapboxgl-ctrl-zoom-in {
            &::before {
                content: "+";
                font-size: 2.6rem;
                font-weight: 500;
                color: #fff;
            }
        }
        .mapboxgl-ctrl-zoom-out {
            border-top-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            &::before {
                content: "-";
                font-size: 4rem;
                color: #fff;
                font-weight: 400;
                line-height: 1;
                margin-bottom: 0.5rem;
            }
        }
        .mapboxgl-ctrl-compass {
            display: none;
        }
    }
}
</style>