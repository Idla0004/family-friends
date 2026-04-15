import Image from "next/image";
import { CiStar } from "react-icons/ci";

const DogBreed = ({
  breedGroup,
  origin,
  imgsrc,
}) => {
  return (
    <div className="bg-white shadow-sm rounded-2xl mb-3 w-fit pb-1">
      <div className="relative">
        <CiStar
          color="white"
          size={24}
          className=" bg-[#fefefe3f] items-center m-2 p-0.5 rounded-full absolute right-0"
        />
        <Image
          src={imgsrc}
          alt="beautiful dog"
          width={160}
          height={114}
          className="rounded-2xl object-cover aspect-3/2"
        />
      </div>
      <div className="m-3">
        <h3 className="text-[#333333] text-base font-bold">
          {breedGroup}
        </h3>
        <p className="text-[#333333] opacity-40 text-xs w-30">
          {origin}
        </p>
      </div>
    </div>
  );
};

export default DogBreed;
