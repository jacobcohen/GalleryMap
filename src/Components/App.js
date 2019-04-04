import React, { useRef } from 'react';
import '../Styles/App.css';
import Map from './Map.js';
import GalleryList from './GalleryList.js';
import Main from '../WebScrapers/Main.js';
const API_KEY = 'AIzaSyCzz9QPwU12Z9GG_c8UQ_WRA7zLeh40QWQ';

export default function App() {
  Main();
  return (
    <div className="App">
      <GalleryList />
      <Map API_KEY={API_KEY} />
    </div>
  );
}
