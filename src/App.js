
// import { useEffect } from 'react';
// import './App.css';

// function App() {

//   const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
//   const options = {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': '84f84cce6dmshf17a7f32e9992f9p132756jsna785bcedde18',
//       'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
//     }
//   };

//   try {
//     const response =  fetch(url, options);
//     const result =  response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
//       const options = {
//         method: 'GET',
//         headers: {
//           'x-rapidapi-key': '84f84cce6dmshf17a7f32e9992f9p132756jsna785bcedde18',
//           'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
//         }
//       };

//       try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchWeatherData();
//   }, []);


//   return (
//     <div className="App">


//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to handle any errors

  useEffect(() => {
    const fetchWeatherData = async () => {
      const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '84f84cce6dmshf17a7f32e9992f9p132756jsna785bcedde18',
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data); // Save the data to state
        console.log(data);
      } catch (error) {
        setError(error.message);
       } 
      finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return <div className="App">Loading...</div>;
  }

  if (error) {
    return <div className="App">Error: {error}</div>;
  }

  return (
    <div className="App">
      <h1>Weather Data</h1>
      {weatherData && (
        <div>
          <p>City: {weatherData.location.name}</p>
           <p>Temperature: {weatherData.current.temp_c}°C</p>
          {/*<p>Weather: {weatherData.weather[0].description}</p>
          <p>Temp Min : {weatherData.main.temp_min}</p> */}
        </div>
      )}
    </div>
  );
}

export default App;