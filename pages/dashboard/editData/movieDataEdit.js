import React, { useState } from "react";
import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addEditMovie,
  addNewMovie,
} from "@/app/features/dashboardSlicer/editSlice";
import {
  addEditMovieData,
  addNewMovieData,
  addSingleNewMovie,
  updateAllMovie,
  updateEditMovieData,
} from "@/app/features/dashboardSlicer/allMovieSlice";

const { TextArea } = Input;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export default function MovieDataEdit() {
  const { editMovie, addMovie } = useSelector((state) => state.editReducer);
  const { editMovieData, newMovieData, allMovieData } = useSelector(
    (state) => state.allMovieReducer
  );

  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    if (editMovie) {
      dispatch(updateEditMovieData({ fieldName, fieldValue }));
    } else {
      dispatch(addSingleNewMovie({ fieldName, fieldValue }));
    }
  };
  const handleUpadteMovie = () => {
    dispatch(updateAllMovie(editMovieData));
    dispatch(addEditMovieData(""));
    dispatch(addEditMovie(false));
    dispatch(addNewMovie(false));
  };
  const handleAddNewMovie = () => {
    dispatch(addEditMovieData(""));
    const movie = {
      ...newMovieData,
      id: uuidv4().slice(0, 5),
    };
    dispatch(addNewMovieData(movie));
    dispatch(addEditMovie(false));
    dispatch(addNewMovie(false));
  };
  const handleBackButton = () => {
    dispatch(addEditMovieData(""));
    dispatch(addEditMovie(false));
    dispatch(addNewMovie(false));
  };
  return (
    <>
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
                value={editMovieData?.name}
                onChange={handleNameChange}
              />
            </Form.Item>
            <Form.Item label="Time">
              <Input
                name="time"
                value={editMovieData?.time}
                onChange={handleNameChange}
              />
            </Form.Item>
            <Form.Item label="Starring">
              <Input
                name="starring"
                value={editMovieData?.starring}
                onChange={handleNameChange}
              />
            </Form.Item>
            <Form.Item label="Start Date">
              <DatePicker
                className="w-[100%] "
                placeholder={editMovieData?.movieDate}
                onChange={(date, dateString) =>
                  handleNameChange({
                    target: { name: "movieDate", value: dateString },
                  })
                }
              />
            </Form.Item>
            <Form.Item label="Description">
              <TextArea
                rows={4}
                name="desc"
                value={editMovieData?.desc}
                onChange={handleNameChange}
              />
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
            <Form.Item label="Movie Image Link">
              <Input
                name="cover"
                value={editMovieData?.cover}
                onChange={handleNameChange}
              />
            </Form.Item>
            <Form.Item label="Movie Trailer Link">
              <Input
                name="video"
                value={editMovieData?.video}
                onChange={handleNameChange}
              />
            </Form.Item>
            <Form.Item>
              <Button
                onClick={() => {
                  editMovie ? handleUpadteMovie() : handleAddNewMovie();
                }}
                className="bg-white text-gray-600 py-5 flex justify-center items-center font-bold"
                block
              >
                {editMovie ? "Update Movie" : "Add Movie"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
