"use client";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Cards } from "@/components";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <div>
        <h3 className="text-2xl py-6 text-center">Search Your Pokémon!!</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="pokemonName">Pokémon Name</Label>
          <Input
            type="text"
            id="pokemonName"
            autoComplete="off"
            value={searchText}
            placeholder="Pikachu, Bulbasaur..."
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left font-[family-name:var(--font-jetbrains-mono)]">
        <Cards.CardDefault imageAlt="" imageSrc="" title="" />
        <Cards.CardDefault imageAlt="" imageSrc="" title="" />
        <Cards.CardDefault imageAlt="" imageSrc="" title="" />
        <Cards.CardDefault imageAlt="" imageSrc="" title="" />
      </div>
    </div>
  );
};

export default HomePage;
