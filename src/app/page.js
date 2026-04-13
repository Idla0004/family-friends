import Image from "next/image";
import { LiaSearchSolid } from "react-icons/lia";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <section className="">
          <div className="flex justify-between p-4">
            <LiaSearchSolid
              color="white"
              size={45}
              className=" bg-[#F2968F] items-start p-2 rounded-full"
            />
            <input
              type="search"
              className="border text-[#CACACD] rounded-full px-3 py-2"
              placeholder="Search breeds"
            ></input>
          </div>
        </section>
      </main>
    </div>
  );
}
