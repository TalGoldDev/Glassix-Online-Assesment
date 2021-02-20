import "./App.css";
import { React, useState, useEffect } from "react";
import UserData from "./components/UserDataDisplay";
import { MapContainer } from "./components/MapContainer";
import { findGeoLocation, findUsersIPAddress } from "./requests";

const App = () => {
  const [geoData, setGeoData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchUserData() {
      const usersIP = await findUsersIPAddress();
      const geoData = await findGeoLocation(usersIP);
      if (usersIP == "error" || geoData == "error") {
        setError(true);
        return false; // fetching failed.
      }
      setGeoData(geoData);
      setLoading(false);
      return true; // fetched data succesfully.
    }
    fetchUserData();
  }, []);

  useEffect(() => {
    async function retryFetchingData() {
      let nRetreis = 5;
      async function fetchUserData() {
        const usersIP = await findUsersIPAddress();
        const geoData = await findGeoLocation(usersIP);
        if (usersIP == "error" || geoData == "error") {
          setError(true);
          return false; // fetching failed.
        }
        setGeoData(geoData);
        setLoading(false);
        return true; // fetched data succesfully.
      }

      while (nRetreis > 0) {
        let fetchResult = await retryFetchingData();
        if (fetchResult) {
          break;
        }
        nRetreis--;
      }
    }
  }, [error]);

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
