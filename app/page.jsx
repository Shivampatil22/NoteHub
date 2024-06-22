import Favourite_list from "@/app/components/Favourite_list";
import Nav from "@/app/components/Nav";
import Publisher_list from "@/app/components/Publisher_list";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen  flex-col items-center px-60">
      <Nav />
      <div className="flex w-full bg-slate-100 max-h-full h-full overflow-y-auto flex-col items-center p-5  ">
        <article className="w-80 flex bg-blue-300 ">
          <span className="flex w-1/2 bg-slate-600"></span>
          <span className="flex w-1/2 flex-col">
            <span>Missed a class?</span>
            <span>Get all the notes you need right now</span>
          </span>
        </article>
        <Publisher_list />
        <Favourite_list />
      </div>
    </main>
  );
}
