import { Link } from "react-router-dom";

const MessCard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-5 overflow-hidden duration-200 rounded-md shadow-md hover:shadow-2xl bg-sky-0">
        <div className="h-[12rem] bg-sky-500 w-full"></div>
        <div className="flex flex-col items-start justify-center p-5">
          <h2 className="py-2 text-2xl text-gray-900">Mess Name</h2>
          <div className="flex flex-row items-start justify-start mb-5">
            <i className="text-sky-500 fa-solid fa-star-half-stroke"></i>
            <i className="text-sky-500 fa-solid fa-star-half-stroke"></i>
            <i className="text-sky-500 fa-solid fa-star-half-stroke"></i>
            <i className="text-sky-500 fa-solid fa-star-half-stroke"></i>
            <i className="text-sky-500 fa-solid fa-star-half-stroke"></i>
          </div>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque similique, temporibus eius sit impedit, </p>
          <Link to="/mess" className="mt-3 underline text-sky-500">
            View Mess
          </Link>
        </div>
      </div>
    </>
  );
};

export default MessCard;
