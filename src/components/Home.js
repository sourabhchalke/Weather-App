import React, { useEffect, useState } from 'react'
import HomeCss from './Home.css';

export default function Home(props) {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // DATA FETCHING
    // useEffect(() => {
    //     const fetchWeatherData = async () => {
    //         const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
    //         const options = {
    //             method: 'GET',
    //             headers: {
    //                 'x-rapidapi-key': '84f84cce6dmshf17a7f32e9992f9p132756jsna785bcedde18',
    //                 'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    //             }
    //         };

    //         try {
    //             const response = await fetch(url, options);
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch weather data');
    //             }
    //             const data = await response.json();
    //             setWeatherData(data); // Save the data to state
    //             console.log(data);
    //         } catch (error) {
    //             setError(error.message);
    //         }
    //         finally {
    //             setLoading(false); // Stop loading spinner
    //         }
    //     };

    //     fetchWeatherData();
    // }, []);

    return (
        // <div>
        //     <div className="w3-quarter">
        //         {/* <!-- Division 1 --> */}
        //     </div>

        //     {/* <!-- Segundo cuarto de la página --> */}
        //     <div className="caja_meteorologia_iz w3-quarter">
        //         {/* <!-- Contenedor de información de la meteorología actual --> */}
        //         <div>
        //             <h2>Tuesday</h2>
        //             {/* <!-- Día de la semana --> */}
        //             <p>15 Jan 2023</p>
        //             {/* <!-- Fecha --> */}
        //             <p>Paris, FR</p>
        //             {/* <!-- Ciudad y país --> */}

        //             <h1 className="h1_left">29°C</h1>
        //             {/* <!-- Temperatura actual --> */}
        //             <h3 className="h3_left">Soleado</h3>
        //             {/* <!-- Descripción del clima actual --> */}
        //         </div>
        //     </div>

        //     {/* <!-- Tercer cuarto de la página --> */}
        //     <div className="caja_meteorologia_de center w3-quarter">
        //         {/* <!-- Tabla de información detallada sobre la meteorología actual --> */}
        //         <table>
        //             <tbody>
        //                 <tr>
        //                     <th>PRECIPITATION</th>
        //                     <td>0%</td>
        //                 </tr>
        //                 <tr>
        //                     <th>HUMIDITY</th>
        //                     <td>0%</td>
        //                 </tr>
        //                 <tr>
        //                     <th>WIND</th>
        //                     <td>0 km/h</td>
        //                 </tr>
        //             </tbody>
        //             <tfoot>
        //                 {/* <!-- Pie de la tabla, vacío en este caso --> */}
        //             </tfoot>
        //         </table>

        //         {/* <!-- Pronóstico del clima para la semana --> */}
        //         <div className="clima_Semana">
        //             <ul className="center">
        //                 <li className="li_active">
        //                     <span className="fas fa-sun fa-2x"></span>
        //                     {/* <!-- Icono --> */}
        //                     <span>Tue</span>
        //                     {/* <!-- Abreviación del día de la semana --> */}
        //                     <span className="span_temperature">29°C</span>
        //                     {/* <!-- Temperatura máxima --> */}
        //                 </li>
        //                 <li className="li_active_temp">
        //                     <span className="fas fa-cloud-moon fa-2x"></span>
        //                     {/* <!-- Icono --> */}
        //                     <span>Wed</span>
        //                     <span className="span_temperature">21°C</span>
        //                 </li>
        //                 <li className="li_active_temp">
        //                     <span className="fas fa-cloud-sun-rain fa-2x"></span>
        //                     {/* <!-- Icono --> */}
        //                     <span>Thu</span>
        //                     <span className="span_temperature">08°C</span>
        //                 </li>
        //                 <li className="li_active_temp">
        //                     <span className="fas fa-cloud-rain fa-2x"></span>
        //                     {/* <!-- Icono --> */}
        //                     <span>Fry</span>
        //                     <span className="span_temperature">19°C</span>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div id="div_Form">
        //             <form>
        //                 <input type="button" value="Change Location" className="change_Location center" />
        //             </form>
        //         </div>
        //     </div>
        //     <div className="w3-quarter">
        //         {/* <!-- Division 4 --> */}
        //     </div>
        // </div>

        <div className="weather-card">

            <h1>Weather Data</h1>
            {/* {weatherData && (
                <div>
                    <p>City: {weatherData.location.name}</p>
                    <p>Temperature: {weatherData.current.temp_c}°C</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <p>Temp Min : {weatherData.main.temp_min}</p>
                </div>
            )} */}

            <div className="search">
                <input type="search" placeholder="enter city name" spellCheck="false" />
                <button>
                    <i className="bi bi-search"></i>
                </button>
            </div>
            <div className="weather">
                <img className="weather-icon" src="https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png" alt="..." />
                <h1 className="temp">50°C </h1>
                <h2 className="city">New York</h2>
                <div className="details">
                    <div className="col">
                        <img className="humi" src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png" />
                        <div className="info">
                            <p className="humidity">50%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className="col">
                        <img src="https://cdn-icons-png.flaticon.com/512/136/136712.png" />
                        <div className="info">
                            <p className="wind">15 km/h</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
