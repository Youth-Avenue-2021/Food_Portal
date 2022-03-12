const SelectOption = () => {
  return (
    <select className="cursor-pointer form-select appearance-none block px-3 py-1.5 text-base font-normal rounded-md text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellowColor focus:outline-none" aria-label="Default select example">
      <option defaultValue={""} className="text-center">
        Sort By
      </option>
      <option className="text-center" value="">
        Option 1
      </option>
      <option className="text-center" value="">
        Option 2
      </option>
      <option className="text-center" value="">
        Option 3
      </option>
      <option className="text-center" value="">
        Option 4
      </option>
    </select>
  );
};

export default SelectOption;
