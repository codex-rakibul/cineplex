import React from "react";
import styles from "../style";
export default function TrendingMovie() {
  return (
    <>
      <div className={` bg-primary ${styles.paddingX} sm:${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <section className="text-gray-600 body-font ">
            <h1 className=" showNameTrending">TRENDING MOVIE</h1>
            <div className=" mx-auto flex  md:py-10 py-6 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://assets.gadgets360cdn.com/pricee/assets/product/202301/Evil-Dead-Rise_1673850219.jpg"
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <p className="showName">EVIL DEAD RISE</p>
                <p className="mb-8 leading-relaxed">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <button className="btnB ">Buy Ticket</button>
                  <button className="btnD ">Details</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
