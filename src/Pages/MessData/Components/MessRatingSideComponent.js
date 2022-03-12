const MessRatingSideComponent = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-center p-10 my-5 duration-200 rounded-lg shadow-md hover:shadow-xl">
        <h2 className="text-2xl">
          <i className="mr-2 text-sky-600 fa-brands fa-gratipay"></i>Rate This Mess
        </h2>
        <div className="flex flex-col justify-center w-full">
          {/* <p>Rate your Mess</p> */}
          <div className="flex flex-col w-full my-3">
            <input type="text" placeholder="write your review" className="w-full p-2 duration-300 border-2 rounded-md outline-none border-sky-200 focus:border-sky-600" />
            <input type="submit" value="Rate" className="w-full cursor-pointer my-2 hover:bg-sky-200 duration-200 rounded-md hover:border-sky-200 p-1.5 border-2 border-sky-600" />
          </div>
        </div>
        {/* <div className="flex items-center justify-center mx-auto rounded-full shadow-xl w-min">
          <ProgressBar radius={50} progress={70} fillColor="#ffffff" strokeWidth={7} strokeColor="#0284c7" trackStrokeWidth={7} pointerRadius={1} pointerStrokeWidth={2} pointerStrokeColor="#ebebeb" />
          <p className="absolute text-2xl">70%</p>
        </div> */}
      </div>
    </>
  );
};

export default MessRatingSideComponent;
