import React from "react";
import { Table, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { addEdituser } from "@/app/features/dashboardSlicer/editSlice";
import { addEditUser, deleteUser } from "@/app/features/loginSlicer/loginSlice";

export default function UserCom() {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.loginReducer);

  const handleEditData = (userData) => {
    dispatch(addEditUser(userData));
    dispatch(addEdituser(true));
  };
  const handleDeleteData = (userId) => {
    dispatch(deleteUser(userId));
    message.success("Successfully deleted");
  };
  const dataSource = loginData.allUserData
    .map((data, index) => {
      if (index !== 0) {
        return {
          id: index,
          userId: data.userId,
          users: data.name,
          email: data.email,
          status: data.status,
          data: data,
        };
      } else {
        return null;
      }
    })
    .filter(Boolean);

  const columns = [
    { title: "User Id", dataIndex: "userId" },
    { title: "Users", dataIndex: "users" },
    { title: "Email", dataIndex: "email" },
    { title: "Status", dataIndex: "status" },
    {
      title: "Actions",
      render: (record) => {
        return (
          <div className="grid grid-cols-2">
            <EditOutlined onClick={() => handleEditData(record.data)} />
            <DeleteOutlined
              style={{ color: "red" }}
              onClick={() => handleDeleteData(record.data.userId)}
            />
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
