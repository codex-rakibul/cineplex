import React from "react";
import styles from "../../components/style";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addComponent } from "@/app/features/navComponentSlicer/navComponentSlice";
import { useRouter } from "next/router";

const HomeCard = ({ item }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  if (!item) {
    return null; // or display a fallback UI if necessary
  }
  const { cover, name, rating, time, desc, starring, genres, tags, video } =
    item;
  const renderData = (
    <div className="box h-fit relative">
      
        <div className="coverImage h-full">
          <img src={cover} alt="" />
        </div>
        <div className={` content  ${styles.flexCenter} ${styles.paddingX} `}>
          <div className={`${styles.boxWidth}  flex justify-between my-12`}>
            <div className="details col">
              <p className="mainLogo uppercase">{item?.name}</p>
              <div className="rating ">
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
              <div className="grid grid-cols-2 gap-4 md:pb-20 pb-0 ">
                <div onClick={() => router.push("/ticket_booking")}>
                  <button className="btnB ">Buy Ticket</button>
                </div>
                <div onClick={() => router.push("/details")}>
                  <button className=" btnD">Details</button>
                </div>
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
