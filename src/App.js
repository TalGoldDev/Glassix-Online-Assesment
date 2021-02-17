import "./App.css";
import { React, useState, useEffect } from "react";
import UserData from "./components/UserDataDisplay";
import { MapContainer } from "./components/MapContainer";
import { findGeoLocation, findUsersIPAddress } from "./requests";

const App = () => {
  const [geoData, setGeoData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      const usersIP = await findUsersIPAddress();
      const geoData = await findGeoLocation(usersIP);

      setGeoData(geoData);
      setLoading(false);
    }
    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
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
