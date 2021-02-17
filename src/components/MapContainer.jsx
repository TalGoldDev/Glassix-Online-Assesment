import React from 'react'
import {getGoogleMapURL} from '../requests';
import "./MapContainer.css"

export const MapContainer = (props) => {

  const googleMapURL = getGoogleMapURL(
   props.location.latitude,
   props.location.longitude
  );

  return (
    <div className="map-container">
      <iframe
      className="google-map"
				src={googleMapURL}
				title="google-map"
        frameborder="0"

        style={{border:0}}
			/>
    </div>
  )
}

export default MapContainer;
