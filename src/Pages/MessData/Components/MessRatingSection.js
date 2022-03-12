import React from "react";
import MessRating from "./MessRating";

const MessRatingSection = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-center w-full p-10 duration-300 rounded-lg shadow-lg hover:shadow-2xl">
        <h2 className="my-5 text-3xl">Mess Rating</h2>
        <div className="flex flex-row items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-1/2">
            <p className="my-2 text-xl">7.2 out of 10</p>
            <span className="mx-2">
              <i className="text-green-500 mx-0.5 text-2xl fa-solid fa-star-half-stroke"></i>
              <i className="text-green-500 mx-0.5 text-2xl fa-solid fa-star-half-stroke"></i>
              <i className="text-green-500 mx-0.5 text-2xl fa-solid fa-star-half-stroke"></i>
              <i className="text-green-500 mx-0.5 text-2xl fa-solid fa-star-half-stroke"></i>
              <i className="text-green-500 mx-0.5 text-2xl fa-solid fa-star-half-stroke"></i>
            </span>
          </div>
          <div className="flex flex-row items-center justify-start w-full">
            <div className="flex flex-col items-center justify-center mx-4">
              <p className="my-2 text-xl">Food</p>
              <MessRating rating={90} />
            </div>
            <div className="flex flex-col items-center justify-center mx-4">
              <p className="my-2 text-xl">Sanitation</p>
              <MessRating rating={70} />
            </div>
            <div className="flex flex-col items-center justify-center mx-4">
              <p className="my-2 text-xl">Behavior</p>
              <MessRating rating={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessRatingSection;
