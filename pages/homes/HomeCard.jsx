import React from "react";
import styles from "../../components/style";
import Link from "next/link";

const HomeCard = ({ item }) => {
  const {  rating, time, desc, starring, genres, tags, video } =
    item;

  const renderData = (
    <div className="box">
      <div className="coverImage">
        <img src={item?.cover} alt="" />
      </div>
      <div className={` content  ${styles.flexCenter} ${styles.paddingX} `}>
        <div className={`${styles.boxWidth} flex justify-between `}>
          <div className="details col">
            <h1>{item?.name}</h1>
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
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Link href="/ticket_booking">
                <button className="btnB ">Buy Ticket</button>
              </Link>
              <Link href="/details">
                <button className=" btnD">Details</button>
              </Link>
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
    </div>
  );
  return <div>{renderData}</div>;
};

export default HomeCard;
