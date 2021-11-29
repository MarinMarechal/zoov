import axios from 'axios'
// let url = "http://localhost:10005/wp-json/wp/v2"

export default class Api {

    static async getBikes() {     
        let res = await axios.get("https://61a4b01c4c822c0017041db3.mockapi.io/bikes/bike");
        return res.data;
    }

    static deleteBike(id) {     
        axios.delete(`https://61a4b01c4c822c0017041db3.mockapi.io/bikes/bike/${id}`);
    }

    static addBike(newBike) {
        console.log(newBike);

        // lat: 48.891737326315074
        // long :2.2900362657831117
        axios.post("https://61a4b01c4c822c0017041db3.mockapi.io/bikes/bike", newBike);
    }
}