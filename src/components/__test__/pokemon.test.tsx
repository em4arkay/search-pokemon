import { bulbasaur, charmander, squirtle } from "../__mock__/pokemonMocks";

describe("Pokemon Types", () => {
  it("Bulbasaur should be Grass and Poison type", () => {
    expect(bulbasaur.types).toContain("Grass");
    expect(bulbasaur.types).toContain("Poison");
  });

  it("Charmander should be Fire type", () => {
    expect(charmander.types).toContain("Fire");
  });

  it("Squirtle should be Water type", () => {
    expect(squirtle.types).toContain("Water");
  });
});
