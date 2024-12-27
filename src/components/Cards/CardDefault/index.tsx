import React from "react";

interface CardDefaultProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
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

const CardDefault: React.FC<CardDefaultProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  tags,
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-red-300 cursor-pointer">
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="w-80 h-80 p-6 object-contain bg-white"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      <div className="px-6 py-4 border-t-8">
        <div className="font-bold text-2xl mb-2 text-green-950">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
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
  );
};

export default CardDefault;
