import React from "react";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Upload } from "antd";
import { useDispatch } from "react-redux";
import { addEditMovie } from "@/app/features/dashboardSlicer/editSlice";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const FormDisabledDemo = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div>
          <ArrowLeftOutlined
            className="text-2xl"
            onClick={() => dispatch(addEditMovie(false))}
          />
        </div>
        <div className="mt-10">
          <Form labelCol={{ span: 6 }} style={{ maxWidth: 600 }}>
            <Form.Item label="Name">
              <Input />
            </Form.Item>
            <Form.Item label="Time">
              <Input />
            </Form.Item>
            <Form.Item label="Starring">
              <Input />
            </Form.Item>
            <Form.Item label="RangePicker">
              <RangePicker className="w-[100%] " />
            </Form.Item>
            <Form.Item label="Description">
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button
                className="bg-white text-gray-600 py-5 flex justify-center items-center font-bold"
                block
              >
                Add Movie
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default () => <FormDisabledDemo />;
