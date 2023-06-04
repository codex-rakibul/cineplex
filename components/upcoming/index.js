import React from "react";
import styles from "../style";
import MovieCard from "./movieCard";
import { useSelector } from "react-redux";

export default function UpMovie() {
  const movieData = useSelector((state) => state.allMovieReducer.allMovieData);
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
              {movieData.map((item, index) => {
                return <MovieCard key={index} item={item} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
