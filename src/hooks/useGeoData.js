import { useState, useEffect } from "react";
import { findGeoLocation, findUsersIPAddress } from "../requests";

export default function useGeoData(setLoading) {
  const [error, setError] = useState(false);
  const [geoData, setGeoData] = useState({});

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    async function retryFetchingData() {
      let nRetries = 5;

      while (nRetries > 0) {
        let fetchResult = await fetchUserData();
        if (fetchResult) {
          break;
        }
        nRetries--;
      }
    }
    retryFetchingData();
  }, [error]);

  async function fetchUserData() {
    const usersIP = await findUsersIPAddress();
    const geoData = await findGeoLocation(usersIP);
    if (usersIP === "error" || geoData === "error") {
      setError(true);
      return false; // fetching failed.
    }
    setGeoData(geoData);
    setLoading(false);
    return true; // fetched data succesfully.
  }

  return [geoData, error];
}
