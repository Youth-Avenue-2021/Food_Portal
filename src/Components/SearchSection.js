import React from "react";

const SearchSection = () => {
  return (
    <>
      <div className="flex min-h-[30rem] flex-col bg-sky-200 items-center justify-center">
        <h1 className="pb-14 text-7xl text-sky-700">Search what you want...!</h1>
        <form className="w-full mx-auto text-center">
          <input type="text" className={`md:w-[40rem] p-5 duration-200 border-2 border-transparent rounded-md w-[85%] shadow-md focus:shadow-xl outline-none focus:border-sky-700`} placeholder="Search for any images" />
          <button className="absolute py-4 px-7 text-white duration-300 translate-y-[0.40rem] -translate-x-[7rem] bg-sky-600 rounded-md shadow-md focus:bg-sky-800">Search</button>
        </form>
      </div>
    </>
  );
};

export default SearchSection;
