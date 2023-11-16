/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { WeatherContext } from "../../pages/Weather/Weather";
import { Table } from "antd";
import { convertToAMPM } from "../../utils/info";

export default function ForecastTable() {
  const { weatherInfo } = useContext(WeatherContext);

  const columns = [
    {
      title: "Time",
      dataIndex: "date",
      render: (data: any) => {
        return <p>{convertToAMPM(data.split(" ")[1])}</p>;
      },
    },
    {
      title: "Tempareture",
      render: (data: any) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={`https://openweathermap.org/img/wn/${data?.code}.png`}
              alt=""
            />
            <p>
              {data?.temparature}
              <sup>o</sup>
            </p>
          </div>
        );
      },
    },
    {
      title: "Humidity",
      dataIndex: "humidity",
    },
  ];

  const data = weatherInfo?.list?.splice(1, 6).map((info: any) => {
    return {
      date: info?.dt_txt,
      temparature: Math.ceil(info?.main?.temp),
      humidity: Math.ceil(info?.main?.humidity),
      code: info?.weather[0]?.icon,
    };
  });

  return (
    <Table
      columns={columns}
      pagination={false}
      dataSource={data}
      size="small"
    />
  );
}
