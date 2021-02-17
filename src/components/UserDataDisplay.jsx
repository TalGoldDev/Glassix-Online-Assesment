import React from "react";
import "./UserDataDisplay.css";

const UserDataDisplay = ({data}) => {
    console.log(data)
    return (
        <div className="user-data">
        <p>City: {data.city}</p>
        <p>Country: {data.country}</p>
        <p>latitude: {data.location.latitude}</p>
        <p>longitude: {data.location.longitude}</p>
      </div>
    )
}

export default UserDataDisplay
