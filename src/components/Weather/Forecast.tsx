import ForecastTable from "./ForecastTable";
import ForecaseChart from "./ForecaseChart";
import { Col, Row } from "antd";

export default function Forecast() {
  return (
    <Row>
      <Col xs={24} sm={24} md={8} lg={8}>
        <ForecastTable />
      </Col>
      <Col xs={24} sm={24} md={16} lg={16}>
        <ForecaseChart />
      </Col>
    </Row>
  );
}
