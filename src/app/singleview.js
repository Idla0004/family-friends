import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";

const SingleView = () => {
  return (
    <div className="bg-white mb-3">
      <div className="relative flex justify-center">
        <IoIosArrowBack
          color="grey"
          size={24}
          className=" bg-[#fefefe3f] items-center m-2 p-0.5 rounded-full absolute left-0"
        />
        <CiStar
          color="grey"
          size={24}
          className=" bg-[#fefefe3f] items-center m-2 p-0.5 rounded-full absolute right-0"
        />

        <div className="absolute left-0 bottom-0 bg-[rgba(255,255,255,0.2)] flex p-3 rounded-xl m-2 backdrop-blur-xl ">
          <Image
            src="https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
            alt="beautiful dog"
            width={32}
            height={32}
            className="rounded-lg aspect-square"
          />
          <p className="text-[#FFFF] leading-none text-xs ml-2">
            Breed name
          </p>
        </div>

        <Image
          src="https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
          alt="beautiful dog"
          width={339}
          height={360}
          className="rounded-2xl w-screen aspect-square object-cover"
        />
      </div>
      <div className="my-3">
        <h3 className="text-[#333333] text-3xl font-bold">
          Breed name
        </h3>
      </div>
      <ul className="flex gap-2 text-xs font-light text-[#6B8B42] my-2">
        <li className="rounded-full bg-[#ACD7FF] px-3 py-2">
          Confident
        </li>
        <li className="rounded-full bg-[#EDA8B3] px-3 py-2">
          Alert
        </li>
        <li className="rounded-full bg-[#C5E59C] px-3 py-2">
          Playful
        </li>
        <li className="rounded-full bg-[#F1E689] px-3 py-2 text-[#978C2F]">
          Loyal
        </li>
      </ul>
      <dl className="text-[#333333] my-5">
        <dt className="text-xs opacity-50 font-medium">
          Breed Description
        </dt>
        <dd className="text-base">
          Small, sturdy toy breed with a
          distinctive monkey-like expression and
          shaggy, wiry coat. Known for its
          confident, terrier-like personality
          despite its small size.
        </dd>
      </dl>
      <dl>
        <dt className="text-xs opacity-50 font-medium">
          Breed History
        </dt>
        <dd className="text-base">
          Originating in 17th-century Germany,
          bred down from larger terriers to be
          skilled ratters in homes, kitchens and
          stables. Refined in Munich and Berlin,
          recognized by AKC in 1936. Name
          translates to 'monkey-like terrier
        </dd>
      </dl>
    </div>
  );
};

export default SingleView;
