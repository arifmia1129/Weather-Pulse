import { Select } from "antd";
import "./Weather.css";
import { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const [availableLocations, setAvailableLocations] = useState([]);
  console.log();

  const handleSearchLocation = async () => {
    const { data } = await axios.get();
  };

  const onChange = (value: string) => {
    setSearchTerm(value);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  return (
    <div className="container">
      <div style={{ maxWidth: "1280px" }}>
        <Select
          size="large"
          showSearch
          className="select-address"
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          // filterOption={filterOption}
          options={availableLocations}
        />
      </div>
    </div>
  );
}
