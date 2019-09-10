import React from 'react';
import '../Styles/App.css';
import Map from './Map.js';
import GalleryList from './GalleryList.js';
import { expoArtistScrape } from '../WebScrapers/Main.js';
const API_KEY = 'AIzaSyCzz9QPwU12Z9GG_c8UQ_WRA7zLeh40QWQ';

export default function App() {
  expoArtistScrape();
  return (
    <div className="App">
      <GalleryList />
      <Map API_KEY={API_KEY} />
    </div>
  );
}
