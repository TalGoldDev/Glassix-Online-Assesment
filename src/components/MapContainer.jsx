import {React, useState} from 'react'

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const BASE_URL = 'https://www.google.com/maps/embed/v1/place';
  
export const getGoogleMapURL = (lat,lang) => {
	return `${BASE_URL}?key=${GOOGLE_API_KEY}&q=${lat},${lang}`;
};


export const MapContainer = () => {

	const googleUrl = getGoogleMapURL(31.9632,34.804);
  return (
    <div>
      <p>Map</p>
      <iframe
				src={googleUrl}
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
