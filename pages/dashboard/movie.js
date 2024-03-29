import React from "react";
import {
  EditOutlined,
  DeleteOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { Button, Table, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addEditMovie, addNewMovie } from "@/app/features/dashboardSlicer/editSlice";
import {
  addEditMovieData,
  deleteMovie,
} from "@/app/features/dashboardSlicer/allMovieSlice";

export default function Movie() {
  const { allMovieData } = useSelector((state) => state.allMovieReducer);
  const dispatch = useDispatch();
  const handleEditMovie = (data) => {
    dispatch(addEditMovie(true));
    dispatch(addEditMovieData(data));
  };
  const handleDeleteMovie = (data) => {
    dispatch(deleteMovie(data.id));
    message.success("Successfully deleted");
    
  };
  const handleAddMovie = () => {
    dispatch(addNewMovie(true));
  };

  const dataSource = allMovieData
    .map((movieData, index) => {
      return {
        id: index,
        movieId: movieData.id,
        name: movieData.name,
        status: movieData.movieDate,
        image: movieData.cover,
        movieData: movieData,
      };
    })
    .filter(Boolean);

  const columns = [
    { title: "Movie Id", dataIndex: "movieId" },
    {
      title: "Image",
      dataIndex: "image",
      render: (image) => {
        return <img src={image} alt="Movie Image" width={100} height={100} />;
      },
    },
    { title: "Name", dataIndex: "name" },
    { title: "Status", dataIndex: "status" },
    {
      title: "Actions",
      render: (record) => {
        return (
          <div className="grid grid-cols-2">
            <EditOutlined onClick={() => handleEditMovie(record.movieData)} />
            <DeleteOutlined
              style={{ color: "red" }}
              onClick={() => handleDeleteMovie(record.movieData)}
            />
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
          <Button
            id="addMovieButton"
            type="text"
            onClick={() => handleAddMovie()}
          >
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
          className="hoverable-table"
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
          <Button
            id="addMovieButton"
            type="text"
            onClick={() => handleAddMovie()}
          >
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
          className="hoverable-table"
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
