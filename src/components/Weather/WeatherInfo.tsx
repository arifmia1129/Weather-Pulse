/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, List, Row } from "antd";

import "dayjs/locale/zh-cn";
import { getLocationInfo } from "../../utils/info";

export default function WeatherInfo({ weatherInfo }: any) {
  const { lat, lon } = getLocationInfo() || {};

  const { city } = weatherInfo || {};

  const data = [
    `Max Temperature: ${weatherInfo?.list[0]?.main?.temp_max}`,
    `Min Temperature: ${weatherInfo?.list[0]?.main?.temp_min}`,
    `Humidity: ${weatherInfo?.list[0]?.main?.humidity}`,
  ];

  return (
    <div>
      <Row style={{ margin: "10px 0", padding: "10px" }}>
        <Col xs={24} sm={24} md={10} lg={10}>
          <div style={{ padding: "5px" }}>
            <p>{weatherInfo?.list[0]?.dt_txt?.split(" ")[0]}</p>
            <h2 style={{ marginTop: "-10px" }}>
              {city?.name}-{city?.country}
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "-20px",
              }}
            >
              <img
                height={60}
                width={60}
                src={`https://openweathermap.org/img/wn/${weatherInfo?.list[0]?.weather[0]?.icon}.png`}
                alt=""
              />
              <h1>
                {Math.ceil(weatherInfo?.list[0]?.main?.temp)}
                <sup>o</sup>C
              </h1>
            </div>

            <p style={{ fontWeight: "bold", marginTop: "-20px" }}>
              Feels like {Math.ceil(weatherInfo?.list[0]?.main?.temp)}{" "}
              <sup>o</sup>C | {weatherInfo?.list[0]?.weather[0]?.main} |{" "}
              {weatherInfo?.list[0]?.weather[0]?.description
                .charAt(0)
                .toUpperCase() +
                weatherInfo?.list[0]?.weather[0]?.description.slice(1)}
            </p>
            <List
              style={{ width: "95%" }}
              size="small"
              header={
                <div>
                  <small style={{ fontWeight: "bold" }}>Overview</small>
                </div>
              }
              bordered
              dataSource={data}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={14} lg={14}>
          {lat && lon && (
            <iframe
              width="95%"
              height="100%"
              src={
                `https://maps.google.com/maps?q=${lat},${lon}&hl=es;z=14&amp;output=embed` +
                "&output=embed"
              }
            ></iframe>
          )}
        </Col>
      </Row>
    </div>
  );
}
