import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import PokemonResult from "../pokemonResult";

jest.mock("@apollo/client", () => ({
  ...jest.requireActual("@apollo/client"),
  useQuery: jest.fn().mockReturnValue({
    loading: false,
    error: null,
    data: {
      pokemon: {
        id: "1",
        number: "001",
        name: "Bulbasaur",
        attacks: {
          special: [
            { name: "Vine Whip", type: "Grass", damage: 45 },
            { name: "Solar Beam", type: "Grass", damage: 120 },
          ],
        },
        evolutions: [{ id: "2", number: "002", name: "Ivysaur" }],
        types: ["Grass", "Poison"],
      },
    },
  }),
}));

// Mock useSearchParams to return a valid search parameter
jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useSearchParams: jest.fn().mockReturnValue({
    get: jest.fn().mockReturnValue("Bulbasaur"),
  }),
}));

test("renders Pokemon result", () => {
  render(<PokemonResult />);
  expect(screen.getByText("Bulbasaur (#001)")).toBeInTheDocument();
  expect(screen.getByText("Types: Grass, Poison")).toBeInTheDocument();
  expect(screen.getByText("Vine Whip - Grass - 45 damage")).toBeInTheDocument();
  expect(screen.getByText("Solar Beam - Grass - 120 damage")).toBeInTheDocument();
  expect(screen.getByText("Ivysaur")).toBeInTheDocument();
});