import "./App.css";
import { React, useState } from "react";
import UserData from "./components/UserDataDisplay";
import { MapContainer } from "./components/MapContainer";
import useGeoData from "./hooks/useGeoData";

const App = () => {
  const [loading, setLoading] = useState(true);

  // custom hook for fetching geoData
  const [geoData, error] = useGeoData(setLoading);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error...</div>;
  } else {
    return (
      <div className="App">
        <div className="top-bar">
          {geoData.country}, {geoData.city}
        </div>
        <MapContainer location={geoData.location} />
        <UserData data={geoData} />

        <div className="background"></div>
      </div>
    );
  }
};

export default App;
