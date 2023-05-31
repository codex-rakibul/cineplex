import React from "react";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addEditMovie } from "@/app/features/dashboardSlicer/editSlice";

const { TextArea } = Input;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export default function MovieDataEdit() {
  const {editMovieData} = useSelector((state) => state.allMovieReducer);
 console.log(editMovieData[0]?.movieDate)
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
              <Input value={editMovieData[0]?.name}/>
            </Form.Item>
            <Form.Item label="Time">
              <Input value={editMovieData[0]?.time}/>
            </Form.Item>
            <Form.Item label="Starring">
              <Input value={editMovieData[0]?.starring}/>
            </Form.Item>
            <Form.Item label="Start Date">
              <DatePicker className="w-[100%] " placeholder={editMovieData[0]?.movieDate} />
            </Form.Item>
            <Form.Item label="Description">
              <TextArea rows={4} value={editMovieData[0]?.desc}/>
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
                {editMovieData[0]?"Update Movie":"Add Movie"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};


