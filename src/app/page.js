import Image from "next/image";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div>
      <section className="grid grid-cols-[repeat(auto-fill.minmax(250px,1fr))] gap-4">
        <SearchBar />
        <section className="flex flex-wrap justify-center gap-1">
          <div>
            <Image
              src="https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
              alt="beautiful dog"
              width={160}
              height={114}
            />
            <div />
            <div>
              <Image
                src="https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
                alt="beautiful dog"
                width={160}
                height={114}
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
