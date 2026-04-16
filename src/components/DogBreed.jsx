import Image from "next/image";
import Link from "next/link";
import FavoriteElement from "./FavoriteElement";

const DogBreed = ({
  id,
  breedGroup,
  origin,
  imgsrc,
  breedName,
}) => {
  return (
    <div className="bg-white shadow-sm rounded-2xl mb-3 w-fit pb-1">
      <div className="relative">
        <FavoriteElement
          id={id}
          breedName={breedName.name}
        />
      </div>
      <Link href={`/detailview/${id}`}>
        <Image
          src={imgsrc}
          alt="beautiful dog"
          width={160}
          height={114}
          className="rounded-2xl object-cover aspect-3/2"
        />
      </Link>
      <div className="m-3">
        <h3 className="text-[#333333] text-base font-bold mb-1">
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
