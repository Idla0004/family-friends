import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import FavoriteElement from "@/components/FavoriteElement";
import Temperement from "@/components/Temperement";

const DetailView = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(
    `https://api.thedogapi.com/v1/breeds/${id}`,
    {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
      cache: "no-store",
    },
  );
  const breed = await response.json();

  return (
    <div className="bg-white mb-3">
      <div className="relative flex">
        <Link href={`/`}>
          <IoIosArrowBack
            size={24}
            className=" bg-[#F8F8F8] items-center m-2 p-0.5 rounded-full absolute left-0 text-[#242424]"
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
      <div className="flex">
        <Temperement
          tempStr={breed.temperament}
        ></Temperement>
      </div>
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
