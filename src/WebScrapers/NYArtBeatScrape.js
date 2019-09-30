import { GetData } from "./Helpers.js";

export default async function nyArtBeatScrape() {

    let xml = await GetData('https://www.nyartbeat.com/list/event_opening.en.xml');
    let galleryList = [];
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xml, 'text/xml');

    let events = xmlDoc.getElementsByTagName("Event");
    console.log(xmlDoc);

    for (let i = 0; i < events.length; i++){
        galleryList.push(nyArtBeatEventParse(events[i]));        
    }
}

function nyArtBeatEventParse(event){
    let artistAndEventName = event.getElementsByTagName('Name')[0].textContent;

    let galleryName = event.getElementsByTagName('Name')[1].textContent;

    let openingDate = new Date(event.getElementsByTagName('DateStart')[0].textContent);

    let address = event.getElementsByTagName('Address')[0].textContent;

    let description = event.getElementsByTagName('Description').textContent;
 
    let image = event.getElementsByTagName('Image')[0].getAttribute('src').split('-')[0];

    return {
        Image: image,
        ArtistAndEventName: artistAndEventName,
        OpeningDate: openingDate,
        GalleryName: galleryName,
        Address: address,
        Description: description
    }
}

//TODO: add gallery link