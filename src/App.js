import React, { useRef } from 'react';
import './App.css';
import { useGoogleMap, useMap } from "./Hooks";
const API_KEY = 'AIzaSyCzz9QPwU12Z9GG_c8UQ_WRA7zLeh40QWQ';

const initialConfig = {
  zoom: 15,
  center: { lat: 40.747047, lng: -73.997910 }
};

export default function App() {
  const googleMap = useGoogleMap(API_KEY);
  const mapContainerRef = useRef(null);
  useMap({ googleMap, mapContainerRef, initialConfig });
  return (
    <div className="App">
      <div
        style={{
          height: "100vh",
          width: "100%"
        }}
    ref={mapContainerRef}
  />
    </div>
  );
}
