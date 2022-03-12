import React from "react";
import GoogleMap from "./GoogleMap";

const ContactMess = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-10 py-5 duration-200 rounded-lg shadow-md hover:shadow-xl">
        <div className="w-full py-5 my-2 text-left rounded-md">
          <h2 className="text-2xl">
            <i className="mr-2 text-xl text-sky-700 fa-solid fa-map-location-dot"></i>Location
          </h2>
          <p>Lorem ipsum Road, Anand, Gujarat.</p>
          <div className="w-full my-2 overflow-hidden rounded-lg max-h-56 bg-sky-300">
            <GoogleMap />
          </div>
        </div>
        <a href="tel:123456789" className="w-full py-2.5 text-center border-2 border-sky-700 rounded-md hover:bg-sky-100 hover:border-sky-100 duration-200">
          <i className="mr-2 text-base text-sky-700 fa-solid fa-square-phone"></i>Contact Mess
        </a>
        <button className="w-full py-2.5 my-2 text-center  border-2 border-sky-700 rounded-md hover:bg-sky-100 hover:border-sky-100 duration-200">
          <i className="mr-2 text-base text-sky-700 fa-solid fa-cloud-arrow-down"></i>Download Food Menu
        </button>
      </div>
    </>
  );
};

export default ContactMess;
