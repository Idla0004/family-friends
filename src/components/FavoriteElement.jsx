"use client";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import useFavorites from "@/store/favorite";

const FavoriteElement = ({ id, breed }) => {
  const {
    favorites,
    setFavorite,
    removeFavorite,
  } = useFavorites();
  if (
    favorites.some(
      (favorite) => favorite.id === id,
    )
  ) {
    return (
      <FaStar
        size={24}
        className="cursor-pointer absolute top-0 right-0 text-white  bg-[#fefefe3f] items-center m-2 p-0.5 rounded-full "
        onClick={() => {
          removeFavorite(id);
        }}
      />
    );
  } else {
    return (
      <FaRegStar
        size={24}
        className="cursor-pointer absolute top-0 right-0 text-white  bg-[#fefefe3f] items-center m-2 p-0.5 rounded-full "
        onClick={() => {
          setFavorite(id, breed);
        }}
      />
    );
  }
};

export default FavoriteElement;
