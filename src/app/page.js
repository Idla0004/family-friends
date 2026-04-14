import Image from "next/image";
import SearchBar from "../components/SearchBar";
import DogBreed from "../components/DogBreed";
import SingleView from "./singleview";
import BreedList from "../components/BreedList";

export default function Home() {
  return (
    <section className="grid grid-cols-[repeat(auto-fill.minmax(250px,1fr))] gap-4">
      <SearchBar />
      <section className="flex flex-wrap justify-center gap-7">
        <BreedList />
      </section>
    </section>
  );
}
