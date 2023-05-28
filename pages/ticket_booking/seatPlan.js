import { allMovies } from "../../dummyData/movieData";
import SeatComponents from "./seatComponents";

const SeatsPlan = () => {

  const renderData = (
    <div className=" md:grid-cols-2  md:gap-20 grid grid-cols-1 gap-10 md:mt-0 mt-4 w-screen">
      <div>
        {Object.entries(allMovies[0].seats).map((row, index) => {
          return (
            <div key={index}>
              {index < 5 ? (
                <div>
                  <SeatComponents
                    row={row[1]}
                    rowNumber={row[0]}
                  />
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
                  <SeatComponents
                    row={row[1]}
                    rowNumber={row[0]}
                  
                  />
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
