/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select } from "antd";
export default function SearchLocation({
  onChange,
  onSearch,
  loading,
  availableLocations,
}: any) {
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
      style={{ borderWidth: "1px", borderColor: "black" }}
    />
  );
}
