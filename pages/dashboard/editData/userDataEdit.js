import React from "react";
import { ArrowLeftOutlined} from "@ant-design/icons";
import { Button,Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addEdituser } from "@/app/features/dashboardSlicer/editSlice";
import {
  updateAllUser,
  updateEditUser,
} from "@/app/features/loginSlicer/loginSlice";

export default function UserDataEdit() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.loginReducer.editUser);

  const handleUserChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    dispatch(updateEditUser({ fieldName, fieldValue }));
  };

  const handleBackButton = () => {
    dispatch(addEdituser(false));
  };

  const handleUpadteUser = () => {
    dispatch(updateAllUser(userData));
    dispatch(addEdituser(false));
    message.success("Updated successfully");
  };
  const renderData = (
    <div>
      <div>
        <ArrowLeftOutlined
          className="text-2xl"
          onClick={() => handleBackButton()}
        />
      </div>
      <div className="mt-10">
        <Form labelCol={{ span: 6 }} style={{ maxWidth: 600 }}>
          <Form.Item label="Name">
            <Input
              name="name"
              value={userData?.name}
              onChange={handleUserChange}
            />
          </Form.Item>
          <Form.Item label="Email Id">
            <Input
              name="email"
              value={userData?.email}
              onChange={handleUserChange}
            />
          </Form.Item>
          <Form.Item>
            <Button
              onClick={() => {
                handleUpadteUser();
              }}
              className="bg-white text-gray-600 py-5 flex justify-center items-center font-bold"
              block
            >
              Update User Data
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
  return <>{renderData}</>;
}
