import cheerio from 'cheerio';
import axios from 'axios';


const getData = async url => {
    try {
        const html = await axios(url);
        console.log(html);
    } catch (error) {
        console.log(error);
    }


}

export default function nyArtBeatScrape() {

    getData('http://www.nyartbeat.com/list/event_opening');


} 