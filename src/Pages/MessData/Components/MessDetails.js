const MessDetails = () => {
  return (
    <div className="h-[15rem] bg-sky-200">
      <div className="container flex items-center justify-start h-full px-20 py-5 mx-auto ">
        <div className="flex flex-row items-center justify-center">
          <span className="w-20 h-20 rounded-md bg-sky-700"></span>
          <div className="flex flex-col items-start justify-center ml-7">
            <h2 className="mb-2 text-4xl">Name of the Mess</h2>
            <div className="flex flex-row items-start justify-center">
              <a className="mx-2" href="/location">
                <i className="mr-1 text-sky-700 fa-solid fa-location-dot"></i> Location
              </a>
              <a href="/review" className="mx-2">
                <i className="mr-1 text-sky-700 fa-solid fa-comment-dots"></i>40 Reviews
              </a>
              <a href="/complains" className="mx-2">
                <i className="mr-1 text-sky-700 fa-solid fa-triangle-exclamation"></i>5 Complains
              </a>
              <span className="mx-2">
                <i className="text-sky-700 mx-0.5 fa-solid fa-star-half-stroke"></i>
                <i className="text-sky-700 mx-0.5 fa-solid fa-star-half-stroke"></i>
                <i className="text-sky-700 mx-0.5 fa-solid fa-star-half-stroke"></i>
                <i className="text-sky-700 mx-0.5 fa-solid fa-star-half-stroke"></i>
                <i className="text-sky-700 mx-0.5 fa-solid fa-star-half-stroke"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessDetails;
