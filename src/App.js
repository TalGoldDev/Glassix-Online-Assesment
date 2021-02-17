import { findGeoLocation } from "./requests";

function App() {
  findGeoLocation("213.51.128.86");

  return (
    <div className="App">
      <header className="App-header"></header>
      {/* Query User Location */}

      {/* Display User Location On The Map - City & Country Names */}
    </div>
  );
}

export default App;
