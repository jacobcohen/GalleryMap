import React, { useRef } from 'react';
import { useGoogleMap, useMap } from "../Helpers/Hooks";

const initialConfig = {
    zoom: 16,
    center: { lat: 40.748582, lng: -74.001439 }
};

export default function App({API_KEY}) {
    const googleMap = useGoogleMap(API_KEY);
    const mapContainerRef = useRef(null);
    useMap({ googleMap, mapContainerRef, initialConfig });
    return (
        <div
          style={{
            height: "100vh",
            width: "60%",
            float: "right"
          }}
          ref={mapContainerRef}  />
    );
  }