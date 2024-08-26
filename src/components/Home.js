import React, { useState } from 'react'
import './Home.css';

export default function Home(props) {

    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // const fetchWeatherData = async (cityName) => {
    //     const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(cityName)}`;
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'x-rapidapi-key': '84f84cce6dmshf17a7f32e9992f9p132756jsna785bcedde18',
    //             'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    //         }
    //     };

    //     try {
    //         setLoading(true);
    //         const response = await fetch(url, options);
    //         if (!response.ok) {
    //             throw new Error('Failed to fetch weather data');
    //         }
    //         const data = await response.json();
    //         setWeatherData(data);
    //         setError(null);
    //         console.log(data);
    //     } catch (error) {
    //         setError(error.message);
    //         setWeatherData(null);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // const handleSearch = () => {
    //     if (city) {
    //         fetchWeatherData(city);
    //     }
    // };

    return (


        <div className="weather-card">

            <h1>Weather Data</h1>

            <div className="search">
                <input
                    type="search"
                    placeholder="Enter city name"
                    spellCheck="false"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button onClick="">
                    <i className="bi bi-search"></i>
                </button>
            </div>

            <div className="weather">

                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {weatherData && (
                    <>

                        <img className="weather-icon" src="https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png" alt="logo" />
                        <h1 className="temp">{weatherData.current.temp_c}°C </h1>
                        <h2 className="city">{weatherData.location.name} / {weatherData.location.country}</h2>
                        <div className="details">
                            <div className="col">
                                <img className="humi" src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png" alt="logo" />
                                <div className="info">
                                    <p className="humidity">{weatherData.current.humidity}%</p>
                                    <p>Humidity</p>
                                </div>
                            </div>
                            <div className="col">
                                <img src="https://cdn-icons-png.flaticon.com/512/136/136712.png" alt="logo" />
                                <div className="info">
                                    <p className="wind">{weatherData.current.wind_kph}km/h</p>
                                    <p>Wind Speed</p>
                                </div>
                            </div>

                        </div>
                    </>
                )}
            </div>
        </div>

    )
}
