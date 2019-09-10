import cheerio from 'cheerio';
import axios from 'axios';
import { expoArtistRawHtml } from "../Helpers/SavedHtml.js"
import { expoArtistGalleryRawHtml } from "../Helpers/SavedExpoArtistGallery.js"
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const expoArtistAddress = "https://expoartist.org/site/";


const getData = async url => {
    try {
        let response = await axios.get(proxyurl + url);
        return await response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function expoArtistScrape() {
    //let html = await getData('https://expoartist.org/site/events.cfm?mode=1&divid=2&guests=10&&eventsort=3');

    let html = expoArtistRawHtml;
    const $ = cheerio.load(html);
    var galleryList = [];
    var nodes = $('#results').find('tr').find('td');
    console.log(nodes);

    for (let i = 2; i < nodes.length; i += 3) {
        galleryList.push(await expoArtistSingle(nodes[i - 2], nodes[i - 1]));
    }

    console.log(galleryList);
}


async function expoArtistSingle(imageNode, infoNode) {
    let image = imageNode.children[1].attribs.src;

    let artistAndEventName = infoNode.children[1].children[0].data.trim();

    let openingDate = new Date(infoNode.children[3].children[0].data.split("-")[0].trim());

    let galleryName = infoNode.children[5].children[0].data.trim();

    let galleryLink = infoNode.children[1].attribs.onclick.split("'")[1] + "0";

    let html = await getData(expoArtistAddress + galleryLink);

    //let html = expoArtistGalleryRawHtml;
    const $ = cheerio.load(html);

    var address = $('font')[1].children[0].data;
    
    return {
        Image: image,
        ArtistAndEventName: artistAndEventName,
        OpeningDate: openingDate,
        GalleryName: galleryName,
        Address: address
    }
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