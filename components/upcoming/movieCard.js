import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function MovieCard({ item }) {
  const { id, cover, name, rating, time, desc, starring, genres, tags, video } =
    item;

  return (
    <SwiperSlide className="p-10 text-white">
      <div className="grid gap-6 bg-black p-6 ">
        <div>{name}</div>
        <div>{desc}</div>
        <div>skjajk</div>
        <div>READ THE STORY</div>
      </div>
    </SwiperSlide>
  );
}
