/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import SearchLocation from "../../components/Weather/SearchLocation";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div style={{ maxWidth: "1280px", backgroundColor: "#fff", padding: 5 }}>
        <SearchLocation />
      </div>
    </div>
  );
}
