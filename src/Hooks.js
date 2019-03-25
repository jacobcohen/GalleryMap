import { useEffect, useState } from "react";
import GoogleMapsApiLoader from "google-maps-api-loader";

export const useGoogleMap = apiKey => {
  const [googleMap, setGoogleMap] = useState(null);
  useEffect(() => {
    GoogleMapsApiLoader({ apiKey }).then(google => {
      setGoogleMap(google);
    });
  }, []); 
  return googleMap;
};


export const useMap = ({ googleMap, mapContainerRef, initialConfig }) => {
  const [map, setMap] = useState(null);
  useEffect(
    () => {
      if (!googleMap || !mapContainerRef.current) {
        return;
      }
      const map = new googleMap.maps.Map(
        mapContainerRef.current,
        initialConfig
      );
      setMap(map);
    },
    [googleMap, mapContainerRef]
  );

  return map;
};
