import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface FormData {
  name: string;
}

interface SearchFormProps {
  value: string;
  onSubmit: (data: FormData) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ value, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  React.useEffect(() => {
    setValue("name", value);
  }, [value, setValue]);

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label
            htmlFor="pokemonName"
            className="block text-sm font-medium text-gray-700"
          >
            Pokémon Name
          </Label>
          <Input
            type="text"
            id="pokemonName"
            autoComplete="off"
            placeholder="Pikachu, Bulbasaur..."
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-800 focus:border-red-800 sm:text-sm text-red-800"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
        <Button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black hover:text-white bg-yellow-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchForm;
