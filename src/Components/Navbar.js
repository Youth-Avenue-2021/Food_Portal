import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="bg-gray-100">
        <div className="container flex items-center justify-between px-16 py-5 mx-auto">
          <Link to="/">
            <h2 className="text-4xl font-bold text-sky-600">Food Portal</h2>
          </Link>
          <div className="flex items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              {/* <a className="mx-2 text-base duration-200 hover:text-sky-500" href="https://youtube.com">
              <i className="mr-1 text-sky-600 fa-solid fa-square-pen"></i>Write a complain
            </a> */}
              <span className="mx-2 text-base duration-200 group ">
                <a className="duration-200 hover:text-sky-" href="https://youtube.com">
                  <i className="mr-1 text-sky-600 fa-solid fa-briefcase"></i> About
                </a>
                <div className="absolute flex flex-col items-start justify-center p-4 duration-300 rounded-md shadow-xl opacity-0 bg-gray-50 group-hover:opacity-100 top-14">
                  <a className="mx-2 my-1 text-base duration-200 hover:text-sky-500" href="https://youtube.com">
                    <i className="mr-1 text-sky-600 fa-solid fa-star-of-life"></i>
                    About Portal
                  </a>
                  <a className="mx-2 my-1 text-base duration-200 hover:text-sky-500" href="https://youtube.com">
                    <i className="mr-1 text-sky-600 fa-solid fa-rocket"></i>
                    Mission
                  </a>
                  <a className="mx-2 my-1 text-base duration-200 hover:text-sky-500" href="https://youtube.com">
                    <i className="mr-1 text-sky-600 fa-solid fa-briefcase"></i>
                    How do we work?
                  </a>
                </div>
              </span>
              <a className="mx-2 text-base duration-200 hover:text-sky-500" href="https://youtube.com">
                <i className="mr-1 text-sky-600 fa-solid fa-star-of-life"></i>
                Benefits
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
            {/* <div className="flex items-center justify-center"> */}
            {/* <a href="/login" className="px-4 py-2 mx-2 text-white duration-200 rounded-md shadow-xl bg-sky-600 hover:text-sky-600 hover:bg-white">
              Login
            </a> */}
            <a href="/login" className="px-4 py-2 mx-2 text-sky-600 duration-300 rounded-md shadow-xl border-2 border-sky-600 hover:bg-sky-600 hover:text-white font-semibold">
              Login
            </a>
            {/* Add Signup Button below login page */}
            {/* <a href="/login" className="px-4 py-2 mx-2 text-white duration-200 rounded-md shadow-xl bg-sky-400 hover:text-sky-600 hover:bg-white">
              Sign Up
            </a> */}
            {/* !CHANGES #1 Search Button Style Changed
            <a href="/search" className="flex items-center justify-center w-10 h-10 mx-3 bg-slate-50 rounded-full shadow-md text-sky-500">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a> */}
            <a href="/search" className="flex items-center justify-center w-10 py-2 px-5 mx-3 rounded-md shadow-md text-sky-600 text-2xl border-2 border-sky-600 hover:text-white hover:bg-sky-600 duration-300">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>

          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
