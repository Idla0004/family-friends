import SearchBar from "../components/SearchBar";
import BreedList from "../components/BreedList";
import { Suspense } from "react";

export default function Home({ searchParams }) {
  return (
    <section className="grid grid-cols-[repeat(auto-fill.minmax(250px,1fr))] gap-4 justify-center">
      <SearchBar />
      <section className="flex flex-wrap justify-center mb-3">
        <Suspense
          fallback={<div>Loading dogs..</div>}
        >
          <BreedList
            searchParams={searchParams}
          />
        </Suspense>
      </section>
    </section>
  );
}
