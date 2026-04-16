import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import FavoriteElement from "@/components/FavoriteElement";

const DetailView = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(
    `https://api.thedogapi.com/v1/breeds/${id}`,
    {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    },
  );
  const breed = await response.json();

  return (
    <div className="bg-white mb-3">
      <div className="relative flex justify-center">
        <Link href={`/`}>
          <IoIosArrowBack
            color="white"
            size={24}
            className=" bg-[#fefefe3f] items-center m-2 p-0.5 rounded-full absolute left-0"
          />
        </Link>
        <FavoriteElement
          id={breed.id}
          breed={breed.name}
        />

        <div className="absolute left-0 bottom-0 bg-[rgba(255,255,255,0.2)] flex p-3 rounded-xl backdrop-blur-xl m-3">
          <Image
            src={breed.image.url}
            alt="beautiful dog"
            width={32}
            height={32}
            className="rounded-lg aspect-square"
          />
          <p className="text-[#FFFF] leading-none text-xs ml-2">
            {breed.name}
          </p>
        </div>

        <Image
          src={breed.image.url}
          alt="beautiful dog"
          width={339}
          height={360}
          className="rounded-2xl w-screen aspect-square object-cover h-auto"
        />
      </div>
      <div className="my-3">
        <h3 className="text-[#333333] text-3xl font-bold">
          {breed.breed_group}
        </h3>
      </div>
      <ul className="flex gap-2 text-xs font-light text-[#6B8B42] my-2 bg-[#ACD7FF] rounded-full justify-center py-2">
        {breed.temperament}
        {/* <li className="rounded-full bg-[#ACD7FF] px-3 py-2">
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
        </li> */}
      </ul>
      <dl className="text-[#333333] my-5">
        <dt className="text-xs opacity-50 font-medium">
          Breed Description
        </dt>
        <dd className="text-base">
          {breed.description}
        </dd>
      </dl>
      <dl className="text-[#333333]">
        <dt className="text-xs opacity-50 font-medium">
          Breed History
        </dt>
        <dd className="text-base">
          {breed.history}
        </dd>
      </dl>
    </div>
  );
};

export default DetailView;
