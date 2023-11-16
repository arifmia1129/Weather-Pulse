/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row } from "antd";

import "dayjs/locale/zh-cn";
import { getLocationInfo } from "../../utils/info";

export default function WeatherInfo({ weatherInfo }: any) {
  const { lat, lon } = getLocationInfo() || {};

  return (
    <div>
      <Row style={{ margin: "10px 0", padding: "10px" }}>
        <Col xs={24} sm={24} md={8} lg={8}>
          <div style={{ padding: "5px" }}>
            <p>{weatherInfo?.list[0]?.dt_txt?.split(" ")[0]}</p>
            <h1>{weatherInfo?.city?.name}</h1>
          </div>
        </Col>
        <Col xs={24} sm={24} md={16} lg={16}>
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
