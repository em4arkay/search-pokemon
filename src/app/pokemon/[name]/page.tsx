"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";
import { useQuery } from "@apollo/client";

import { GET_POKEMON } from "@/api/getPokemon";
import { Cards } from "@/components";

interface Pokemon {
  id: string;
  number: string;
  name: string;
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
    types: string[];
    image: string;
  }[];
  types: string[];
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  classification: string;
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
}

interface PokemonData {
  pokemon: Pokemon;
}

interface PokemonVars {
  name: string;
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

const PokemonPage: React.FC = () => {
  const router = useRouter();
  const { name } = useParams();

  const { loading, error, data } = useQuery<PokemonData, PokemonVars>(
    GET_POKEMON,
    {
      variables: { name: name as string },
      skip: !name,
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.pokemon) return <p>Pokémon data is not available</p>;

  const { pokemon } = data;

  const handleClick = (evolutionName: string) => {
    router.push(`/pokemon/${evolutionName}`);
  };

  const calculateAverage = (min: string, max: string) =>
    (
      (parseFloat(min.replace("kg", "")) + parseFloat(max.replace("kg", ""))) /
      2
    ).toFixed(2);

  return (
    <div className="pokemon-result p-6 bg-white shadow-md rounded-lg max-w-5xl mx-auto h-full">
      <h2 className="text-4xl font-bold mb-4 text-red-900 text-center">
        {pokemon.name} (#{pokemon.number})
      </h2>
      <div className="grid grid-cols-2 min-h-96 gap-6">
        <div className="flex justify-center">
          <img
            className="object-contain bg-white cursor-pointer"
            src={pokemon.image}
            alt={pokemon.name}
          />
        </div>
        <div className="flex flex-row p-6 rounded-lg text-sm font-semibold w-full bg-gray-200 text-gray-700">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-lg">
              <div className="font-bold text-blue-700">Weight</div>
              <div>
                {calculateAverage(
                  pokemon.weight.minimum,
                  pokemon.weight.maximum
                )}{" "}
                kg
              </div>
            </div>
            <div className="text-lg">
              <div className="font-bold text-blue-700">Classification</div>
              <div>{pokemon.classification}</div>
            </div>
            <div className="text-lg">
              <div className="font-bold text-blue-700">Height</div>
              <div>
                {calculateAverage(
                  pokemon.height.minimum,
                  pokemon.height.maximum
                )}{" "}
                m
              </div>
            </div>
            <div className="text-lg">
              <div className="font-bold text-blue-700">Attacks</div>
              <ul className="list-disc list-inside">
                {pokemon.attacks.special.map((attack) => (
                  <li key={attack.name} className="mt-2">
                    {attack.name} - {attack.type} - {attack.damage} damage
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-lg font-bold text-blue-700">Type</div>
            <div className="text-lg">
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
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-500 h-72 p-8 my-6">
        <h3 className="text-xl font-semibold text-white pb-6">Evolutions</h3>
        {pokemon.evolutions ? (
          <div className="flex gap-4">
            {pokemon.evolutions.map((evolution) => (
              <Cards.CardEvo
                key={evolution.id}
                imageSrc={evolution.image}
                imageAlt={evolution.name}
                name={evolution.name}
                onClick={() => handleClick(evolution.name)}
                tags={evolution.types}
              />
            ))}
          </div>
        ) : (
          <p className="mt-2">No evolutions available</p>
        )}
      </div>
    </div>
  );
};

export default PokemonPage;
