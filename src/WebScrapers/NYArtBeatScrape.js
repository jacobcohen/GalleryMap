import { GetData } from "./Helpers.js";
import cheerio from 'cheerio';
import { savedNYArtBeat } from '../Helpers/SavedNYArtBeat.js'




export default async function nyArtBeatScrape() {

    //let html = await GetData('http://www.nyartbeat.com/list/event_opening');
    let html = savedNYArtBeat;
    const $ = cheerio.load(html);

    let galleryList = [];
    let nodes = $('#leftpart').find('.longsmartlist');

    for (let i = 0; i < nodes.length; i++){
        let dayInfo = $(nodes[i]).prev()[0];
        galleryList.push(...await nyArtBeatDay($, dayInfo, $(nodes[i])));
    }

    console.log(galleryList);
}

async function nyArtBeatDay($, dayInfo, dailyGalleries){
    let openingDate = new Date(dayInfo.attribs.id.split('_')[1]);

    let dailyGalleriesResult = [];

    let dailyGalleriesList = $(dailyGalleries[0]);
    console.log(dailyGalleriesList);
    
    return dailyGalleriesResult;

}

    //artist, eventName, galleryName, location, description, pictures, galleryLink