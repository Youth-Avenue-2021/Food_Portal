import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import MessNavbar from "../../Components/MessNavbar";
import ContactMess from "./Components/ContactMess";
import MessDetails from "./Components/MessDetails";
import MessRatingSideComponent from "./Components/MessRatingSideComponent";

const Mess = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <MessDetails />
      <MessNavbar />
      <div className="container flex flex-row items-start justify-center w-full mx-auto">
        <div className="w-3/5 px-10 py-10">
          <Outlet />
          {/* <MessLinksData />
          <MessComplains />
          <MessReviews />
          <MessRatingSection /> */}
        </div>
        <div className="sticky top-0 w-1/4 px-5 py-8">
          <ContactMess />
          <MessRatingSideComponent />
        </div>
      </div>
    </>
  );
};

export default Mess;
