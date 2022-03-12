import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="bg-gray-200">
        <div className="container flex items-center justify-between px-16 py-5 mx-auto">
          <Link to="/">
            <h2 className="text-4xl font-bold text-sky-600">Food Portal</h2>
          </Link>
          <div className="flex flex-row items-center justify-center">
            {/* <a className="mx-2 text-base duration-200 hover:text-sky-500" href="https://youtube.com">
              <i className="mr-1 text-sky-600 fa-solid fa-square-pen"></i>Write a complain
            </a> */}
            <a className="mx-2 text-base duration-200 hover:text-sky-500" href="https://youtube.com">
              <i className="mr-1 text-sky-600 fa-solid fa-briefcase"></i> About
            </a>
            <a className="mx-2 text-base duration-200 hover:text-sky-500" href="https://youtube.com">
              <i className="mr-1 text-sky-600 fa-solid fa-star-of-life"></i>
              Benefits
            </a>
            <a className="mx-2 text-base duration-200 hover:text-sky-500" href="https://youtube.com">
              <i className="mr-1 text-sky-600 fa-solid fa-rocket"></i>
              Mission
            </a>
            <a className="mx-2 text-base duration-200 hover:text-sky-500" href="https://youtube.com">
              <i className="mr-1 text-sky-600 fa-solid fa-briefcase"></i>
              How do we work?
            </a>
            <a className="mx-2 text-base duration-200 hover:text-sky-500" href="https://youtube.com">
              <i className="mr-1 text-sky-600 fa-solid fa-utensils"></i>
              Food Standards
            </a>
            <a className="mx-2 text-base duration-200 hover:text-sky-500" href="https://youtube.com">
              <i className="mr-1 text-sky-600 fa-solid fa-medal"></i>
              Mess Ranking
            </a>
            <a className="mx-2 text-base duration-200 hover:text-sky-500" href="https://youtube.com">
              <i className="mr-1 text-sky-600 fa-solid fa-headset"></i>Contact
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a href="/login" className="px-4 py-2 mx-2 text-white duration-200 rounded-md shadow-xl bg-sky-600 hover:text-sky-600 hover:bg-white">
              Login
            </a>
            <a href="/login" className="px-4 py-2 mx-2 text-white duration-200 rounded-md shadow-xl bg-sky-400 hover:text-sky-600 hover:bg-white">
              Sign Up
            </a>
            <a href="/search" className="flex items-center justify-center w-10 h-10 mx-3 bg-gray-900 rounded-full shadow-md text-sky-500">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
