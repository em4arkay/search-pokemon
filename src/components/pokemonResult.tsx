"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface Pokemon {
  id: string;
  number: string;
  name: string;
  types: string[];
  image: string;
  attacks: {
    special: {
      name: string;
      type: string;
      damage: number;
    }[];
  };
  evolutions?: {
    id: string;
    number: string;
    name: string;
  }[];
}

interface PokemonResultProps {
  pokemon?: Pokemon | null;
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

const PokemonResult: React.FC<PokemonResultProps> = ({ pokemon }) => {
  const router = useRouter();

  if (!pokemon) {
    return (
      <p className="text-red-700 text-2xl text-center">
        Pokémon data is not available
      </p>
    );
  }

  return (
    <div className="pokemon-result p-6 bg-white shadow-md rounded-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-red-900">
        {pokemon.name} (#{pokemon.number})
      </h2>
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="w-full h-full object-contain bg-blue-100 cursor-pointer"
          src={pokemon.image}
          alt={pokemon.name}
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {pokemon.types.map((type) => (
          <span
            key={type}
            className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
              tagColors[type] || "bg-gray-200 text-gray-700"
            }`}
          >
            {type}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-semibold mt-4 text-black">
        Special Attacks:
      </h3>
      <ul className="list-disc list-inside text-black">
        {pokemon.attacks.special.map((attack) => (
          <li key={attack.name} className="mt-2">
            {attack.name} - {attack.type} - {attack.damage} damage
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mt-4 text-black">Evolutions:</h3>
      {pokemon.evolutions ? (
        <ul className="list-disc list-inside">
          {pokemon.evolutions.map((evolution) => (
            <li key={evolution.id} className="mt-2">
              <button
                className="text-blue-500 hover:underline"
                onClick={() => router.push(`/search?name=${evolution.name}`)}
              >
                {evolution.name}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2">No evolutions available</p>
      )}
    </div>
  );
};

export default PokemonResult;