import {React, useState} from 'react'
import {getGoogleMapURL} from '../requests';


export const MapContainer = (props) => {

  const googleMapURL = getGoogleMapURL(
   props.location.latitude,
   props.location.longitude
  );

  return (
    <div>
      <p>Map</p>
      <iframe
				src={googleMapURL}
				title="google-map"
				width="400vw"
				height="400vh"
        frameborder="0"
        style={{border:0}}
			/>
    </div>
  )
}

export default MapContainer;
