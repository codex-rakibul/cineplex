import React from "react";

export default function MovieCard({ item }) {
  const { cover, name, rating, time, desc, starring, genres, tags, video } =
    item;

  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100  rounded-lg">
        <img
          className="h-40 rounded w-full object-cover object-center "
          src={item?.cover}
          alt="content"
        />
        <div className="p-6">
          <h2 className="text-4xl text-gray-900 font-medium title-font mb-4">
            {item?.name}
          </h2>
          <p className="leading-relaxed text-base pb-4">{item?.desc}</p>
          <button className="btnB ">More Details</button>
        </div>
      </div>
    </div>
  );
}
