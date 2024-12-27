import React from "react";

interface CardEvoProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
  onClick: () => void;
  tags: string[];
}

const tagColors: { [key: string]: string } = {
  Electric: "bg-yellow-200 text-yellow-800",
  Grass: "bg-green-200 text-green-800",
  Poison: "bg-purple-200 text-purple-800",
  Fire: "bg-orange-400 text-orange-950",
  Water: "bg-blue-200 text-blue-800",
  Flying: "bg-blue-500 text-white-800",
  Ice: "bg-sky-200 text-sky-400",
  Psychic: "bg-pink-200 text-pink-500",
  Fairy: "bg-pink-100 text-pink-400",
  Steel: "bg-stone-200 text-stone-500",
  Rock: "bg-yellow-700 text-amber-950",
  Ghost: "bg-violet-800 text-violet-300",
  Fighting: "bg-orange-700 text-orange-100",
  Bug: "bg-lime-300 text-lime-800",
  Dragon: "bg-blue-800 text-blue-100",
  Ground: "bg-yellow-600 text-yellow-100",
};

const CardEvo: React.FC<CardEvoProps> = ({
  imageSrc,
  imageAlt,
  name,
  onClick,
  tags,
}) => {
  return (
    <div className="border-4 border-solid border-slate-900 rounded-xl flex gap-4 items-center p-4 w-full bg-yellow-50">
      <img
        className="object-contain bg-white cursor-pointer border-2 border-solid border-red-700 w-32 h-32 rounded-full"
        src={imageSrc}
        alt={imageAlt}
      />
      <div className="">
        <div className="font-bold text-xl mb-2 text-green-950">
          <button className="text-blue-500 hover:underline" onClick={onClick}>
            {name}
          </button>
        </div>
        <div className="">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${
                tagColors[tag] || "bg-gray-200 text-gray-700"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardEvo;
