import { GoogleMap, LoadScript, StandaloneSearchBox, Marker } from "@react-google-maps/api";
import React, { useCallback } from "react";
import BeatLoader from "react-spinners/BeatLoader"

declare global {
  interface Window {
    google: any
  }
}

type Props = {
  locationName: string
}

  export const Maps = ({ locationName }: Props) => {
    const [map, setMap] = React.useState<google.maps.Map>()
    const [markerPosition, setMarkerPosition] = React.useState<google.maps.LatLng>()
    

    const onMapLoad = useCallback((map: google.maps.Map) => {
      setMap(map);
      const placesService = new window.google.maps.places.PlacesService(map);
      placesService.textSearch(
        {
          query: locationName,
        },
        (results: google.maps.places.PlaceResult[], status: google.maps.places.PlacesServiceStatus) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
            const location = results[0].geometry?.location;
            setMarkerPosition(location);
            map.panTo(location!);
          }
        }
      )
    }, [locationName]);


    return (
      <div className="map border-4 border-[#3AB8C7] rounded-lg h-96 mb-16 flex justify-center items-center ">
        <LoadScript
          googleMapsApiKey={"API_KEY_API"}
          libraries={["places"]} loadingElement={<BeatLoader color="#3AB8C7" />}
        >
          <GoogleMap
            onLoad={onMapLoad}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={markerPosition}
            zoom={15}
          >
            <div className="address">
              <StandaloneSearchBox
              >
                <input
                  className="addressField"
                  placeholder="Digite o endereço final"
                />
              </StandaloneSearchBox>
            </div>
            {markerPosition && <Marker position={markerPosition} />}
          </GoogleMap>
        </LoadScript>
      </div>
    );
  };

