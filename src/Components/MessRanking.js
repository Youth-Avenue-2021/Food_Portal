import React from "react";
import MessCard from "./MessCard";

const MessRanking = () => {
  return (
    <>
      <div className="container flex flex-col items-center justify-center py-16 mx-auto">
        <div className="flex flex-row items-center justify-between w-full px-16">
          <h2 className="text-4xl text-gray-900">Top Ranked Mess</h2>
          <a href="/all-mess" className="font-medium duration-200 hover:underline text-sky-600">
            View All &gt;&gt;
          </a>
        </div>
        <div className="flex flex-row items-center justify-center px-10 my-10">
          <MessCard />
          <MessCard />
          <MessCard />
          <MessCard />
        </div>
      </div>
    </>
  );
};

export default MessRanking;
