// app/components/Main.js
"use client";

import React, { useState, useEffect } from 'react';
import Header from './Header';

const Main = () => {
  const apiKey = "3ca3252d0d3a8606bfc384a33771258a"; // Replace with your OpenWeather API key
  const [cities, setCities] = useState(['paris', 'villejuif', 'lyon', 'marseille', 'montpellier']);
  const [selectedCity, setSelectedCity] = useState('paris');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [selectedDay, setSelectedDay] = useState('today'); // State for selected day

  const getCurrentWeather = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`);
      if (!response.ok) throw new Error("Ville non trouvée");
      const data = await response.json();
      setCurrentWeather(data);
    } catch (error) {
      alert("Erreur: " + error.message);
    }
  };

  const getForecast = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=fr`);
      const data = await response.json();
      setForecast(data.list); // We will filter this later for the next 3 days
    } catch (error) {
      console.error("Erreur lors de la récupération des prévisions:", error);
    }
  };

  const handleSearch = async () => {
    const city = searchQuery.toLowerCase().trim();
    if (!cities.includes(city)) {
      setCities((prevCities) => [...prevCities, city]);
    }
    setSelectedCity(city);
    setSearchQuery("");
    await getWeatherData(city);
  };

  const getWeatherData = async (city) => {
    await getCurrentWeather(city);
    await getForecast(city);
  };

  useEffect(() => {
    getWeatherData(selectedCity);
  }, [selectedCity]);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const getSelectedDayForecast = () => {
    let dayOffset = 0; // Default to today
    if (selectedDay === 'tomorrow') dayOffset = 1;
    if (selectedDay === 'dayAfterTomorrow') dayOffset = 2;

    const selectedDate = new Date();
    selectedDate.setDate(selectedDate.getDate() + dayOffset);

    return forecast.filter((hour) => {
      const hourDate = new Date(hour.dt * 1000);
      return hourDate.getDate() === selectedDate.getDate() &&
             hourDate.getMonth() === selectedDate.getMonth() &&
             hourDate.getFullYear() === selectedDate.getFullYear();
    });
  };

  const getWeatherIcon = (icon) => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  return (
    <>
      <Header
        onSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <main>
        <section className="weather-container" onClick={toggleDetails}>
          <div className="city">
            <h2>{currentWeather ? currentWeather.name : "Chargement..."}</h2>
            <img src={currentWeather ? getWeatherIcon(currentWeather.weather[0].icon) : ""} alt={currentWeather ? currentWeather.weather[0].description : ""} />
            <p>🌡️ Température : {currentWeather ? `${currentWeather.main.temp} °C` : "N/A"}</p>
            <p>Conditions : {currentWeather ? currentWeather.weather[0].description : "N/A"}</p>
          </div>
        </section>

        <div className="day-selector">
  <label>Sélectionner la météo pour :</label>
  <div className="button-group">
    <button 
      className={`day-button ${selectedDay === 'today' ? 'active' : ''}`} 
      onClick={() => setSelectedDay('today')}
    >
      Aujourd'hui
    </button>
    <button 
      className={`day-button ${selectedDay === 'tomorrow' ? 'active' : ''}`} 
      onClick={() => setSelectedDay('tomorrow')}
    >
      Demain
    </button>
    <button 
      className={`day-button ${selectedDay === 'dayAfterTomorrow' ? 'active' : ''}`} 
      onClick={() => setSelectedDay('dayAfterTomorrow')}
    >
      Après-demain
    </button>
  </div>
</div>


        {showDetails && selectedCity && (
          <section className="weather-details">
            
            <h3>Détails pour {selectedDay === 'today' ? "aujourd'hui" : selectedDay === 'tomorrow' ? "demain" : "après-demain"} pour {selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1)}</h3>
            <ul>
              {getSelectedDayForecast().map((hour, index) => (
                <li key={index}>
                  <strong>{new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} :</strong> 
                  <img src={getWeatherIcon(hour.weather[0].icon)} alt={hour.weather[0].description} />
                  {hour.main.temp} °C - {hour.weather[0].description}
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </>
  );
};

export default Main;
