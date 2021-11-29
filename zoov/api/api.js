import axios from 'axios'
// let url = "http://localhost:10005/wp-json/wp/v2"

export default class Api {

    static async getBikes() {     
        let res = await axios.get("https://61a4b01c4c822c0017041db3.mockapi.io/bikes/bike");
        console.log(res);
    }
}