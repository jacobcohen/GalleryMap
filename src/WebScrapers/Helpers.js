import axios from 'axios';
const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const GetData = async url => {
    try {
        let response = await axios.get(proxyurl + url);
        return await response.data;
    } catch (error) {
        console.log(error);
    }
}