/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select } from "antd";
import axios from "axios";
import { useState } from "react";

export default function SearchLocation() {
  const [availableLocations, setAvailableLocations] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const token = process.env.TOKEN;

  const handleSearchLocation = async (value: string) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${token}`
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
  return (
    <Select
      size="large"
      showSearch
      className="select-address"
      placeholder="Select a location"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      loading={loading}
      filterOption={false}
      options={availableLocations}
    />
  );
}
