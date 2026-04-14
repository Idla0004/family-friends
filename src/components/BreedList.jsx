import DogBreed from "./DogBreed";

const BreedList = () => {
  return (
    <div className="grid grid-cols-2 justify-center">
      <FetchBreed />
    </div>
  );
};

const FetchBreed = async () => {
  "use server";
  const response = await fetch(
    "https://api.thedogapi.com/v1/breeds",
    {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    },
  );
  const breeds = await response.json();

  return breeds.map((breed) => {
    return (
      <DogBreed
        key={breed.id}
        breedGroup={breed.breed_group}
        origin={breed.origin}
        imgsrc={breed.image.url}
      />
    );
  });
};

export default BreedList;
