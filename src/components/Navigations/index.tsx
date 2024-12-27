import Link from "next/link";
import Containers from "../Containers";
import Image from "next/image";

export const Navigation = () => {
  return (
    <div className="sticky top-0 backdrop-blur-xl bg-[rgba(0,0,0,0.8)] border-b border-slate-800 z-50">
      <Containers.ContainerMain className="flex justify-between py-5" as="nav">
        <Link
          href="/"
          className="flex items-center justify-center gap-1 px-5 font-semibold text-black transition-colors bg-green-500 rounded-md duration-600 hover:bg-green-600"
        >
          search Pokémon
        </Link>
      </Containers.ContainerMain>
    </div>
  );
};
