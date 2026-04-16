import { LiaSearchSolid } from "react-icons/lia";

const SearchBar = () => {
  return (
    <form className="flex justify-between items-center mb-3">
      <button type="submit">
        <LiaSearchSolid
          color="white"
          size={45}
          className=" bg-[#F2968F] items-start p-2 rounded-full cursor-pointer"
        />
      </button>
      <input
        type="search"
        name="query"
        className="border text-[#CACACD] rounded-full px-3 py-2 outline-none focus:border-[#F2968F]"
        placeholder="Search breeds"
      />
    </form>
  );
};

export default SearchBar;
