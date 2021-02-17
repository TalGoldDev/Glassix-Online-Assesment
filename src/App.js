import { React, useState, useEffect } from "react";
import { MapContainer } from "./components/MapContainer";
import { findGeoLocation, findUsersIPAddress } from "./requests";

const App = () => {
  const [geoData, setGeoData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const usersIP = await findUsersIPAddress();
      const geoData = await findGeoLocation(usersIP);
      setGeoData(geoData);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div>
          <p>User's location:</p>
          <p>City: {geoData.city}</p>
          <p>Country:{geoData.country}</p>
          <p>latitude:{geoData.location.latitude}</p>
          <p>longitude:{geoData.location.longitude}</p>
        </div>

        {/* Display User Location On The Map - City & Country Names */}
        <MapContainer />
      </div>
    );
  }

  return <div></div>;
};

export default App;
