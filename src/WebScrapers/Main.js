import cheerio from 'cheerio';
import axios from 'axios';
import { expoArtistRawHtml } from "../Helpers/SavedHtml.js"
const proxyurl = "https://cors-anywhere.herokuapp.com/";


const getData = async url => {
    try {
        let response = await axios.get(proxyurl + url);
        return await response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function expoArtistScrape() {
    //let html = await getData('https://expoartist.org/events.cfm?pid=2&sort=3&hoodid=53171');
    let html = expoArtistRawHtml;
    const $ = cheerio.load(html);
    var galleryList = [];
    var nodes = $('#resultsdiv').find('a');
    
    const STARTING_NODE = 4;
    for (let i = STARTING_NODE; i < nodes.length; i++) {
        galleryList.push(expoArtistSingle(nodes[i]));
    }

}

function expoArtistSingle(item) {
    console.log(item);
}

export function nyArtBeatScrape() {

    let html = getData('http://www.nyartbeat.com/list/event_opening');
    const $ = cheerio.load(html);

} 

    //artist, eventName, galleryName, location, description, pictures, galleryLink
class GalleryEvent {
    constructor(artist, galleryName, location) {
        this.artist = artist;
        this.galleryName = galleryName;
        this.location = location;
    }
}