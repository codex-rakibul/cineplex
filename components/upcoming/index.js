import React from "react";
import styles from "../../pages/style";
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
        <span className="showNameTrending">UPCOMMING MOVIE</span>
        {
          <Swiper
            navigation={true}
            slidesPerView={3}
            breakpoints={{
              1700: {
                slidesPerView: 3,
              },
              // when window width is >= 768px (md device)
              1086: {
                slidesPerView: 2,
              },
              // when window width is < 768px (small device)
              0: {
                slidesPerView: 1,
              },
            }}
            keyboard={{
              enabled: true,
            }}
            autoplay={{
              delay: 2000,
            }}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {homeData.map((item, index) => {
              const {
                id,
                cover,
                name,
                rating,
                time,
                desc,
                starring,
                genres,
                tags,
                video,
              } = item;
              return (
                <SwiperSlide
                  key={index}
                  className="md:p-10 md:pt-10 pt-6  text-white  "
                >
                  <div className="max-w-sm  bg-black  rounded-lg ">
                    <a href="#">
                      <img
                        className="rounded-t-lg"
                        src={cover}
                        alt=""
                      />
                    </a>
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {name}
                        </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                      </p>
                      <Link href="/ticket_booking">
                  <button className="btnB">
                    Details
                  </button>
                  </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        }
      </div>
    </div>
  );
}
