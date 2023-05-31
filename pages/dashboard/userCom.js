import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export default function UserCom() {
  const loginData = useSelector((state) => state.loginReducer);
  const dataSource = loginData
    .map((data, index) => {
      if (index !== 0) {
        return {
          id: index,
          users: data.name,
          email: data.email,
          status: data.status,
        };
      } else {
        return null; // Skip the first element
      }
    })
    .filter(Boolean);

  const columns = [
    { title: "Users", dataIndex: "users" },
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
  return (
    <div className="overflow-y-auto bg-black">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        rowKey={(record) => record.id}
        className="hoverable-table"
      ></Table>
    </div>
  );
}
