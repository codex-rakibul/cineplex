import { allMovies } from "../../dummyData/movieData";
import SeatComponents from "./seatComponents";
import { seatPlan } from "../../components/styleCom/totalSeatPlanStyle.js";
const SeatsPlan = () => {
  const renderData = (
    <div className={seatPlan}>
      <div>
        {Object.entries(allMovies[0].seats).map((row, index) => {
          return (
            <div key={index}>
              {index < 5 ? (
                <div>
                  <SeatComponents row={row[1]} rowNumber={row[0]} />
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
      <div className=" md:mr-4 ">
        {Object.entries(allMovies[0].seats).map((row, index) => {
          return (
            <div key={index}>
              {index > 4 && index < 10 ? (
                <div>
                  <SeatComponents row={row[1]} rowNumber={row[0]} />
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
  return <>{renderData}</>;
};

export default SeatsPlan;
