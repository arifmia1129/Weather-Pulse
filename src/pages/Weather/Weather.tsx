/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import SearchLocation from "../../components/Weather/SearchLocation";
import WeatherInfo from "../../components/Weather/WeatherInfo";
import "./Weather.css";
import { getAccessToken, getLocationInfo } from "../../utils/info";
import axios from "axios";

export const WeatherContext = createContext({});

export default function Weather() {
  // Weather State
  const [locationInfo, setLocationInfo] = useState<null | object>(null);
  const [weatherInfo, setWeatherInfo] = useState<Record<string, any> | null>(
    null
  );
  //Search State
  const [availableLocations, setAvailableLocations] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Search Information
  const handleSearchLocation = async (value: string) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${getAccessToken()}`
      );

      if (Array.isArray(data) && data.length) {
        const modifiedData = data.map((ele: any) => ({
          label: ele.name + "-" + ele.country + "-" + ele.state,
          value: ele.lat + "-" + ele.lon,
        }));

        setAvailableLocations(modifiedData);
      } else {
        setAvailableLocations([]); // Clear options if no results
      }
    } catch (error) {
      //   console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (value: string) => {
    localStorage.setItem("location", JSON.stringify(value));
  };

  const onSearch = (value: string) => {
    if (value.trim() !== "") {
      handleSearchLocation(value);
    }
  };

  // Weather Information
  function success(position: any) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    localStorage.setItem(
      "location",
      JSON.stringify(`${latitude}-${longitude}`)
    );

    setLocationInfo({
      lat: latitude,
      lon: longitude,
    });
  }

  function error() {
    setLocationInfo({
      lat: 25.331295,
      lon: 89.5479718,
    });
  }

  const handleGetWeatherInfo = async () => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${
        (locationInfo as any).lat
      }&lon=${(locationInfo as any).lon}&appid=${getAccessToken()}`
    );
    console.log(data);
    setWeatherInfo(data);
  };

  useEffect(() => {
    const res = getLocationInfo();

    if (!res) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      setLocationInfo(res);
    }
  }, []);

  useEffect(() => {
    if (locationInfo) {
      handleGetWeatherInfo();
    }
  }, [locationInfo]);

  const value = {};

  return (
    <WeatherContext.Provider value={value}>
      <div className="container">
        <div
          style={{ maxWidth: "1280px", backgroundColor: "#fff", padding: 5 }}
        >
          <SearchLocation
            onChange={onChange}
            onSearch={onSearch}
            loading={loading}
            availableLocations={availableLocations}
          />
          <WeatherInfo />
        </div>
      </div>
    </WeatherContext.Provider>
  );
}
