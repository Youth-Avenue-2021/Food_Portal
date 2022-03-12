import UserCard from "./UserCard";
import SelectOption from "./SelectOption";

const MessReviews = () => {
  return (
    <div className="flex flex-col items-start justify-center p-10 my-10 duration-300 rounded-md shadow-md hover:shadow-xl">
      <h2 className="text-3xl font-medium">Mess Reviews</h2>
      <div className="flex flex-row items-center justify-between w-full px-4 my-5">
        <p className="text-lg">
          <i className="mr-2 text-sky-600 fa-solid fa-comment-dots"></i>40 Reviews
        </p>
        <SelectOption />
      </div>
      <div className="flex flex-col items-center justify-center">
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
      <div className="flex justify-center w-full my-4">
        <button className="px-5 py-3 text-white rounded-md bg-sky-500">
          Load More <i className="ml-2 text-sky-100 fa-solid fa-angles-down"></i>
        </button>
      </div>
    </div>
  );
};

export default MessReviews;
