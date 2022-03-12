import React from "react";
import MessRating from "./MessRating";

const MessRatingSection = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-center w-full">
        <h2 className="my-5 text-3xl">Mess Rating</h2>

        <span className="mx-2">
          <i className="text-sky-700 mx-0.5 fa-solid fa-star-half-stroke"></i>
          <i className="text-sky-700 mx-0.5 fa-solid fa-star-half-stroke"></i>
          <i className="text-sky-700 mx-0.5 fa-solid fa-star-half-stroke"></i>
          <i className="text-sky-700 mx-0.5 fa-solid fa-star-half-stroke"></i>
          <i className="text-sky-700 mx-0.5 fa-solid fa-star-half-stroke"></i>
        </span>
        <div className="flex flex-row items-center justify-start w-full">
          <div className="flex flex-col items-center justify-center">
            <p className="my-2 text-xl">Food</p>
            <MessRating rating={90} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="my-2 text-xl">Sanitation</p>
            <MessRating rating={70} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="my-2 text-xl">Behavior</p>
            <MessRating rating={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MessRatingSection;
