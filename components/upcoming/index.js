import React from "react";
import styles from "../../style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Mousewheel, Keyboard } from "swiper";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

import { homeData } from "../../dummyData/dummyData";
import MovieCard from "./movieCard";
import Link from "next/link";

export default function UpMovie() {
  return (
    <div className={` ${styles.paddingX} sm:${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} `}>
        <section className="text-gray-600 body-font">
          <div className="  mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="showName">UPCOMING MOVIE</h1>
                <div className="h-1 w-24 bg-red-700 rounded" />
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom
                prism food truck ugh squid celiac humblebrag.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              {homeData.map((item, index) => {
                return <MovieCard key={index} item={item} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
