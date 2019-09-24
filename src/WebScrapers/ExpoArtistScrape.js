import { GetData } from "./Helpers.js";
import cheerio from 'cheerio';
import { expoArtistRawHtml } from "../Helpers/SavedHtml.js"
import { expoArtistGalleryRawHtml } from "../Helpers/SavedExpoArtistGallery.js"

const expoArtistAddress = "https://expoartist.org/site/";

export default async function ExpoArtistScrape() {
    //let html = await GetData('https://expoartist.org/site/events.cfm?mode=1&divid=2&guests=10&&eventsort=3');

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

    //let galleryLink = infoNode.children[1].attribs.onclick.split("'")[1] + "0";

    //let html = await GetData(expoArtistAddress + galleryLink);

    let html = expoArtistGalleryRawHtml;
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