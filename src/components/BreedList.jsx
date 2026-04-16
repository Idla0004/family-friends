import DogBreed from "./DogBreed";

const BreedList = ({ searchParams }) => {
  return (
    <div className="grid grid-cols-2 justify-center gap-x-7 gap-y-2">
      <FetchBreed searchParams={searchParams} />
    </div>
  );
};

const FetchBreed = async ({ searchParams }) => {
  "use server";
  const { query } = await searchParams;
  const url = query
    ? `https://api.thedogapi.com/v1/breeds/search?q=${query}`
    : "https://api.thedogapi.com/v1/breeds";
  try {
    const response = await fetch(url, {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    });
    const breeds = await response.json();

    return breeds.map((breed) => {
      return (
        <div key={breed.id} className="relative">
          <DogBreed
            id={breed.id}
            breedGroup={breed.breed_group}
            origin={breed.origin}
            imgsrc={breed.image.url}
          />
        </div>
      );
    });
  } catch (error) {
    return <p>Whoops! An error has occured!</p>;
  }
};

export default BreedList;
