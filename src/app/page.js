import SearchBar from "../components/SearchBar";
import BreedList from "../components/BreedList";
import { Suspense } from "react";

export default function Home({ searchParams }) {
  return (
    <section className="grid grid-cols-[repeat(auto-fill.minmax(250px,1fr))] gap-4 justify-center">
      <SearchBar />
      <Suspense
        fallback={<div>Loading dogs..</div>}
      >
        <section className="flex flex-wrap justify-center mb-3">
          <BreedList
            searchParams={searchParams}
          />
        </section>
      </Suspense>
    </section>
  );
}
