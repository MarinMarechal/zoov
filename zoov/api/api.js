import axios from 'axios'

export default class Api {

    static async getBikes() {     
        let res = await axios.get("https://61a4b01c4c822c0017041db3.mockapi.io/bikes/bike");
        return res.data;
    }

    static deleteBike(id) {   
        axios.delete(`https://61a4b01c4c822c0017041db3.mockapi.io/bikes/bike/${id}`);
    }

    static async addBike(newBike) {
        let res = await axios.post("https://61a4b01c4c822c0017041db3.mockapi.io/bikes/bike", newBike);
        return res.data
    }
}