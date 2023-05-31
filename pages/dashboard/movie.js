import React from "react";
import { homeData } from "../../dummyData/dummyData";
import {
  EditOutlined,
  DeleteOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { Button, Table } from "antd";
export default function Movie() {
  const dataSource = homeData
    .map((data, index) => {
      return {
        id: index,
        lists: data.id,
        email: data.name,
        status: data.date,
        image: data.cover,
      };
    })
    .filter(Boolean);

  const columns = [
    { title: "Lists", dataIndex: "lists" },
    {
      title: "Image",
      dataIndex: "image",
      render: (image) => {
        return <img src={image} alt="Movie Image" width={50} height={50} />;
      },
    },
    { title: "Email", dataIndex: "email" },
    { title: "Status", dataIndex: "status" },
    {
      title: "Actions",
      render: () => {
        return (
          <div className="grid grid-cols-2">
            <EditOutlined />
            <DeleteOutlined style={{ color: "red" }} />
          </div>
        );
      },
    },
  ];
  const runningMovies = (
    <div>
      <div className="flex justify-between ">
        <div>
          <h1 className="font-bold py-2 uppercase">Running Movie's</h1>
        </div>
        <div>
          <Button id="addMovieButton" type="text">
            Add Movie
            <PlusSquareOutlined />
          </Button>
        </div>
      </div>
      <div>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          rowKey={(record) => record.id}
        ></Table>
      </div>
    </div>
  );
  const upcommingMovies = (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold py-2 uppercase">Upcomming Movie's</h1>
        </div>
        <div>
          <Button id="addMovieButton" type="text">
            Add Movie
            <PlusSquareOutlined />
          </Button>
        </div>
      </div>
      <div>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          rowKey={(record) => record.id}
        ></Table>
      </div>
    </div>
  );
  const renderData = (
    <>
      <div className="grid grid-rows-2 gap-10 overflow-y-auto">
        <div>{runningMovies}</div>
        <div>{upcommingMovies}</div>
      </div>
    </>
  );
  return <>{renderData}</>;
}
