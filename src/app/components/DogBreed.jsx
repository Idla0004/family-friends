import Image from "next/image";
import { CiStar } from "react-icons/ci";

const DogBreed = () => {
  return (
    <div className="bg-white shadow-sm rounded-2xl mb-3">
      <div className="relative">
        <CiStar
          color="grey"
          size={24}
          className=" bg-[#fefefe3f] items-center m-2 p-0.5 rounded-full absolute right-0"
        />

        <Image
          src="https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
          alt="beautiful dog"
          width={160}
          height={114}
          className="rounded-2xl"
        />
      </div>
      <div className="m-3">
        <h3 className="text-[#333333] text-base font-bold">
          Breed name
        </h3>
        <p className="text-[#333333] opacity-40 text-xs">
          Location
        </p>
      </div>
    </div>
  );
};

export default DogBreed;
