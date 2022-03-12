const UserCard = () => {
  return (
    <>
      <div className="flex flex-row items-start justify-start px-8 py-5 my-2 rounded-md bg-sky-100">
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-row items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-sky-600"></div>
            <h4 className="mx-2.5 text-lg">User Name</h4>
          </div>
          <p className="pl-12 mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus neque nisi dolor ut. Doloremque error similique quidem laboriosam reprehenderit! Magni ad sit deleniti, voluptas omnis repellendus laboriosam reiciendis cum.</p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
