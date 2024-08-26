
import React from 'react';
import './App.css';
import Home from './components/Home';


function App() {

  return (
    <div className="App">
      <Home/>
      
      {/* <h1>Weather Data</h1>
      {weatherData && (
        <div>
          <p>City: {weatherData.location.name}</p>
           <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Temp Min : {weatherData.main.temp_min}</p>
        </div>
      )} */}
    </div>
  );
}

export default App;