import cheerio from 'cheerio';
import ExpoArtistScrape from './ExpoArtistScrape.js';
import NYArtBeatScrape from './NYArtBeatScrape.js';

export default async function ScrapeAllData(){
    //await ExpoArtistScrape();
    await NYArtBeatScrape();

}