import { LiaSearchSolid } from "react-icons/lia";

const SearchBar = () => {
  return (
    <div className="flex justify-between items-center">
      <LiaSearchSolid
        color="white"
        size={45}
        className=" bg-[#F2968F] items-start p-2 rounded-full"
      />
      <input
        type="search"
        className="border text-[#CACACD] rounded-full px-3 py-2"
        placeholder="Search breeds"
      ></input>
    </div>
  );
};

export default SearchBar;
