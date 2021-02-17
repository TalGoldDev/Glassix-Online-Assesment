const IPDATA_API_KEY = process.env.REACT_APP_IPDATA_KEY;
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const userIPRequestURL = () =>
  `https://api.ipdata.co/?api-key=${IPDATA_API_KEY}`;

const geoLocationRequestURL = (ipAddress) =>
  `https://api.ipdata.co/${ipAddress}?api-key=${IPDATA_API_KEY}`;

export const findUsersIPAddress = async () => {
  const res = await fetch(userIPRequestURL());
  const data = await res.json();

  return data.ip;
};

export const findGeoLocation = async (ipAddress) => {
  const res = await fetch(geoLocationRequestURL(ipAddress));
  const data = await res.json();

  const geoLocation = {
    city: data.city,
    country: data.country_name,
    location: { latitude: data.latitude, longitude: data.longitude },
  };

  return geoLocation;
};
