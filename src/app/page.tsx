"use client";

import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Link from "next/link";

import { GET_POKEMON_LIST } from "@/api/getPokemonList";
import { GET_POKEMON } from "@/api/getPokemon";

import { Cards, Containers, Forms } from "@/components";

interface Pokemons {
  id: string;
  number: string;
  name: string;
  types: string[];
  image: string;
}

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
  }[];
  types: string[];
  weight: {
    minimum: number;
    maximum: number;
  };
  height: {
    minimum: number;
    maximum: number;
  };
  classification: string;
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: BigInteger;
  maxHP: BigInteger;
  image: string;
}

interface PokemonsData {
  pokemons: Pokemons[];
}

interface PokemonsVars {
  first: number;
}

interface PokemonData {
  pokemon: Pokemon;
}

interface PokemonVars {
  name: string;
}

export default function Home() {
  const [searchText, setSearchText] = useState<string>("");

  const {
    loading: pokemonLoading,
    data: pokemonData,
  } = useQuery<PokemonData, PokemonVars>(GET_POKEMON, {
    variables: { name: searchText },
    skip: !searchText,
  });

  const first = searchText ? (pokemonData && pokemonData.pokemon ? 1 : 0) : 12;

  const {
    loading: pokemonsLoading,
    error: pokemonsError,
    data: pokemonsData,
  } = useQuery<PokemonsData, PokemonsVars>(GET_POKEMON_LIST, {
    variables: { first },
  });

  const handleSearch = (data: { name: string }) => {
    setSearchText(data.name);
  };

  if (pokemonsLoading || pokemonLoading) return <p>Loading...</p>;
  if (pokemonsError) return <p>Error: {pokemonsError.message}</p>;
  if (!pokemonsData?.pokemons || first === 0)
    return (
      <Containers.ContainerMain>
        <div className="m-10">
          <h3 className="text-2xl py-6 text-center">Search Your Pokémon!!</h3>
          <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
            <Forms.SearchForm value={searchText} onSubmit={handleSearch} />
          </div>
        </div>

        <p className="text-red-700 text-2xl text-center">Pokémon not found</p>
      </Containers.ContainerMain>
    );

  const { pokemons } = pokemonsData;

  return (
    <Containers.ContainerMain>
      <div className="m-10">
        <h3 className="text-2xl py-6 text-center">Search Your Pokémon!!</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
          <Forms.SearchForm value={searchText} onSubmit={handleSearch} />
        </div>
      </div>

      {searchText && pokemonData && pokemonData.pokemon ? (
        <div className="m-10 mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left gap-6">
          <Link
            href={`/pokemon/${pokemonData?.pokemon?.name}`}
            passHref
          >
            <Cards.CardDefault
              key={pokemonData?.pokemon?.id}
              imageAlt={`${pokemonData?.pokemon?.name} Image`}
              imageSrc={pokemonData?.pokemon?.image}
              title={pokemonData?.pokemon?.name}
              description={`${pokemonData?.pokemon?.types.join(
                ", "
              )} Type Pokémon`}
              tags={pokemonData?.pokemon?.types}
            />
          </Link>
        </div>
      ) : (
        <div className="m-10 mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left gap-6">
          {pokemons.map((pokemon: Pokemons) => (
            <Link
              key={pokemon.id}
              href={`/pokemon/${pokemon.name}`}
              passHref
            >
              <Cards.CardDefault
                imageAlt={`${pokemon.name} Image`}
                imageSrc={pokemon.image}
                title={pokemon.name}
                description={`${pokemon.types.join(", ")} Type Pokémon`}
                tags={pokemon.types}
              />
            </Link>
          ))}
        </div>
      )}
    </Containers.ContainerMain>
  );
}
