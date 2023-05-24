import React from 'react'
import { useRouter } from "next/router";
import styles from "../style";
export default function MovieDetails() {
  const router = useRouter();
  const item = router.query;
    const { id, cover, name, rating, time, desc, starring, genres, tags, video } = item;
    
    return (
      <>
        <div className="box">
          
          <div className={` content  ${styles.flexCenter} ${styles.paddingX} `}>
            <div className="details col p-10">
              <h1>{name}</h1>
              <div className="rating md:flex">
                <div className="rate">
                  <i className="fas fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half"></i>
                </div>
                <label className="flex justify-start items-start">{time}</label>
              </div>
  
              <div className="cast">
                <h4>
                  <span>Starring </span>
                  {starring}
                </h4>
                <h4>
                  <span>Genres </span>
                  {genres}
                </h4>
                <h4>
                  <span>Tags </span>
                  {tags}
                </h4>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                  <button className="primary-btn">
                    <i className="fas fa-play"></i> Buy Ticket
                  </button>
              </div>
            </div>
            <div className="palyButton row ">
              <button>
                <div className="img">
                  <img src="./images/play-button.png" alt="" />
                  <img src="./images/play.png" className="change" />
                </div>
                WATCH TRAILER
              </button>
            </div>
          </div>
        </div>
      </>
    );
}
